# Collection Viewer

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Implementation Details](#implementation-details)
- [API Routes](#api-routes)
- [Server Actions](#server-actions)
- [Components](#components)
- [Development Notes](#development-notes)

## Overview
A Next.js 15 collection viewer using the App Router pattern, supporting multiple view types (Grid, List, Table) with server components and client-side interactivity.

## Project Structure
```
app/
├── page.tsx                    # Root redirect
├── api/
│   └── collections/
│       └── route.ts           # Mock API endpoints
├── _actions/
│   └── collections.ts         # Server actions
└── collections/
    ├── page.tsx              # Collections page
    └── components/
        ├── CollectionsPage.tsx
        ├── CollectionViews.tsx
        ├── CollectionsUtilities.tsx
        └── ViewToggle.tsx
```

## Implementation Details

### Data Structure
```typescript
interface Collection {
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  docsCount?: number;
}
```

### Mock API Implementation
```typescript
// app/api/collections/route.ts
export async function GET() {
  // Returns mock collections
}

export async function POST(request: Request) {
  // Handles new collection creation
}
```

### Server Actions
```typescript
// app/_actions/collections.ts
'use server'

export async function getCollections(): Promise<Collection[]>
export async function addCollection(collection: Partial<Collection>): Promise<Collection>
```

## Components

### CollectionsPage
Main client component that manages state and layout:
```typescript
interface CollectionsPageProps {
  initialCollections: Collection[];
}
```

### CollectionViews
Handles different view type renderings:
```typescript
interface CollectionViewsProps {
  viewType: 'grid' | 'list' | 'table';
  collections: Collection[];
}
```

### CollectionsUtilities
Controls for view switching and collection creation:
```typescript
interface UtilitiesProps {
  currentView: ViewOption;
  setCurrentView: React.Dispatch<React.SetStateAction<ViewOption>>;
  onAddCollection: () => void;
}
```

## Usage Example

```typescript
// app/collections/page.tsx
import { getCollections } from '@/app/_actions/collections';
import CollectionsPage from './components/CollectionsPage';

export default async function Page() {
  const initialCollections = await getCollections();
  return <CollectionsPage initialCollections={initialCollections} />;
}
```

## Development Notes

### Server Components
- Root page automatically redirects to /collections
- Collections page fetches initial data server-side
- API routes simulate backend responses
- Server actions handle data mutations

### Client Components
- Collection management UI is client-side
- View type switching happens client-side
- Loading states managed within client components

### Styling
- Uses Tailwind CSS for styling
- Responsive design
- Consistent hover states and transitions

### Future Improvements
1. Add loading.tsx for route loading states
2. Implement error.tsx for error boundaries
3. Add server-side pagination
4. Implement real-time updates
5. Add search and filtering capabilities
6. Implement proper database integration

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Best Practices Used
1. Server Components where possible
2. Client Components only when necessary
3. Proper separation of concerns
4. TypeScript for type safety
5. Modular component structure
6. Mock API for data simulation

## Development Considerations
- This is a demo implementation using mock data
- In production, replace mock API with real endpoints
- Consider adding authentication
- Implement proper error handling
- Add loading states using Next.js App Router features
