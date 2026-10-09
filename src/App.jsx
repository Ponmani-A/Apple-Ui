import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Mac from "./pages/Mac/Mac";
import Iphone from "./pages/Iphone/Iphone";
import Airpods from "./pages/Airpods/Airpods";
import Books from "./pages/Books/Books";

function App() {
  return (
    <div className="bg-white font-sans text-[#1d1d1f] antialiased">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/airpods" element={<Airpods />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
