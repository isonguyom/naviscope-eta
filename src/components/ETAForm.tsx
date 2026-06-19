"use client";

interface ETAFormProps {
  distance: string;
  speed: string;
  departure: string;

  onDistanceChange: (value: string) => void;
  onSpeedChange: (value: string) => void;
  onDepartureChange: (value: string) => void;

  onCalculate: () => void;
}

export default function ETAForm({
  distance,
  speed,
  departure,
  onDistanceChange,
  onSpeedChange,
  onDepartureChange,
  onCalculate,
}: ETAFormProps) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl space-y-4">
      <div>
        <label className="block mb-2">
          Distance (NM)
        </label>

        <input
          type="number"
          value={distance}
          onChange={(e) =>
            onDistanceChange(e.target.value)
          }
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
        />
      </div>

      <div>
        <label className="block mb-2">
          Speed (Knots)
        </label>

        <input
          type="number"
          value={speed}
          onChange={(e) =>
            onSpeedChange(e.target.value)
          }
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
        />
      </div>

      <div>
        <label className="block mb-2">
          Departure Time
        </label>

        <input
          type="datetime-local"
          value={departure}
          onChange={(e) =>
            onDepartureChange(e.target.value)
          }
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
        />
      </div>

      <button
        onClick={onCalculate}
        className="w-full bg-teal-600 hover:bg-teal-700 transition p-3 rounded-lg font-semibold"
      >
        Calculate ETA
      </button>
    </div>
  );
}