
import { useEffect, useState } from "react";

function Menu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("YOUR_RENDER_URL/api/menu")
            .then((response) => response.json())
            .then((data) => setMenu(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="page">
            <h1>☕ Cafe Bliss Menu</h1>

            <div className="menu-container">
                {menu.map((item) => (
                    <div className="menu-card" key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.category}</p>
                        <strong>₹{item.price}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;