import { Collection } from "@/types/collection";
import GridView from "./GridView";
import ListView from "./ListView";
import TableView from "./TableView";

interface CollectionViewsProps {
    viewType: 'grid' | 'list' | 'table';
    collections: Collection[];
  }
  
  export default function CollectionViews({ viewType, collections }: CollectionViewsProps) {
    const Views = {
      grid: GridView,
      list: ListView,
      table: TableView,
    };
  
    const CurrentView = Views[viewType];
  
    return <CurrentView collections={collections} />;
  }