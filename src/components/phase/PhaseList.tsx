import { Info } from 'lucide-react';

interface PhaseListProps {
  items: (string | { text: string; tooltip: string })[];
}

export function PhaseList({ items }: PhaseListProps) {
  return (
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      {items.map((item, index) => {
        if (typeof item === 'string') {
          return <li key={index}>{item}</li>;
        }
        
        return (
          <li key={index} className="flex items-center gap-1">
            <span>{item.text}</span>
            <div className="group relative inline-block">
              <Info className="w-4 h-4 text-gray-500 cursor-help" />
              <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-sm text-white bg-gray-900 rounded whitespace-nowrap">
                {item.tooltip}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}