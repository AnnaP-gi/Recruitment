# ALK Design System

A form-focused UI system extracted from the Figma file **“LP TDJ-form.fig”**
(page *Assets*), the component + token foundation behind ALK’s landing-page
recruitment form. The scope the user selected covers the form toolkit:
buttons, inputs, text areas, tag inputs, dropdown selects and radio tabs, plus
the color and type foundations.

> **Source of truth:** the attached `.fig`. All values here (colors, radii,
> type sizes, spacing) are transcribed verbatim from the file — never rounded
> to a grid. Where the file and a public library disagree, the file wins.

“ALK” here is a placeholder brand label supplied with the request. The sample
copy in the file is **Polish** (e.g. *“Rozpocznij rekrutację”* — *Start
recruitment*), and the file uses a bespoke typeface named *Kozminski U*; see
Caveats. No inferences about a specific institution are baked into the system.

---

## Content fundamentals

- **Language:** Polish sample content. Tone is calm, formal-but-warm, and
  practical — it explains *what to do* and *how long it takes*, not hype.
  E.g. a form intro reads like *“Fill in the fields below to begin. It takes
  about five minutes.”*
- **Address:** second person, polite imperative (*Wypełnij*, *Wybierz*,
  *Napisz*). Field labels are short nouns (*Imię*, *Adres e-mail*, *Program*).
- **Casing:** **CTAs are UPPERCASE** (via `text-transform`, letter-spacing
  `0.02em`). Section eyebrows are uppercase + tracked. Everything else is
  sentence case. Titles are Roboto Medium, never bold-shouty.
- **Required fields** are marked with a red asterisk `*`.
- **Emoji:** none. **Icons** are sparse and functional (see Iconography).
- **Vibe:** corporate minimalism — generous whitespace, sharp corners, a
  single confident crimson action color against deep-navy and off-white.

---

## Visual foundations

- **Color** — a navy + crimson + warm-gold palette:
  - *Deep Waters* `#030928` (ink / dark surfaces), *Alumni* `#162447`
    (secondary navy), *Space* `#F2F5FF` (light brand bg / on-dark text).
  - *Rubber* `#91653F` and its dark-mode sibling `#B4865E` — the warm gold
    accent used for the button chevron and editorial eyebrows.
  - **Action = crimson** `#A00332` (`Color_button_new` / R200), hover
    `#8A022B`. This is the *only* high-priority action color; use sparingly.
  - Full Red / Blue / Grayscale ramps (75 → 500). Neutrals are **navy-tinted**,
    not pure gray.
  - Functional: input border `#D8D8DA`, focus/active ring `#2C71F6`, error
    `#F73B3B`, success `#17B530`, placeholder `#89898A`, page `#F8F9FB`.
- **Type** — Open Sans (UI, headings, CTAs), Roboto (form labels, values,
  helper/error text), Inter (numeric display), Lora *(substitute for the
  proprietary Kozminski U editorial serif)*.
- **Corners** — deliberately sharp: **button 2px, text area 4px, input & tag
  6px, tabs/panels 0px.** Do not round these up.
- **Borders** — inputs use an **inset box-shadow ring** (`inset 0 0 0 1px`),
  not a CSS border, so focus/error swaps don’t shift layout. Tabs use a hairline
  `1.057px` stroke (exact source value).
- **Elevation** — mostly flat. Cards sit on the page with a soft
  `0 12px 40px rgba(3,9,40,0.06)` shadow; dropdown menus add a slightly deeper
  one. No heavy drop shadows, no gradients.
- **Backgrounds** — solid color blocks (navy hero strip, off-white page, white
  cards). No imagery, textures or gradients in the source.
- **Motion** — subtle. Standard easing `cubic-bezier(0.4,0,0.2,1)`, 120–180ms.
  The signature micro-interaction is the **button’s trailing chevron nudging
  ~3px right on hover**; hover also deepens the crimson fill.
- **Hover/press** — hover = darker fill (buttons) or blue label (tabs);
  press = 0.5px downward nudge. Disabled = greyed + reduced opacity.
- **Layout** — form fields stack with 20–28px gaps; two-column grids on wider
  form sections; 760px max content width with 40px section insets.

