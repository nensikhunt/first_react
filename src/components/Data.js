const input = require('./Data.json');
function data() {
    return (
        <div className='data'>
            <h1>json data table</h1>
            <table className='datatable'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>gender</th>
                        <th>ip_address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        input.map((value) => {
                            return (
                                <tr key={value.id}>
                                    <td>{value.first_name} {value.last_name} </td>
                                    <td>{value.email} </td>
                                    <td>{value.gender} </td>
                                    <td>{value.ip_address} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default data;