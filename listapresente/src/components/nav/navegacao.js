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
                  <span>Apresentação</span>
                  <span>Sobre Nós</span>
                  <span>Presentes</span>
               </div>
            </div>   
            </div>
         </>
      );
   }
}

export default Navegacao;
