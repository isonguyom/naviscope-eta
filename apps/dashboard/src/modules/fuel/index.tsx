'use client';

import { useState } from 'react';

import FuelEstimatorForm from '@/modules/fuel/components/FuelEstimatorForm';
import FuelEstimatorResults from '@/modules/fuel/components/FuelEstimatorResults';

import { estimateFuel } from '@/lib/calculations/estimateFuel';
import { FuelEstimatorResultType } from '@/types/fuelEstimation';
import { FuelEstimatorSchemaType } from '@/lib/validations/fuelEstimator';

export default function FuelEstimator() {
  const [result, setResult] = useState<FuelEstimatorResultType | null>(null);

  const handleEstimate = (data: FuelEstimatorSchemaType) => {
    const payload = {
      vessel: data.vessel,
      distance: Number(data.distance) || 0,
      speed: Number(data.speed) || 0,
      fuelConsumption: Number(data.fuelConsumption) || 0,
      weatherFactor: data.weatherFactor,
      safetyMargin: Number(data.safetyMargin) || 0,
      fuelPrice: data.fuelPrice ? Number(data.fuelPrice) : undefined,
    };

    const estimation = estimateFuel(payload);

    setResult(estimation);
  };

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <FuelEstimatorForm onEstimate={handleEstimate} />

      <FuelEstimatorResults result={result} />
    </section>
  );
}
