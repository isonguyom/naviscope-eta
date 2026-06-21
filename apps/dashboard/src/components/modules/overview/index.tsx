export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <p className="text-slate-600">
        Welcome to Naviscope ETA — your maritime intelligence system for voyage
        planning and operational insights.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-xl border">
          <h3 className="font-medium">ETA Calculator</h3>
          <p className="text-sm text-slate-500">
            Compute arrival times instantly
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border">
          <h3 className="font-medium">Fuel Estimator</h3>
          <p className="text-sm text-slate-500">Estimate voyage fuel usage</p>
        </div>

        <div className="p-4 bg-white rounded-xl border">
          <h3 className="font-medium">Voyage Planner</h3>
          <p className="text-sm text-slate-500">Plan complete routes</p>
        </div>
      </div>
    </div>
  );
}
