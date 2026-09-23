# VERA HOLIDAYS Connect

Build a hotel & flight booking web app called [VERA HOLIDAYS]. Design language: Airbnb-inspired

— warm, minimal, confident whitespace, rounded corners, soft shadows, nothing cluttered.

COLOR PALETTE (use exactly these, no other accent colors):

- Primary: #FF385C (Airbnb's signature coral-pink) — buttons, active states, price highlights, key CTAs

- Primary hover/dark: #E31C5F

- Soft pink tint for backgrounds/badges: #FFF1F3

- White: #FFFFFF as the dominant background

- Text: #222222 (near-black, not pure black) for headings, #717171 for secondary text

- Borders/dividers: #EBEBEB

- Success accents only where needed (e.g. "confirmed" badge): #00A699 (Airbnb teal)

Do NOT use photos or generated images anywhere — no hero images, no illustrations, no stock

photos, no AI-generated art. Use icon libraries (Lucide icons) and typography/color/whitespace

to carry the design instead. Every "image" spot should instead be a soft gradient card, an icon,

or a color-block placeholder — I'll add real photography later myself.

PAGES:

1. Home — a big, centered search bar as the hero (no image behind it, just generous white space

   and a soft pink gradient blob or two, subtle, abstract, not photographic). Two tabs: Hotels /

   Flights. Below the fold: a row of scrollable "popular destination" cards (text + icon only, no

   photos), simple and airy, Airbnb-card style (rounded corners, price + rating + name).

