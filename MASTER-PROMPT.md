# Master Prompt: Mercer Plumbing & Heating (Prototype)

> **How to use:** create an empty project folder, open Claude Code in it, and paste everything below the line.
> Version 1.0 · 25 Sep 2026

---

You are a senior front-end developer and conversion-focused web designer. Build a **single-page, front-end-only website prototype** for a fictional local plumbing business.

The site has **one conversion goal: a phone call.** Every design, copy and layout decision serves that goal. When anything is ambiguous, choose the option that makes calling easier and faster.

---

## PART 1: RULES & SETUP

### 1.1 Hard rules (non-negotiable)

1. **One CTA, one action.** Every call to action is a `tel:+442079460123` link. Labels can change to fit the context; the action never does. Even the maintenance plan is joined by phone.
2. **Nothing competes with the call.** No forms, quote requests, email links, chat widgets, booking, newsletter, social links or external links.
3. **Front end only.** No backend, API routes, database, CMS, email, dashboard, analytics or cookie banner.
4. **One page.** No other pages, no navigation menu. The footer links only to the phone number and `#top`.
5. **Static output**, deployed to **GitHub Pages**.
6. **All content lives in `src/data/site.ts`.** No business copy hardcoded in components.
7. **Mobile-first.** Most visitors are on a phone, stressed, possibly with water on the floor.
8. **Consistency.** Prices, guarantees and promises must use identical wording and numbers everywhere they appear. Never overstate (no "lifetime guarantee", no "cheapest in London").
9. **It's fictional.** Add `<meta name="robots" content="noindex">` so the prototype isn't indexed as a real business, and label reviews and prices as fictional where specified.

### 1.2 Tech stack

| Layer | Choice |
|---|---|
| Framework | **Astro** (latest), static output, zero client JS by default |
| Styling | **Tailwind CSS v4** via `@tailwindcss/vite`, tokens in `@theme` |
| Icons | **Lucide** (`@lucide/astro`), outline, 2px stroke. No emojis anywhere |
| Fonts | **Fontsource**, self-hosted: `@fontsource-variable/plus-jakarta-sans` (headings), `@fontsource-variable/inter` (body) |
| Images | Astro `<Image>` (WebP, explicit width/height) |
| Language | TypeScript |
| Deploy | GitHub Pages via GitHub Actions (`withastro/action`) |

Client-side JS only where strictly needed: the scroll-reveal observer and showing the sticky mobile bar. Keep it tiny and inline. Accordions and "show more" use native `<details>`.

### 1.3 Project structure

```
src/
  data/site.ts
  components/
    CallButton.astro
    Header.astro
    StickyCallBar.astro
    Hero.astro
    ProofStrip.astro
    Services.astro
    ExtraWorks.astro
    HowItWorks.astro
    Pricing.astro
    Guarantees.astro
    CoverPlan.astro
    MeetDan.astro
    BeforeAfter.astro
    Testimonials.astro
    Faq.astro
    Areas.astro
    FinalCta.astro
    Footer.astro
  layouts/BaseLayout.astro
  pages/index.astro
  styles/global.css
public/
  favicon.svg
.github/workflows/deploy.yml
README.md
```

---

## PART 2: THE BUSINESS

### 2.1 Fictional business profile

**Mercer Plumbing & Heating**, owned by **Dan Mercer**

- 41 years old, 18 years on the tools, owner-operator with 2 directly employed engineers and a small van fleet.
- Based in **Croydon**, covering **South London & North Surrey**.
- Credentials (all fictional): Gas Safe Registered **#000000**, WaterSafe approved, fully insured, **4.9★ from 312 Google reviews**.
- Phone: **020 7946 0123** (Ofcom drama range, a safe fictional number). `tel:` format: `+442079460123`.
- Hours: **24/7 for emergencies**, 7am–8pm for everything else.
- Core promises: a real person answers · on site within 60 minutes for emergencies (target) · no call-out charge, day or night · price agreed before work starts · 12-month guarantee.

