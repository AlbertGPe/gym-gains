import { Route, Routes } from "react-router-dom";
import RoutinesList from "./components/routines/routines-list/RoutinesList";
import RoutinePage from "./pages/RoutinePage";
import RoutinesPage from "./pages/RoutinesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/routines" element={<RoutinesPage />} />
        <Route path="/routines/:id" element={<RoutinePage />} />
      </Routes>
    </>
  );
}

export default App;
