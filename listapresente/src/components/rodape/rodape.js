import react, { Component } from "react";
import "./rodape.css";
import telefone from "../images/contato-telefonico.png";
import email from "../images/novo-email.png";

class Rodape extends Component {
   render() {
      return (
         <>
            <section id="creditos">
               <div className="rodape">
                  <div className="autor">
                     <p>
                        Direitos autorais exclusivos Site criado por: Gabriel
                        Henrique da Silveira Santos
                     </p>
                  </div>
                  <div className="telefone">
                     <img src={telefone} alt="telefone" />
                     <p id="tel">Telefone: (31) 993779921</p>
                  </div>
                  <div className="email">
                     <img src={email} alt="email" />
                     <p>Email: gabrielcomputacao@outlook.com</p>
                  </div>
               </div>
            </section>
         </>
      );
   }
}

export default Rodape;
