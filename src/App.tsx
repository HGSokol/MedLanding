import {
  createContext,
  Dispatch,
  lazy,
  SetStateAction,
  Suspense,
  useState,
} from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const Services = lazy(() => import("./Pages/Services"));
const Doctors = lazy(() => import("./Pages/Doctors"));
const Doctor = lazy(() => import("./Pages/Doctor"));
const Clinic = lazy(() => import("./Pages/Clinic"));
const Contacts = lazy(() => import("./Pages/Contacts"));
const NotFound = lazy(() => import("./Pages/NotFound"));

type ProfileContext = {
  activePopup: boolean;
  setActivePopup: Dispatch<SetStateAction<boolean>>;
};

const AppData: ProfileContext = {
  activePopup: false,
  setActivePopup: () => {},
};

export const AppContext = createContext<ProfileContext>(AppData);

export default function App() {
  const [activePopup, setActivePopup] = useState(false);

  return (
    <AppContext.Provider
      value={{
        activePopup,
        setActivePopup,
      }}
    >
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:name" element={<Doctor />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AppContext.Provider>
  );
}
