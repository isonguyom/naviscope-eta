export default function ETAPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">ETA Calculator</h1>

      <div className="p-6 bg-white border rounded-xl space-y-4">
        <div>
          <label className="text-sm">Distance (nautical miles)</label>
          <input className="w-full border p-2 rounded mt-1" />
        </div>

        <div>
          <label className="text-sm">Speed (knots)</label>
          <input className="w-full border p-2 rounded mt-1" />
        </div>

        <button className="px-4 py-2 bg-sky-500 text-white rounded">
          Calculate ETA
        </button>
      </div>

      <div className="p-4 bg-slate-50 border rounded-xl">
        <p className="text-sm text-slate-500">Result will appear here</p>
      </div>
    </div>
  );
}
