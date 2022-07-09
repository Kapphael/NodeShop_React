
import logo from './img/logo.png';
import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


class Cabecalho extends React.Component{

render(){
  return(
    <div className="App">
      <header className="App-cabecalho">
        <h1>
          
          <a href="#index.html" title="Loja de Informática do Obama" className='FraseLogo'>Loja de Informática do Obama
            <img src={logo}   />
          </a>
        </h1>
        
        <form className='formulario'>
          <input type="text" name="pesquisa" id="pesquisa" className='inputForm' placeholder="Faça uma busca"/>
          <button className='botao'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>

      </header>
    </div> 
  ); 
}
}

export default Cabecalho;