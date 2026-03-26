'use client';

export default function Slider({ label, value, onChange, min, max, step, unit = '' }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm text-editor-dark-text-secondary">{label}</label>
        <span className="text-xs font-mono text-editor-dark-text">
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
}
