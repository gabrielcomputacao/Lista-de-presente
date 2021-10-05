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

class Presentes extends Component {

   constructor(){
      super()
      this.state={
         valor:""
      }
   }

   mudandoValor(){
      this.setState(()=>({
         valor:"show"
      }))
   }

   mudandoValorNone=()=>{
      this.setState(()=>({
         valor:""
      }))
   }

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
                        <button  onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button  onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button  onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button  onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button  onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button  onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button  onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button  onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button  onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button  onClick={() => {this.mudandoValor()}}>Vou Presentear</button>
                        <p>Status:Disponivel</p>
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
                        <button onClick={() => {this.mudandoValor()}}>
                           Vou Presentear
                        </button>
                        <p>Status:Disponivel</p>
                     </div>
                  </div>
               </div>
            </section>
            <Modal classeVisivel={this.state.valor} mudarValor={this.mudandoValorNone.bind(this)}/>
         </>
      );
   }
}

export default Presentes;
