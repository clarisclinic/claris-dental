# Claris Dental Clinic — website

A bilingual (English / Arabic) marketing and case-portfolio site for the clinic.
Plain HTML, CSS and JavaScript — no build step, no dependencies.

## Live preview

Open `index.html` in any browser, or publish with GitHub Pages
(*Settings → Pages → Source: `main` / root*).

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, services, before/after, process, reviews |
| `about.html` | The clinic, its standards and its equipment |
| `services.html` | The four treatment groups in detail, plus FAQ |
| `cases.html` | Filterable before/after case gallery |
| `team.html` | The dentists and clinical team |
| `contact.html` | Appointment form, clinic details, map slot |

## Where to change things

**All text (both languages) — `assets/js/i18n.js`**
Every string on the site lives in one dictionary, `en` and `ar` side by side.
Edit the value, save, refresh. Nothing else needs touching.

**Clinic phone / WhatsApp / address / social — top of `assets/js/main.js`**
```js
const CLARIS = {
  phone: "+20 100 000 0000",
  whatsapp: "201000000000",   // country code + number, no + or spaces
  email: "hello@clarisdental.com",
  address: "...",
  instagram: "...", facebook: "...", mapsUrl: "..."
};
```
These feed the header, footer, contact page, and the floating WhatsApp button.

**Colours, fonts, spacing — the `:root` block at the top of `assets/css/style.css`**
The whole site is themed from that one block. Change `--brand-700` and
`--accent-500` and every button, icon and heading follows.

**The header and footer — `buildChrome()` in `assets/js/main.js`**
They are injected into every page from one place, so the six pages can never
drift apart.

## Photographs

Every image is a labelled placeholder at a fixed path. To use a real photo,
**save it over the placeholder with the same filename** — nothing in the code
changes. See `PHOTOS-NEEDED.md` for the full list.

## Language switching

The `EN / ع` toggle in the header sets `dir="rtl"` on the document and swaps
the font stack. The layout is built on CSS logical properties, so it mirrors
automatically. The chosen language is remembered in the browser.

## Booking form

There is no backend yet. Submitting the form opens WhatsApp with the details
pre-filled. To collect submissions by email instead, point the form at a
service such as Formspree and remove the `preventDefault()` in `initForm()`.
