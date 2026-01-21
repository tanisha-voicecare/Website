/**
 * PerformanceMetricsSection Component
 * PIXEL-PERFECT implementation from designer-src/src/app/components/Performance.tsx
 *
 * DESIGNER EXACT VALUES:
 * - Section: py-20 border-y border-border/50 bg-background
 * - Grid: grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left
 * - Metric value: text-4xl font-bold tracking-tighter mb-2 text-[#06003F]
 * - Accent (%, +, ms, 27001): text-[#FF4E3A]
 * - Label: text-[11px] uppercase tracking-[0.15em] font-bold text-[#06003F]/40
 */

// ============================================
// Types
// ============================================

interface Metric {
  id: string;
  prefix?: string;
  value: string;
  suffix?: string;
  label: string;
}

interface PerformanceMetricsSectionProps {
  className?: string;
}

// ============================================
// Data - Performance metrics exactly as per designer
// ============================================

const PERFORMANCE_METRICS: Metric[] = [
  {
    id: 'uptime',
    value: '99.99',
    suffix: '%',
    label: 'Uptime SLA',
  },
  {
    id: 'interactions',
    value: '100M',
    suffix: '+',
    label: 'Daily Agent Interactions',
  },
  {
    id: 'latency',
    prefix: '<',
    value: '200',
    suffix: 'ms',
    label: 'Reasoning Latency',
  },
  {
    id: 'compliance',
    value: 'ISO',
    suffix: '27001',
    label: 'Certified Infrastructure',
  },
];

// ============================================
// Component
// ============================================

export function PerformanceMetricsSection({ className = '' }: PerformanceMetricsSectionProps) {
  return (
    <section
      className={`py-20 bg-white overflow-hidden ${className}`}
      style={{
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
      aria-labelledby="performance-metrics-heading"
    >
      <h2 id="performance-metrics-heading" className="sr-only">
        Platform Performance Metrics
      </h2>

      <div className="container mx-auto px-6 md:px-12">
        {/* Metrics Grid - EXACT designer values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          {PERFORMANCE_METRICS.map((metric) => (
            <div key={metric.id}>
              {/* Metric Value - EXACT designer typography */}
              <div
                className="text-4xl font-bold tracking-tighter mb-2"
                style={{ color: '#06003F' }}
              >
                {metric.prefix && (
                  <span style={{ color: '#FF4E3A' }}>{metric.prefix}</span>
                )}
                {metric.value}
                {metric.suffix && (
                  <span style={{ color: '#FF4E3A' }}>{metric.suffix}</span>
                )}
              </div>

              {/* Metric Label - EXACT designer typography */}
              <p
                className="text-[11px] uppercase tracking-[0.15em] font-bold"
                style={{ color: 'rgba(6, 0, 63, 0.4)' }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PerformanceMetricsSection;
