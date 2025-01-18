# Collection Viewer

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Components](#components)
- [Implementation Details](#implementation-details)
- [Development Notes](#development-notes)

## Overview
A React-based collection viewer component that supports multiple view types (Grid, List, Table) with responsive design and TypeScript support.

## Getting Started

### Installation
```bash
npm install
# or
yarn install
```

### Usage
```tsx
import { CollectionViews, CollectionsUtilities } from '@/components/collections';
import { Collection, ViewOption } from '@/types/collection';

function MyComponent() {
  const [currentView, setCurrentView] = useState<ViewOption>('grid');

  return (
    <>
      <CollectionsUtilities
        currentView={currentView}
        setCurrentView={setCurrentView}
        onAddCollection={() => {}}
      />
      <CollectionViews
        viewType={currentView}
        collections={collections}
      />
    </>
  );
}
```

## Components

### CollectionViews
The main component that renders different view types for collections.

```tsx
interface CollectionViewsProps {
  viewType: 'grid' | 'list' | 'table';
  collections: Collection[];
}
```

### CollectionsUtilities
Contains controls for view switching and collection creation.

```tsx
interface UtilitiesProps {
  currentView: ViewOption;
  setCurrentView: React.Dispatch<React.SetStateAction<ViewOption>>;
  onAddCollection: () => void;
}
```

### ViewToggle
Provides a dropdown menu for switching between view types.

```tsx
interface ViewProps {
  currentView: ViewOption;
  setCurrentView: React.Dispatch<React.SetStateAction<ViewOption>>;
}
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

### Icon Mapping
```typescript
const iconMap: Record<string, any> = {
  chat: ChatBubbleLeftIcon,
  calendar: CalendarIcon,
  briefcase: BriefcaseIcon,
  dumbbell: HomeIcon,
};
```

## Development Notes

### Client-Side Rendering
This demo implementation uses client-side rendering (`"use client"`). In a production environment:

- Move data fetching to server components
- Implement server actions for collection operations
- Use proper error handling and loading states

### Styling
- Uses Tailwind CSS for styling
- Responsive design with mobile-first approach
- Consistent hover states and transitions

### Future Improvements
1. Server-side rendering implementation
2. Sorting and filtering capabilities
3. Drag-and-drop reordering
4. Search functionality
5. Loading states and error handling
