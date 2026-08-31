# Hives Pastries — Interaction Design System

## Purpose

This document defines the **interaction language** for the Hives Pastries website.

The website should feel alive, warm, playful, and energetic, but never confusing or exhausting.

The interaction design follows one principle:

> **The food is the star. The bee is the guide. Motion is the storyteller.**

Interactions should make the website feel like a living Hives environment while still helping visitors:

**Discover → Crave → Choose → Order**

This is deliberately separate from the main `design.md`. The main design document explains *what the website is*. This document explains *how it moves and responds*.

---

# 1. Interaction Philosophy

There should not be one animation repeated everywhere.

Instead, Hives should have several small interaction languages:

### 1. Micro-interactions
Tiny responses to user actions.

Examples:
- button glow
- underline movement
- image zoom
- icon movement
- card lift
- input focus

### 2. Reveal interactions
Elements appear naturally as the user reaches them.

Examples:
- food fading into view
- text sliding slightly
- images being revealed through a mask
- numbers or labels appearing

### 3. Physical interactions
Elements behave as if they have real-world weight.

Examples:
- plate rotation
- cup movement
- cake settling
- honey stretching
- flour dispersing

### 4. Bee interactions
The bee connects sections and acts as a visual guide.

Examples:
- entering a section
- flying between products
- landing
- leaving a trail
- briefly hovering near an important element

### 5. Scroll interactions
Scrolling controls a visual story rather than simply moving a page.

The strongest example is the **Made for the Moment** section.

### 6. Functional interactions
These are not primarily decorative.

Examples:
- filtering products
- choosing cake weight
- changing quantity
- updating price
- preparing a WhatsApp order

---

# 2. Interaction Hierarchy

Not everything should move equally.

| Area | Intensity | Interaction style |
|---|---|---|
| Navbar | Very low | underline, background transition |
| Hero | Medium | food reveal, bee, subtle depth |
| About | Low | reveal, image movement |
| Delivery | Low/Medium | bee/path |
| Product categories | Medium | image zoom, card movement |
| Made for the Moment | **High** | scroll-driven bee + products |
| Menu | Functional | filtering, hover, transitions |
| Product detail | Functional | selections, price, order feedback |
| Reviews | Low | horizontal movement/carousel |
| Final CTA | Medium | button/bee callback |
| Footer | Very low | simple hover |

The **Made for the Moment** section gets the largest visual budget.

---

# 3. Global Interaction Language

## 3.1 Buttons

Buttons should feel tactile.

### Primary CTA

Honey Yellow background + Hive Black text.

On hover:

- button moves upward 1–2px
- soft yellow glow appears
- arrow/icon moves slightly right
- transition is quick and smooth

On press:

- button briefly returns downward
- glow reduces
- gives the feeling of being physically pressed

**Purpose:** feedback and conversion.

### Secondary CTA

Use cream/white or transparent styling.

On hover:

- yellow border/accent appears
- text can move 1px
- underline may animate in

**Purpose:** distinguish secondary actions without competing with primary CTAs.

---

# 4. Navbar

## On page load

The navbar should appear cleanly without a dramatic animation.

A short fade/slide is enough.

## On scroll

The navbar can:

- become slightly more compact
- gain a soft background
- gain a subtle shadow/blur
- remain visually stable

## Navigation hover

A small Honey Yellow line grows underneath the text.

Example:

`Menu`

becomes:

`Menu`
`────`

The line should animate from one side rather than simply appearing.

**Purpose:** make navigation feel responsive.

---

# 5. Hero — "Welcome to the Hive"

The hero should immediately sell the food.

## Food entrance

Real food photography can enter with different depths.

For example:

- cake settles from slightly above
- smoothie slides gently into place
- smaller dessert elements fade in

Do not animate everything at the same speed.

This creates a layered composition.

**Purpose:** create appetite and depth.

---

## Bee entrance

The bee enters only after the hero content has established itself.

Possible sequence:

**Enter → hover → small pause → move toward the next visual cue**

It should not continuously fly around the screen.

**Purpose:** establish the bee as the guide.

---

## Hero CTA

### Explore the Hive

On hover:

- soft Honey Yellow glow
- slight lift
- arrow moves right

On click:

- smooth transition toward the relevant next section/page

**Purpose:** invite exploration.

### Order Now

Use a similar interaction but make it more direct.

The visitor should immediately understand:

> "This takes me to ordering."

---

# 6. Scroll Indicator

Instead of a generic animated mouse icon, use something that belongs to Hives.