**Main services (6):**
1. Emergency leaks & burst pipes
2. Boiler repair & replacement
3. Blocked drains & toilets
4. Bathroom installation
5. Landlord gas safety certificates (CP12)
6. Central heating & powerflushing

**Areas covered:** Croydon, Purley, Sutton, Bromley, Streatham, Norbury, Thornton Heath, Wallington, Carshalton, Coulsdon, Beckenham, Mitcham.

### 2.2 Target visitor

A homeowner or landlord, 30–65, on mobile, often in the evening, often mid-problem. In 5 seconds they need to know: **Is this local? Can I trust them? How do I call?**

### 2.3 Brand tone of voice

- **Calm, direct, human.** A capable neighbour, not a corporation. Dan speaks in first person where it fits.
- Short sentences. Plain English. No jargon, no hype, no exclamation marks.
- Reassure first, sell second. Acknowledge the stress, then remove it.
- Specific beats vague: "on site within 60 minutes", not "fast service".
- British English (colour, organise, centre).

**Voice samples:**
- Hero headline: *"Water where it shouldn't be? Call Dan."*
- Hero subline: *"Local plumber and Gas Safe engineer in Croydon. A real person answers, day or night."*
- Reassurance: *"No call-out charge. Price agreed before we start."*
- Final CTA: *"Still reading? Just call. It's quicker."*

**Never use:** solutions, world-class, cutting-edge, one-stop shop, best-in-class, "look no further".

---

## PART 3: DESIGN SYSTEM

**Style:** clean, minimal, trustworthy. Plenty of white space, strong type hierarchy, real-looking photography (placeholders for now). No cartoon illustrations, no decorative gradients, no glassmorphism.

### 3.1 Colour tokens

Define in Tailwind `@theme`. Never use raw hex in components.

| Token | Hex | Use |
|---|---|---|
| `--color-navy-900` | `#172554` | Final CTA, footer, dark sections |
| `--color-primary` | `#1E3A8A` | Headings, brand, icons, prices |
| `--color-primary-soft` | `#EFF6FF` | Alternate section backgrounds, "after" placeholders |
| `--color-cta` | `#C2410C` | **Call buttons ONLY.** Nothing else is orange (5.2:1 with white text) |
| `--color-cta-hover` | `#9A3412` | CTA hover/pressed |
| `--color-on-cta` | `#FFFFFF` | CTA text |
| `--color-ink` | `#0F172A` | Body text |
| `--color-muted` | `#475569` | Secondary text, small print |
| `--color-border` | `#DBEAFE` | Card borders, dividers |
| `--color-star` | `#F59E0B` | Review stars only |
| `--color-success` | `#15803D` | "Available now" dot, check icons |
| `--color-warning-soft` | `#FEF3C7` | Gas safety info box background |

### 3.2 Typography

- Headings: Plus Jakarta Sans, 700–800, `tracking-tight`.
- Body: Inter, 400, 16–18px, line-height 1.6.
- Scale: 14 / 16 / 18 / 20 / 24 / 32 / 40 / 56.
- Prices and phone numbers use tabular figures and are set large.

### 3.3 Layout, shape, motion

- 8px spacing rhythm, `max-w-6xl` content width, section padding `py-16` mobile / `py-24` desktop.
- Breakpoints: 375 / 768 / 1024 / 1440.
- 12px card radius, pill-shaped CTA buttons, one soft card shadow, one stronger shadow for the sticky bar.
- Motion: subtle fade-up (opacity + 12px translateY, 350ms, ease-out) on section entry. **Content is visible by default.** Never leave blank space waiting for animation. Everything disabled under `prefers-reduced-motion`. CTA press scale 0.97. No carousels, sliders or auto-rotation.

### 3.4 The CallButton component

One reusable `<CallButton>` with `size` (`sm` | `md` | `lg`) and `label` props, used for every CTA.

