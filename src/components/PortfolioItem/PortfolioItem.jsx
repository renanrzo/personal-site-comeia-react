import "../PortfolioItem/PortfolioItem.css";

export function PortfolioItem(props) {
    return(
        <div className="portfolio-item">
                        <a href={props.link} target="_blank">
                            <img src={props.image} height="250px" width="250px" />
                            <p>{props.title}</p>
                        </a>
        </div>
    );
};