Possible concept:

A tiny bee or honey droplet gently moves downward.

Example:

**🐝 ↓**

or a small honey-yellow trail that slowly extends downward.

The animation should be slow and subtle.

**Purpose:** communicate that there is more to discover.

---

# 7. About Section

The About section should be calmer than the Hero.

## Image reveal

When the section enters the viewport:

- image softly reveals
- text follows slightly afterward
- the image can have a tiny horizontal/vertical movement

Avoid dramatic zooms.

**Purpose:** transition from "look at this food" to "here is who we are."

---

## Decorative honey line

A very thin yellow line can gradually draw itself beside or beneath the section heading.

**Purpose:** subtle brand reinforcement.

It should draw once, not loop.

---

# 8. Delivery Section

The interaction should communicate the concept rather than decorate it.

## Bee delivery route

Possible sequence:

**Bee → small package → destination**

The bee moves along a short curved path.

The path can appear as:

- yellow dotted line
- subtle honey trail
- very thin route

The bee pauses at the package/destination.

**Purpose:** communicate delivery instantly.

---

## Delivery confirmation

When the user hovers over the delivery information/card:

- package can lift slightly
- a tiny honey-yellow highlight appears

**Purpose:** reinforce that delivery is an available service.

---

# 9. "There's a Lot in the Hive"

This section introduces the product categories.

It should feel like opening different parts of the Hive.

## Category cards

Each card can contain a real product image.

On hover:

1. Image gently zooms.
2. Card rises slightly.
3. A yellow accent appears.
4. Small arrow moves into position.

The entire card should feel responsive without becoming a bouncing tile.

**Purpose:** encourage exploration.

---

## Category reveal

As the visitor scrolls:

- cards can appear sequentially rather than all at once
- the stagger should be short

Example:

**Cakes → Cupcakes → Drinks → Ice Cream → Yoghurt**

The delay should be subtle.

**Purpose:** create rhythm and avoid dumping a grid onto the visitor.

---

# 10. Transition Into the Signature Experience

Before the major interactive section, give the visitor a visual pause.

Possible interaction:

The bee appears at the edge of the screen.

It moves toward the first plate.

The background becomes slightly warmer or more spacious.

The first product slowly comes into focus.

**Purpose:** tell the visitor:

> "Now we're entering another part of the Hive."

This is a transition, not another animation-heavy section.

---

# 11. "Made for the Moment" — Signature Interaction

This is the most important interaction on the site.

It should feel almost like a short animated scene controlled by scrolling.

## Scene structure

Each scene contains:

- bee
- real product
- realistic plate/tray where appropriate
- short copy
- optional occasion label
- subtle environmental detail

---

## Scene 1 — Birthday Cake

### Starting state

The cake is visible but slightly subdued.

### Scroll/trigger

The bee enters.

### Action

1. Bee approaches.
2. Bee slows down.
3. Bee hovers.
4. Bee lands.
5. Plate rotates slightly.
6. Cake becomes fully prominent.
7. Heading/copy appears.

**Purpose:** introduce celebration cakes.

---

# 12. Scene 2 — Graduation Cake

The bee leaves the first plate.

A subtle trail connects the two scenes.

Possible trail:

- flour
- honey
- tiny crumbs

Avoid making it look like a cartoon effect.

The next plate enters.

The bee arrives.

The plate rotates.

The graduation cake becomes prominent.

**Purpose:** demonstrate another occasion Hives serves.

---

# 13. Scene 3 — Themed Cake

The transition should be slightly different.

Instead of simply sliding the cake in:

- previous plate moves away
- a new cake can rotate into view
- bee lands near it

**Purpose:** show creativity and customization.

---

# 14. Scene 4 — Cupcakes

The scale can change.

Instead of one large cake:

- several cupcakes can appear on a tray
- the tray rotates slightly
- the bee lands on the edge

One cupcake can subtly shift forward.

**Purpose:** demonstrate smaller/everyday treats.

---

# 15. Scene 5 — Smoothie / Drink

Do not force the plate metaphor onto everything.

Use:

- realistic glass
- small tray
- condensation
- subtle liquid movement if possible

The bee can land briefly on the edge of the tray.

**Purpose:** remind the visitor that Hives is also about drinks.

---

# 16. Scene 6 — Ice Cream

The final scene can be visually indulgent.

Possible composition:

- realistic ice cream bowl/cone
- toppings
- spoon
- subtle rotation

The bee arrives and pauses.

