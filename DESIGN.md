# DESIGN.md — Dark Developer Portfolio System

> Design specification for generating new pages in the same visual language as the reference portfolio. Intended for OpenDesign, ClaudeDesign, or any AI design/code agent that needs a consistent, reusable visual system rather than a one-off screenshot clone.

---

## 1. Design goal

Create pages that feel like they belong to the same portfolio system as the references:

- dark, minimal, developer-focused;
- large, confident typography;
- restrained palette with a single cool-blue accent;
- flat surfaces with subtle separation instead of shadows;
- abstract circular geometry used as decoration;
- clean two-column content grids on desktop;
- compact stacked cards on mobile;
- very limited visual noise;
- strong hierarchy, generous whitespace, and simple interactions.

The result should feel **modern, technical, calm, and slightly playful**, not corporate, glossy, or overly futuristic.

### Core visual keywords

`dark minimalism` · `developer portfolio` · `editorial typography` · `modular cards` · `flat UI` · `cool blue accent` · `subtle geometry` · `Inter` · `high contrast headings` · `low contrast secondary copy`

---

## 2. Source-of-truth tokens

The following values come directly from the provided styles and should be treated as the canonical design tokens unless a new page has a strong reason to deviate.

### 2.1 Colors

| Token | Value | Usage |
|---|---:|---|
| `--bg` | `#1A1A1A` | page background |
| `--surface` | `#212121` | cards, callouts, panels |
| `--surface-2` | `#2A2A2A` | icon containers, dividers, darker UI states |
| `--text-primary` | `#FFFFFF` | headings, important labels, active controls |
| `--text-secondary` | `#676767` | lists, descriptions, metadata |
| `--text-muted` | `#727272` | callout text and subtle explanatory text |
| `--accent` | `#578FF4` | highlights, links, identity accent, decorative circles |

### 2.2 Color behavior

- The background must remain nearly black but **not pure black**.
- Surfaces should be differentiated by luminance, not by visible borders or shadows.
- White is reserved for important typography and active states.
- Secondary copy should be intentionally muted.
- The blue accent must be used sparingly: names, small symbols, active UI, select decorative geometry.
- Do not introduce extra brand colors unless the page content absolutely requires them.

### 2.3 Recommended derived tokens

These are safe derived values for extending the system while preserving the same character:

```css
--border-subtle: #2A2A2A;
--surface-hover: #262626;
--surface-active: #2D2D2D;
--text-tertiary: #565656;
--accent-hover: #6B9CF6;
--accent-soft: rgba(87, 143, 244, 0.12);
--overlay-soft: rgba(255, 255, 255, 0.03);
```

Avoid gradients by default.

---

## 3. Typography

### 3.1 Font family

Use **Inter** for all interface and content text.

