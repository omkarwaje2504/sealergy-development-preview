'use server';

/**
 * @fileOverview An AI-powered product selector for seals and pumps.
 *
 * - selectProduct - A function that suggests the most suitable product based on application requirements.
 * - ProductSelectionInput - The input type for the selectProduct function.
 * - ProductSelectionOutput - The return type for the selectProduct function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductSelectionInputSchema = z.object({
  applicationRequirements: z
    .string()
    .describe('Detailed requirements for the seal or pump application.'),
  productCatalog: z
    .string()
    .optional()
    .describe('A list of products that are available, each on a new line.'),
});
export type ProductSelectionInput = z.infer<typeof ProductSelectionInputSchema>;

const ProductSelectionOutputSchema = z.object({
  suggestedProduct: z.string().describe('The most suitable product from the catalog based on the requirements.'),
  reasoning: z.string().describe('Explanation of why the suggested product is the best fit.'),
});
export type ProductSelectionOutput = z.infer<typeof ProductSelectionOutputSchema>;

export async function selectProduct(input: ProductSelectionInput): Promise<ProductSelectionOutput> {
  return selectProductFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productSelectionPrompt',
  input: {schema: ProductSelectionInputSchema},
  output: {schema: ProductSelectionOutputSchema},
  prompt: `You are an expert in selecting the best seal or pump for a given application.

Given the following application requirements:

{{applicationRequirements}}

And the following product catalog:

{{#if productCatalog}}
{{productCatalog}}
{{else}}
No product catalog was provided. Use your best judgement.
{{/if}}

Suggest the most suitable product from the catalog. If there is no catalog, select the best product based on your knowledge.

Explain your reasoning for the suggestion.

Return the suggested product and reasoning in the following JSON format:

{"suggestedProduct": "[product name]", "reasoning": "[reasoning]"}
`,
});

const selectProductFlow = ai.defineFlow(
  {
    name: 'selectProductFlow',
    inputSchema: ProductSelectionInputSchema,
    outputSchema: ProductSelectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
