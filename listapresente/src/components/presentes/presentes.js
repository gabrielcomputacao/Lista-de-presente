import React, { Component } from "react";
import Modal from "../modal/modal";
import "./presentes.css";
import secador from "../images/secadorTaif.jpg";
import liquidificador from "../images/liquidificador.jpg";
import facas from "../images/facas.jpg";
import ferro from "../images/ferro.jpg";
import air from "../images/arfrayer.jpg";
import batedeira from "../images/batedeira.jpg";
import ventilador from "../images/ventilador.jpg";
import misteira from "../images/misteira.jpg";
import micro from "../images/micro.jpg";
import faqueiro from "../images/faqueiro.jpg";
import mop from "../images/mop.jpg";
import chuveiro from "../images/chuveiro.jpg";
import axios from "axios";

class Presentes extends Component {
   constructor() {
      super();

      this.state = {
         valor: "",
         numeroItem: "",
      };
   }

   /* mudandoNumeroItem = (valor) => {
      this.setState({ numeroItem: valor });
   }; */

   mudandoValor() {
      this.setState(() => ({
         valor: "show",
      }));
   }

   mudandoValorNone = () => {
      this.setState(() => ({
         valor: "",
      }));
   };

   capturandoItens = (valores) => {
      this.setState({ numeroItem: valores });
   };

   handleSelect = () => {
      axios
         .get("http://localhost:3002/api/select")
         .catch(() => {
            console.log("erro na solicitacao e requisicao");
         })
         .then((result) => {
            /* console.log(result.data) */
            this.capturandoItens(result.data);
         });
   };

   componentDidMount() {
      this.handleSelect();
   }

   verificandoStatus = () => {

        
         for(let i = 0 ; i < this.state.numeroItem.length ; i++){
            for(let x =0 ; x <= 12 ; x++){
               if(x === this.state.numeroItem[i]){
                  
                  console.log(`campo${x}`)
                  let capturarItem = document.querySelector(`#campo${x}`)
                  capturarItem.innerHTML = 'Indisponivel'
                  console.log(capturarItem)
               }
            }
         }
      

      

   };

   render() {
      return (
         <>
            <section id="presente">
               <h1>Presentes</h1>
               <div className="presenteMain">
                  <div className="figuraPresente">
                     <figure>
                        <img src={secador} alt="secador de cabelo"></img>
                     </figure>
                     <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     <div className="presenteHead">
                        <h4>Secador de cabelo marca Taiff</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo1">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={liquidificador} alt="secador de cabelo"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Liquidificador </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo2">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={facas} alt="secador de cabelo"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           Jogo De Facas Faqueiro Aço Inox 9 Pçs Tramontina
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo3">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={ferro} alt="secador de cabelo"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Ferro de passar roupa à vapor</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo4">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={air} alt="arfrayer"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Airfrayer</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo5">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={batedeira} alt="batedeira"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Batedeira</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo6">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={ventilador} alt="ventilador"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Ventilador</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo7">
                           {" "}
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={misteira} alt="Misteira"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Sandurcheira/Grill</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo8">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={micro} alt="Microondas"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Microndas Cor Branca</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo9">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={faqueiro} alt="talher"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           Jogo de talher Tramontina Facas;Garfos;
                           Colheres;Garfo sobremesa;Colherer chá
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo10">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={mop} alt="talher"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>MOP giratório</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo11">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={chuveiro} alt="talher"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           Chuveiro Ducha Lorenzetti Loren Shower Eletrônico
                           Original 220V
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo12">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
               </div>
               <button
                  id="acaoPresentar"
                  onClick={() => {
                     this.mudandoValor();
                  }}
               >
                  Vou Presentear
               </button>

               <button
               id="acaoPresentar"
                  onClick={() => {
                     this.verificandoStatus();
                  }}
               >
                  Atualizar 
               </button>
            </section>

            <Modal
               classeVisivel={this.state.valor}
               mudarValor={this.mudandoValorNone.bind(this)}
               listaItem={this.state.numeroItem}
            />
         </>
      );
   }
}

export default Presentes;