- Orange background, white bold text, phone icon (`aria-hidden`) + visible label.
- Href always from `site.ts`: `tel:+442079460123`.
- `aria-label="Call Mercer Plumbing on 020 7946 0123"`.
- Minimum 56px tall on mobile, 48px on desktop; full width on mobile where specified.
- Visible 3px navy focus ring with offset, hover darken, press scale.
- Optional reassurance line underneath (see 5.2).

---

## PART 4: PAGE LAYOUT (top to bottom)

No navigation menu. Fixed layout, no variants.

### 4.1 Header (sticky on desktop)
- Left: wordmark "Mercer" + small "Plumbing & Heating".
- Right (desktop): phone icon + **020 7946 0123** as a `tel:` link, "Real person, 24/7" underneath, and a compact **"Call now"** CallButton.
- Right (mobile): phone icon button only (with accessible name). The sticky bottom bar does the heavy lifting.

### 4.2 Hero (split layout)
- Desktop: text + CTA left, photo of Dan with his van right. Mobile stack: pill → headline → subline → CTA → reassurance → trust row → photo.
- Availability pill: green dot + "Available now · 24/7 emergencies" (text, not colour alone).
- Headline: *"Water where it shouldn't be? Call Dan."* (the only `<h1>`).
- Subline: *"Local plumber and Gas Safe engineer in Croydon. A real person answers, day or night."*
- **Primary CTA** (large, full width on mobile): "Call Dan now · 020 7946 0123".
- Reassurance under the button: "No call-out charge · Price agreed before we start".
- Trust row: Gas Safe badge placeholder · ★ 4.9 (312 Google reviews) · "18 years local".
- **The CTA must be above the fold on a 375×667 screen.**

### 4.3 Proof strip
4 stats in a row (2×2 on mobile): **18 years** local · **4.9★** Google · **60-min** emergency response · **12-month** guarantee.

### 4.4 Services: "What we fix"
- 6 cards (icon + title + one-line description): 3×2 desktop, 2 columns tablet, 1 mobile. **Cards are not links.**
- Directly underneath: **"We also handle"** (4.5).
- Then CTA: "Not sure what's wrong? Describe it on the phone." + CallButton "Call Dan". Reassurance: "Just describe it. We'll work it out together."

### 4.5 Extra works: "We also handle"
Compact checklist (check icon + label), 2 columns desktop, 1 mobile, not links:

Radiator fitting, moving & replacement · Underfloor heating (wet systems) · Unvented hot water cylinders · Low water pressure & noisy pipes · Frozen & burst pipes · Stopcock replacement · Outside taps · Washing machine & dishwasher plumbing · Toilet, cistern & flush repairs · Electric & pumped shower repairs · Gas cooker & hob fitting · Smart thermostat installation

**Gas safety notice** (calm info box, warning icon + text). The emergency number is **plain text, not a button**:
*"Smell gas? Leave the property, don't use switches, and call the National Gas Emergency line on 0800 111 999 first. Once you're safe, call us to fix the cause."*

### 4.6 How it works
3 numbered steps with icons:
1. **You call.** A real person answers.
2. **We arrive.** Usually within the hour for emergencies.
3. **It's fixed.** Price agreed before we start, 12-month guarantee.

### 4.7 Pricing: "Straight prices. No surprises."
All prices are fictional, include VAT, and live in `site.ts`.

**Two rate cards** (side by side, stacked on mobile):

| | Daytime | Out of hours |
|---|---|---|
| When | Mon–Sat, 7am–8pm | Evenings, overnight, Sundays, bank holidays |
| Call-out charge | **£0** | **£0** |
| First hour (includes diagnosis) | **£75** | **£120** |
| After that | £30 per half hour | £45 per half hour |

**Fixed-price jobs:**

| Job | Price |
|---|---|
| Boiler service | £89 |
| Landlord gas safety certificate (CP12) | £75 |
| Unblock a toilet or sink | from £95 |
| Replace a tap | from £110 |
| Powerflush (up to 10 radiators) | from £395 |
| New combi boiler, supplied & fitted | from £1,995 |

**Small print** (muted):
- "All prices include VAT."
- "Parts are charged at the price on the receipt. We show you before we fit them."
- "We tell you the full price before any work starts. You decide whether to go ahead."
- "Prices are for a fictional business in this prototype."

