# Mini projekt QA — SauceDemo

Mini projekt przygotowany w ramach nauki testowania
oprogramowania.

Obejmuje pięć podstawowych przypadków manualnych (TC-001–TC-005),
przypadek checkout po bezczynności, notatki eksploracyjne
oraz pięć testów automatycznych: trzy UI i dwa API.

Testy UI dotyczą SauceDemo. Testy API wykorzystują osobną
usługę demonstracyjną DummyJSON, niezwiązaną z backendem SauceDemo.

Testowana aplikacja: https://www.saucedemo.com/

## Zakres projektu

- Logowanie poprawnymi danymi.
- Odrzucenie logowania z niepoprawnym hasłem.
- Walidacja pustego pola hasła.
- Dodanie produktu do koszyka.
- Usunięcie produktu z koszyka.
- Eksploracyjne sprawdzenie ścieżki zakupu.
- Zachowanie checkout po 15 minutach bezczynności
- Pobranie istniejącego produktu z API DummyJSON.
- Obsługa żądania nieistniejącego produktu w API DummyJSON.

## Narzędzia

- Playwright Test.
- JavaScript.
- Node.js i npm.
- Visual Studio Code.
- Chrome do testów ręcznych.
- Chromium do testów automatycznych.

## Dokumentacja

- [Plan testów](docs/test-plan.md)
- [Notatki z testowania eksploracyjnego](docs/exploratory-notes.md)
- [Przypadki testowe i wyniki wykonania](docs/test-cases.md)

Zrzuty ekranu znajdują się w folderze docs/screenshots.

## Testy automatyczne

| Przypadek | Sprawdzane zachowanie | Plik |
| --- | --- | --- |
| TC-001 | Poprawne logowanie, adres strony, nagłówek i widoczność produktu | tests/login.spec.js |
| TC-002 | Odrzucenie błędnego hasła i pozostanie na stronie logowania | tests/login.spec.js |
| TC-004 | Dodanie plecaka, aktualizacja licznika i zawartość koszyka | tests/cart.spec.js |
| API-001 | Status 200, format JSON, identyfikator, nazwa i cena produktu | tests/products-api.spec.js |
| API-002 | Status 404, format JSON i komunikat dla nieistniejącego produktu | tests/products-api.spec.js |

Testy UI korzystają z osobnych sesji przeglądarki.
Testy API wysyłają żądania bezpośrednio do DummyJSON,
bez otwierania przeglądarki.

## Wymagania

- Node.js w wersji zgodnej z zainstalowaną wersją Playwright.
- npm.
- Dostęp do internetu i testowanej aplikacji.

Projekt przygotowywano z Node.js v24.22.0
i npm 11.19.1.

## Środowisko przygotowania projektu

- System operacyjny: Windows 11, wersja 25H2, kompilacja 26200.9457.
- Przeglądarka i wersja: Google Chrome 155.0.8059.40 (Oficjalna wersja), 64-bitowa.
- Testy ręczne: tryb zwykły i incognito.
- Testy automatyczne: Chromium dostarczany przez Playwright.
- Playwright Test: 1.64.1, zgodnie z package-lock.json.
- Node.js: v24.22.0; npm: 11.19.1.
- Git: 2.42.0.windows.2.

## Instalacja

Po pobraniu repozytorium otwórz terminal w jego głównym folderze.

Zainstaluj zależności zgodnie z package-lock.json:

```bash
npm ci
```

Zainstaluj Chromium dla Playwright:

```bash
npx playwright install chromium
```

## Uruchomienie testów

Uruchom cały zestaw: trzy testy UI i dwa testy API:

```bash
npx playwright test tests/login.spec.js tests/cart.spec.js tests/products-api.spec.js --project=chromium
```

Uruchom tylko testy UI z widocznym oknem przeglądarki:

```bash
npx playwright test tests/login.spec.js tests/cart.spec.js --project=chromium --headed
```

Uruchom tylko testy API:

```bash
npx playwright test tests/products-api.spec.js --project=chromium
```

Otwórz raport po wykonaniu testów:

```bash
npx playwright show-report
```

W PowerShell, jeśli uruchamianie npm.ps1 lub npx.ps1
jest zablokowane, użyj odpowiednio npm.cmd i npx.cmd
zamiast npm i npx.

## Wynik ostatniego uruchomienia

- Data: 22.10.2026.
- Zakres: trzy testy UI i dwa testy API.
- Konfiguracja: chromium.
- Wynik: 5 passed (4.5s).
- Wykonanie lokalne w opisanym środowisku.

## Obserwacje z testowania

Podczas eksploracji zaobserwowano przekierowanie do logowania
po kliknięciu Checkout. Trzy krótkie próby w incognito
nie odtworzyły problemu. Dalsze badanie dało następujące wyniki:

| Próba | Tryb Chrome | Przerwa przed Checkout | Wynik |
| --- | --- | --- | --- |
| A | Zwykły | Brak celowej przerwy | Otwarto formularz zamówienia. |
| B | Zwykły | 15 minut | Przekierowano do logowania. |
| C | Incognito — nowa sesja | 15 minut | Przekierowano do logowania. |

Każdy wariant wykonano raz. 
Nie ustalono przyczyny ani dokładnego limitu czasu.

[Historia badania i dowód](docs/exploratory-notes.md).

## Ćwiczenie analizy niepowodzenia testu

W teście koszyka celowo zmieniono oczekiwany licznik z 1 na 2.
Test zakończył się niepowodzeniem, wskazując wartość oczekiwaną,
rzeczywistą i linię nieudanej asercji.

Ćwiczenie pokazało, że niepowodzenie testu może wynikać
z błędnego oczekiwania w kodzie, a nie z błędu aplikacji.

## Ograniczenia

- Automatyzacja UI obejmuje trzy scenariusze w Chromium.
- Testy API obejmują dwa żądania GET do demonstracyjnego DummyJSON.
- Nie testowano API aplikacji SauceDemo.
- Brak osobnej specyfikacji wymagań — podstawę oczekiwań
  opisano w dokumentacji.
- Testy zależą od dostępności zewnętrznej aplikacji demonstracyjnej.
- Projekt nie stanowi pełnej oceny jakości aplikacji.
- Projekt nie obejmuje testów wydajności ani bezpieczeństwa.