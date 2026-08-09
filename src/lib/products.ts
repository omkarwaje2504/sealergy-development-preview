import { products, categories, subCategories, type ProductWithDetails, type ProductCategory, type ProductSubCategory } from './data';

export type Product = ProductWithDetails;
export type { ProductCategory, ProductSubCategory };
export type CategoryWithSubCategories = ProductCategory & { subCategories: ProductSubCategory[] };

// Helper to enrich product with category slugs (needed for static params)
function enrichProduct(p: ProductWithDetails): Product {
    const category = categories.find(c => c.id === p.primary_category_id);
    const subCategory = subCategories.find(sc => sc.id === p.primary_subcategory_id);
    
    let cleanName = p.name;
    if (cleanName.includes('/')) {
        cleanName = cleanName.split('/').pop()!.trim();
    }
    
    return {
        ...p,
        name: cleanName,
        category_name: category?.name,
        category_slug: category?.slug,
        subcategory_name: subCategory?.name,
        subcategory_slug: subCategory?.slug,
    };
}

export const creativeFolders: Record<string, string> = {
  'type-600': 'OPEN - TYPE  600',
  'type-301': 'CLOSE - TYPE  301',
  'type-601': 'BELLOW -TYPE  601',
  'stork-type-301': 'STORK - TYPE 301A',
  'j1-oring-type-155': 'J1  ORING - TYPE  155',
  'j1-bellow-type-155a': 'J1 BELLOW - TYPE  155A',
  'honda-type-70': 'HONDA - TYPE 70',
  'robin-type-560': 'ROBIN - TYPE  560',
  'new-robin-type-560a': '',
  'double-robin-type-560d': 'DOUBLE  ROBIN - TYPE 560D',
  'double-robin-mg1-type-560m': 'DOUBLE  ROBIN  MG1 - TYPE   560M',
  'crane-type-2': 'CRANE - TYPE 2',
  'mg9-type-mg9': 'MG9 - TYPE MG9',
  'mg1-type-m01': 'MG1 - TYPE  M01',
  'mg12-type-m12': 'MG12 - TYPE  M12',
  'mg13-type-m13': 'MG13 - TYPE  M13',
  'jc1-type-21s': 'JC1-TYPE  21S',
  'jc2-type-21l': 'JC1-TYPE  21L',
  'm2n-type-m2n': 'M2N - TYPE  M2N',
  'm3n-type-m3n': 'M3N - TYPE  M3N',
  'h17n-type-h17': 'H17N - TYPE  H17',
  'multispring-type-muo': 'MULTISPRING - TYPE  MUO',
  'multispring-double-type-mud': 'MULTISPRING  DOUBLE - TYPE  MUD',
  'grundfose-ch12-type-ch12': 'GRUNDFOSE  CH12- TYPE  CH12',
  'grundfose-clutch-type-gr5': 'GRUNDFOSE  CLUTCH - TYPE  GR5',
  'g04-type-gr4': 'G04 - TYPE  GR4',
  'type-502': '502 - TYPE  502',
  'teflon-below-type-tbt': 'TEFLON BELOW THREAD -TYPE TBT',
  'teflon-mg1-type-tbm': 'TEFLON  MG1 - TYPE  TBM',
  'type-156': '156 - TYPE 156',
  'ptfe-seal': 'PTFE SEAL',
  's20-type-s20': 'S20 - TYPE  S20',
  'single-spring-lps-150': 'SINGLE  SPRING  LPS  150 - TYPE  LPS  150',
  'single-spring-seal-ssp': 'SINGLE  SPRING  SEAL  SSP - TYPE  SSP',
  'submersible-pump-type-ner': 'SUBMERSIBLE  PUMP-TYPE NER',
  'sumo-oring-type-suo': 'SUMO  ORING - TYPE  SUO',
  'sumo-bellow-type-sub': 'SUMO BELLOW - TYPE  SUB',
  'unitised-honda-type-uho': 'UNITISED HONDA-TYPE UHO',
  'acid-pump-plastic-type-app': 'ACID PUMP PLASTIC - TYPE  APP',
  'acid-pump-teflone-type-apt': 'ACID PUMP TEFLONE - TYPE  APT',
  'fristam-pump-type-frm': 'FRISTAM  PUMP -  TYPE  FRM',
  'm7n-type-m7': 'M7N - TYPE  M7',
};

