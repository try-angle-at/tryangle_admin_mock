## Overview

This guide defines the visual system for the **admin dashboard**. The product should feel reliable, fast to scan, and operationally clear. The base atmosphere is a neutral, high-contrast interface with a single brand accent.

- Primary accent (`{colors.primary}` — #FDDB00) drives key actions and highlighted states.
- Neutrals carry most surfaces, structure, and text hierarchy.
- Semantic colors are explicit: success (`{colors.success}` — #008442), red (`{colors.red}` — #F13131), and info (`{colors.info}` — #005FFF).
- Typography is unified with Pretendard for both UI copy and numeric data.

**Key Characteristics:**
- Single accent color for major CTAs and selected highlights.
- Dense but readable layout for data-heavy admin tasks.
- Two surface modes (dark and light) depending on product area.
- Strong use of borders/dividers instead of heavy shadows.
- Dashboard-first components (sidebar, KPI cards, tables, charts, status chips, filters).

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #FDDB00): Main accent for primary CTA, active tabs, selected nav states, and key highlights.
- **Primary Active** (`{colors.primary-active}` — #FDDB00): Active/pressed primary state.
- **Primary Disabled** (`{colors.primary-disabled}` — #B8B7B6): Disabled primary controls.
- **Red** (`{colors.red}` — #F13131): Error, destructive actions, failed state, negative trend.
- **Success Green** (`{colors.success}` — #008442): Success, completed state, positive trend.

### Neutral Scale
- **Grey 100** (`{colors.grey100}` — #FFFFFF)
- **Grey 150** (`{colors.grey150}` — #F5F5F5)
- **Grey 200** (`{colors.grey200}` — #EFEFEF)
- **Grey 300** (`{colors.grey300}` — #E0DFDE)
- **Grey 350** (`{colors.grey350}` — #C9C8C7)
- **Grey 400** (`{colors.grey400}` — #B8B7B6)
- **Grey 500** (`{colors.grey500}` — #969492)
- **Grey 600** (`{colors.grey600}` — #797775)
- **Grey 700** (`{colors.grey700}` — #575554)
- **Grey 800** (`{colors.grey800}` — #31302F)
- **Grey 850** (`{colors.grey850}` — #262524)
- **Black** (`{colors.black}` — #111111)

### Surface

**Dark mode (operations-heavy views):**
- **Canvas Dark** (`{colors.canvas-dark}` — #111111): Main app background.
- **Surface Card Dark** (`{colors.surface-card-dark}` — #262524): Cards, drawers, dropdowns.
- **Surface Elevated Dark** (`{colors.surface-elevated-dark}` — #31302F): Hover/active elevated layers.

**Light mode (forms and detail workflows):**
- **Canvas Light** (`{colors.canvas-light}` — #FFFFFF): Main page floor.
- **Surface Soft Light** (`{colors.surface-soft-light}` — #F5F5F5): Alternate section background.
- **Surface Strong Light** (`{colors.surface-strong-light}` — #EFEFEF): Muted containers and input backgrounds.

### Hairlines & Borders
- **Hairline on Light** (`{colors.hairline-on-light}` — #E0DFDE): Primary divider tone on light surfaces.
- **Hairline on Dark** (`{colors.hairline-on-dark}` — #575554): Primary divider tone on dark surfaces.
- **Border Strong** (`{colors.border-strong}` — #B8B7B6): Strong border for disabled or emphasized boundaries.

### Text
- **Ink** (`{colors.ink}` — #111111): Primary text on light backgrounds.
- **Body on Dark** (`{colors.body}` — #EFEFEF): Default text on dark backgrounds.
- **Body on Light** (`{colors.body-on-light}` — #111111): Default body text on light backgrounds.
- **Muted** (`{colors.muted}` — #797775): Secondary labels, metadata, helper text.
- **Muted Strong** (`{colors.muted-strong}` — #969492): Emphasized secondary text.
- **On Primary** (`{colors.on-primary}` — #111111): Text color on primary buttons.
- **On Dark** (`{colors.on-dark}` — #FFFFFF): High-contrast text on dark surfaces.

### Semantic Status
- **Success** (`{colors.success}` — #008442): Positive status, completion, increase.
- **Error** (`{colors.red}` — #F13131): Error state, warning of failure, decrease.
- **Info** (`{colors.info}` — #005FFF): Informational states, focus rings, guided highlights.

## Typography

### Font Family
The system uses **Pretendard** for all display, body, and numeric data.

Fallback stack:
`Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans KR", sans-serif`

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 64px | 700 | 1.1 | -1px | Dashboard welcome title / high-level summary header |
| `{typography.display-lg}` | 48px | 700 | 1.1 | -0.5px | Full-page metric callout |
| `{typography.display-md}` | 40px | 600 | 1.15 | -0.3px | Section headline |
| `{typography.display-sm}` | 32px | 600 | 1.2 | 0 | Subpage headline |
| `{typography.title-lg}` | 24px | 600 | 1.3 | 0 | Panel titles |
| `{typography.title-md}` | 20px | 600 | 1.35 | 0 | Card titles / modal titles |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Widget headers / row titles |
| `{typography.number-display}` | 40px | 700 | 1.1 | -0.3px | KPI numbers |
| `{typography.number-md}` | 16px | 500 | 1.4 | 0 | Table values / chart axes |
| `{typography.number-sm}` | 14px | 500 | 1.4 | 0 | Inline numeric indicators |
| `{typography.body-md}` | 14px | 400 | 1.5 | 0 | Default body text |
| `{typography.body-sm}` | 13px | 400 | 1.5 | 0 | Secondary text / helper copy |
| `{typography.caption}` | 12px | 500 | 1.4 | 0 | Labels and metadata |
| `{typography.button}` | 14px | 600 | 1 | 0 | Button labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Sidebar/top-nav links |

### Principles
- Keep numeric values highly legible and aligned.
- Use weight and size for emphasis, not extra colors.
- Keep body text compact to support information density.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px, `{spacing.xs}` 8px, `{spacing.sm}` 12px, `{spacing.md}` 16px, `{spacing.lg}` 24px, `{spacing.xl}` 32px, `{spacing.xxl}` 48px, `{spacing.section}` 80px.
- **Section spacing:** `{spacing.section}` for major dashboard bands.
- **Card padding:** `{spacing.lg}` for data cards; `{spacing.md}` for compact widgets.

### Grid & Container
- **Main container width:** 1280-1440px depending on data density.
- **Primary desktop layout:** sidebar + main content (typically 280px / fluid).
- **Content split patterns:** 8/4 and 9/3 for chart + side insights.
- **Data table layout:** sticky header + row actions + optional right utility column.

### Whitespace Philosophy
This is an operational dashboard, so layout is intentionally dense but structured. Separation comes from surfaces, borders, and type contrast rather than large empty space.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Base surfaces |
| Hairline | 1px border | Inputs, table rows, list dividers |
| Card surface | Surface tone change | Widgets and modules |
| Subtle shadow | Minimal shadow | Modal/dialog on top of busy content |
| Focus ring | `0 0 0 2px {colors.info}` at 50% alpha | Keyboard/accessibility focus |

The system avoids heavy visual effects. Depth should be functional and minimal.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Tiny chips |
| `{rounded.sm}` | 4px | Status badges |
| `{rounded.md}` | 6px | Buttons, compact inputs |
| `{rounded.lg}` | 8px | Cards, standard inputs |
| `{rounded.xl}` | 12px | Elevated panels and modals |
| `{rounded.pill}` | 9999px | Primary filter pills |
| `{rounded.full}` | 9999px / 50% | Avatars / circular icons |

## Components

### Navigation
- **`top-nav`**: 64px header with environment switcher, search, alerts, user menu.
- **`side-nav`**: Collapsible left navigation with section groups, active state, and icon+label rows.

### Buttons
- **`button-primary`**: Primary action in `{colors.primary}` with `{colors.on-primary}` text.
- **`button-secondary`**: Neutral button with border and subtle surface.
- **`button-danger`**: Destructive action using `{colors.red}`.
- **`button-success`**: Confirmed or positive action using `{colors.success}`.
- **`button-tertiary-text`**: Text-only action for low emphasis.

### Data & Status
- **`kpi-card`**: Metric title, current value, delta, trend indicator.
- **`chart-card`**: Title row + range selector + chart area + legend.
- **`table-card`**: Data table container with sticky header and pagination.
- **`status-chip`**: Compact state indicators (success, warning, error, info).
- **`activity-feed-row`**: Actor, event, timestamp, and status marker.

### Filters & Inputs
- **`filter-bar`**: Date range, multi-select filters, and reset/apply actions.
- **`search-input`**: Global or table search with leading icon.
- **`text-input`**: Standard form input with clear error/help states.
- **`select-input`**: Consistent single/multi select control.

### Overlays
- **`modal-card`**: Confirmation/action modal with clear CTA hierarchy.
- **`drawer-panel`**: Right-side detail panel for quick edit/view.
- **`toast-notification`**: Short feedback for completed/failed actions.

### Footer
- **`footer-light`**: Optional light footer for legal/help links on long pages.

## Do's and Don'ts

### Do
- Use `{colors.primary}` only for truly primary actions.
- Keep semantic colors meaningful and consistent.
- Prioritize readability for tables and metrics.
- Use Pretendard consistently across all UI text and numbers.
- Keep interaction targets at least 40px tall.

### Don't
- Don't use semantic colors as decorative backgrounds.
- Don't overuse the primary accent in body content.
- Don't remove borders/dividers in dense data views.
- Don't introduce ad-hoc spacing outside token scale.
- Don't rely on color alone for status; pair with icon/text.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Sidebar becomes drawer, cards stack 1-up, tables scroll horizontally |
| Tablet | 768-1024px | 2-column cards, compact nav labels, tighter filter bar |
| Desktop | 1024-1440px | Full sidebar and multi-column dashboard layout |
| Wide | > 1440px | Increased gutters, stable max-width for readability |

### Touch Targets
- Primary buttons and inputs target minimum 40x40px.
- Icon-only controls target at least 32x32px with spacing.

### Collapsing Strategy
- Sidebar collapses to icons, then to drawer on mobile.
- KPI rows stack vertically on narrow widths.
- Data tables keep headers and allow horizontal scroll when needed.
- Filters collapse into a single "Filters" drawer button on mobile.

## Iteration Guide

1. Define component purpose before styling.
2. Choose dark/light surface intent first, then apply color tokens.
3. Keep state variants (`-active`, `-disabled`, `-error`) as explicit component entries.
4. Reference token names in every spec sentence that describes color/type/spacing.
5. Validate contrast and keyboard focus for every interactive element.

## Known Gaps

- Motion timing and easing are not fully documented.
- Empty/loading/skeleton patterns need dedicated component rules.
- Complex table states (bulk select, inline edit, row expand) need deeper specs.
- Chart palette priority for multi-series scenarios needs explicit tokenization.
- Accessibility audit notes (WCAG mapping per component) are not yet included.
