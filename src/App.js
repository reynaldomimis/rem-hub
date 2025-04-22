import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiscoverSection from "./components/DiscoverSection";
import SwiperCard from "./components/SwiperCard";
import Home from "./pages/Home";
import { injector, books, movies, software } from "./data/data";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/injector" element={<SwiperCard data={injector} />} />
          <Route path="/books" element={<SwiperCard data={books} />} />
          <Route path="/movies" element={<SwiperCard data={movies} />} />
          <Route path="/software" element={<SwiperCard data={software} />} />
          {/* Add more routes as needed */}
        </Routes>
        <DiscoverSection />
        <Footer />
      </div>
    </Router>
  );
}
