import './Imagecontent.css';
function Image() {
    const imageArray = [
        {
            image: "https://picsum.photos/200/300/?blur=2",
            alt: "image1",
            heading: "content-1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dui non ante pharetra luctus ac at justo. Donec non viverra lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus maximus metus non nulla dictum commodo. Mauris eget hendrerit nisi."
        },
        {
            image: "https://picsum.photos/200/300.webp",
            alt: "image2",
            heading: "content-2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dui non ante pharetra luctus ac at justo. Donec non viverra lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus maximus metus non nulla dictum commodo. Mauris eget hendrerit nisi."
        },
        {
            image: "https://picsum.photos/200/300.jpg",
            alt: "image3",
            heading: "content-3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dui non ante pharetra luctus ac at justo. Donec non viverra lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus maximus metus non nulla dictum commodo. Mauris eget hendrerit nisi."
        },
        {
            image: "https://picsum.photos/seed/picsum/200/300",
            alt: "image4",
            heading: "content-4",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dui non ante pharetra luctus ac at justo. Donec non viverra lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus maximus metus non nulla dictum commodo. Mauris eget hendrerit nisi."
        },
        {
            image: "https://picsum.photos/id/237/200/300",
            alt: "image5",
            heading: "content-5",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel dui non ante pharetra luctus ac at justo. Donec non viverra lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus maximus metus non nulla dictum commodo. Mauris eget hendrerit nisi."
        }
    ]
    return (
        <div className="outer-image">
            {
                imageArray.map((value) => {
                    return (
                        <div className="inner-image">
                            <div>
                                <img src={value.image} alt={value.alt} id="image" />
                            </div>
                            <div>
                                <h1 className="image-h1">{value.heading}</h1>
                                <p className="image-p">{value.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Image;