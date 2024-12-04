# Movies Management App 🎬

Zarządzaj swoją biblioteką filmów z pomocą aplikacji bazującej na API OMDB (http://omdbapi.com/). Wyszukuj filmy, dodawaj do list obejrzanych lub "do obejrzenia", a także oceniaj swoje ulubione produkcje!

## Funkcjonalności 🚀

1. **Wyszukiwarka filmów**:
   - Wprowadzanie tytułu filmu i przeglądanie wyników (okładki, tytuły, rok produkcji).
   - Możliwość oceny filmu w skali 1-5.
   - Dodawanie filmów do list "Obejrzane" lub "Do obejrzenia".

2. **Strona z detalami filmu**:
   - Wyświetlanie szczegółowych informacji o filmie.
   - Możliwość oceny i dodania filmu do ulubionych.
   - Obsługa unikalnych ID w adresie URL.

3. **Listy użytkownika**:
   - Lista filmów "Obejrzane" i "Do obejrzenia".
   - Filtrowanie i sortowanie według tytułu, gatunku, oceny lub roku produkcji.
   - Opcja usuwania filmów z listy.

4. **Obsługa błędów i zapis danych**:
   - Wyświetlanie spinnera podczas ładowania.
   - Informowanie o błędach użytkownika.
   - Zapis danych w localStorage.

## Technologie użyte w projekcie 🛠️

- **React**: Zarządzanie komponentami i stanem aplikacji.
- **Redux**: Centralne zarządzanie stanem, w tym zapisywanie list i ocen.
- **OMDB API**: Zewnętrzne źródło danych o filmach.
- **LocalStorage**: Przechowywanie danych użytkownika.
- **CSS/SCSS**: Stylizacja aplikacji.

## Instalacja i uruchomienie ⚙️

1. **Sklonuj repozytorium**:
   ```bash
   git clone https://github.com/wojciech170/Movies_Management_App.git
   cd Movies_Management_App
   ```

2. **Zainstaluj zależności**:
   ```bash
   npm install
   ```

3. **Uruchom aplikację**:
   ```bash
   npm start
   ```

4. **Uzyskaj klucz API OMDB: Zarejestruj się na OMDB i wprowadź klucz API do pliku .env.**

## Rozwój aplikacji 💡

* Planujesz rozbudowę funkcji o rekomendacje filmów na podstawie reżysera lub gatunku?
* Dodanie opcji edycji ocen?

## Podziękowania 🤝

Dziękuję za odwiedzenie repozytorium! Feedback i sugestie mile widziane.

