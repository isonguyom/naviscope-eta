export default function FuelPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">Fuel Estimator</h1>

      <div className="p-6 bg-white border rounded-xl space-y-4">
        <div>
          <label className="text-sm">Distance (nm)</label>
          <input className="w-full border p-2 rounded mt-1" />
        </div>

        <div>
          <label className="text-sm">Vessel Type</label>
          <select className="w-full border p-2 rounded mt-1">
            <option>Container Ship</option>
            <option>Tanker</option>
            <option>Bulk Carrier</option>
          </select>
        </div>

        <button className="px-4 py-2 bg-sky-500 text-white rounded">
          Estimate Fuel
        </button>
      </div>

      <div className="p-4 bg-slate-50 border rounded-xl">
        <p className="text-sm text-slate-500">Fuel estimate appears here</p>
      </div>
    </div>
  );
}
