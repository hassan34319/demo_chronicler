import { Collection } from "@/types/collection";
import CollectionIcon from "./CollectionIcon";

export default function GridView({ collections }: { collections: Collection[] }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="bg-gray-200 py-4 px-4 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="flex flex-col justify-center gap-y-2">
              <CollectionIcon type={collection.icon} />
                <h3 className="text-sm font-medium">{collection.name}</h3>
                <p className="text-xs text-gray-500">{collection.createdAt}</p>
              </div>
            </div>
        ))}
      </div>
    );
  }
  