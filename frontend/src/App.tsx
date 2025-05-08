import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import SchedulePage from "./pages/RasporedPage";
import NotFound from "./pages/NotFoundPage";
import Header from "./components/ui/header/Header";
import ModuleSelection from "./components/ui/categories/ModuleSelection";
import LoginPage from "./pages/LoginPage";
import { useUserData } from "./hooks/useUserData";
import Aktivnosti from "./pages/AktivnostiPage";
import OglasiPage from "./pages/OglasiPage";
import NewPostPage from "./pages/NewPostPage";
import MenzaPage from "./pages/MenzaPage";
import TestPage from "./pages/TestPage";

export default function App() {
  const { userData } = useUserData();

  if (!userData) {
    return <LoginPage />;
  }

  return (
    <Router>
      <Header />

      <div className="flex mt-20">
        <ModuleSelection />

        <Routes>
          {/** TODO - code splitting and stuff to make it faster */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/raspored" element={<SchedulePage />} />
          <Route path="/aktivnosti" element={<Aktivnosti />} />
          <Route path="/oglasi" element={<OglasiPage />} />
          <Route path="/oglasi/new" element={<NewPostPage />} />
          <Route path="/menza" element={<MenzaPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
}
