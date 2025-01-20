interface PhaseListProps {
  items: string[];
}

export function PhaseList({ items }: PhaseListProps) {
  return (
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}