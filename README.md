# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Seeding the Database

This project uses a Supabase database to store product information. The product data you provided has been added to a "seed" script. You need to run this script once to populate your database.

### Step 1: Create a `.env.local` file

If you don't already have one, create a file named `.env.local` in the root of your project.

### Step 2: Add Supabase Credentials

Add your Supabase project's URL and Service Role Key to the `.env.local` file. You can find these in your Supabase project's API settings.

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**Important**: The `SUPABASE_SERVICE_ROLE_KEY` is a secret and should not be shared publicly. The `.env.local` file is ignored by git, so it's safe to store it there.

### Step 3: Run the Seed Script

Open your terminal and run the following command from the root of your project:

```bash
npm run seed:db
```

This will delete any existing products and populate the `products` table with the new data, including pre-generated `slug` values for each product. This is a required step for the product pages to work correctly. You should see a success message in your terminal. After this, your application will be able to display all the products you provided.
