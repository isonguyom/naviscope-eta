'use client';

import type { LucideIcon } from 'lucide-react';

type MetricCardProps = {
  title: string;
  value: React.ReactNode;
  icon: LucideIcon;

  description?: string;
  iconClassName?: string;
  className?: string;
};

export default function MetricCard({
  title,
  value,
  icon: Icon,
  description,
  iconClassName = '',
  className = '',
}: MetricCardProps) {
  return (
    <div
      className={[
        'rounded-xl border border-border bg-surface p-4',
        className,
      ].join(' ')}
    >
      <Icon className={['mb-3 h-5 w-5 text-accent', iconClassName].join(' ')} />

      <h4 className="text-sm text-muted">{title}</h4>

      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>

      {description && <p className="mt-1 text-xs text-muted">{description}</p>}
    </div>
  );
}
