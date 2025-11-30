import ExperiencesPage from "./pages/ExperiencesPage";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProjectsPageMobile from "./pages/ProjectsPageMobile";
import ProjectsPageDesktop from "./pages/ProjectsPageDesktop";
import YouTubePage from "./pages/YouTubePage";
import useResponsive from "./hooks/useResponsive";

function App() {
  const { isMobile } = useResponsive();
  
  const routes = (
    <Route>
      <Route index element={<HomePage />} />
      <Route path="experiences" element={<ExperiencesPage />} />
      <Route path="projects" element={isMobile ? <ProjectsPageMobile /> : <ProjectsPageDesktop />} />
      <Route path="youtube" element={<YouTubePage />} />
    </Route>
  );
  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}

export default App;