**CTA:** "Want an exact price for your job?" + CallButton "Call Dan. It takes two minutes." Reassurance: "The price we agree is the price you pay."

Design: prices large, navy, tabular. The £0 call-out is each card's visual highlight, **in navy, not orange**. No "Buy", "Book" or "Select" buttons.

### 4.8 Guarantees: "Our promises to you"
Three cards (icon + bold promise + explanation + "Covers" line):

1. **The price we agree is the price you pay.**
   "Before we start, we tell you the full price. If the job takes longer than we thought, that's our problem, not yours."
   *Covers:* all labour on the agreed job. If we find a separate problem, we stop and ask before doing anything extra.
2. **12-month workmanship guarantee.**
   "If something we fixed or fitted goes wrong within 12 months, we come back and put it right for free."
   *Covers:* our workmanship and any parts we supplied. New boilers also carry the manufacturer's warranty (up to 10 years).
3. **We turn up, or we tell you.**
   "Emergency? We aim to be with you within 60 minutes. Booked visit? We arrive in your time slot, or we call you before it starts."
   *Covers:* all emergency and booked visits.

Muted line underneath: *"These promises are on top of your legal rights, not instead of them. They don't cover parts you supplied yourself or damage caused after we leave."*

### 4.9 Mercer Cover plan (the programme feature)
A single highlighted card (navy border, "Members get priority" label). Joined **by phone only**. No signup form, subscribe button or payment UI.

- **Mercer Cover: £12 a month** (fictional). 12-month plan, cancel any time after that.
- Included (check icons):
  - Yearly boiler service
  - No out-of-hours surcharge: daytime rates, 24/7
  - Priority in the emergency queue
  - 10% off labour on any other job
  - Landlords: one gas safety certificate included
- CallButton "Call Dan to join". Reassurance: "No contract tricks. Dan explains everything on the call."

### 4.10 Meet Dan
Photo placeholder + a 3–4 sentence first-person paragraph: why he started, family-run, local, the engineers are his own team. Signed "Dan".

### 4.11 Before & after: "Recent jobs, before and after"
Four case study cards, 2×2 desktop, 1 column mobile. Each: before and after images **side by side** (stacked on mobile, before first) with visible "Before" / "After" text badges, then title, town, *The problem*, *What we did*, a highlighted **result** and a time-taken chip. **No drag slider, no lightbox, no links.**

1. **Bathroom refit, Purley** (6 days)
   - Problem: 1990s avocado suite, cracked tiles, shower tray leaking into the kitchen ceiling.
   - What we did: stripped to the walls, new pipework, walk-in shower, wall-hung toilet, fully tiled.
   - Result: "No more leaks, and a bathroom that's twice as easy to clean."
2. **Boiler replacement, Sutton** (1 day)
   - Problem: 22-year-old back boiler, lukewarm water, winter gas bills of £140 a month.
   - What we did: removed the back boiler, fitted an A-rated combi and a smart thermostat.
   - Result: "Hot water on demand, and gas bills down about £35 a month."
3. **Powerflush, Beckenham** (1 day)
   - Problem: cold radiators upstairs, sludge-black water when bled.
   - What we did: full system powerflush, inhibitor added, magnetic filter fitted.
   - Result: "Every radiator hot within 20 minutes."
4. **Emergency burst pipe, Croydon** (90 minutes)
   - Problem: pipe burst in the loft at 2am, water coming through the landing ceiling.
   - What we did: water isolated within 10 minutes of arriving, damaged section replaced, pipes lagged.
   - Result: "Water back on in 90 minutes. Fixed price, no out-of-hours surprise."

**CTA:** "Got a job like one of these?" + CallButton "Call Dan". Reassurance: "Every job guaranteed for 12 months."

