'use client';

import type { LucideIcon } from 'lucide-react';
import { Calculator, ShipWheel } from 'lucide-react';
import React from 'react';

type EmptyStateProps = {
  title: string;
  description: string;

  icon?: LucideIcon;
  statusIcon?: LucideIcon;

  status?: string;

  children?: React.ReactNode;

  className?: string;
};

export default function EmptyState({
  title,
  description,
  icon: Icon = ShipWheel,
  statusIcon: StatusIcon = Calculator,
  status,
  children,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={[
        'flex min-h-105 flex-col items-center justify-center rounded-xl',
        'border border-dashed border-border bg-surface-2',
        'px-8 py-12 text-center',
        className,
      ].join(' ')}
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon size={30} />
      </div>

      <h2 className="text-lg font-semibold text-foreground">{title}</h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-muted">
        {description}
      </p>

      {status && (
        <div className="mt-8 flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted">
          <StatusIcon size={16} />
          <span>{status}</span>
        </div>
      )}

      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
