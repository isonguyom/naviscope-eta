'use client';

import React from 'react';
import { Download } from 'lucide-react';

import Button from '@/components/ui/Button';

export type DescriptionItem = {
  label: string;
  value: React.ReactNode;
};

type SummaryCardProps = {
  title?: string;
  items: DescriptionItem[];

  downloadable?: boolean;
  onDownload?: () => void;

  actions?: React.ReactNode;

  className?: string;
};

export default function SummaryCard({
  title,
  items,
  downloadable = true,
  onDownload,
  actions,
  className = '',
}: SummaryCardProps) {
  return (
    <section
      className={[
        'rounded-xl border border-border bg-surface p-5',
        className,
      ].join(' ')}
    >
      {(title || downloadable || actions) && (
        <div className="mb-5 flex items-center justify-between gap-4">
          {title && (
            <h2 className="text-lg font-semibold text-title">{title}</h2>
          )}

          <div className="flex items-center gap-2">
            {actions}

            {downloadable && (
              <Button
                variant="ghost"
                fullWidth={false}
                leftIcon={<Download size={16} />}
                onClick={onDownload}
              >
                Download
              </Button>
            )}
          </div>
        </div>
      )}

      <dl className="space-y-3">
        {items.map(({ label, value }) => (
          <div
            key={label}
            className="flex items-start justify-between gap-6 border-b border-border/50 pb-3 last:border-0 last:pb-0"
          >
            <dt className="text-sm text-muted">{label}</dt>

            <dd className="text-right text-sm font-medium text-foreground">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
