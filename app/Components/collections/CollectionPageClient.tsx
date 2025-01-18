'use client'

import { useState } from 'react';
import { Collection, ViewOption } from '@/types/collection';
import { addCollection } from '@/app/_actions/collections';
import CollectionsUtilities from './CollectionsUtilities';
import CollectionViews from './CurrentView';

interface CollectionsPageProps {
  initialCollections: Collection[];
}

export default function CollectionsPageClient({ initialCollections }: CollectionsPageProps) {
  const [collections, setCollections] = useState<Collection[]>(initialCollections);
  const [currentView, setCurrentView] = useState<ViewOption>('grid');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCollection = async () => {
    setIsLoading(true);
    try {
      const newCollection = await addCollection({
        name: 'New Collection',
        icon: 'chat',
      });
      setCollections(prev => [...prev, newCollection]);
    } catch (error) {
      console.error('Failed to add collection:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:text-black">
      <CollectionsUtilities
        currentView={currentView}
        setCurrentView={setCurrentView}
        onAddCollection={handleAddCollection}
      />
      {isLoading ? (
        <div className="p-4 text-center">Loading...</div>
      ) : (
        <CollectionViews
          viewType={currentView}
          collections={collections}
        />
      )}
    </div>
  );
}