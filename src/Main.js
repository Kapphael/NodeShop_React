import React from "react";
import "./App.css";
import loja from './img/loja.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope , faMessage} from "@fortawesome/free-solid-svg-icons";

class Main extends React.Component{

render(){
  return(
    <main className="principal">
        <article className="sobre">
            <h2>Sobre nós</h2>
            <img src={loja} alt="Imagem de uma loja de informatica com tres pessoas, sendo dois homem e uma mulher" />

            <p>A NODESHOP, também conhecida como a loja do ALUNO do OBAMA , tem por finalidade fornecer os melhores produtos de tecnologia para programadores, gamers, streamers, para o seu home-office e entusiastas do mundo da tecnologia.</p>
            <br/>
            <p>Nossa missão é levar TECNOLOGIA e ACESSIBILIDADE para todos em todas as regiões de norte a sul, para que isso aconteça estamos no mundo inteiro.</p>
            <br/>
            <p>Em busca da velocidade e qualidade temos a NODESHOP EXPRESS&copy; , para que seu produto chegue com segurança e no tempo pedido, tudo para nosso cliente sinta-se bem ao comprar conosco.</p>
            <br/>
            <p>Levamos nossa missão muito a serio, com o seguinte modo de pensar: "Servimos bem para servir sempre", por isso nos dedicamos desde o site até o transporte de nossos produtos pois também acreditamos que cada item vendido leva um pedaço de nós. </p>
        </article>
        <aside class="onde-estamos">
            <h2>Onde estamos</h2>
            <p>Rua Tito N54 -Vila Romana-São Paulo-SP-Brasil</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1241452609834!2d-46.69399738502288!3d-23.528036884699503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1656015887615!5m2!1spt-BR!2sbr" ></iframe>

            <h2>Contatos</h2>
            <ul>
                <li><FontAwesomeIcon icon={faPhone}/> (11)99832-8096</li>
                <li><FontAwesomeIcon icon={faMessage}/> (11)99832-8096</li>
                <li><FontAwesomeIcon icon={faEnvelope}/> raphaelalvesdeoliveira@hotmail.com</li>
            </ul>
            
        </aside>
    </main>
  ); 
}
}

export default Main;