import ExperiencesPage from "./pages/ExperiencesPage";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import YouTubePage from "./pages/YouTubePage";

function App() {
  const routes = (
    <Route>
      <Route index element={<HomePage />} />
      <Route path="experiences" element={<ExperiencesPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="youtube" element={<YouTubePage />} />
    </Route>
  );
  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}

export default App;
