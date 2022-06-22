import Countrydata from "./Countrydata";
let countrycode = prompt("enter country code :");
function Country() {
    // let countryname;
    // for (const value of Countrydata) {
    //     if (value.code === countrycode.toUpperCase()) {
    //         countryname = value.name;
    //     }
    // }
    // return (
    //     <h1>countryname : {countryname}</h1>
    // )

    // let countryname;
    // let countrydetail=Countrydata.map((value)=>{
    //     if(value.code === countrycode.toUpperCase()){
    //         return (countryname = value.name);
    //     }
    // })
    // return (
    //         <h1>countryname : {countrydetail}</h1>
    //     )

    let countryname;
    let countrydetail = Countrydata.filter((value) => {
        if (value.code === countrycode.toUpperCase()) {
            return (countryname = value.name);
        }
    });

    return (
        <h1>countryname : {countrydetail}</h1>
    )

}

export default Country;