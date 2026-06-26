import { Clock3, Fuel, Gauge, Route } from 'lucide-react';

import type { EtaResultType } from '@/types/eta';
import MetricCard from '@/components/cards/MetricCard';

type EtaResultsProps = {
  result: EtaResultType;
};

export default function EtaResults({ result }: EtaResultsProps) {
  const items = [
    {
      title: 'ETA',
      value: result.eta.toLocaleString(),
      icon: Clock3,
    },
    {
      title: 'Voyage Duration',
      value: `${result.days.toFixed(1)} Days`,
      icon: Route,
    },
    {
      title: 'Average Speed',
      value: `${result.speed} Knots`,
      icon: Gauge,
    },
    {
      title: 'Fuel Estimate',
      value: `${result.fuel.toFixed(1)} MT`,
      icon: Fuel,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <MetricCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