export const productVideos: Record<string, string> = {
  'mg12-type-m12': 'Mg12 - Type  M12  [A].mp4',
  'mg13-type-m13': 'Mg13 - Type  M13  [A].mp4',
  'm2n-type-m2n': 'M2n - Type  M2  [A].mp4',
  'h17n-type-h17': 'H17n - Type  H17   [A].mp4',
  'grundfose-ch12-type-ch12': 'Grundfose  Ch12- Type  Ch12   [A].mp4',
  'g04-type-gr4': 'G04 - Type  Gr4 [A].mp4',
  'type-156': '156 - Type 156   [A].mp4',
  'ptfe-seal': 'Ptfe Seal Motion Study 1.mp4',
  's20-type-s20': 'S20 - Type  S20 [A].mp4',
  'single-spring-lps-150': 'Single  Spring  Lps  150 - Type  Lps  150  [A].mp4',
  'single-spring-seal-ssp': 'Single  Spring  Seal  Ssp - Type  Ssp  [A].mp4',
  'submersible-pump-type-ner': 'Submersible Pump  [A].mp4',
  'sumo-oring-type-suo': 'Sumo  Oring - Type  Suo  [A].mp4',
  'sumo-bellow-type-sub': 'Sumo Bellow - Type  Sub  [A].mp4',
  'unitised-honda-type-uho': 'Unitised  Honda Motion Study 1.mp4',
  'acid-pump-plastic-type-app': 'Acid Pump Plastic - Type  App  [A].mp4',
  'acid-pump-teflone-type-apt': 'Acid Pump Teflone - Type  Apt [A].mp4',
  'fristam-pump-type-frm': 'Fristam  Pump -  Type  Frm  [A].mp4',
  'm7n-type-m7': 'M7n - Type  M7.mp4',
  'type-600': 'Open - Type  600  [A].mp4',
  'type-301': 'Close - Type  301  [A].mp4',
  'type-601': 'Bellow -Type  601  [A].mp4',
  'stork-type-301': 'Stork - Type 301-A  [A].mp4',
  'j1-oring-type-155': 'J1  Oring - Type  155  [A].mp4',
  'j1-bellow-type-155a': 'J1 Bellow - Type  155A  [A].mp4',
  'honda-type-70': 'Honda - Type 70 [A].mp4',
  'robin-type-560': 'Robin - Type  560  [A].mp4',
  'double-robin-type-560d': 'Double  Robin - Type 560D  [A].mp4',
  'double-robin-mg1-type-560m': 'Double  Robin  Mg1 - Type  560M  [A].mp4',
  'crane-type-2': 'Crane - Type 2  [A].mp4',
  'mg9-type-mg9': 'Mg9 - Type  9  [A].mp4',
  'mg1-type-m01': 'Mg1 - Type  M1 [A].mp4',
  'jc1-type-21s': 'Jc1-Type  21S    [A].mp4',
  'jc2-type-21l': 'Jc1-Type  21L   [A].mp4',
  'm3n-type-m3n': 'M3n - Type  M3  [A].mp4',
  'multispring-type-muo': 'Multispring - Type  Muo  [A].mp4',
  'multispring-double-type-mud': 'Multispring  Double - Type  Mud  [A].mp4',
  'grundfose-clutch-type-gr5': 'Grundfose  Clutch - Type  Gr5  [A].mp4',
  'type-502': '502 - Type  502  [A].mp4',
  'teflon-below-type-tbt': 'Teflon  Bellow  Thread Motion Study 1.mp4',
  'teflon-mg1-type-tbm': 'Teflon  Mg1 - Type  Tbm  [A].mp4',
};

export function getProductImages(product: Product): string[] {
  const images = [];
  if (product.image) {
    images.push(product.image);
  }
  const folder = creativeFolders[product.id];
  if (folder) {
    const folderPath = `Graphic Data (Creatives)-20260518T180446Z-3-001/Graphic Data (Creatives)/${folder}`;
    
    images.push(`/${folderPath}/${folder}-02.jpg`);
    
    if (product.id !== 'multispring-double-type-mud') {
      images.push(`/${folderPath}/${folder}-03.jpg`);
    }
  }
  
  // Append video if it exists as the 4th item
  const videoFile = productVideos[product.id];
  if (videoFile) {
    images.push(`/Siddhi Individual Product Video Cmpress/${videoFile}`);
  }
  
  if (images.length === 0) {
    images.push("https://placehold.co/600x600.png");
  }
  return Array.from(new Set(images));
}

export async function getProductsOnServer(): Promise<Product[]> {
    return products.map(enrichProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
    const product = products.find(p => p.slug === slug);
    return product ? enrichProduct(product) : null;
}

export async function getCategoriesWithSubCategories(): Promise<CategoryWithSubCategories[]> {
    return categories.map(cat => ({
        ...cat,
        subCategories: subCategories.filter(sc => sc.category_id === cat.id)
    }));
}

export async function getCategoryBySlug(slug: string): Promise<ProductCategory | null> {
    return categories.find(c => c.slug === slug) || null;
}

export async function getSubCategoriesForCategory(categorySlug: string): Promise<ProductSubCategory[]> {
    const category = categories.find(c => c.slug === categorySlug);
    if (!category) return [];
    return subCategories.filter(sc => sc.category_id === category.id);
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
    const category = categories.find(c => c.slug === categorySlug);
    if (!category) return [];
    return products.filter(p => p.primary_category_id === category.id).map(enrichProduct);
}

export async function getProductsBySubCategory(categorySlug: string, subCategorySlug: string): Promise<Product[]> {
    const category = categories.find(c => c.slug === categorySlug);
    const subCategory = subCategories.find(sc => sc.slug === subCategorySlug && sc.category_id === category?.id);
    if (!subCategory) return [];
    return products.filter(p => p.primary_subcategory_id === subCategory.id).map(enrichProduct);
}

export async function getFeaturedProducts(): Promise<Product[]> {
    return products.slice(0, 4).map(enrichProduct);
}

export async function getNewArrivals(): Promise<Product[]> {
    return products.slice(-4).map(enrichProduct);
}
