import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const routes = (
    <Route>
      <Route index element={<HomePage />} />
      {/* <Route path="game-start" element={<GameStartPage />} /> */}
    </Route>
  );
  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}

export default App;
