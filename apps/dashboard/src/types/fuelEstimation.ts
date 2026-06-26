export type FuelEstimatorType = {
  vessel: string;
  distance: number;
  speed: number;
  fuelConsumption: number;
  fuelPrice?: number;
  weatherFactor: 'calm' | 'moderate' | 'rough';
  safetyMargin: number;
};

export type FuelEstimatorResultType = {
  voyageTimeDays: number;
  baseFuel: number;
  weatherFuel: number;
  safetyFuel: number;
  totalFuel: number;
  totalCost?: number;
};
