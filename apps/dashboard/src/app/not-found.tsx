/* eslint-disable react/no-unescaped-entities */
'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, LayoutDashboard, ShipWheel } from 'lucide-react';

import Button from '@/components/ui/Button';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-accent/10 text-accent">
          <ShipWheel size={40} />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Error 404
        </p>

        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">
          You've sailed off course.
        </h1>

        <p className="mt-5 text-base leading-8 text-muted">
          The page you're looking for doesn't exist or may have been moved.
          Navigate back to the dashboard and continue planning your voyage.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            fullWidth={false}
            leftIcon={<LayoutDashboard size={18} />}
            onClick={() => router.push('/')}
          >
            Dashboard
          </Button>

          <Button
            variant="outline"
            fullWidth={false}
            leftIcon={<ArrowLeft size={18} />}
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </main>
  );
}
