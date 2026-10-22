# Notatki z testowania eksploracyjnego SauceDemo

## Pierwsza sesja

- Data: 20.10.2026
- Środowisko: opisane w test-plan.md
- Konto: standard_user

### Obserwacje

1. Logowanie zakończyło się powodzeniem.

2. W zakładce All items można było przeglądać listę produktów
   i otwierać ich szczegóły.

3. W zakładce Dynamic Catalog kliknięcie produktu nie otwierało
   jego szczegółów. Nie znalazłem możliwości dodania produktów
   z tej zakładki do koszyka.

4. Dla sprawdzonych produktów można było dodać do koszyka
   jedną sztukę danego produktu. Nie znalazłem możliwości
   dodania kolejnej sztuki ani zmiany ilości w koszyku.

5. Usuwanie produktów z koszyka działało zarówno z poziomu
   koszyka, jak i listy All items.

6. Przy pierwszym kliknięciu Checkout w koszyku nastąpiło
   przekierowanie do ekranu logowania z komunikatem:
   "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in."

7. Po ponownym zalogowaniu produkty pozostały w koszyku.
   Kolejne kliknięcie Checkout otworzyło formularz
   z polami First Name, Last Name i Zip/Postal Code.

8. Po uzupełnieniu formularza udało się przejść
   do podsumowania i zakończyć zamówienie.
   Dostępna była możliwość wygenerowania pliku PDF
   ze szczegółami zamówienia.

### Pytania do sprawdzenia

1. Czy przekierowanie do logowania po kliknięciu Checkout
   można powtórzyć? W jakich warunkach występuje?

2. Czy Dynamic Catalog powinien umożliwiać otwieranie
   szczegółów produktów i dodawanie ich do koszyka?
   Brak specyfikacji potwierdzającej oczekiwane działanie.

3. Czy ograniczenie do jednej sztuki danego produktu
   jest zamierzone?
   Brak specyfikacji potwierdzającej oczekiwane działanie.

## Ponowne sprawdzenie checkout

### Status

Wykonane.

### Warunki

- Data: 20.10.2026
- Środowisko: opisane w test-plan.md
- Tryb przeglądarki: incognito
- Konto: standard_user
- Produkt: Sauce Labs Backpack

### Kroki

1. Otwórz https://www.saucedemo.com/.
2. Zaloguj się jako standard_user.
3. Dodaj wybrany produkt do koszyka.
4. Otwórz koszyk.
5. Kliknij Checkout.
6. Zapisz rezultat i adres strony po kliknięciu.

### Oczekiwany wynik

Otwarcie formularza danych zamówienia.

Podstawa oczekiwania: użytkownik zalogował się podczas
tej próby i nie wykonał wylogowania.

### Wyniki

| Próba | Rzeczywisty wynik | Adres strony po kliknięciu Checkout |
| --- | --- | --- |
| 1 | Otwarto formularz danych zamówienia | https://www.saucedemo.com/checkout-step-one.html |
| 2 | Otwarto formularz danych zamówienia | https://www.saucedemo.com/checkout-step-one.html |
| 3 | Otwarto formularz danych zamówienia | https://www.saucedemo.com/checkout-step-one.html |

### Częstotliwość problemu

problem wystąpił w 0 z 3 prób.

### Dowody

- [Zrzut z próby 1](screenshots/checkout-attempt-1.png)
- [Zrzut z próby 2](screenshots/checkout-attempt-2.png)
- [Zrzut z próby 3](screenshots/checkout-attempt-3.png)

### Wniosek

Brak powtórzenia błędu przy aktualnych warunkach.
Potrzeba szukania innych warunków, żeby powtórzyć błąd i znaleźć przyczyne. 

## Dalsze badanie przekierowania do logowania — 21.10.2026

### Cel

Sprawdzenie związku między przerwą w aktywności
a przekierowaniem do logowania podczas checkout.

### Warunki i przebieg

Środowisko: zgodnie z test-plan.md.
Konto: standard_user.

Każdą próbę rozpoczęto od nowego zalogowania i pustego koszyka.
Dodano po jednej sztuce Sauce Labs Backpack i Sauce Labs Bike Light,
otwarto koszyk, a następnie kliknięto Checkout po przerwie
wskazanej w tabeli.

### Wyniki

| Próba | Tryb Chrome | Przerwa | Rezultat |
| --- | --- | --- | --- |
| A | Zwykły | Brak celowej przerwy | Otwarto formularz zamówienia. |
| B | Zwykły | 15 minut | Przekierowano do logowania. |
| C | Incognito — nowa sesja | 15 minut | Przekierowano do logowania. |

Każdy wariant wykonano raz. W próbach B i C wyświetlono komunikat:

"Epic sadface: You can only access '/checkout-step-one.html' when you are logged in."

### Dowód

[Zrzut komunikatu](screenshots/checkout-after-15min.png)

Jeden zrzut ilustruje komunikat zaobserwowany w próbach B i C.

### Wniosek

Zachowanie odtworzono po 15 minutach bezczynności w obu trybach.
Próba bez przerwy zakończyła się poprawnie.

Nie ustalono przyczyny ani dokładnego limitu czasu.
Do wyjaśnienia pozostaje oczekiwany czas ważności sesji
oraz sposób informowania użytkownika o utracie dostępu.