2. Search results — a clean list of cards (hotel name, star rating, price, a small "X rooms

   left" scarcity badge when stock is low, shown in a soft amber tone), with a simple filter

   sidebar (price range, star rating, amenities) that stays minimal, not a wall of checkboxes.

3. Detail page — room/fare details, price breakdown, a prominent "Hold this room" button.

4. Hold/checkout flow — this is the most important screen: after clicking "Hold," show a clear,

   friendly countdown timer (mm:ss, pink accent, gently pulsing as it runs low) telling the user

   how long their reservation is held before it releases automatically. Below it, a clean payment

   form (card/UPI toggle) leading to a "Pay now" button. If the timer runs out, show a calm,

   non-scary "Your hold expired, but the room's probably still here — search again" state, not an

   error-red panic screen.

5. Confirmation page — a warm, celebratory but understated confirmation (booking reference,

   itinerary summary, a subtle checkmark animation, no confetti overload).

6. My Bookings — a list of past/upcoming bookings as cards, each with status badges (pending =

   soft blue, confirmed = teal, cancelled = grey, partially confirmed = amber) and a "Cancel

   booking" action with a simple confirm dialog showing the refund amount before confirming.

A natural-language search bar on the Home page (in addition to structured filters) — a single

text input where a user can type something like "cheap heritage hotel near Jaipur next weekend"

in English or Hindi, with a small "Powered by AI" pink pill badge near it, and a graceful fallback

message ("showing filtered results instead") if it can't parse the query confidently.

Keep it SIMPLE — resist the urge to add extra sections, testimonials, footers with 20 links, or

marketing fluff. This is a working product demo, not a landing page. Every screen should feel like

it could ship on Airbnb itself: calm, confident, a little bit of pink, mostly white space.

Build with mock/sample data for now (a handful of realistic hotels and flights) structured so the

data layer can later be swapped for real API calls to endpoints like GET /search/hotels,

POST /holds, POST /bookings, GET /bookings/:id, POST /bookings/:id/cancel.

---

Prompt 2 — Live system visualizer (testing/ops dashboard)

Build a separate internal dashboard page called "System Visualizer" — a live, animated diagram

that shows exactly what's happening inside a booking system's backend in real time: requests

racing for scarce inventory, database locks, saga compensation, retried requests. This is a

demo/testing tool for showing engineers and judges that the system never overbooks — it should

feel like watching air traffic control, not a boring log viewer.

VISUAL STYLE: dark canvas background (near-black, #0B0F14 or similar), NOT pink/white like the

consumer app — this is a technical/ops tool, distinct in feel. Clean sans-serif labels, soft glow

effects on active elements, monospace font for any raw JSON/text shown. No photos or generated

images — everything is built from icons (Lucide icons), simple geometric node shapes, and SVG/CSS

animated connecting lines.

LAYOUT — a node diagram with these fixed nodes, each a labeled icon in a rounded box:

- "Client" (a browser/monitor icon) — where request dots originate

- "API / Backend" (a server-rack icon)

- "Postgres" (a database-cylinder icon, with a small padlock badge that lights up when a row is

  locked)

- "Redis" (a small cache/lightning-bolt icon, off to the side, dimmer/less prominent than Postgres

  — it's a cache, not the source of truth, and the visual weight should reflect that)

- "Razorpay" (a payment/card icon) — only lights up during the payment step

Connecting lines between nodes that requests travel along.

SIGNAL COLORS (use consistently, nowhere else in this dashboard):

- Blue (#3B82F6) — request in flight / currently processing

- Green (#22C55E) — succeeded (granted, confirmed, captured)

- Red (#EF4444) — failed / rejected (sold_out, expired, conflict)

- Amber (#F59E0B) — queued, waiting on a lock held by another request

ANIMATED SCENARIOS (selectable via a small control panel — buttons like "Simulate: Race for last

3 rooms", "Simulate: Multi-item saga with a forced failure", "Simulate: Duplicate request retry"):

1. Race for scarce inventory — spawn many small dots at "Client" simultaneously, animate them

   toward "API / Backend" then queue visibly at "Postgres"'s padlock (dots stack/wait, amber)

   one at a time as the lock is acquired and released. Only as many dots turn green and continue

   past as there are actual free units (read from a small "3 free" counter shown near the

   Postgres node, ticking down live as each winning dot commits) — the rest turn red and fade

   back toward Client with a small "sold_out" label.

2. Multi-item saga — one dot travels to Backend, then splits into 2-3 smaller dots (one per line

   item), each traveling to Postgres, one path also touching Razorpay for payment. On a forced

   failure (triggered by the demo button), already-green sub-dots visibly reverse-animate partway

   back with a small refund icon and turn amber/grey labeled "compensated," while the failed one

   turns red — show this as a deliberate, readable sequence, not instant, so a viewer can follow

   what's being undone and what's being kept.

3. Duplicate/retry — two identical dots (labeled with the same short key) fired together, both

   travel to Postgres, converge at the lock, and resolve together to the SAME color/outcome at

   the same instant — visually reinforcing "same key, same result, no double-booking."

SIDE PANEL: a scrolling live event log next to the diagram, monospace, timestamped, showing the

actual request/response shape for each animated event as compact JSON (e.g.

{ "op": "reserve", "inventory_id": "inv_xxx", "units": 1, "result": "granted" }) — this is the

literal "show the exact request" requirement, so make it readable, not decorative.

Build this so it can run in two modes: a self-contained SIMULATED mode with a built-in fake event

generator (so it's demoable standalone right now, before any real backend exists), with a clearly

separated data-source layer so a real WebSocket/SSE connection to a live backend can be swapped in

later without touching the animation/rendering code.

Keep the whole page focused and legible at a glance — this is meant to be shown live during a

2-minute demo, so avoid clutter, tiny text, or too many simultaneous animations fighting for

attention. One scenario animating clearly beats five running at once.

---

A couple of notes on choices I made: I gave the visualizer a distinct dark theme rather than pink/white — it's an ops tool, not the consumer product, and keeping them visually distinct also makes it obvious to anyone watching which "mode" they're looking at during a demo. I also built in a simulated-data fallback for the visualizer since your actual backend isn't live yet — that way it's demoable in Lovable immediately, with a clean seam to wire in real events later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/08e4e07f-0dea-44e0-9898-e28a79470d07).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
