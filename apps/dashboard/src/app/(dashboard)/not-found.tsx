/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import { ArrowLeft, Clock3, Fuel, Route, SearchX } from 'lucide-react';

export default function DashboardNotFound() {
  const tools = [
    {
      title: 'ETA Calculator',
      href: '/dashboard/eta',
      icon: Clock3,
    },
    {
      title: 'Fuel Estimator',
      href: '/dashboard/fuel-estimator',
      icon: Fuel,
    },
    {
      title: 'Voyage Planner',
      href: '/dashboard/voyage-planner',
      icon: Route,
    },
  ];

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-surface p-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-danger/10 text-danger">
          <SearchX size={32} />
        </div>

        <h1 className="mt-6 text-center text-3xl font-bold text-foreground">
          Tool not found
        </h1>

        <p className="mx-auto mt-3 max-w-lg text-center leading-7 text-muted">
          The page you're trying to access isn't available in Naviscope. You can
          return to the overview or continue with one of the available voyage
          planning tools.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-xl border border-border p-4 transition hover:border-accent hover:bg-accent/5"
              >
                <Icon size={22} className="mb-3 text-accent" />

                <h3 className="font-medium text-foreground">{tool.title}</h3>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-white transition hover:bg-accent/90"
          >
            <ArrowLeft size={18} />
            Back to Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
