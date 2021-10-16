import react, { Component, useState } from "react";
import "./modal.css";
import axios from 'axios';

class Modal extends Component {
   constructor(props) {
      super(props);

      const valorOptionFalse=false;
      const valorOptionTrue=true
      this.state = {
         visivel: "",
         nome:"",
         tel:"",
         item:"",
         esconder:"",
         
      };
   }


   fazerAparecer = ()=>{
      this.setState({esconder:"ver"})
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

      
      this.fazerAparecer()
      setTimeout(()=>{
         this.props.mudarValor();
      },2000)
      
   }

  componentDidUpdate(){
     let selectCampo =document.querySelector('#itens')
     
     for(let i=0 ; i < this.props.listaItem.length ; i++){
        for(let y=0 ; y < 18 ; y++){
           if(selectCampo.options[y].value == this.props.listaItem[i]){
               selectCampo.options[y].setAttribute("disabled",true)
           }
        }
     }

    /*  console.log(selectCampo.options[2])
     console.log(this.props.listaItem.length) */

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

                <div className="textoAlternativo">Se você quer presentar o item que você clicou,
                <p>Escolha o item entre as opções, depois</p>
                <p>confirme no botão confirmar!!</p></div>

               {<div className={`${this.state.esconder} confirmacao`}>
                  <span>Seu Presente foi computado com Sucesso!!</span>
               </div>}

               <select id="itens" value={this.state.item}
               onChange={(e)=>this.setState({item:e.target.value})}>
                  <option  value="1">Kit Banheiro Lavabo</option>
                  <option  value="2">Garfo p/ petisco</option>
                  <option  value="3">2 lixeiras Redondas</option>
                  <option  value="4">Escorredor de pratos</option>
                  <option  value="5">Tapetes cozinha</option>
                  <option  value="6">kit Churrasco</option>
                  <option  value="7">Kit Ferramentas</option>
                  <option  value="8">Queijeira Petit</option>
                  <option  value="9">Kit Taça de Cerveja</option>
                  <option  value="10">Fruteira de Chao</option>
                  <option  value="11">Travessa Inox</option>
                  <option  value="12">Secador de Cabelo</option>
                  <option  value="13">Jogo de Facas</option>
                  <option  value="14">Bacia para roupas</option>
                  <option  value="15">Batedeira eletrica</option>
                  <option  value="16">Espremedor de Frutas</option>
                  <option  value="17">Jarra de Flor</option>
                  <option  value="18">Churrasqueira Portatil</option>
               </select>

                <button id="confirmar" 
                onClick={()=>{
                   this.handleEnviar()
                   
                }}>Confirmar</button>

                

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
