const Banner = ({ title, direction }) => {
    return (

        <div className="banner">
            <a href={direction} target="_blank">
                <div className="bannerContent">
                    <h2 className="bannerTitle">{title.toUpperCase()}</h2>
                </div>
            </a>
        </div>
    );
};

export default Banner;