import Card from './Card';
import Cardmessage from './Cardmessage';
function Carddetail() {
    const carddetails = [
        {
            id: "1001",
            author: "Danielle MacInnes",
            profession: "designer",
            gender:"male",
            download_url: "https://cdn.dribbble.com/users/1041205/screenshots/3636353/media/b9d3272401a456bdfaef25bb2a7accd2.jpg?compress=1&resize=400x300&vertical=top"
        },
        {
            id: "1002",
            author: "NASA",
            profession: "web devloper",
            gender:"male",
            download_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarxp3w2V2uosNwCyzIp1tILCurA27Wq0tXXjO_xykwjz2aIWKABGd621rpjLWcR3ZGs8&usqp=CAU"
        },
        {
            id: "1003",
            author: "E+N Photographies",
            profession: "android devloper",
            gender:"female",
            download_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9bUzKEkxSd8VIqbCsGpLOrgAgMkFCwkCyc64hGWGMgB9XF20xVUBupVmz22AIcFy8ek&usqp=CAU"
        },
        {
            id: "1004",
            author: "Greg Rakozy",
            profession: "graphics",
            gender:"female",
            download_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30vLgVDSXXoZ1Mji8QG-pStGQzva6Co34iA&usqp=CAU"
        },
        {
            id: "1005",
            author: "Matthew Wiebe",
            profession: "manager",
            gender:"male",
            download_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeabWkXTrS3TpRsbQ3ugejErdv4lfff8FgPw&usqp=CAU"
        }
    ]
    return (
        <>
            {
                carddetails.map((value, index) => {
                    return (
                        <div key={index} className="outer-card">
                            <div className="inner-card1">
                                <Card name={value.author} url={value.download_url} profession={value.profession} />
                            </div>
                            <div className="inner-card2">
                                <Cardmessage author={value.author} profession={value.profession} gender={value.gender} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Carddetail;