A tiny honey accent can appear.

**Purpose:** finish the journey with another strong craving.

---

# 17. Signature Section Text

The text should change with the visual.

For example:

**Birthday Cakes**  
*Make their day a little sweeter.*

Then:

**Graduation Cakes**  
*For milestones worth celebrating.*

Then:

**Themed Cakes**  
*Made around your moment.*

Then:

**Cupcakes**  
*Small treats. Big mood.*

Then:

**Drinks**  
*Something refreshing?*

Then:

**Ice Cream**  
*Go on. Get another scoop.*

The exact copy can be refined later.

---

# 18. Signature Section Controls

The interaction should not trap the visitor.

Users should still be able to:

- scroll normally
- skip ahead
- access navigation
- click CTAs

If the section uses scroll pinning, it should have a clear beginning and end.

**Purpose:** create immersion without creating frustration.

---

# 19. Menu Page

The Menu is more functional.

## Category filtering

When a category is selected:

- selected tab becomes Honey Yellow
- product cards transition smoothly
- old products fade/slide away
- new products appear

Do not reload the entire page unnecessarily.

**Purpose:** make product discovery feel immediate.

---

# 20. Craving Filters

Possible choices:

**Something Sweet**  
**Something Cold**  
**Something Creamy**  
**Something to Celebrate**

When selected:

- filter becomes active
- products update
- small label can explain the selection
- results transition smoothly

**Purpose:** help someone who knows what they feel like but doesn't know exactly what product they want.

---

# 21. Product Cards

On hover:

- image zooms 3–5%
- card rises slightly
- shadow/depth changes
- product CTA becomes clearer
- optional yellow accent appears

On click:

- transition naturally into product details

**Purpose:** create tactile browsing.

---

# 22. Product Detail

This page prioritizes usability.

## Image

Hover:

- subtle zoom

If multiple images:

- thumbnails can change the main image
- selected thumbnail receives a yellow indicator

---

## Options

For cakes:

- size/weight
- flavour
- message
- topper
- extras

When an option changes:

- selected option clearly changes state
- price updates
- summary updates

**Purpose:** make customization understandable.

---

# 23. Dynamic Price

When a customer changes an option:

Example:

`2kg Cake — KES 4,000`

Customer adds an option:

`2kg Cake — KES 4,500`

The price should update smoothly.

Avoid exaggerated counting animations.

A short numerical transition is enough.

**Purpose:** make pricing transparent.

---

# 24. Add to Order

When clicked:

1. Button responds immediately.
2. Button can briefly change to **Added ✓**.
3. Order/cart indicator updates.
4. A small confirmation appears.

Possible micro-animation:

A tiny product thumbnail travels toward the order indicator.

**Purpose:** give the user confidence that their choice was saved.

---

# 25. Order Summary

The order summary should be calm and practical.

Changes to:

- quantity
- options
- products

should update immediately.

Removing an item can use a short collapse/fade animation.

**Purpose:** reduce mistakes before ordering.

---

# 26. WhatsApp Order

The final WhatsApp CTA should be one of the strongest functional buttons.

On hover:

- Honey Yellow glow
- slight lift
- WhatsApp/order icon subtly moves

On click:

- order is prepared
- WhatsApp opens with the structured order

**Purpose:** convert browsing into a real customer enquiry/order.

---

# 27. Social Proof

Reviews should not compete with the food.

## Review interaction

If multiple reviews exist:

- horizontal swipe/drag
- simple arrows on desktop
- dots/position indicator if useful

Avoid aggressive autoplay.

**Purpose:** allow customers to explore trust signals at their own pace.

---

# 28. Final CTA

The final CTA should feel like the end of the journey.

Possible heading:

> **Ready to find your favourite?**

The bee can appear again.

It doesn't need to fly across the entire screen.

Instead:

**Bee arrives → pauses → moves subtly toward the CTA**

The CTA responds with the standard yellow glow.

**Purpose:** bring the story full circle and convert.

---

# 29. Footer

Keep the footer calm.

Links can have:

- yellow underline
- subtle text movement
- icon response

No large bee animation.

**Purpose:** usability.

---

# 30. Micro-interaction Library

These can be reused across the site.

### Yellow Glow
For important CTAs.

### Yellow Underline
For text links/navigation.

### Card Lift
For clickable cards.

### Image Zoom
For product photography.

### Arrow Nudge
For directional CTAs.

### Soft Fade
For content entering the viewport.

### Mask Reveal
For selected hero/section imagery.

