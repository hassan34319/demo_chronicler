import { ViewOption } from "@/types/collection";
import NewCollectionButton from "./NewCollectionsButton";
import ViewToggle from "./ViewToggle";

// Props type for the component
export interface UtilitiesProps {
    currentView: ViewOption;
    setCurrentView: React.Dispatch<React.SetStateAction<ViewOption>>;
    onAddCollection : ()=>void
  }



export default function CollectionsUtilities({currentView,setCurrentView, onAddCollection} : UtilitiesProps) {
    return (
      <div className="px-4 py-4 flex flex-row justify-between items-center">
        <ViewToggle currentView={currentView} setCurrentView={setCurrentView} />
        <NewCollectionButton onAddCollection={onAddCollection} />
      </div>
    );
  }
  