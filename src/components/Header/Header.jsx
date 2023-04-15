import  '../Header/Header.css';

import imagesAndre from '../../assets/eu.jpg'

export function Header() {
    return (
      <header>
          <img src={imagesAndre}/>
          <h1>André Renan</h1>
          <h3>Desenvolvedor Jr.</h3>
      </header>
  )
}