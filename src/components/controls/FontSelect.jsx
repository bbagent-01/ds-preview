'use client';

export default function FontSelect({ label, value, onChange, options }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-editor-dark-text-secondary">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-editor-dark-2 text-editor-dark-text text-sm border border-editor-dark-border rounded-lg px-3 py-2 outline-none focus:border-editor-accent transition-colors"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ fontFamily: opt }}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
