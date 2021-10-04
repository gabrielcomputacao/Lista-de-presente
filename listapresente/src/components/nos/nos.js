import react, { Component } from "react";
import eutata from "../images/eutatabh.jpeg";
import "./nos.css";

class Nos extends Component {
   render() {
      return (
         <>
            <section id="nos">
               <h2>Sobre Nós</h2>
               <div id="imagemNos">
                  <img id="eutata" src={eutata} alt="casal juntos" />
               </div>
               <div id="textoNos">
                  <p>
                     askdaskljdakljdakldjaslkd
                  </p>
               </div>
            </section>
         </>
      );
   }
}

export default Nos;