```css
font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### 3.2 Base hierarchy

The original system uses aggressive scaling between mobile and desktop.

#### Mobile / compact viewport

| Element | Size | Weight | Notes |
|---|---:|---:|---|
| `h1` | 65px | 700 | hero-level statement |
| `h2` | 55px | 700 | major section heading |
| `h3` | 50px | 700 | large subsection |
| `h4` | 44px | 700 | line-height ~100% |
| `h5` | 20px | 700 | card title |
| `h6` | 16px | 700 | small bold label |
| `p` | 14px | 400 | body copy |
| accent `span` | 16px | regular/bold as context | blue accent text |

#### Desktop ≥ 1000px

| Element | Size | Weight | Notes |
|---|---:|---:|---|
| `h1` | 95px | 700 | very large hero line |
| `h2` | 85px | 700 | primary section title |
| `h3` | 80px | 700 | strong page subsection |
| `h4` | 64px | 700 | compact display title |
| `h5` | 36px | 700 | card title |
| `h6` | 24px | 700 | card subheading |
| `p` | 20px | 400 | body copy |
| accent `span` | 36px | regular/bold as context | highlighted identity text |

### 3.3 Typography rules

- Keep headings visually tight and heavy.
- Display headings can use line-height around `0.95–1.05`.
- Body text should use `1.45–1.65` line-height.
- Avoid all-caps except tiny labels or technical metadata.
- Do not use thin weights for prominent headings.
- Keep paragraph widths constrained; avoid long full-width lines.
- Use blue inside headings only to emphasize one semantic fragment.

### 3.4 Example hero hierarchy

```text
Hi ↗
I am imrasts
Front-end
Developer
```

Interpretation:

- line 1: compact greeting with a tiny blue external-arrow motif;
- line 2: medium statement with the name highlighted blue;
- line 3–4: oversized role title in white.

---

## 4. Layout system

### 4.1 Page shell

The page uses a simple content canvas with horizontal breathing room.

#### Mobile / tablet

```css
padding: 32px 15px;
```

#### Desktop ≥ 1000px

```css
padding: 32px 150px;
```

For generated pages, use the same intent even if implemented with a centered max-width container:

```css
.page {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding-inline: clamp(15px, 8vw, 150px);
}
```

### 4.2 Width and density

- Prefer large horizontal spans on desktop.
- Keep important content aligned to a common left edge.
- Use whitespace instead of extra separators.
- Avoid placing everything inside one centered narrow column.
- The visual language works best with broad desktop layouts and asymmetric empty space.

### 4.3 Vertical rhythm

Existing utility spacing suggests these major rhythm steps:

- `50px`
- `100px`
- `150px`
- `200px`
- `250px`

Use these for **section-level spacing**, not every component gap.

Recommended internal spacing scale:

```text
5  / 10 / 15 / 20 / 30 / 50 / 100 / 150 / 200 / 250 px
```

### 4.4 Responsive breakpoint logic

Primary breakpoints inherited from the source:

- `1000px` — page padding and typography scale switch;
- `1100px` — card list becomes a 2-column grid.

Recommended behavior:

- `< 768px`: single-column, reduced decorative geometry;
- `768–999px`: still single-column, more generous spacing;
- `1000–1099px`: desktop typography and page margins, single-column cards if necessary;
- `≥ 1100px`: full two-column card composition.

---

## 5. Hero section

### 5.1 Composition

The hero should be split visually into two zones:

- **left:** identity and role statement;
- **right:** abstract circular composition.

The left side carries all semantic weight. The right side is decorative and should never compete with the title.

### 5.2 Desktop hero proportions

Recommended:

```text
Left content: 45–55%
Right artwork: 35–45%
Free space: 10–20%
```

Do not force a perfect 50/50 split.

### 5.3 Language switcher

Top-right UI element:

- compact segmented control;
- background close to `#212121`;
- 1px subtle border or luminance difference;
- rounded rectangle, approximately `10–12px` radius;
- two options: `RU` and `EN`;
- active option uses a slightly lighter surface (`#2A2A2A`) and white text;
- inactive option stays white or slightly dimmed depending on contrast;
- no bright blue fill for the active option unless the page needs stronger state signaling.

Approximate desktop dimensions:

```text
container: 170–190px × 70–80px
segment padding: 18–24px horizontal
```

### 5.4 Abstract circle art

Use circles and cropped circles as a recurring signature.

Characteristics:

- circles are perfectly round;
- one circle is usually blue `#578FF4`;
- supporting circles use subtle dark gray near `#212121`;
- some shapes can overlap or be partially clipped;
- no strokes;
- no gradients;
- no shadows;
- composition should feel geometric, quiet, and off-center.

A typical cluster may contain:

- one large blue circle;
- one medium dark circle behind/above;
- one medium dark circle partially occluded;
- one cropped semicircle or circle with a rectangular mask.

The geometry is decoration, not an infographic.

---

## 6. Section headers

Section headings combine a small icon/symbol with a strong title.

Example:

```text
⚝ About me
```

Style:

- white icon;
- white bold title;
- horizontal alignment;
- gap around `10px`;
- large display scale on desktop;
- icon should be simple and line-based, not colorful.

Avoid oversized standalone icons.

---

## 7. Callout / intro strip

The references use a low-contrast horizontal callout beneath section titles.

### Structure

```text
| Short explanatory sentence...
```

### Styling

- background: `#212121`;
- left border: `4px solid #2A2A2A`;
- padding: `10px` minimum; `12–16px` acceptable for larger screens;
- text: `#727272`;
- full available width;
- flat rectangle, minimal or no radius.

This component works well for:

- section intros;
- short positioning statements;
- project context;
- availability/status note;
- short disclaimer.

---

## 8. Card system

Cards are the primary modular content primitive.

### 8.1 Base card

```css
background: #212121;
border-radius: 15px;
padding: 10px;
display: flex;
flex-direction: column;
gap: 10px;
```