### 4.12 Testimonials: "What customers say"
Above the cards: 5 stars + "Rated 4.9 from 312 Google reviews". Six cards: stars (`aria-label="5 out of 5 stars"`), quote, first name + town, job-type tag. 3 columns desktop, 2 tablet, 1 mobile. On mobile show 3, with the other 3 in a native `<details>` labelled "Read 3 more reviews". No carousel. Muted note underneath: *"Sample reviews for a fictional business."*

1. "Pipe burst under the kitchen sink at 11pm. Dan picked up on the second ring and was here in 40 minutes. Calm, tidy, and the price was exactly what he said on the phone." **Sarah, Purley** · Emergency leak
2. "New combi fitted in a day. Dust sheets everywhere, and they hoovered before they left. The heating has never worked this well." **Imran, Sutton** · Boiler replacement
3. "I manage six rental flats. Dan does all my gas certificates, sends them over the same day and reminds me when they're due. One less thing to chase." **Claire, Croydon** · Landlord certificates
4. "Two other firms told me I needed a new boiler. Dan found a £40 part and had it running in an hour. Honest tradespeople are hard to find." **Tony, Wallington** · Boiler repair
5. "Downstairs toilet blocked with twelve people arriving for lunch. Sorted in half an hour, for the fixed price he quoted. Lifesaver." **Priya, Streatham** · Blocked toilet
6. "The upstairs radiators were always cold. After the powerflush, the whole house heats up in twenty minutes." **Mark & Jo, Beckenham** · Powerflush

### 4.13 FAQ: "Questions people ask before they call"
Intro: *"Straight answers to the things people worry about."* Native `<details>` accordion, single column, `max-w-3xl`, first item open, chevron rotates (not under reduced motion). 4 groups. No links in answers.

**Cost & price**
1. **How much will it cost?** "You'll know before we start. Daytime is £75 for the first hour, including working out what's wrong, then £30 per half hour. Common jobs have fixed prices, listed above."
2. **Is there a call-out charge?** "No. Not in the day, not at night, not on bank holidays."
3. **What if the job takes longer than you said?** "Then it costs you the same. The price we agree is the price you pay."
4. **Will you try to sell me things I don't need?** "No. If a £40 part fixes it, we fit the £40 part. If something else needs attention, we tell you and you decide. No pressure."
5. **Do you charge for parts on top?** "Yes, at the price on the receipt. We show you before we fit anything."

**Trust & safety**
6. **Are you qualified and insured?** "Yes. Gas Safe registered (#000000), WaterSafe approved and fully insured. Ask to see our Gas Safe card when we arrive. Any genuine engineer will show you."
7. **Who will actually turn up?** "Dan, or one of his two engineers. All employed directly by us, never subcontracted."
8. **Will you make a mess?** "We use dust sheets, wear shoe covers and clean up before we leave."

**Speed & availability**
9. **How fast can you get here in an emergency?** "We aim for 60 minutes across South London and North Surrey. If we can't make it, we'll tell you straight away on the call."
10. **Do you really answer at night?** "Yes. A real person answers 24/7. No call centre, no voicemail maze."
11. **What should I do while I wait?** "Turn off the water at the stopcock (usually under the kitchen sink) and switch off electrics near the leak. We'll talk you through it on the phone."

**After the job**
12. **What if it goes wrong again?** "Call us. Our workmanship and the parts we supply are guaranteed for 12 months. We come back and fix it free."
13. **How do I pay?** "Card, bank transfer or cash when the job's done. You get an itemised receipt."
14. **Can I just get a quote without committing?** "Of course. Call, describe the job, and we'll give you a price. No obligation."

**CTA:** "Question we haven't answered?" + CallButton "Ask Dan: 020 7946 0123".

### 4.14 Areas covered: "Local to you"
Town list as non-interactive chips, plus: "Outside these areas? Call anyway. We'll tell you straight."

### 4.15 Final CTA
Dark navy section. Headline *"Still reading? Just call. It's quicker."*, a huge tappable phone number, CallButton "Call Dan now", "Answered 24/7". Reassurance: "Calling is free and takes two minutes. No obligation."

