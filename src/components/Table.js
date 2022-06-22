const object = [
    { id: 1, name: "nensi", age: 19, gender: "female" },
    { id: 2, name: "priyal", age: 25, gender: "female" },
    { id: 3, name: "mansvi", age: 20, gender: "female" },
    { id: 4, name: "riddhi", age: 23, gender: "female" }
];
function table() {
    return (
        <div className="table">
            <h1>js data table</h1>
            <table className="tableobject">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        object.map((value) => {
                            return (
                                <tr key={value.id}>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default table;