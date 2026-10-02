import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Booking from "./pages/Booking";

function App() {

    return (

        <BrowserRouter>

            <nav className="navbar">

                <h2>☕ Cafe Bliss</h2>

                <div>

                    <Link to="/">Home</Link>

                    <Link to="/menu">Menu</Link>

                    <Link to="/about">About</Link>

                    <Link to="/booking">Book a Table</Link>

                </div>

            </nav>


            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/menu"
                    element={<Menu />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/booking"
                    element={<Booking />}
                />

            </Routes>


            <footer>

                <p>
                    © 2026 Cafe Bliss
                </p>

            </footer>

        </BrowserRouter>

    );

}

export default App;