import dynamic from 'next/dynamic';

const FuelPage = dynamic(() => import('@/components/modules/fuel'));

export default function Page() {
  return <FuelPage />;
}
