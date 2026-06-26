'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FormProvider from '@/components/ui/form/FormProvider';
import Input from '@/components/ui/form/Input';
import Select from '@/components/ui/form/Select';
import SubmitButton from '@/components/ui/form/SubmitButton';

import {
  fuelEstimatorSchema,
  FuelEstimatorSchemaType,
} from '@/lib/validations/fuelEstimator';

import useButtonState from '@/hooks/useButtonState';
import { vessels } from '@/lib/data';

type Props = {
  onEstimate: (values: FuelEstimatorSchemaType) => void;
};

export default function FuelEstimatorForm({ onEstimate }: Props) {
  const methods = useForm<FuelEstimatorSchemaType>({
    resolver: zodResolver(fuelEstimatorSchema),
    mode: 'onChange',
    defaultValues: {
      vessel: '',
      distance: '',
      speed: '',
      fuelConsumption: '',
      fuelPrice: '',
      weatherFactor: 'calm',
      safetyMargin: '5',
    },
  });

  const { state, setLoading, setSuccess, setError } = useButtonState();

  const submit = methods.handleSubmit(async (data: FuelEstimatorSchemaType) => {
    try {
      setLoading();

      await new Promise((r) => setTimeout(r, 1500));

      onEstimate(data);

      setSuccess();
    } catch {
      setError();
    }
  });

  return (
    <FormProvider methods={methods}>
      <form onSubmit={submit} className="space-y-4">
        <Select
          name="vessel"
          label="Vessel Type"
          placeholder="Select vessel"
          options={vessels}
          required
        />

        <Input
          name="distance"
          label="Distance"
          tip="(NM)"
          numeric
          inputMode="decimal"
          placeholder="Distance"
          required
        />

        <Input
          name="speed"
          label="Average Speed"
          tip="(Knots)"
          numeric
          inputMode="decimal"
          placeholder="Speed"
          required
        />

        <Input
          name="fuelConsumption"
          label="Fuel Consumption"
          tip="(t/day)"
          numeric
          inputMode="decimal"
          placeholder="Fuel consumption"
          required
        />

        <Input
          name="fuelPrice"
          label="Fuel Price"
          tip="($/ton)"
          numeric
          inputMode="decimal"
          placeholder="Optional"
        />

        <Select
          name="weatherFactor"
          label="Weather"
          options={[
            {
              label: 'Calm',
              value: 'calm',
            },
            {
              label: 'Moderate',
              value: 'moderate',
            },
            {
              label: 'Rough',
              value: 'rough',
            },
          ]}
        />

        <Input
          name="safetyMargin"
          label="Safety Margin"
          tip="%"
          numeric
          inputMode="decimal"
          required
        />

        <SubmitButton
          state={state}
          loadingText="Estimating Fuel"
          successText="Estimate Ready"
          errorText="Calculation Failed"
        >
          Estimate Fuel
        </SubmitButton>
      </form>
    </FormProvider>
  );
}