### Number Transition
For prices/counts.

### Press State
For buttons.

### Checkmark
For successful selections.

### Small Product Fly-to-Order
For adding an item to an order.

### Honey Trail
For selected brand/story transitions.

### Bee Movement
For meaningful navigation/storytelling moments.

---

# 31. What NOT To Animate

Do not animate:

- every heading
- every paragraph
- every image
- every card
- every button
- the entire navbar continuously
- the bee continuously
- backgrounds constantly moving
- products bouncing
- text endlessly floating
- large parallax effects everywhere

Avoid:

- excessive particle effects
- unnecessary 3D
- animation that delays content
- animations that make scrolling difficult
- autoplay-heavy sections

---

# 32. Physical Realism

Because the concept relies heavily on real food photography, the interaction should respect the physical nature of the objects.

### Cakes

Should feel heavy.

### Plates

Should have weight and inertia.

### Drinks

Should feel liquid.

### Ice cream

Should feel soft and cold.

### Honey

Should move slowly and have viscosity.

### Flour

Should disperse lightly and settle.

### Bee

Should accelerate, decelerate, hover, and pause naturally.

This is what separates the interaction from simply moving PNGs around the page.

---

# 33. Timing Guidelines

These are starting points, not rigid rules.

### Micro-interactions
**150–300ms**

### Button hover
**200–300ms**

### Card hover
**250–400ms**

### Section reveals
**500–800ms**

### Bee movement
**800–1800ms**

### Plate rotation
**800–1400ms**

### Major scene transition
**700–1500ms**

The final timing should be tuned visually.

---

# 34. Scroll Behaviour

Scroll should remain the primary navigation method.

For normal sections:

**scroll → content reveals → continue**

For the signature section:

**scroll → scene progresses**

Avoid making the entire website a giant scroll-controlled animation.

Only the signature section deserves this treatment.

---

# 35. Mobile Interaction Strategy

Mobile should not be treated as a smaller desktop.

### Hero
Keep food movement subtle.

### Category cards
Use tap states rather than hover.

### Signature experience
Convert horizontal/complex movement into a vertical story.

Example:

**Cake → Bee → Cake copy**

then

**Bee → next cake → next copy**

then

**Cupcakes → Drinks → Ice Cream**

### Menu
Prioritize easy filters and large touch targets.

### Product options
Use simple stacked selectors.

### WhatsApp
Keep the ordering CTA accessible.

---

# 36. Accessibility

Provide reduced-motion behaviour.

When `prefers-reduced-motion` is enabled:

- remove plate rotation
- remove large bee flights
- remove parallax
- replace complex reveals with fades
- keep all information visible
- preserve all functional interactions

The website should work perfectly without animation.

---

# 37. Performance Rules

The interaction design depends heavily on images, so asset optimization is critical.

Use:

- WebP/AVIF where appropriate
- responsive image sizes
- lazy loading below the fold
- optimized transparent product cutouts
- efficient animation properties
- GPU-friendly transforms
- Intersection Observer for reveal triggers

Avoid:

- huge PNGs
- unnecessary GIFs
- continuously running animations
- heavy 3D libraries for simple effects
- multiple high-resolution videos playing simultaneously

---

# 38. The Interaction Test

Before implementing any animation, ask:

### What does it do?

If the answer is:

**"It looks cool."**

That is not enough.

If it:

- guides the user
- makes a product more desirable
- explains something
- gives feedback
- reinforces Hives
- helps the customer choose
- helps the customer order

then it has a reason to exist.

---

# 39. Final Interaction Experience

The ideal experience should feel like this:

**Hero**

Food catches your eye.

↓  

**Bee appears**

Something is about to happen.

↓

**About**

You learn who Hives is.

↓

**Delivery**

You discover they can bring it to you.

↓

**There's a Lot in the Hive**

You realise there is much more than cake.

↓

**Made for the Moment**

The bee takes you through cakes, cupcakes, drinks and ice cream.

↓

**Menu**

Now you are thinking:

> "Okay... what do I actually want?"

↓

**Cravings / Categories**

You find it.

↓

**Product**

You choose the details.

↓

**Order**

You send it to WhatsApp.

The interaction has therefore served the business rather than existing independently of it.

---

# 40. Design Rule to Keep During Development

> **If removing an animation makes the website easier to use and does not remove meaning, remove the animation.**

The goal is not to make Hives Pastries the website with the most animations.

The goal is to make it the website where the **brand, food, story, and ordering experience naturally work together.**
