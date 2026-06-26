import { EtaInputType, EtaResultType } from '@/types/eta';

export function calculateEtaEngine(input: EtaInputType): EtaResultType {
  const hours = input.distance / input.speed;
  const days = hours / 24;

  const eta = new Date(input.departureDate.getTime() + hours * 60 * 60 * 1000);

  const fuel = days * 25; // placeholder logic (you can refine later)

  return {
    ...input,

    eta,
    hours,
    days,
    fuel,

    vesselType: input.vessel,
    durationHours: hours,
    durationDays: days,
    fuelConsumption: fuel,
  };
}
