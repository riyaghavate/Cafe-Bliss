function Menu() {
    const menu = [
        {
            name: "Cappuccino",
            price: 150,
            category: "Beverage"
        },
        {
            name: "Margherita Pizza",
            price: 250,
            category: "Food"
        },
        {
            name: "Veg Burger",
            price: 180,
            category: "Food"
        },
        {
            name: "Chocolate Cake",
            price: 120,
            category: "Dessert"
        }
    ];

    return (
        <div className="page">
            <h1>☕ Cafe Bliss Menu</h1>

            <div className="menu-container">
                {menu.map((item, index) => (
                    <div className="menu-card" key={index}>
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