### 4.16 Footer (compact, single-page)
One centred block on `navy-900`, light text at 4.5:1 or better. **Only two links: the phone number and "Back to top" (`#top`).** No Privacy/Terms/About/Contact links, sitemap, social icons or newsletter.
- Wordmark "Mercer Plumbing & Heating"
- Phone number as a large `tel:` link
- "Gas Safe #000000 · Fully insured · 12-month guarantee · Price agreed before we start"
- "Serving Croydon, South London & North Surrey"
- "Back to top"
- "© {year} Mercer Plumbing & Heating · Prototype, fictional business"

Extra bottom padding on mobile so the sticky bar never covers footer content.

---

## PART 5: CONVERSION LAYER

### 5.1 CTA placements

All the same action (`tel:`), same orange CallButton.

| # | Location | Label |
|---|---|---|
| 1 | Header | Number + "Call now" (desktop) / phone icon (mobile) |
| 2 | Hero | "Call Dan now · 020 7946 0123" |
| 3 | After Services & Extra works | "Call Dan" |
| 4 | After Pricing | "Call Dan. It takes two minutes." |
| 5 | Mercer Cover card | "Call Dan to join" |
| 6 | After Before & after | "Call Dan" |
| 7 | After FAQ | "Ask Dan: 020 7946 0123" |
| 8 | Final CTA | Huge number + "Call Dan now" |
| 9 | **Sticky bottom bar (mobile only, <768px)** | "Call Dan now" |

**Sticky bar:** appears once the hero CTA scrolls out of view (IntersectionObserver). Full-width button with a small trust line above it: "Gas Safe · 4.9★ · 12-month guarantee". Respects `env(safe-area-inset-bottom)`. The page gets matching bottom padding. It must never hide a keyboard-focused element.

### 5.2 Objection-handling microcopy

Short muted lines (14–16px, check or shield icon, `aria-hidden`) directly under CTAs, stored in `site.ts` → `objections`.

| Location | Worry | Copy |
|---|---|---|
| Header | "Will anyone answer?" | "Real person, 24/7" |
| Hero | "It'll be expensive" | "No call-out charge · Price agreed before we start" |
| After Services | "I don't know what's wrong" | "Just describe it. We'll work it out together." |
| After Pricing | "Hidden extras" | "The price we agree is the price you pay." |
| Mercer Cover | "Locked-in contract" | "No contract tricks. Dan explains everything on the call." |
| After Before & after | "Will it last?" | "Every job guaranteed for 12 months." |
| Final CTA | "Is it worth calling now?" | "Calling is free and takes two minutes. No obligation." |
| Sticky bar | "Can I trust them?" | "Gas Safe · 4.9★ · 12-month guarantee" |

### 5.3 Buyer concerns checklist

Every concern must be answered **visibly** on the page, not only inside the FAQ.

| Concern | Answered by |
|---|---|
| Cost / hidden fees | Pricing, price guarantee, hero microcopy, FAQ 1–5 |
| Being upsold or ripped off | FAQ 4, Tony's testimonial (the £40 part) |
| Is this person qualified? | Hero trust row, proof strip, FAQ 6, footer |
| A stranger in my home | Meet Dan, FAQ 7, testimonials |
| Speed in an emergency | Hero pill, proof strip, guarantee 3, FAQ 9–11 |
| Mess and disruption | FAQ 8, Imran's testimonial |
| What if it breaks again | 12-month guarantee, FAQ 12 |
| Commitment / pressure | FAQ 14, final CTA microcopy |
| Do they cover my area? | Areas section |

---

## PART 6: DATA, IMAGES, SEO, QUALITY

### 6.1 `src/data/site.ts`

Export one typed object containing: `business` (name, owner, phone display + tel, hours, credentials, promises), `hero`, `proofStats[]`, `services[]`, `extraWorks[]`, `gasSafetyNotice`, `steps[]`, `pricing` (rateCards[], fixedPrices[], smallPrint[]), `guarantees[]` + `guaranteeNote`, `plan` (name, price, features[], note), `about`, `caseStudies[]` (title, town, problem, fix, result, duration, before/after image + alt), `testimonials[]` (quote, name, town, job, rating), `faqs[]` (group, question, answer), `objections`, `areas[]`, `seo`. Every component reads from it.

