import { useEffect } from "react";

function Home() {

    useEffect(() => {

        console.log("Home component has been loaded.");

        return () => {
            console.log("Home component has been removed.");
        };

    }, []);

    return (
        <div className="page">

            <h1>☕ Welcome to Cafe Bliss</h1>

            <p>
                Delicious food, refreshing beverages
                and a cozy atmosphere.
            </p>

            <p>
                Welcome to our React Single Page Application!
            </p>

        </div>
    );
}

export default Home;