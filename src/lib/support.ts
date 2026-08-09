
import { articles, type SupportArticle } from './data';

export async function getSupportArticles(): Promise<SupportArticle[]> {
    return articles;
}

export async function getSupportArticleBySlug(slug: string): Promise<SupportArticle | null> {
    return articles.find(a => a.slug === slug) || null;
}
