import { FuelEstimatorResultType } from '@/types/fuelEstimation';

type Props = {
  result: FuelEstimatorResultType | null;
};

export default function FuelEstimatorResults({ result }: Props) {
  return (
    <div className="rounded-xl border border-border p-5 space-y-3">
      <Result
        label="Voyage Time"
        value={`${result?.voyageTimeDays.toFixed(2)} days`}
      />

      <Result label="Base Fuel" value={`${result?.baseFuel.toFixed(2)} t`} />

      <Result
        label="Weather Adjustment"
        value={`${result?.weatherFuel.toFixed(2)} t`}
      />

      <Result
        label="Safety Margin"
        value={`${result?.safetyFuel.toFixed(2)} t`}
      />

      <Result label="Total Fuel" value={`${result?.totalFuel.toFixed(2)} t`} />

      {result?.totalCost && (
        <Result
          label="Estimated Cost"
          value={`$${result.totalCost.toLocaleString()}`}
        />
      )}
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border pb-2">
      <span className="text-muted">{label}</span>

      <span className="font-semibold">{value}</span>
    </div>
  );
}
