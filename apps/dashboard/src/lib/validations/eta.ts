import { z } from 'zod';
import { numericString } from '@/lib/validations/helpers';

export const etaFormSchema = z.object({
  vessel: z.string().min(1, 'Select a vessel'),
  distance: numericString,
  speed: numericString,
  departure: z.string().min(1, 'Departure date is required'),
});

export type EtaFormSchemaType = z.infer<typeof etaFormSchema>;
