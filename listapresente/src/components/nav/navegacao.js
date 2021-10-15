import react, { Component } from "react";
import "./navstyle.css";
import panela from "../images/cha-de-panela.png";
import hambuerguerIcon from "../images/iconesImg/menuhamb.png"

class Navegacao extends Component {
   render() {
      return (
         <>
            <div className="navPrincipal">
               {<img id="panela" src={panela} alt="cha de panela" />}

               <div className="divMenu">
                  <a href="#">
                     <img id="iconMenu" src={hambuerguerIcon} alt="menu hamburguer"/>
                  </a>
                  
                  <div className="menu">
                     {<a href="#">Avisos</a>}
                     <a href="#instrucaoOrientar">Instruções</a>
                     <a href="#nos">SobreNós</a>
                     <a href="#presente">Presentes</a>
                     <a href="#creditos">Créditos</a>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default Navegacao;
