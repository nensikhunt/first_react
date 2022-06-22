function Cardmessage(props) {
    return (
        <>
            <div>
                <h1><u>author detail:-</u></h1>
                <h4>name:</h4>{props.author}
                <h4>profession:</h4>{props.profession}
                <h4>gender:</h4>{props.gender}
            </div>
        </>
    );
}

export default Cardmessage;