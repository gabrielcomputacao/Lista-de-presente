import react, { Component } from "react";
import "./navstyle.css";
import panela from "../images/cha-de-panela.png";

class Navegacao extends Component {
   render() {
      return (
         <>
            <div className="navPrincipal">
               {<img id="panela" src={panela} alt="cha de panela" />}

            <div className="divMenu">
               <div className="menu">
                  <a href="#">Apresentação</a>
                  {/* <a href="#">Avisos</a> */}
                  <a href="#instrucaoOrientar">Instruções</a>
                  <a href="#">Sobre Nós</a>
                  <a href="#">Presentes</a>
               </div>
            </div>   
            </div>
         </>
      );
   }
}

export default Navegacao;
