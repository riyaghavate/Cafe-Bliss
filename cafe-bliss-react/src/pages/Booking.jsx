import { useState } from "react";

function Booking() {

    const [message, setMessage] = useState("");

    const handleBooking = (event) => {

        event.preventDefault();

        setMessage(
            "Table booked successfully! ☕"
        );

    };

    return (
        <div className="page">

            <h1>Book a Table</h1>

            <form onSubmit={handleBooking}>

                <input
                    type="text"
                    placeholder="Enter your name"
                    required
                />

                <input
                    type="date"
                    required
                />

                <input
                    type="number"
                    min="1"
                    max="20"
                    placeholder="Number of guests"
                    required
                />

                <button type="submit">
                    Book Table
                </button>

            </form>

            <p className="message">
                {message}
            </p>

        </div>
    );

}

export default Booking;