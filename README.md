# Projektuppgift - Backend-baserad webbutveckling, FRONTEND

Detta är en frontendapplikation byggd med HTML, CSS och JavaScript. Applikationen fungerar som den publika webbplatsen för ett fiktivt restaurangföretag (Forno Nero) och konsumerar data från ett REST API byggt i Node.js/Express.

Frontend är uppdelad i flera sidor (multi-page application) och hämtar dynamiskt menydata från backend via Fetch API. Applikationen fungerar som den publika delen i ett headless CMS-system.

---

## Funktion

Frontend erbjuder följande funktionalitet:

- Dynamisk hämtning av meny från REST API
- Filtrering av meny (pizza och dryck)
- Visning av "månadens pizza" från backend-data
- Bokningsformulär (klientside-simulering)
- Kontaktformulär (klientside-simulering)
- Responsiv navigation (hamburger-meny)
- Flera separata undersidor:
  - Hem
  - Meny
  - Om oss
  - Boka bord
  - Kontakt

---

## Dynamisk datahantering

Frontend kommunicerar med backend via Fetch API.

Data används för att:

- Visa alla menyobjekt
- Filtrera efter kategori (pizza / drink)
- Visa specialrätt (monthly_special)

---

## Bokning och kontakt

Applikationen innehåller formulär för:

### Bokning
- Namn
- Telefonnummer
- E-post
- Datum och tid
- Antal gäster
- Övriga önskemål

### Kontakt
- Namn
- E-post
- Meddelande

Observera att dessa formulär är **klientside-simuleringar** och skickar inte data till backend i denna version. Istället visas en bekräftelse dynamiskt i DOM.

---

## UI och design

- Modern, minimalistisk restaurangdesign
- Inspirerad av premium napolitansk pizzeria
- Responsiv layout för mobil, surfplatta och desktop
- Fixed navigation och footer
- Hero-sektion med video bakgrund
- Google Fonts:
  - Inter
  - Playfair Display

---

## Responsivitet

Frontend är byggd med mobile-first principer och fungerar på:

- Mobil
- Surfplatta
- Desktop

Funktioner inkluderar:

- Hamburgermeny för mobil
- Flexbox och CSS Grid
- Anpassade media queries

---

## Tekniker

- HTML5
- CSS3 (inkl. Flexbox och Grid)
- JavaScript (ES6+)
- Fetch API
- Google Fonts
- Responsive Web Design

---

## Projektstruktur

- index.html – startsida
- menu.html – meny (dynamisk från API)
- booking.html – bokning
- contact.html – kontakt
- about.html – om företaget
- script.js – all frontend-logik
- style.css – all styling

---

## Koppling till backend

Frontend hämtar data från följande API:


http://localhost:5000/api/menu


Backend ansvarar för:
- menydata
- autentisering
- datalagring

Frontend ansvarar för:
- presentation
- interaktivitet
- användarupplevelse

---

## Viktig notering

För att frontend ska fungera korrekt måste backend vara igång på:


http://localhost:5000
