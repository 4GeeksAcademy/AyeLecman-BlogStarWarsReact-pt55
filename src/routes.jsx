import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { ShowAll } from "./pages/ShowAll";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >   
        <Route path= "/" element={<Home />} />
        <Route path="/single/:type/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/show-all/:type" element={<ShowAll />} />
      </Route>
    )
);