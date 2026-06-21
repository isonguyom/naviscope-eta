import dynamic from 'next/dynamic';

const ETAPage = dynamic(() => import('@/components/modules/eta'));

export default function Page() {
  return <ETAPage />;
}
