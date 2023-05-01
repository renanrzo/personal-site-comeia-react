import  '../Header/Header.css';


export function Header(props) {

    const { nome, cargo, foto } = props.informacoes; 
    
    return (
      <header>
          <img src={foto} alt='Foto do rosto de André'/>
          <h1 id="nome-perfil">{nome}</h1>
          <h3 id="eventoSubtitulo">{cargo}</h3>
      </header>
  )
}