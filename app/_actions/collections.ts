'use server'

import { Collection } from '@/types/collection';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export async function getCollections(): Promise<Collection[]> {
  const response = await fetch(`${baseUrl}/api/collections`, {
    cache: 'no-store'
  });
  return response.json();
}

export async function addCollection(collection: Partial<Collection>): Promise<Collection> {
  const response = await fetch(`${baseUrl}/api/collections`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(collection),
  });
  return response.json();
}