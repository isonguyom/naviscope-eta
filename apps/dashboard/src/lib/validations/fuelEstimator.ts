import { numericString } from '@/lib/validations/helpers';
import z from 'zod';

export const fuelEstimatorSchema = z.object({
  vessel: z.string().min(1, 'Select a vessel'),

  distance: numericString,

  speed: numericString,

  fuelConsumption: numericString,

  fuelPrice: numericString.optional(),

  weatherFactor: z.enum(['calm', 'moderate', 'rough']),

  safetyMargin: numericString,
});

export type FuelEstimatorSchemaType = z.infer<typeof fuelEstimatorSchema>;
