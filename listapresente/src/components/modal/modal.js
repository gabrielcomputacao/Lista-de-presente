import react, { Component } from "react";
import "./modal.css";

class Modal extends Component {
   constructor(props) {
      super(props);
      this.state = {
         visivel: "",
      };
   }

   render() {
      return (
         <>
            <div
               className={`${this.props.classeVisivel} ${this.state.visivel} modal`}
            >
               <h3>Você irá nos presentear</h3>
               <h4>Agradecemos do fundo do coração!!!</h4>
               <div className="dados">
                  <label>Seu nome: </label>
                  <input></input>
               </div>
               <div className="dados">
                   <label>Seu telefone: </label>
                   <input></input>
               </div>

                <div className="textoAlternativo">Se voce quer presentar o item que você clicou,
                <p>confirme no botão confirmar!!</p></div>

                <button id="confirmar">Confirmar</button>

               <button id="fechar"
                  onClick={() => {
                     this.props.mudarValor();
                  }}
               >
                  {" "}
                  Fechar{" "}
               </button>
            </div>
         </>
      );
   }
}

export default Modal;
