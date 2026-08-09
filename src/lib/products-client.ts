
import { categories, subCategories, type ProductCategory, type ProductSubCategory } from './data';
import type { CategoryWithSubCategories } from './products';

// Client-side functions using local data
export async function getCategories(): Promise<ProductCategory[]> {
    const desiredOrder = [1, 4, 3, 2];
    
    return [...categories].sort((a, b) => {
        const indexA = desiredOrder.indexOf(a.id);
        const indexB = desiredOrder.indexOf(b.id);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });
}

export async function getSubCategories(): Promise<ProductSubCategory[]> {
    return [...subCategories].sort((a, b) => a.name.localeCompare(b.name));
}

export async function getCategoriesWithSubCategoriesForClient(): Promise<CategoryWithSubCategories[]> {
    const desiredOrder = [1, 4, 3, 2];
    
    const sortedCategories = [...categories].sort((a, b) => {
        const indexA = desiredOrder.indexOf(a.id);
        const indexB = desiredOrder.indexOf(b.id);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });

    return sortedCategories.map(c => ({
        ...c,
        subCategories: subCategories
            .filter(sc => sc.category_id === c.id)
            .sort((a, b) => a.name.localeCompare(b.name))
    }));
}
