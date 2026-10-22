# Przypadki testowe SauceDemo

Środowisko testów ręcznych opisano w test-plan.md.

## TC-001 — Logowanie poprawnymi danymi

### Cel

Sprawdzenie, czy użytkownik z poprawnymi danymi logowania
może uzyskać dostęp do listy produktów.

### Warunki wstępne

- Aplikacja jest dostępna.
- Użytkownik jest niezalogowany.
- Test rozpoczyna się w nowej sesji incognito.

### Dane testowe

- Adres: https://www.saucedemo.com/
- Login: standard_user
- Hasło: secret_sauce

### Kroki i oczekiwane wyniki

| Krok | Działanie | Oczekiwany wynik |
| --- | --- | --- |
| 1 | Otwórz adres aplikacji. | Wyświetla się formularz logowania. |
| 2 | Wpisz login w polu Username. | Pole zawiera wpisany login. |
| 3 | Wpisz hasło w polu Password. | Hasło jest wprowadzone i zamaskowane. |
| 4 | Kliknij Login. | Otwiera się strona /inventory.html. Widoczny jest nagłówek Products i lista produktów. |

### Wykonanie

- Data: 20.10.2026
- Status: PASS
- Rzeczywisty wynik: Po kliknięciu Login otwarto
  https://www.saucedemo.com/inventory.html.
  Widoczny był nagłówek Products i lista produktów.
- Dowody: [Widok po zalogowaniu](screenshots/TC-001-login.png)

## TC-002 — Logowanie z niepoprawnym hasłem

### Cel

Sprawdzenie, czy użytkownik z niepoprawnym hasłem
może uzyskać dostęp do listy produktów.

### Warunki wstępne

- Aplikacja jest dostępna.
- Użytkownik jest niezalogowany.
- Test rozpoczyna się w nowej sesji incognito.

### Dane testowe

- Adres: https://www.saucedemo.com/
- Login: standard_user
- Hasło: niepoprawne

### Kroki i oczekiwane wyniki

| Krok | Działanie | Oczekiwany wynik |
| --- | --- | --- |
| 1 | Otwórz adres aplikacji. | Wyświetla się formularz logowania. |
| 2 | Wpisz login w polu Username. | Pole zawiera wpisany login. |
| 3 | Wpisz hasło w polu Password. | Hasło jest wprowadzone i zamaskowane. |
| 4 | Kliknij Login. | Zostajemy na stronie logowania. Widoczny jest komunikat błędu z napisem "Epic sadface: Username and password do not match any user in this service". |

### Wykonanie

- Data: 20.10.2026
- Status: PASS
- Rzeczywisty wynik: Po kliknięciu Login aplikacja pozostała
  na stronie logowania. Wyświetlił się komunikat:
  "Epic sadface: Username and password do not match any user in this service".
  Lista produktów nie została wyświetlona.
- Dowody: [Komunikat po odrzuconym logowaniu](screenshots/TC-002-login-wrong-passw.png)

## TC-003 — Logowanie z pustym hasłem

### Cel

Sprawdzenie, czy aplikacja odrzuca próbę logowania
bez podania hasła i informuje o wymaganym polu.

### Warunki wstępne

- Aplikacja jest dostępna.
- Użytkownik jest niezalogowany.
- Test rozpoczyna się w nowej sesji incognito.

### Dane testowe

- Adres: https://www.saucedemo.com/
- Login: standard_user
- Hasło: puste pole

### Kroki i oczekiwane wyniki

| Krok | Działanie | Oczekiwany wynik |
| --- | --- | --- |
| 1 | Otwórz adres aplikacji. | Wyświetla się formularz logowania. |
| 2 | Wpisz standard_user w polu Username. | Pole zawiera wpisany login. |
| 3 | Pozostaw pole Password puste. | Pole nie zawiera żadnych znaków. |
| 4 | Kliknij Login. | Aplikacja pozostaje na stronie logowania i wyświetla komunikat o wymaganym haśle. Lista produktów nie jest wyświetlana. |

