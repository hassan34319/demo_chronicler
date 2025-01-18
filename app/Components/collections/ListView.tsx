import { Collection } from "@/types/collection";
import CollectionIcon from "./CollectionIcon";

export default function ListView({ collections }: { collections: Collection[] }) {
    return (
      <div className="space-y-2 p-4">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="bg-gray-200 p-4 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <CollectionIcon type={collection.icon} />
              <div>
                <h3 className="text-sm font-medium">{collection.name}</h3>
                <p className="text-xs text-gray-500">{collection.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }