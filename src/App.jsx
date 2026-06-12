import MovieDetailsPage from "./components/movieDetailsPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
