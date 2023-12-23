import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NoMatch from "./pages/NoMatch";

export default function App() {
    return (
        <BrowserRouter>
            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}