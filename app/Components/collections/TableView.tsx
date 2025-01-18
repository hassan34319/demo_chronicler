import { Collection } from "@/types/collection";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import CollectionIcon from "./CollectionIcon";

export default function TableView({ collections }: { collections: Collection[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-xs text-gray-500">
            <th className="p-4">Name</th>
            <th className="p-4">Created</th>
            <th className="p-4">Docs</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {collections.map((collection) => (
            <tr 
              key={collection.id}
              className="border-t border-gray-100 hover:bg-gray-50"
            >
              <td className="p-4">
                <div className="flex items-center space-x-3">
                  <CollectionIcon type={collection.icon} />
                  <span className="text-sm">{collection.name}</span>
                </div>
              </td>
              <td className="p-4 text-xs text-gray-500">{collection.createdAt}</td>
              <td className="p-4 text-xs text-gray-500">{collection.docsCount}</td>
              <td className="p-4">
                <ChevronRightIcon className="bg-black h-5 w-5 text-gray-400 rounded-md" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
