import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LayoutWrapper from "./layout/layout-wrapper";
import HomePage from "./pages/home";
import WorkInProgress from "./pages/wip";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="blog" element={<h1>Blog</h1>} />
          <Route path="map" element={<h1>Site Map</h1>} />
          <Route path="*" element={<WorkInProgress />} />
        </Route>
      </Routes>
      <HomePage />
    </Router>
  );
}

export default App;
