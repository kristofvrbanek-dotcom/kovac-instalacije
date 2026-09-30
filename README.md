# Kovač inštalacije: prototip

Enostranska spletna stran (samo front end) za **izmišljenega** slovenskega vodovodarja. En sam cilj: telefonski klic.

Zgrajeno z Astro, Tailwind CSS v4, ikonami Lucide in lokalno gostovanimi pisavami.

## Zagon na računalniku

```bash
npm install
npm run dev
```

Odprite http://localhost:4321/

## Urejanje vsebine

Vsa besedila, mnenja in vprašanja so v `src/data/site.ts`. Komponente jih samo berejo.
Fotografije so v `src/assets/`.

## Gradnja

```bash
npm run build
```

Rezultat je v mapi `dist/`.

## Objava na GitHub Pages

1. Objavite mapo kot **javen** repozitorij na GitHubu (npr. z GitHub Desktop: *Add Local Repository → Publish repository*, brez kljukice *Keep this code private*).
2. Na GitHubu v repozitoriju: **Settings → Pages → Source: GitHub Actions**.
3. Vsaka nova različica na veji `main` se samodejno objavi prek `.github/workflows/deploy.yml`.

Uporabniško ime in ime repozitorija se nastavita samodejno. Stran bo na naslovu
`https://<uporabniško-ime>.github.io/<ime-repozitorija>/`.

## Opombe

- Podjetje, oseba, telefonska številka, kvalifikacije in mnenja so izmišljeni. Fotografije so ustvarjene z umetno inteligenco.
- Stran ima oznako `noindex`, zato je iskalniki ne prikazujejo.
- Pred objavo za pravo stranko zamenjajte telefonsko številko, fotografije in mnenja s pravimi.
