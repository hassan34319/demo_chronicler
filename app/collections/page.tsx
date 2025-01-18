import { getCollections } from '@/app/_actions/collections';
import CollectionsPageClient from '../Components/collections/CollectionPageClient';


export default async function Page() {
  const initialCollections = await getCollections();
  
  return <CollectionsPageClient initialCollections={initialCollections} />;
}