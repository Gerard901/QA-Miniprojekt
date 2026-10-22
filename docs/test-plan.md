# Plan testów SauceDemo

## Cel

Sprawdzenie podstawowej ścieżki zakupu w aplikacji:
od logowania do zakończenia zamówienia.

## Testowana aplikacja

https://www.saucedemo.com/

## Środowisko

- System operacyjny: Windows 11, wersja 25H2, kompilacja 26200.9457.
- Przeglądarka i wersja: Google Chrome 155.0.8059.40 (Oficjalna wersja), 64-bitowa.
- Konto: standard_user

## Zakres

- Logowanie.
- Lista i szczegóły produktów.
- Dodawanie oraz usuwanie produktów z koszyka.
- Formularz danych zamówienia.
- Podsumowanie i zakończenie zamówienia.
- Zachowanie checkout po 15 minutach bezczynności (TC-006).

## Poza zakresem

- Testy wydajności i bezpieczeństwa.
- Rzeczywiste płatności.
- Zgodność z innymi przeglądarkami i urządzeniami.

## Podstawa oczekiwanych wyników

Komunikaty i etykiety w aplikacji oraz założenia zapisane
w przypadkach testowych. Brak osobnej specyfikacji wymagań.
Niejasne zachowania zapisujemy jako pytania do wyjaśnienia.

## Dokumentacja wykonania

- [Przypadki testowe i wyniki wykonania](test-cases.md).
- [Obserwacje, pytania i historia badania](exploratory-notes.md).

