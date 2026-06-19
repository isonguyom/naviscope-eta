import { format } from "date-fns";
import { ETAResult } from "@/types/eta";

interface ResultCardProps {
  result: ETAResult;
}

export default function ResultCard({
  result,
}: ResultCardProps) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">
        Voyage Result
      </h2>

      <div className="space-y-2">
        <p>
          Duration:{" "}
          <span className="font-bold">
            {result.durationHours.toFixed(2)} hours
          </span>
        </p>

        <p>
          ETA:{" "}
          <span className="font-bold text-teal-400">
            {format(result.eta, "PPP p")}
          </span>
        </p>
      </div>
    </div>
  );
}