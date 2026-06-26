'use client';

import { useCallback, useState } from 'react';

import DashboardPageHeader from '@/components/layout/DashboardPageHeader';

import EtaForm from '@/modules/eta/components/EtaForm';
import EtaResults from '@/modules/eta/components/EtaResults';
import VoyageSummary from '@/modules/eta/components/VoyageSummary';
import EmptyState from '@/components/ui/feedback/EmptyState';

import { calculateEtaEngine } from '@/lib/calculations/calculateETA';

import type { EtaInputType, EtaResultType } from '@/types/eta';
import { Calculator, ShipWheel } from 'lucide-react';

export default function EtaPage() {
  const [etaResult, setEtaResult] = useState<EtaResultType>();

  const handleCalculate = useCallback((input: EtaInputType) => {
    setEtaResult(calculateEtaEngine(input));
  }, []);

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="ETA Calculator"
        description="Compute vessel arrival time, voyage duration, and fuel consumption with maritime precision."
      />

      <div className="grid gap-6 lg:grid-cols-[400px_1fr]">
        <EtaForm onCalculate={handleCalculate} />

        <div className="space-y-6">
          {etaResult ? (
            <>
              <EtaResults result={etaResult} />
              <VoyageSummary result={etaResult} />
            </>
          ) : (
            <EmptyState
              icon={ShipWheel}
              statusIcon={Calculator}
              title="No ETA calculated yet"
              description="Enter your voyage details and calculate an estimated arrival time. Voyage duration, estimated fuel consumption, and voyage summary will appear here."
              status="Waiting for voyage information…"
            />
          )}
        </div>
      </div>
    </div>
  );
}
