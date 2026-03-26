'use client';

function SectionLabel({ children }) {
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--ds-text-secondary)',
        opacity: 0.6,
      }}
    >
      {children}
    </span>
  );
}

function TypographySection({ s }) {
  const scale = [
    { label: 'H1', factor: 2.5 },
    { label: 'H2', factor: 2 },
    { label: 'H3', factor: 1.5 },
    { label: 'H4', factor: 1.25 },
  ];
  const base = s.fontSizeBase;

  return (
    <div>
      <SectionLabel>Typography</SectionLabel>
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: `${s.spaceUnit * 2}px` }}>
        {scale.map(({ label, factor }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: 'var(--ds-text-secondary)',
              opacity: 0.5,
              width: 80,
              flexShrink: 0,
            }}>
              {label} — {Math.round(base * factor)}px
            </span>
            <span style={{
              fontFamily: `'${s.fontHeading}', sans-serif`,
              fontSize: base * factor,
              fontWeight: s.headingWeight,
              color: 'var(--ds-text-primary)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}>
              {label === 'H1' ? 'Design System' : label === 'H2' ? 'Heading Two' : label === 'H3' ? 'Heading Three' : 'Heading Four'}
            </span>
          </div>
        ))}
        <div style={{ height: 1, background: 'var(--ds-text-secondary)', opacity: 0.1 }} />
        <div>
          <p style={{
            fontFamily: `'${s.fontBody}', sans-serif`,
            fontSize: base,
            lineHeight: s.lineHeight,
            color: 'var(--ds-text-primary)',
          }}>
            Body text for paragraphs, descriptions, and general content. Good typography creates hierarchy, guides the eye, and sets the tone.
          </p>
          <p style={{
            fontFamily: `'${s.fontBody}', sans-serif`,
            fontSize: base * 0.875,
            lineHeight: s.lineHeight,
            color: 'var(--ds-text-secondary)',
            marginTop: s.spaceUnit,
          }}>
            Small text for captions, labels, and secondary information.
          </p>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ds-color-primary)',
            marginTop: s.spaceUnit * 2,
          }}>
            Overline / Caption Text
          </p>
        </div>
      </div>
    </div>
  );
}

