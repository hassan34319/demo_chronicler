export interface Collection {
    id: string;
    name: string;
    icon: string;
    createdAt: string;
    docsCount?: number;
  }

  // Define the possible options for ViewOption
export type ViewOption = 'list' | 'grid' | 'table'; // Add more options as needed