---

## Iconography

- The kit references **Heroicons v2 (outline)**, MIT-licensed. Only the glyphs
  actually used are shipped, via the `Icon` component (`components/icon`):
  `chevron-down/up/right`, `x-mark`, `user`, `eye`, `clock`, `check-circle`,
  `exclamation-circle`, `information-circle`, `check`, `copy`.
- Icons are single-color and paint with `currentColor` — recolor via CSS
  `color`. Default size 20px, stroke 1.5 (chevrons use ~2).
- The button’s trailing arrow in the source is a small **rubber-gold chevron**;
  reproduced with `chevron-right` colored `--accent-warm` at 85% opacity.
- **No emoji, no icon font.** The Figma `icons` component family (152 variants)
  could not be materialized cleanly (variant-key collisions); the curated
  Heroicons wrapper is the intentional substitute — flag for the user if the
  exact source glyphs are required.

---

## Components

Reusable primitives (React, styled via CSS custom properties). Namespace when
consuming the bundle: `window.ALKDesignSystem_ae2905`.

- **Button** (`components/button`) — CTA; variants primary (crimson fill) &
  secondary (bordered, blue #3252B5); sizes small/medium/large/huge.
- **Icon** (`components/icon`) — curated Heroicons v2 outline set.
- **Input** (`components/inputs`) — labelled text field; default/active/error/
  success/disabled; optional trailing icon + message.
- **TagInputDropdown** (`components/inputs`) — input with trailing dropdown (combobox).
- **InputTextArea** (`components/inputs`) — resizable multi-line field.
- **Tag** (`components/tags`) — chip; grey/brand/warm; optional close.
- **TagInput** (`components/tags`) — multi-value chip field with overflow “+N”.
- **RadioTabs** (`components/navigation`) — stacked segmented radio group.
- **Checkbox** (`components/selection`) — sharp navy square with a white check.
- **Radio** (`components/selection`) — circular radio button; `Radio.Group` is
  the single-choice set helper.

### Intentional additions
- **Icon** — a small wrapper is needed to render the glyph set as code (the
  source ships icons as Figma component instances, not a font/sprite).

### Naming & scope
**Confirmed intentional names** (mapped to source families):
- `TagInputDropdown` = source *“Tag input”* (the Side/trailing-dropdown
  variant set); the *“Input with trailing dropdown”* frame the user selected.
- `InputTextArea` = source *“Input Text Area”*.
- `Input` = source *“Basic input”*.
- `Radio` = source *“Radio buttons”*; `Radio.Group` is a composition helper
  (static on `Radio`, not a separate family) so consumers don’t hand-wire
  radio state.
- `Checkbox` = source *“checkbox_field”*. Not built as primitives: `Focus indicator` (a
Figma overlay helper, not a UI control) and the raw `icons` family (would not
materialize cleanly — replaced by the curated Icon wrapper; see Iconography).

---

## UI kits
- **`ui_kits/enrollment-form/`** — a full recreation of the recruitment landing
  form, composing every primitive. Interactive (submit → success state).

---

## Foundations (Design System tab cards)
- **Colors:** Brand · Red (Action) · Blue (Accent) · Grayscale · Functional
- **Type:** Font Families · Type Roles
- **Spacing:** Spacing Scale · Radii
- **Brand:** Wordmark (type-set — no logo in source)

---

## Root manifest / index
- `styles.css` — global entry point (import this). `@import`s the token files.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `components/` — `button/`, `icon/`, `inputs/`, `tags/`, `navigation/`.
- `ui_kits/enrollment-form/` — product screen.
- `guidelines/` — foundation specimen cards.
- `SKILL.md` — Agent-Skill entry point.

---

## Caveats & substitutions
- **Kozminski U** (proprietary editorial serif, used SemiBold Italic) is
  substituted with **Lora**. Replace with the licensed webfont when available.
- **Open Sans / Roboto / Inter** load from Google Fonts.
- **No logo** in the source → the brand renders as the wordmark “ALK” set in
  type. No mark was invented.
- The **`icons` Figma family** did not materialize cleanly; a curated Heroicons
  wrapper stands in.
- Sample copy is Polish, matching the source.
