# Formularz rekrutacyjny ALK

Interaktywny prototyp systemu rekrutacyjnego Akademii Leona Koźmińskiego dla
studiów **I i II stopnia**, w wersji **desktopowej** i **mobilnej**. Zbudowany
na **ALK Design System**.

To statyczna aplikacja HTML — nie wymaga kroku budowania. Pliki `.dc.html`
uruchamiają się bezpośrednio w przeglądarce (runtime `support.js` + komponenty
z `_ds/`).

## Struktura

| Plik | Opis |
| --- | --- |
| `index.html` | Strona wejściowa z odnośnikami do wszystkich widoków |
| `FormPrototype.dc.html` | Formularz — studia I stopnia (desktop) |
| `Formularz mobilny.dc.html` | Formularz — studia I stopnia (mobile) |
| `Formularz II stopnia.dc.html` | Formularz — studia II stopnia (desktop) |
| `Formularz mobilny II stopnia.dc.html` | Formularz — studia II stopnia (mobile) |
| `StepContent*.dc.html` | Zawartość kroków (komponenty potomne każdego wariantu) |
| `Dokumentacja - formularz rekrutacyjny.dc.html` | Dokumentacja techniczna |
| `_ds/` | ALK Design System (tokeny + bundle komponentów) |
| `support.js` | Runtime Design Components |

## Uruchomienie lokalne

Wymagany zwykły serwer statyczny (otwarcie przez `file://` nie zadziała z
powodu ładowania modułów). Przykłady:

```bash
npx serve .
# lub
python3 -m http.server 8000
```

Następnie otwórz `http://localhost:8000/`.

## Wdrożenie na Vercel

Projekt jest statyczny — bez frameworka i bez kroku budowania.

1. Wypchnij repozytorium na GitHub.
2. W panelu Vercel: **Add New → Project** i wybierz to repo.
3. Framework Preset: **Other**. Build Command: *(puste)*. Output Directory: `./`.
4. Deploy.

Konfiguracja `vercel.json` ustawia serwowanie statyczne i nagłówki
bezpieczeństwa. Alternatywnie z CLI:

```bash
npm i -g vercel
vercel
```

## Dostępność (WCAG 2.2)

Komponenty formularzy i design systemu zawierają: powiązane etykiety pól,
obsługę klawiatury dla list rozwijanych (combobox), semantykę modali
(`role="dialog"`, Esc, przenoszenie fokusu), nazwy dostępne przycisków
ikonowych oraz powiększone cele dotykowe.

## Uwagi

- Podgląd wgranego zdjęcia do dokumentów działa przez `URL.createObjectURL`
  i nie jest utrwalany między sesjami (prototyp).
- Brak warstwy backendu — walidacja, płatności i zapis danych są symulowane.
