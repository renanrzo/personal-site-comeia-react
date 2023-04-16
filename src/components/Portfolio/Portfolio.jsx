import { PortfolioItem } from '../PortfolioItem/PortfolioItem.jsx';

import  '../Portfolio/Portfolio.css';

import portfolio from "../Portfolio/Porfolio.json";


export function Portfolio() {


    return(
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