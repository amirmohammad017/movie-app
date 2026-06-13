# Movie App (React + OMDb API)

A dynamic movie search application built with **React.js** and **Context API**. This project allows users to search for movies and series in real-time, leveraging the OMDb API for comprehensive data retrieval.

## Live Demo
Check out the live application here: [Movie App on Vercel](https://movie-app-nv79.vercel.app)

## Features

- **Real-time Search:** Instantly fetch movies and series from the OMDb database.
- **Detailed Movie View:** Access in-depth information such as Director, Cast, Box Office, and Ratings using dynamic routing.
- **Global State Management:** Implemented via **React Context API** to persist search results and pagination when navigating between pages.
- **Dynamic Pagination:** Seamlessly browse through multiple pages of search results.
- **Responsive Design:** Fully optimized for all screen sizes (Mobile, Tablet, and Desktop).
- **Error Handling:** Robust handling for "N/A" data fields and API fetch errors.

## Tech Stack

- **Frontend:** React.js (Vite)
- **Routing:** React Router DOM v6
- **State Management:** Context API (Hooks: `useContext`, `useState`)
- **Styling:** Modern CSS3 (Flexbox, Grid, Variables)
- **API:** OMDb (Open Movie Database)

## Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amirmohammad017/movie-app.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd movie-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Project Structure

```text
src/
├── components/        # Reusable UI components (MovieCard, MovieMeta, etc.)
├── context/           # Global state management (MovieContext)
├── pages/             # Main page views (HomePage, MovieDetailsPage)
├── App.jsx            # Main application component & routes
└── main.jsx           # Entry point
```

## Future Roadmap

- [ ] Add a "Favorites" watchlist using LocalStorage or Firebase.
- [ ] Implement Dark Mode / Light Mode toggle.
- [ ] Add advanced filtering (by Year, Genre, or Type).
- [ ] Integrate Framer Motion for smooth page transitions.

## License

This project is open-source and available under the [MIT License](LICENSE).

---
Maintained by [Amir Mohammad](https://github.com/amirmohammad017)
