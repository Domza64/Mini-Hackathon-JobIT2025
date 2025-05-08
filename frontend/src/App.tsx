import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import ModuleSelection from "./components/ui/categories/ModuleSelection";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [user, setUser] = useState<null | string>(localStorage.getItem("user"));

  if (!user) {
    return <LoginPage />;
  }

  return (
    <Router>
      <Header />

      <div className="flex">
        <ModuleSelection />

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
