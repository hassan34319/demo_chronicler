import { PlusIcon } from "@heroicons/react/16/solid";

interface NewCollectionButton {
    onAddCollection : ()=> void
}
export default function NewCollectionButton({onAddCollection} : NewCollectionButton) {
  return (
    <button onClick={onAddCollection} className="bg-black px-3 py-2 flex flex-row items-center gap-x-2 w-max rounded-xl">
      <PlusIcon className="text-white text-opacity-80 h-5 w-5"/>
      <h3 className="text-white text-opacity-80 text-xs">New collection</h3>
    </button>
  );
}