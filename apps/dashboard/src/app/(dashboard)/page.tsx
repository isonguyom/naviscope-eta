import dynamic from 'next/dynamic';

const OverviewPage = dynamic(() => import('@/components/modules/overview'));

export default function Page() {
  return <OverviewPage />;
}