For new pages, padding may scale to `14–20px` on desktop if the card contains denser content, but retain the same compact visual language.

### 8.2 Card list

#### Mobile

```text
1 column
15px gap
```

#### Desktop ≥ 1100px

```text
2-column grid
15px gap
```

The grid can support a visually dominant card on the left spanning two rows.

### 8.3 Featured / big card

Use when one subject deserves greater emphasis.

```css
grid-column: 1 / 2;
grid-row: 1 / 3;
```

Good candidates:

- main service;
- flagship project;
- primary skill group;
- current focus;
- key case study.

### 8.4 Card title row

Composition:

```text
[icon tile]  Card title
```

- row alignment: center;
- gap: `10px`;
- title: white, bold;
- icon tile: darker surface.

### 8.5 Icon tile

Mobile:

```text
min-width: 48px
min-height: 48px
padding: 10px
radius: 10px
background: #2A2A2A
```

Desktop ≥ 1100px:

```text
min-width: 76px
min-height: 76px
icon: about 46px
```

Icons should be:

- monochrome white;
- simple line or filled UI glyphs;
- centered;
- semantically clear;
- visually similar in stroke/weight.

### 8.6 Dividers

Two divider weights exist conceptually:

- strong/title divider: `2px solid #2A2A2A`;
- regular divider: `1px solid #2A2A2A`.

Use sparingly. Cards should not look like data tables.

### 8.7 Card body copy

Lists and descriptions use muted gray:

```css
color: #676767;
```

List styling:

- simple bullets;
- `5px` vertical gap;
- no colored bullet icons by default;
- no nested borders.

### 8.8 Horizontal card variant

A horizontal variant can be used for compact summary rows:

```css
flex-direction: row;
justify-content: space-between;
gap: 0;
```

Use when presenting:

- metric + label;
- project name + external link;
- timeline item + date;
- skill + proficiency note;
- CTA + secondary metadata.

---

## 9. Decorative background geometry

The reference page uses large circles around and between content sections.

### Rules

- Place them **behind** content or in empty breathing zones.
- Never let them reduce text readability.
- Keep dark circles only slightly different from the page background.
- One or two blue circles per viewport is usually enough.
- Large circles can be `160–320px` desktop, `80–180px` mobile.
- Cropping at viewport/container edges is encouraged.
- Use lower z-index than cards/text.
- `pointer-events: none`.

### Good usage

- hero right side;
- empty area between section groups;
- lower page as a visual anchor;
- behind project grids with substantial negative space.

### Bad usage

- every card gets a circle;
- circles become buttons;
- gradients/glow effects are added;
- too many blue shapes compete with headings.

---

## 10. Motion and reveal behavior

The source suggests simple scroll reveal behavior.

### Reveal

Initial state:

```css
opacity: 0;
transform: translateY(-15px);
```

Visible state:

```css
opacity: 1;
transform: translateY(0);
transition: all 0.6s ease;
```

### Interaction philosophy

Keep motion subtle and functional.

Recommended:

- section/card reveal: `450–650ms`;
- hover state: `150–220ms`;
- buttons/segments: `120–180ms`;
- use `ease` or `ease-out`;
- transform distances should remain under `20px`.

Avoid:

- bouncing;
- springy overshoot;
- constant floating circles;
- long parallax sequences;
- dramatic 3D rotations.

### Reduced motion

Always support `prefers-reduced-motion: reduce` and remove nonessential transforms/transitions.

---

## 11. Navigation and links

The visual references do not show a conventional top navigation, so new pages should avoid adding a heavy navbar unless needed.

Preferred patterns:

- compact top-right controls;
- inline text links;
- external-link arrow `↗` as a recurring motif;
- minimal footer navigation.

Link behavior:

- default text can be white or accent blue;
- hover: slightly brighter blue or subtle underline;
- focus: clearly visible blue outline/box-shadow for accessibility.

---

## 12. Buttons and controls

Buttons should visually belong to the segmented language switcher and cards.

### Primary button

Use only when a page needs a clear CTA.

```text
background: #578FF4
text: #FFFFFF
radius: 10–12px
font: Inter 600–700
padding: 12–18px / 18–24px
```

### Secondary button

```text
background: #212121 or #2A2A2A
text: #FFFFFF
border: 1px solid #2A2A2A
```

### Ghost button

```text
background: transparent
text: #FFFFFF or #578FF4
```