### 6.2 Images

No real photos yet. Create tasteful placeholders at the correct aspect ratios with explicit dimensions and meaningful `alt` text, so real photos drop in later without layout shift. Below-the-fold images use `loading="lazy"`.
- General: navy-tinted blocks with a small label, e.g. "Photo: Dan with van".
- Before & after: "before" in muted desaturated grey (e.g. "Before: avocado bathroom suite"), "after" in light blue (e.g. "After: walk-in shower"). Each pair is 4:3. Example alt: "Bathroom in Purley before the refit, with a 1990s avocado suite".

### 6.3 SEO & meta

- `<title>`: "Plumber in Croydon: 24/7 Emergency Plumbing | Mercer Plumbing & Heating"
- Meta description, Open Graph tags, `lang="en-GB"`, navy `theme-color`, `robots: noindex` (fictional prototype).
- JSON-LD `Plumber` schema (name, telephone, areaServed, openingHours, aggregateRating) and `FAQPage` from `faqs[]`, all generated from `site.ts`.

### 6.4 Accessibility & performance

- Text contrast 4.5:1 or better (large text 3:1); verify the white CTA text on orange.
- One `<h1>`, sequential headings, skip-to-content link, `header` / `main` / `footer` landmarks.
- Decorative icons `aria-hidden="true"`; meaning never conveyed by colour alone.
- Logical tab order, visible focus everywhere, sticky UI never obscures focus.
- Viewport meta without zoom restrictions; no horizontal scroll at 375px.
- `font-display: swap`; CLS under 0.1.
- Lighthouse 95 or higher in Performance, Accessibility, Best Practices and SEO (SEO is capped by `noindex`, which is expected).

---

## PART 7: DEPLOYMENT & BUILD

### 7.1 GitHub Pages

- Repo: `mercer-plumbing`. **Ask me for my GitHub username before configuring.**
- `astro.config.mjs`: `site: 'https://<username>.github.io'`, `base: '/mercer-plumbing'`.
- **Every internal path must respect `base`** (use `import.meta.env.BASE_URL` for files in `public/`). This is the #1 cause of broken GitHub Pages deploys.
- `.github/workflows/deploy.yml` using `withastro/action` + `actions/deploy-pages`, on push to `main`.
- `README.md`: run locally (`npm install`, `npm run dev`), build, and "Settings → Pages → Source: GitHub Actions".
- **Do not create the remote repo or push.** Give me the exact commands and I'll run them.

### 7.2 Build order

1. Scaffold Astro + Tailwind v4 + Fontsource + Lucide; set up tokens in `global.css`.
2. Write `site.ts` with all the content above.
3. Build `CallButton`, Header, Hero and StickyCallBar. **Verify the call path at 375px before going further.**
4. Build the remaining sections in page order (4.3 → 4.16).
5. Add objection microcopy, SEO/JSON-LD, placeholders and reduced-motion handling.
6. Add the GitHub Pages config and workflow; run `npm run build` and confirm it passes with the `base` path.
7. Run the Definition of Done below, fix anything that fails, then report back.

### 7.3 Definition of done

- [ ] Every CTA is a `tel:+442079460123` link and nothing else on the page asks for a different action
- [ ] Hero CTA above the fold at 375×667; sticky bar works and never covers content or focus
- [ ] No forms, external links, social icons or links to other pages
- [ ] Orange appears only on call buttons
- [ ] Prices, guarantees and promises are identical everywhere (compare against Part 4)
- [ ] Every buyer concern in 5.3 is answered visibly
- [ ] All copy comes from `site.ts`
- [ ] Accessibility checks in 6.4 pass; works with keyboard only and with reduced motion
- [ ] `npm run build` passes with the GitHub Pages `base` path

**Report back with:** screenshots at 375px and 1440px, Lighthouse scores, the git/GitHub commands for me to run, and a list of anything you had to assume.
