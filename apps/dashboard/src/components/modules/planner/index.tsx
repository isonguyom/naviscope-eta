export default function PlannerPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Voyage Planner</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 bg-white border rounded-xl">
          <h3 className="font-medium mb-3">Route Setup</h3>
          <input
            className="w-full border p-2 rounded mb-2"
            placeholder="Origin Port"
          />
          <input
            className="w-full border p-2 rounded"
            placeholder="Destination Port"
          />
        </div>

        <div className="p-6 bg-white border rounded-xl">
          <h3 className="font-medium mb-3">Vessel Settings</h3>
          <select className="w-full border p-2 rounded">
            <option>Container Ship</option>
            <option>Tanker</option>
            <option>Bulk Carrier</option>
          </select>
        </div>
      </div>

      <button className="px-5 py-2 bg-sky-500 text-white rounded">
        Generate Voyage Plan
      </button>

      <div className="p-4 bg-slate-50 border rounded-xl">
        <p className="text-sm text-slate-500">Plan output appears here</p>
      </div>
    </div>
  );
}
