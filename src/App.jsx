import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { ColorModeScript } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <ColorModeScript />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
