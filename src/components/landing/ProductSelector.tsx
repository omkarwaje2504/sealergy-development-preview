
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { selectProduct, type ProductSelectionInput, type ProductSelectionOutput } from "@/ai/flows/product-selector";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2 } from "lucide-react";

const formSchema = z.object({
  applicationRequirements: z.string().min(20, "Please describe your application requirements in more detail."),
  productCatalog: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProductSelector() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ProductSelectionOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicationRequirements: "",
      productCatalog: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const output = await selectProduct(data as ProductSelectionInput);
      setResult(output);
    } catch (error) {
      console.error("Error selecting product:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to get product suggestion. Please try again.",
      });
    }
    setIsLoading(false);
  };

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto shadow-lg bg-card">
          <CardHeader className="text-center">
            <Wand2 className="mx-auto h-10 w-10 text-accent mb-2" />
            <CardTitle className="text-3xl font-headline text-primary">AI Product Selector</CardTitle>
            <CardDescription className="text-lg">
              Let our AI expert help you find the perfect seal or pump.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="applicationRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Application Requirements</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the fluid, temperature, pressure, speed, and equipment type..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productCatalog"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Available Products (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="List one product per line, e.g., 'Type 600 Elastomeric Bellows Seal'..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Get Suggestion"
                  )}
                </Button>
              </form>
            </Form>

            {isLoading && (
              <div className="mt-8 text-center">
                <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                <p className="mt-2 text-muted-foreground">Our AI is on the case...</p>
              </div>
            )}
            
            {result && (
              <div className="mt-8 border-t pt-8">
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">Suggestion Result</h3>
                <Card className="bg-accent/5">
                  <CardHeader>
                    <CardTitle>Suggested Product: {result.suggestedProduct}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-bold mb-2">Reasoning:</h4>
                    <p className="text-muted-foreground">{result.reasoning}</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
