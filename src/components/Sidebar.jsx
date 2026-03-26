'use client';

import ColorPicker from './controls/ColorPicker';
import Slider from './controls/Slider';
import FontSelect from './controls/FontSelect';

const FONT_OPTIONS = ['DM Sans', 'Inter', 'Plus Jakarta Sans', 'Outfit', 'Sora'];
const WEIGHT_OPTIONS = ['500', '600', '700', '800'];

function SectionHeader({ label }) {
  return (
    <div className="pt-6 pb-3">
      <span className="text-[10px] font-mono font-medium uppercase tracking-[0.1em] text-editor-dark-text-secondary">
        {label}
      </span>
      <div className="mt-2 h-px bg-editor-dark-border" />
    </div>
  );
}

export default function Sidebar({ state, dispatch }) {
  const set = (key) => (value) => dispatch({ type: 'SET_VALUE', key, value });

  return (
    <aside className="w-[300px] shrink-0 h-screen overflow-y-auto bg-editor-dark border-r border-editor-dark-border">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-sm font-semibold text-editor-dark-text tracking-tight">
            Design System Preview
          </h1>
          <button
            onClick={() => dispatch({ type: 'RESET' })}
            className="text-[11px] font-mono text-editor-dark-text-secondary hover:text-editor-accent transition-colors"
          >
            Reset
          </button>
        </div>
        <p className="text-xs text-editor-dark-text-secondary mb-2">
          Tweak variables below to preview your design system.
        </p>

        {/* Colors */}
        <SectionHeader label="Colors" />
        <div className="space-y-3">
          <ColorPicker label="Primary" value={state.colorPrimary} onChange={set('colorPrimary')} />
          <ColorPicker label="Secondary" value={state.colorSecondary} onChange={set('colorSecondary')} />
          <ColorPicker label="Text Primary" value={state.textPrimary} onChange={set('textPrimary')} />
          <ColorPicker label="Text Secondary" value={state.textSecondary} onChange={set('textSecondary')} />
          <ColorPicker label="Background" value={state.background} onChange={set('background')} />
        </div>

        {/* Typography */}
        <SectionHeader label="Typography" />
        <div className="space-y-4">
          <FontSelect label="Heading Font" value={state.fontHeading} onChange={set('fontHeading')} options={FONT_OPTIONS} />
          <FontSelect label="Body Font" value={state.fontBody} onChange={set('fontBody')} options={FONT_OPTIONS} />
          <Slider label="Base Size" value={state.fontSizeBase} onChange={set('fontSizeBase')} min={14} max={18} step={1} unit="px" />
          <FontSelect
            label="Heading Weight"
            value={String(state.headingWeight)}
            onChange={(v) => set('headingWeight')(Number(v))}
            options={WEIGHT_OPTIONS}
          />
          <Slider label="Line Height" value={state.lineHeight} onChange={set('lineHeight')} min={1.3} max={2.0} step={0.1} />
        </div>

        {/* Spacing */}
        <SectionHeader label="Spacing" />
        <div className="space-y-4">
          <Slider label="Base Unit" value={state.spaceUnit} onChange={set('spaceUnit')} min={4} max={12} step={1} unit="px" />
        </div>

        {/* Shape */}
        <SectionHeader label="Shape" />
        <div className="space-y-4">
          <Slider label="Border Radius" value={state.radius} onChange={set('radius')} min={0} max={24} step={1} unit="px" />
          <Slider label="Border Width" value={state.borderWidth} onChange={set('borderWidth')} min={0} max={3} step={0.5} unit="px" />
        </div>

        <div className="h-8" />
      </div>
    </aside>
  );
}
