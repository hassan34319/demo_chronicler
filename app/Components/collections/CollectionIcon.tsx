import {  CalendarIcon, BriefcaseIcon, HomeIcon, CakeIcon, CubeTransparentIcon } from "@heroicons/react/16/solid";

const iconMap: Record<string, any> = {
  restaurant: CakeIcon,
  calendar: CalendarIcon,
  briefcase: BriefcaseIcon,
  dumbbell: HomeIcon,
};

export default function CollectionIcon({ type }: { type: string }) {
  const Icon = iconMap[type] || CubeTransparentIcon;
  return <Icon className="h-5 w-5 text-gray-600" />;
}