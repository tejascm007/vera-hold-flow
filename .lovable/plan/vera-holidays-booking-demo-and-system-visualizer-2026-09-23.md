# VERA HOLIDAYS booking demo and System Visualizer

## Build scope
- Create a shared VERA HOLIDAYS shell with clear navigation between consumer booking pages and the internal visualizer.
- Add distinct routes for Home, search results, stay details, hold/payment, confirmation, My Bookings, and System Visualizer.
- Use realistic in-app sample hotels, flights, prices, bookings, availability, and event payloads behind a small mock data layer.

## Consumer booking experience
- Build an Airbnb-inspired white and coral design system using only the supplied palette, rounded controls, soft shadows, and generous whitespace.
- Home: Hotels/Flights switcher, structured search, natural-language English/Hindi search with AI badge and fallback feedback, plus horizontally scrollable destination cards.
- Search: concise filters, hotel/flight result cards, ratings, pricing, and low-stock indicators.
- Details: room/fare options, amenities, cancellation information, price breakdown, and Hold action.
- Hold/payment: active countdown, low-time pulse, expiry recovery state, card/UPI choice, basic form validation, and Pay action.
- Confirmation: animated check, booking reference, and itinerary summary.
- My Bookings: upcoming/past cards, requested status treatments, and cancellation confirmation with refund amount.

## System Visualizer
- Build a separate near-black technical interface with fixed Client, API, Postgres, Redis, and Razorpay nodes.
- Add selectable race, saga, and duplicate/retry simulations with paced animated request dots, lock and inventory states, outcome labels, and a readable live JSON event log.
- Keep the event source behind a typed interface with a simulated implementation and an explicit seam for future WebSocket/SSE events.

## Validation
- Check every route’s metadata and navigation.
- Verify the key flows and visual layout on desktop and mobile, including timer expiry, payment choices, cancellation dialog, and all three simulations.
