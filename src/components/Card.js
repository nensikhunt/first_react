import './Card.css';
function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.url} alt="Avatar" className='cardimg' />
                <div className="container">
                    <h4><b>{props.name}</b></h4>
                    <p>{props.profession}</p>
                </div>
            </div>
        </>
    );
}

export default Card;