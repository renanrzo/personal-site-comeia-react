import { PortfolioItem } from '../PortfolioItem/PortfolioItem.jsx';

import '../Portfolio/Portfolio.css';



export function Portfolio({ portfolio }) {


    return (
        <main>

            {portfolio.map(
                (item, index) => <PortfolioItem
                    key={index}
                    link={item.link}
                    image={item.image}
                    title={item.title}
                />

            )}

        </main>
    )
}