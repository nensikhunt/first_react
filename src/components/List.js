function list() {
    let price = [100, 200, 547, 999, 1000];
    let item = ["milk", "bread", "egg", "onion", "garlic"];
    return (
        <>
            <h1>list</h1>
            <div className="App">
                <div className='itemdiv'>
                    <h3>item</h3>
                    {/* <ol> */}
                    {
                        item.map((value, index) => {
                            return (
                                <ul key={index}>
                                    <li>{value}</li>
                                </ul>
                            )
                        })
                    }
                    {/* </ol> */}
                </div>
                <div className='pricediv'>
                    <h3>price</h3>
                    {
                        price.map((value, index) => {
                            return (
                                <ul key={index}>
                                    <li>{value}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default list;