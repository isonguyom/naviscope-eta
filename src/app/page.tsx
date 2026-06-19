"use client";

import { useState } from "react";

import ETAForm from "@/components/ETAForm";
import ResultCard from "@/components/ResultCard";

import { calculateETA } from "@/lib/calculateETA";
import { ETAResult } from "@/types/eta";

export default function Home() {
  const [distance, setDistance] = useState("");
  const [speed, setSpeed] = useState("");
  const [departure, setDeparture] = useState("");

  const [result, setResult] =
    useState<ETAResult | null>(null);

  const handleCalculate = () => {
    if (!distance || !speed || !departure) return;

    const etaResult = calculateETA(
      Number(distance),
      Number(speed),
      new Date(departure)
    );

    setResult(etaResult);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-center">
            Voyage ETA Planner
          </h1>

          <p className="text-center text-slate-400 mt-2">
            Estimate vessel arrival times using
            distance and speed.
          </p>
        </div>

        <ETAForm
          distance={distance}
          speed={speed}
          departure={departure}
          onDistanceChange={setDistance}
          onSpeedChange={setSpeed}
          onDepartureChange={setDeparture}
          onCalculate={handleCalculate}
        />

        {result && (
          <ResultCard result={result} />
        )}
      </div>
    </main>
  );
}