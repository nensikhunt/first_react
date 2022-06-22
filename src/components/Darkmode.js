function Darkmode() {
    let light = false;
    let id = () => {
        light = !light;
        if (light === true) {
            document.body.style.backgroundColor = "lightpink";
        } else {
            document.body.style.backgroundColor = "white";
        }
    }
    let buttonStyle = { marginLeft: "48%", padding: "5px", fontSize: "15px", cursor: "pointer" }
    return (
        <>
            <h1 style={{ marginLeft: "45%" }}>DARK MODE</h1>
            <button style={buttonStyle} onClick={() => id()}>DARKMODE</button>
        </>
    );
}

export default Darkmode;