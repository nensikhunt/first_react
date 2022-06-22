function DateTime() {
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const currentTime = date.toLocaleTimeString();
    return (
        <div className="datetime">
            <h1>Time and Date</h1>
            <h3 style={{ color: "#940458" }}>current Date: {currentDate}</h3>
            <h3>current Time: {currentTime}</h3>
        </div>
    );
}
export default DateTime;