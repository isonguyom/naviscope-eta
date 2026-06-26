import { z } from 'zod';

export const numericString = z
  .string()
  .trim()
  .min(1, 'This field is required')
  .refine((value) => !Number.isNaN(Number(value)), 'Must be a valid number');
