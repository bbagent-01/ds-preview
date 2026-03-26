'use client';

export default function ColorPicker({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <label className="text-sm text-editor-dark-text-secondary">{label}</label>
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono text-editor-dark-text-secondary uppercase">{value}</span>
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
