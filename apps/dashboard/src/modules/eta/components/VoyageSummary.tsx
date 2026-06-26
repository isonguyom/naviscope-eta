import SummaryCard from '@/components/cards/SummaryCard';
import { downloadSummary } from '@/lib/export/downloadSummary';

import type { EtaResultType } from '@/types/eta';

type VoyageSummaryProps = {
  result: EtaResultType;
};

export default function VoyageSummary({ result }: VoyageSummaryProps) {
  const items = [
    {
      label: 'Vessel',
      value: result.vessel,
    },
    {
      label: 'Distance',
      value: `${result.distance} NM`,
    },
    {
      label: 'Speed',
      value: `${result.speed} Knots`,
    },
    {
      label: 'Departure',
      value: result.departureDate.toLocaleString(),
    },
    {
      label: 'ETA',
      value: result.eta.toLocaleString(),
    },
    {
      label: 'Estimated Fuel',
      value: `${result.fuel.toFixed(1)} MT`,
    },
  ];

  const handleDownload = () => {
    downloadSummary({
      title: 'Voyage Summary',
      filename: 'voyage-summary.pdf',
      items: items,
    });
  };

  return (
    <SummaryCard
      title="Voyage Summary"
      items={items}
      downloadable
      onDownload={handleDownload}
    />
  );
}
