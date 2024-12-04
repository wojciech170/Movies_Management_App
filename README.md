# Movies Management App 🎬

Manage your personal movie library with this application powered by the OMDB API (http://omdbapi.com/). Search for movies, add them to your watched or "to-watch" lists, and rate your favorite productions!

## Project Status 🚧

This project is in the early stages of development. Work is ongoing to establish the basic structure and implement initial features. Stay tuned for updates in the repository!

## Features 🚀

1. **Movie Search**:
   - Enter a movie title and browse results (poster, title, production year).
   - Rate movies on a scale from 1 to 5.
   - Add movies to "Watched" or "To Watch" lists.

2. **Movie Details Page**:
   - Display detailed information about a selected movie.
   - Rate and mark movies as favorites.
   - Support for unique IDs in the URL.

3. **User Lists**:
   - View lists of "Watched" and "To Watch" movies.
   - Filter and sort movies by title, genre, rating, or production year.
   - Remove movies from lists.

4. **Error Handling and Data Persistence**:
   - Display a spinner while loading.
   - Inform users of errors with relevant messages.
   - Save data in localStorage.

## Technologies Used 🛠️

- **React**: Component-based architecture and state management.
- **Redux**: Centralized state management for lists and ratings.
- **OMDB API**: External data source for movie information.
- **LocalStorage**: Storing user data locally.
- **CSS/SCSS**: Styling the application.

## Installation and Setup ⚙️

1. **Clone the repository**:
   ```bash
   git clone https://github.com/wojciech170/Movies_Management_App.git
   cd Movies_Management_App

   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   npm start
   ```

4. **Obtain an OMDB API key**:
   
   Register on OMDB to generate an API key, then add it to the .env file.

## Future Development 💡

* Implement movie recommendations based on director or genre.
* Add the ability to edit movie ratings.


## Acknowledgments 🤝

Thank you for visiting the repository! Feedback and suggestions are highly appreciated.

