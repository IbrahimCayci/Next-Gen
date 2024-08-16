import React, {useState} from "react";
import "./Payment.css";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

const Payment = () => {

    const [showDateTimePicker, setShowDateTimePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("10:00");

    const handleBuyNowClick = () => {
        setShowDateTimePicker(true);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    const handleConfirm = () => {
        setShowDateTimePicker(false);
        alert(`You have selected: ${selectedDate.toLocaleDateString()} at ${selectedTime}`);
        // Proceed with the payment process
    };

    return (
        <div className="payment-container">
            <h3>Purchase This Mentorship</h3>
            <h3>$300</h3>
            <div className="payment-options">
                <button className="payment-button buy-now">Buy Now</button>
                <button className="payment-button add-to-cart">Add to Cart</button>
            </div>

            {showDateTimePicker && <div className="payment-overlay" />}

            {showDateTimePicker && (
                <div className="date-time-picker-modal">
                    <h4>Select Date and Time</h4>
                    <DatePicker selected={selectedDate} onChange={handleDateChange} />
                    <TimePicker onChange={handleTimeChange} value={selectedTime} />
                    <button className="confirm-button" onClick={handleConfirm}>
                        Confirm
                    </button>
                </div>
            )}
        </div>
    );
}

export default Payment;