function ColorSwatches({ s }) {
  const swatches = [
    { label: 'Primary', color: s.colorPrimary },
    { label: 'Secondary', color: s.colorSecondary },
    { label: 'Text', color: s.textPrimary },
    { label: 'Muted', color: s.textSecondary },
    { label: 'Background', color: s.background, border: true },
  ];

  return (
    <div>
      <SectionLabel>Colors</SectionLabel>
      <div style={{ display: 'flex', gap: s.spaceUnit * 2, marginTop: 12 }}>
        {swatches.map(({ label, color, border }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: s.radius,
              background: color,
              border: border ? `1px solid var(--ds-text-secondary)` : 'none',
              opacity: border ? undefined : undefined,
            }} />
            <p style={{
              fontFamily: `'${s.fontBody}', sans-serif`,
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--ds-text-primary)',
              marginTop: 8,
            }}>{label}</p>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: 'var(--ds-text-secondary)',
              marginTop: 2,
            }}>{color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Buttons({ s }) {
  const btnBase = {
    fontFamily: `'${s.fontBody}', sans-serif`,
    fontSize: s.fontSizeBase * 0.875,
    fontWeight: 500,
    padding: `${s.spaceUnit * 1.25}px ${s.spaceUnit * 3}px`,
    borderRadius: s.radius,
    cursor: 'pointer',
    transition: 'all 150ms ease',
    display: 'inline-block',
  };

  return (
    <div>
      <SectionLabel>Buttons</SectionLabel>
      <div style={{ display: 'flex', gap: s.spaceUnit * 2, marginTop: 12, alignItems: 'center' }}>
        <button style={{
          ...btnBase,
          background: 'var(--ds-color-primary)',
          color: '#fff',
          border: 'none',
        }}>
          Primary
        </button>
        <button style={{
          ...btnBase,
          background: 'transparent',
          color: 'var(--ds-color-secondary)',
          border: `${s.borderWidth}px solid var(--ds-color-secondary)`,
        }}>
          Secondary
        </button>
        <button style={{
          ...btnBase,
          background: 'transparent',
          color: 'var(--ds-text-secondary)',
          border: `${s.borderWidth}px solid transparent`,
        }}>
          Ghost
        </button>
      </div>
      {/* Small variants */}
      <div style={{ display: 'flex', gap: s.spaceUnit * 2, marginTop: s.spaceUnit * 1.5, alignItems: 'center' }}>
        <button style={{
          ...btnBase,
          fontSize: s.fontSizeBase * 0.8125,
          padding: `${s.spaceUnit}px ${s.spaceUnit * 2}px`,
          background: 'var(--ds-color-primary)',
          color: '#fff',
          border: 'none',
        }}>
          Small
        </button>
        <button style={{
          ...btnBase,
          fontSize: s.fontSizeBase * 0.8125,
          padding: `${s.spaceUnit}px ${s.spaceUnit * 2}px`,
          background: 'transparent',
          color: 'var(--ds-color-secondary)',
          border: `${s.borderWidth}px solid var(--ds-color-secondary)`,
        }}>
          Small
        </button>
      </div>
    </div>
  );
}

function Cards({ s }) {
  const cardStyle = {
    borderRadius: s.radius,
    border: `${s.borderWidth}px solid`,
    borderColor: `color-mix(in srgb, ${s.textSecondary} 20%, transparent)`,
    background: 'var(--ds-background)',
    padding: s.spaceUnit * 3,
    flex: 1,
  };

  return (
    <div>
      <SectionLabel>Cards</SectionLabel>
      <div style={{ display: 'flex', gap: s.spaceUnit * 2, marginTop: 12 }}>
        {/* Simple Card */}
        <div style={cardStyle}>
          <h3 style={{
            fontFamily: `'${s.fontHeading}', sans-serif`,
            fontSize: s.fontSizeBase * 1.125,
            fontWeight: s.headingWeight > 600 ? 600 : s.headingWeight,
            color: 'var(--ds-text-primary)',
            marginBottom: s.spaceUnit,
          }}>Simple Card</h3>
          <p style={{
            fontFamily: `'${s.fontBody}', sans-serif`,
            fontSize: s.fontSizeBase * 0.875,
            lineHeight: s.lineHeight,
            color: 'var(--ds-text-secondary)',
            marginBottom: s.spaceUnit * 2,
          }}>
            A basic content card with a title and description text.
          </p>
          <span style={{
            fontFamily: `'${s.fontBody}', sans-serif`,
            fontSize: s.fontSizeBase * 0.875,
            fontWeight: 500,
            color: 'var(--ds-color-primary)',
          }}>Learn more →</span>
        </div>

        {/* Image Card */}
        <div style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
          <div style={{
            height: 120,
            background: `color-mix(in srgb, ${s.colorSecondary} 10%, ${s.background})`,
          }} />
          <div style={{ padding: s.spaceUnit * 3, paddingTop: s.spaceUnit * 2 }}>
            <h3 style={{
              fontFamily: `'${s.fontHeading}', sans-serif`,
              fontSize: s.fontSizeBase * 1.125,
              fontWeight: s.headingWeight > 600 ? 600 : s.headingWeight,
              color: 'var(--ds-text-primary)',
              marginBottom: s.spaceUnit,
            }}>Image Card</h3>
            <p style={{
              fontFamily: `'${s.fontBody}', sans-serif`,
              fontSize: s.fontSizeBase * 0.875,
              lineHeight: s.lineHeight,
              color: 'var(--ds-text-secondary)',
            }}>
              Card with a featured image area and text below.
            </p>
          </div>
        </div>

        {/* Stat Card */}
        <div style={cardStyle}>
          <span style={{
            fontFamily: `'${s.fontHeading}', sans-serif`,
            fontSize: s.fontSizeBase * 2.25,
            fontWeight: s.headingWeight,
            color: 'var(--ds-color-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}>2,847</span>
          <p style={{
            fontFamily: `'${s.fontBody}', sans-serif`,
            fontSize: s.fontSizeBase,
            fontWeight: 500,
            color: 'var(--ds-text-primary)',
            marginTop: s.spaceUnit * 1.5,
          }}>Active Users</p>
          <p style={{
            fontFamily: `'${s.fontBody}', sans-serif`,
            fontSize: s.fontSizeBase * 0.8125,
            fontWeight: 500,
            color: '#059669',
            marginTop: s.spaceUnit * 0.5,
          }}>+12.5% from last month</p>
        </div>
      </div>
    </div>
  );
}

function MiniHero({ s }) {
  return (
    <div>
      <SectionLabel>Hero Section</SectionLabel>
      <div style={{
        marginTop: 12,
        borderRadius: s.radius,
        border: `${s.borderWidth}px solid color-mix(in srgb, ${s.textSecondary} 15%, transparent)`,
        background: `color-mix(in srgb, ${s.colorPrimary} 3%, ${s.background})`,
        padding: `${s.spaceUnit * 6}px ${s.spaceUnit * 4}px`,
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: `'${s.fontBody}', sans-serif`,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--ds-color-primary)',
          marginBottom: s.spaceUnit,
        }}>Introducing</p>
        <h2 style={{
          fontFamily: `'${s.fontHeading}', sans-serif`,
          fontSize: s.fontSizeBase * 2,
          fontWeight: s.headingWeight,
          color: 'var(--ds-text-primary)',
          letterSpacing: '-0.025em',
          lineHeight: 1.15,
          marginBottom: s.spaceUnit * 1.5,
        }}>Build something amazing</h2>
        <p style={{
          fontFamily: `'${s.fontBody}', sans-serif`,
          fontSize: s.fontSizeBase,
          color: 'var(--ds-text-secondary)',
          lineHeight: s.lineHeight,
          maxWidth: 480,
          margin: '0 auto',
          marginBottom: s.spaceUnit * 3,
        }}>
          A clean, modern platform for teams that move fast.
        </p>
        <button style={{
          fontFamily: `'${s.fontBody}', sans-serif`,
          fontSize: s.fontSizeBase * 0.875,
          fontWeight: 500,
          background: 'var(--ds-color-primary)',
          color: '#fff',
          border: 'none',
          borderRadius: s.radius,
          padding: `${s.spaceUnit * 1.5}px ${s.spaceUnit * 3}px`,
          cursor: 'pointer',
        }}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default function Preview({ state }) {
  const s = state;

  const containerStyle = {
    '--ds-color-primary': s.colorPrimary,
    '--ds-color-secondary': s.colorSecondary,
    '--ds-text-primary': s.textPrimary,
    '--ds-text-secondary': s.textSecondary,
    '--ds-background': s.background,
    '--ds-font-heading': `'${s.fontHeading}', sans-serif`,
    '--ds-font-body': `'${s.fontBody}', sans-serif`,
    '--ds-font-size-base': `${s.fontSizeBase}px`,
    '--ds-heading-weight': s.headingWeight,
    '--ds-line-height': s.lineHeight,
    '--ds-space-unit': `${s.spaceUnit}px`,
    '--ds-radius': `${s.radius}px`,
    '--ds-border-width': `${s.borderWidth}px`,
    background: s.background,
  };

  const sectionGap = s.spaceUnit * 5;

  return (
    <main
      className="flex-1 h-screen overflow-y-auto"
      style={containerStyle}
    >
      <div style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: `${s.spaceUnit * 5}px ${s.spaceUnit * 4}px`,
        display: 'flex',
        flexDirection: 'column',
        gap: sectionGap,
      }}>
        <TypographySection s={s} />
        <ColorSwatches s={s} />
        <Buttons s={s} />
        <Cards s={s} />
        <MiniHero s={s} />
      </div>
    </main>
  );
}