Do not use pill buttons everywhere. Rounded rectangles are more consistent with the cards.

---

## 13. Page archetypes using this system

The following pages can be created while preserving the same visual identity.

### 13.1 Projects page

Suggested layout:

1. hero: `Projects / Selected Work`;
2. short callout with specialization;
3. 2-column project grid;
4. one featured project spanning two rows;
5. each project card includes:
   - title;
   - role;
   - stack;
   - 2–4 outcomes/features;
   - external link;
6. abstract blue/dark geometry between project groups.

### 13.2 Project detail page

Suggested layout:

1. large project title;
2. metadata strip: role / year / stack / status;
3. hero preview in a dark surface card;
4. sections: problem, solution, implementation, result;
5. muted callouts for constraints;
6. two-column technical cards;
7. final CTA or next project link.

### 13.3 Skills page

Suggested layout:

1. display heading;
2. short callout;
3. featured frontend card;
4. supporting cards for backend, tools, performance, workflow;
5. no colorful proficiency bars;
6. use lists, short labels, or compact horizontal rows.

### 13.4 Contact page

Suggested layout:

1. oversized `Let's work together` style title;
2. one blue-highlighted phrase;
3. contact methods as large dark cards;
4. availability note inside callout;
5. optional compact form with minimal fields;
6. large decorative circle cluster to balance empty space.

### 13.5 About page

Suggested layout:

1. large identity statement;
2. personal/professional intro;
3. card grid for focus, workflow, values, interests;
4. timeline or milestones in horizontal cards;
5. restrained copy; avoid biography wall-of-text.

---

## 14. Components to reuse across pages

A generated design should prefer these repeatable primitives:

```text
PageShell
HeroIdentity
LanguageSwitcher
SectionTitle
CalloutStrip
CardGrid
FeatureCard
CompactCard
IconTile
MutedList
HorizontalInfoCard
ExternalLink
AbstractCircleCluster
Footer
```

This keeps pages recognizably related even when content changes.

---

## 15. Responsive behavior in detail

### Mobile

- one column everywhere;
- reduce decorative circle count;
- language switcher may remain top-right but should not squeeze hero text;
- hero title wraps naturally;
- card icon tile returns to ~48px;
- body text remains readable at 14–16px;
- section spacing should be reduced by ~25–35%;
- avoid horizontal scrolling;
- keep important controls at least 44px tall.

### Tablet

- maintain one main content column unless cards fit comfortably;
- use wider callouts and moderate whitespace;
- circles can return as background anchors;
- hero can transition toward two-column composition only if there is enough width.

### Desktop

- use full bold typography scale;
- 2-column card grid from ~1100px;
- decorative geometry becomes more prominent;
- preserve substantial left/right whitespace;
- allow one featured card to span rows.

---

## 16. Accessibility requirements

Even though the design intentionally uses muted text, accessibility should not be sacrificed.

### Required

- white-on-dark headings meet high contrast;
- muted body text should be checked against `#1A1A1A`/`#212121` and brightened if needed for important content;
- interactive states cannot rely on color alone;
- visible keyboard focus;
- language control must have semantic buttons and `aria-pressed` or equivalent state;
- icons need accessible names when they convey meaning;
- decorative circles must be ignored by assistive technology;
- avoid putting essential text inside images.

### Practical adjustment

For long-form or important body copy, prefer a slightly brighter gray such as `#8A8A8A`–`#A0A0A0` while keeping `#676767` for secondary lists and metadata.

---

## 17. What NOT to introduce

To preserve the reference identity, avoid the following unless explicitly requested:

- glassmorphism;
- neon glows;
- purple/cyan gradients;
- excessive blur;
- noisy textures;
- skeuomorphic controls;
- card shadows;
- rounded pills for every element;
- colorful icon libraries;
- oversized illustration packs;
- dashboard-style data density;
- standard Bootstrap-looking navbars;
- thin/light display typography;
- full-white content backgrounds;
- bright borders around every card;
- excessive animation.

---

## 18. Visual QA checklist

Before accepting a generated page, verify:

