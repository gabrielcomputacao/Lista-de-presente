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
                <p>Escolho o item entre as opções depois</p>
                <p>confirme no botão confirmar!!</p></div>


               <select id="itens">
                  <option value="1">Secador</option>
                  <option value="2">Liquidificador</option>
                  <option value="3">Jogo de Faca</option>
                  <option value="4">Ferro de passar roupa</option>
                  <option value="5">Airfrayer</option>
                  <option value="6">Batedeira</option>
                  <option value="7">Ventilador</option>
                  <option value="8">Sanduicheira/Grill</option>
                  <option value="9">Microondas</option>
                  <option value="10">Jogo de talheres</option>
                  <option value="11">MOP Giratorio</option>
                  <option value="12">Chuveiro Ducha</option>
               </select>

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
