"use client"
import { collections } from "@/data/collection";
// In actual scenario this call would go inside 'use server' or rather the client 
// consuming data would go inside a client component instead of marking this use client.
import CollectionsHeader from "../Components/collections/CollectionHeader";
import CollectionsUtilities from "../Components/collections/CollectionsUtilities";
import CollectionViews from "../Components/collections/CurrentView";
import { useState } from "react";
import { Collection, ViewOption } from "@/types/collection";


export default function Collections() {
  const [viewType, setViewType] = useState<ViewOption>('list');
  const [collectionsState, setCollections] = useState(collections)
  //Would become a use Server Function in reality if we were using a database.
  const generateUniqueId = () => {
    // Generate a unique identifier (e.g., based on current time)
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const onAddCollection = () => {
    // Generate a random ID to pick a collection
    const randomId = (Math.floor(Math.random() * 4) + 1).toString();

    // Find the collection with the generated ID
    const collectionToAdd = collections.find((collection) => collection.id === randomId);

    if (collectionToAdd) {
      // Add the collection with a unique ID to avoid key duplication
      setCollections((prevCollections) => [
        ...prevCollections,
        { ...collectionToAdd, id: generateUniqueId() },
      ]);
    }
  };
  return (
    <div className="flex flex-col bg-white mt-12 px-4">
      <CollectionsHeader />
      <CollectionsUtilities setCurrentView={setViewType} currentView={viewType} onAddCollection={onAddCollection} />
      <CollectionViews viewType={viewType} collections={collectionsState} />
    </div>
  );
}