- [ ] Background is `#1A1A1A` or visually equivalent.
- [ ] Cards are around `#212121`, not noticeably lighter.
- [ ] Secondary inner surfaces/dividers use `#2A2A2A`.
- [ ] Inter is used throughout.
- [ ] Main heading is oversized and bold.
- [ ] Accent blue is close to `#578FF4`.
- [ ] Blue appears in only a few intentional places.
- [ ] Card radius is around `15px`.
- [ ] Icon tiles are around `10px` radius.
- [ ] Desktop cards form a 2-column grid when space allows.
- [ ] At least one area uses asymmetric whitespace.
- [ ] Abstract circles are present but do not overpower content.
- [ ] No unnecessary shadows/gradients/glow.
- [ ] Body text is muted, while titles remain bright white.
- [ ] Motion is subtle and under ~0.6s.
- [ ] Mobile stacks correctly with no horizontal overflow.

---

## 19. AI generation instructions — OpenDesign / ClaudeDesign

Use the following as a high-level system prompt when generating additional pages:

> Create a dark minimalist frontend-developer portfolio page that belongs to an existing visual system. Use Inter, `#1A1A1A` page background, `#212121` cards, `#2A2A2A` secondary surfaces/dividers, white primary text, muted gray secondary text, and `#578FF4` as the only strong accent. Use very large bold display typography, broad desktop spacing, a two-column card grid at large widths, compact icon tiles, flat surfaces with no shadows, and sparse abstract circular geometry in blue and dark gray. Keep the page editorial and technical rather than corporate. Use subtle reveal transitions only. Preserve strong hierarchy, asymmetry, and negative space. Do not introduce gradients, glassmorphism, neon, or unrelated colors.

### Page-specific continuation prompt template

```text
Design a [PAGE TYPE] that looks like a natural continuation of the existing developer portfolio.

Visual system:
- background #1A1A1A
- surfaces #212121
- inner surfaces/dividers #2A2A2A
- primary text #FFFFFF
- secondary text #676767 / #727272
- accent #578FF4
- Inter font
- 15px card radius
- simple white icons inside darker rounded icon tiles
- oversized bold headings
- 2-column desktop card layout, 1-column mobile
- sparse blue + dark-gray circles as abstract decoration
- no shadows, no gradients, no glassmorphism

Content goal:
[DESCRIBE CONTENT]

Hierarchy:
[DESCRIBE HERO / SECTIONS / CTA]

Interaction:
- subtle hover only
- reveal animation around 0.6s
- clear keyboard focus

The final result must look like another page of the same website, not a redesign.
```

---

## 20. Example design recipe for a new page

For a new page such as **“Projects”**, use this exact composition logic:

```text
TOP
└── language switcher at top-right

HERO
├── small greeting/category line
├── blue-highlighted keyword
├── huge 2-line page title
└── circle cluster on right

SECTION 1
├── icon + section title
├── full-width muted callout
└── 2-column card grid
    ├── featured large card spanning 2 rows
    ├── compact card
    └── compact card

BREATHING ZONE
└── large abstract blue circle + 2 dark circles

SECTION 2
├── icon + title
└── horizontal information cards

BOTTOM
├── minimal CTA
└── simple footer / external links
```

This recipe mirrors the composition language of the reference page without copying its exact content.

---

## 21. Implementation notes inferred from the provided SCSS

These notes are useful for design/code generators so that they do not accidentally drift from the actual implementation style.

- The page intentionally clips horizontal overflow.
- Cards are very simple flex containers before becoming a grid.
- Major responsiveness is achieved with only a few breakpoints rather than many micro-breakpoints.
- Utility spacing is coarse and generous.
- The design prefers layout changes over complex component restyling.
- The reveal animation is simple opacity + translate.
- Decorative art should have desktop-only and mobile-simplified variants where useful.
- A content element can be explicitly shown/hidden around the 1000px breakpoint for adaptive compositions.

### Minor source-code cleanup to apply in future implementations

These are implementation corrections, not visual changes:

- `transform: translate(0px, 30 px)` should be `translate(0px, 30px)` if that class is used.
- `.mb-200` is duplicated and only needs one declaration.
- Prefer semantic class names/tokens over repeated raw colors in new components.

---

## 22. Final identity statement

The design system should communicate:

> **A focused frontend developer who values clarity, speed, structure, and clean interaction.**

The visual character comes from the tension between:

- oversized white typography,
- understated dark surfaces,
- a single cool-blue accent,
- quiet abstract geometry,
- and large areas of deliberate empty space.

Whenever a new page is generated, preserve this relationship first. Exact component arrangement may change, but the **palette, typography, spacing attitude, card language, and geometric motif should remain stable**.
