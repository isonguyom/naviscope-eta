import dynamic from 'next/dynamic';

const PlannerPage = dynamic(() => import('@/components/modules/planner'));

export default function Page() {
  return <PlannerPage />;
}
