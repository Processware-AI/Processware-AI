# Design System Document: Regulatory Precision & Tonal Depth

## 1. Overview & Creative North Star: "The Digital Jurist"
In the world of regulatory compliance, trust is not earned through decoration; it is earned through clarity, stability, and unshakeable authority. The Creative North Star for this design system is **"The Digital Jurist."**

Unlike "standard" SaaS platforms that rely on generic grids and heavy borders, this system adopts an **Editorial High-Tech** aesthetic. We break the "template" feel by using intentional asymmetry—pairing large, authoritative typography with generous negative space and overlapping "frosted" layers. The layout should feel like a premium financial dossier: clean, structured, yet technologically advanced. We move away from the "boxy" web of 2010 and toward a fluid, layered environment where information density is managed through tonal shifts rather than lines.

---

## 2. Colors: The Depth of Trust
The palette is anchored in `primary` (#001e40), a deep, obsidian blue that evokes the weight of law and tradition, contrasted against a high-tech `surface` (#f9f9fe).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. Traditional borders create visual noise and "trap" the eye. Instead, boundaries must be defined solely through:
*   **Background Shifts:** Use `surface-container-low` sections sitting on a `surface` background.
*   **Tonal Transitions:** Use the hierarchy of `surface-container` tokens to distinguish between navigation, sidebars, and main content.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine paper. 
*   **Base:** `surface` (#f9f9fe)
*   **Sectioning:** `surface-container-low` (#f4f3f8) for secondary areas.
*   **Active Workspaces:** `surface-container-lowest` (#ffffff) for the primary "paper" where the user performs tasks.
*   **Elevated Overlays:** `surface-container-high` (#e8e8ed) for temporary drawers or menus.

### The "Glass & Gradient" Rule
To elevate the "AI Agent" experience, use **Glassmorphism** for floating elements (like chat bubbles or floating action buttons). Apply a `backdrop-blur` of 12px-20px to `surface-container-lowest` at 80% opacity. 
**Signature Texture:** Main CTAs or Hero sections should utilize a subtle linear gradient (45 degrees) from `primary` (#001e40) to `primary_container` (#003366). This provides a "soul" to the color that flat hex codes cannot achieve.

---

## 3. Typography: Authoritative Clarity
We utilize **Inter** as our typographic engine. It provides the mechanical precision required for regulatory data while maintaining high readability.

*   **Display (lg/md):** Used for high-level dashboard summaries. Use these sparingly to create an "Editorial" feel, often left-aligned with significant bottom margins.
*   **Headline (sm/md):** Your primary section headers. These should feel like the title of a legal brief—confident and clear.
*   **Body (lg/md):** Set at `body-lg` (1rem) for reading compliance documents. Line height should be generous (1.6) to prevent eye fatigue.
*   **Label (sm/md):** Used for "Metadata" and "Status." These are the "fine print" that must remain legible, using `on_surface_variant` (#43474f).

---

## 4. Elevation & Depth: Tonal Layering
We do not use structural lines to define space. We use **Tonal Layering.**

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` background creates a soft, natural lift without the need for a shadow.
*   **Ambient Shadows:** For floating elements (Modals/Popovers), use "Airy Shadows."
    *   *Value:* `0px 12px 32px rgba(0, 30, 64, 0.06)`
    *   *Director's Note:* Notice the shadow color is a tinted version of our `primary` blue, not a generic grey. This mimics natural light.
*   **The "Ghost Border" Fallback:** If a container sits on an identical color background and requires a boundary for accessibility, use a **Ghost Border**: `outline-variant` (#c3c6d1) at **15% opacity**. Never use 100% opacity borders.

---

## 5. Components: Precision Primitives

### Buttons
*   **Primary:** Linear gradient (`primary` to `primary_container`), 8px (`DEFAULT`) radius, `on_primary` white text. Subtle 4px blur shadow.
*   **Secondary:** `surface-container-highest` background with `on_secondary_fixed_variant` text. No border.
*   **Tertiary:** No background. Text-only with an underline appearing only on hover.

### Input Fields
*   **Base State:** `surface-container-lowest` background. Instead of a 4-sided border, use a 2px bottom-stroke of `outline-variant`.
*   **Focus State:** The bottom-stroke transforms into `surface_tint` (#3a5f94) with a very subtle inner glow.

### Cards & Lists
*   **Constraint:** **Strictly forbid divider lines.** 
*   **Execution:** Separate list items using `8px` of vertical white space or by alternating background tones between `surface-container-lowest` and `surface-container-low`. 

### AI Agent "Pulse" (Custom Component)
A regulatory AI requires a "living" presence. Use a small 8px circle with a `primary_fixed_dim` glow that pulses slowly (2s duration). This indicates the AI Agent is actively "scanning" or "monitoring" compliance.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts (e.g., a wide left column for data and a narrow right column for AI insights).
*   **Do** prioritize `body-lg` for long-form legal text to ensure the UI feels premium and readable.
*   **Do** use `primary_fixed` (#d5e3ff) for "Success" or "Verified" states to maintain the blue brand trust rather than jumping to a jarring "Standard Green."

### Don't
*   **Don't** use high-contrast black (#000000). Use `on_background` (#1a1c1f) for all "black" text to maintain a sophisticated softness.
*   **Don't** use 100% opaque borders. They clutter the mind of the user who is already dealing with complex regulatory data.
*   **Don't** use sharp 0px corners. Every element must adhere to the `DEFAULT` (8px) or `lg` (16px) rounding to maintain the "Modern Professional" vibe.