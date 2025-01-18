// src/components/collections/CollectionsHeader.tsx
export default function CollectionsHeader() {
    return (
      <div>
        <h1 className="text-base font-bold">Collections</h1>
        <h2 className="text-xs font-light text-gray-600">
          Combine documents that have a similar subject matter.
        </h2>
        <h2 className="text-xs font-light text-gray-600">
          Collections consist of one or more documents.
        </h2>
      </div>
    );
  }