### Wykonanie

- Data: 20.10.2026
- Status: PASS
- Rzeczywisty wynik: Aplikacja pozostała na stronie logowania i wyświetliła komunikat: "Epic sadface: Password is required". Lista produktów nie jest wyświetlana.
- Dowody: [Komunikat po odrzuconym logowaniu](screenshots/TC-003-login-empty-passw.png)

## TC-004 — Dodanie produktu do pustego koszyka

### Cel

Sprawdzenie, czy dodanie produktu z listy powoduje
umieszczenie go w koszyku i aktualizację licznika koszyka.

### Warunki wstępne

- Aplikacja jest dostępna.
- Użytkownik jest zalogowany jako standard_user.
- Wyświetlona jest lista produktów.
- Koszyk jest pusty, a przy jego ikonie nie ma licznika.

### Dane testowe

- Adres: https://www.saucedemo.com/
- Produkt: Sauce Labs Backpack
- Liczba sztuk: 1

### Kroki i oczekiwane wyniki

| Krok | Działanie | Oczekiwany wynik |
| --- | --- | --- |
| 1 | Znajdź Sauce Labs Backpack na liście produktów. | Widoczny jest produkt i przycisk Add to cart. |
| 2 | Kliknij Add to cart przy tym produkcie. | Przycisk zmienia się na Remove. Przy ikonie koszyka pojawia się licznik 1. |
| 3 | Kliknij ikonę koszyka. | Otwiera się strona koszyka. Widoczny jest Sauce Labs Backpack z ilością 1. W koszyku nie ma innych produktów. |

### Wykonanie

- Data: 20.10.2026
- Status: PASS
- Rzeczywisty wynik: Przycisk zmienił się na Remove. Przy ikonie koszyka pojawił się licznik 1. W koszyku widoczny jest Sauce Labs Backpack z ilością 1. W koszyku nie było innych produktów.
- Dowody: [Stan koszyka po dodaniu Sauce Labs Backpack](screenshots/TC-004-adding-item-to-cart.png)

## TC-005 — Usunięcie produktu z koszyka

### Cel

Sprawdzenie, czy usunięcie jedynego produktu powoduje
opróżnienie koszyka i zniknięcie licznika przy jego ikonie.

### Warunki wstępne

- Aplikacja jest dostępna.
- Użytkownik jest zalogowany jako standard_user.
- Wyświetlona jest strona koszyka.
- Koszyk zawiera wyłącznie jedną sztukę Sauce Labs Backpack.
- Przy ikonie koszyka widoczny jest licznik 1.

### Dane testowe

- Adres: https://www.saucedemo.com/
- Produkt: Sauce Labs Backpack

### Kroki i oczekiwane wyniki

| Krok | Działanie | Oczekiwany wynik |
| --- | --- | --- |
| 1 | Kliknij Remove przy Sauce Labs Backpack w koszyku. | Produkt znika z koszyka. Koszyk nie zawiera żadnych produktów. Licznik przy ikonie koszyka znika. |
| 2 | Kliknij Continue Shopping. | Wyświetla się lista produktów. Przy Sauce Labs Backpack widoczny jest przycisk Add to cart. Licznik koszyka nadal nie jest widoczny. |

### Wykonanie

- Data: 20.10.2026
- Status: PASS
- Rzeczywisty wynik: Produkt zniknął z koszyka. Koszyk nie zawierał żadnych produktów. Licznik przy ikonie koszyka zniknął. Po naciśnięciu Continue Shopping wyświetliła się lista produktów. Przy Sauce Labs Backpack widoczny był przycisk Add to cart. Licznik koszyka pozostał niewidoczny.
- Dowody: [Stan koszyka po usunięciu Sauce Labs Backpack](screenshots/TC-005-removing-item-from-cart.png) 
