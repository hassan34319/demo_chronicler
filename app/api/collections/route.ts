import { NextResponse } from 'next/server';
import { Collection } from '@/types/collection';

const mockCollections: Collection[] = [
  {
    id: '1',
    name: 'Recipes',
    icon: 'restaurant',
    createdAt: 'Today 08:30am',
    docsCount: 5
  },
  {
    id: '2',
    name: 'Meal Planning',
    icon: 'calendar',
    createdAt: 'Yesterday 05:12pm',
    docsCount: 2
  },
  {
    id: '3',
    name: 'Work Projects',
    icon: 'briefcase',
    createdAt: '12/01 10:00am',
    docsCount: 3
  },
  {
    id: '4',
    name: 'Fitness Goals',
    icon: 'dumbbell',
    createdAt: '12/01 06:00pm',
    docsCount: 3
  }
];

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return NextResponse.json(mockCollections);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newCollection: Collection = {
    id: (Math.random() * 1000).toString(),
    ...body,
    createdAt: new Date().toLocaleString(),
    docsCount: 0
  };
  
  return NextResponse.json(newCollection);
}