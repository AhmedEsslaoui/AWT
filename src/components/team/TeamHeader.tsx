import { Users } from 'lucide-react';

interface TeamHeaderProps {
  name: string;
}

export function TeamHeader({ name }: TeamHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <Users className="w-8 h-8 text-blue-600" />
      <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
    </div>
  );
}