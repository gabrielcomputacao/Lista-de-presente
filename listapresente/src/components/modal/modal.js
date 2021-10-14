import react, { Component, useState } from "react";
import "./modal.css";
import axios from 'axios';

class Modal extends Component {
   constructor(props) {
      super(props);
      this.state = {
         visivel: "",
         nome:"",
         tel:"",
         item:"",
      };
   }

   handleEnviar = ()=> {
      
      this.data={
         nome:this.state.nome,
         tel:this.state.tel,
         item:this.state.item
      }

      axios.post("http://localhost:3002/api/create",this.data).
      then(response =>{
         console.log("deu certo a requisicao" + response)
      }).catch(()=>{
         console.log("erro ao enviar requisicao")
      });

      this.props.mudarValor();
   }

  



   render() {
      return (
         <>
            <div
               className={`${this.props.classeVisivel} ${this.state.visivel} modal`}>
               <h3>Você irá nos presentear</h3>
               <h4>Agradecemos do fundo do coração!!!</h4>
               <div className="dados">
                  <label htmlFor="nome">Seu nome: </label>
                  <input id="nome" type="text" 
                  value={this.state.nome}
                  onChange={(e)=>this.setState({nome:e.target.value})
                  }></input>
               </div>
               <div className="dados">
                   <label htmlFor="telefone">Seu telefone: </label>
                   <input id="telefone" type="text"
                   value={this.state.tel}
                   onChange={(e)=>this.setState({tel:e.target.value})}>
                   </input>
               </div>

                <div className="textoAlternativo">Se voce quer presentar o item que você clicou,
                <p>Escolha o item entre as opções, depois</p>
                <p>confirme no botão confirmar!!</p></div>


               <select id="itens" value={this.state.item}
               onChange={(e)=>this.setState({item:e.target.value})}>
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

                <button id="confirmar" 
                onClick={()=>{
                   this.handleEnviar()
                   this.props.capturarItem(this.state.item)
                }}>Confirmar</button>

                <button onClick={()=>{
                   /* this.handleSelect() */
                }}>
                   atualizar
                </button>

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
