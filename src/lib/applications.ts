
import { applications, type Application } from './data';

export async function getApplications(): Promise<Application[]> {
    return applications;
}

export async function getApplicationBySlug(slug: string): Promise<Application | null> {
    return applications.find(a => a.slug === slug) || null;
}
