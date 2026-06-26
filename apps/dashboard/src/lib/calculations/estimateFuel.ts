import { weatherFactors } from '@/lib/data';
import {
  FuelEstimatorResultType,
  FuelEstimatorType,
} from '@/types/fuelEstimation';

export function estimateFuel(
  input: FuelEstimatorType
): FuelEstimatorResultType {
  const voyageTimeDays = input.distance / (input.speed * 24);

  const baseFuel = voyageTimeDays * input.fuelConsumption;

  const adjustedFuel = baseFuel * weatherFactors[input.weatherFactor];

  const weatherFuel = adjustedFuel - baseFuel;

  const safetyFuel = adjustedFuel * (input.safetyMargin / 100);

  const totalFuel = adjustedFuel + safetyFuel;

  const totalCost =
    input.fuelPrice != null ? totalFuel * input.fuelPrice : undefined;

  return {
    voyageTimeDays,
    baseFuel,
    weatherFuel,
    safetyFuel,
    totalFuel,
    totalCost,
  };
}
