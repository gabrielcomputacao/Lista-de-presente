import React, { Component } from "react";
import Modal from "../modal/modal";
import "./presentes.css";
import axios from "axios";

import lavabo from "../images/imagensItens/lavabo.jpg";
import garfinho from "../images/imagensItens/garfinho.jpg";
import lixo from "../images/imagensItens/lixo.png";
import escorredor from "../images/imagensItens/escorredorNew.jpg";
import tapeteC from "../images/imagensItens/tapeteCozinha.jpg";
import churras from "../images/imagensItens/churras.jpg";
import ferramenta from "../images/imagensItens/ferramenta.jpg";
import queijeira from "../images/imagensItens/queijeira.jpg";
import taca from "../images/imagensItens/tacaBreja.jpg";
import fruteira from "../images/imagensItens/fruteira.jpg";
import travessa from "../images/imagensItens/travessa.jpg";
import secador from "../images/imagensItens/secador.jpg";
import faca from "../images/imagensItens/facaNew.jpg";
import bacia from "../images/imagensItens/bacia.jpg";
import batedeira from "../images/imagensItens/batedeira.jpg";
import espremedor from "../images/imagensItens/espremedor.png";
import jarra from "../images/imagensItens/jarra.jpg";
import churrasq from "../images/imagensItens/churrasq.jpg";
import lixeiraPreta from "../images/imagensItens/lixeiraPreta.jpg";
import colcha from "../images/imagensItens/colcha.jpg";
import faqueiro from "../images/imagensItens/faqueiro.jpg";
import lencol from "../images/imagensItens/lencol.jpg";
import luva from "../images/imagensItens/luva.jpg";
import martini from "../images/imagensItens/martini.jpg";
import saia from "../images/imagensItens/saia.jpg";
import tapeteBanho from "../images/imagensItens/tapeteBanho.jpg";
import termometro from "../images/imagensItens/termometro.jpg";
import tapeteEntrada from "../images/imagensItens/tapeteEntrada.jpg";
import travessaCeramica from "../images/imagensItens/travessaCeramica.jpg";
import processador from "../images/imagensItens/processador.jpeg";



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
         .get("http://18.228.193.152:3002/api/select")
         .catch(() => {
            console.log("erro na solicitacao e requisicao");
         })
         .then((result) => {
             /* console.log(result.data)  */
            this.capturandoItens(result.data);
         });
   };

   componentDidMount() {
      this.handleSelect();
   }

   verificandoStatus = () => {

        
         for(let i = 0 ; i < this.state.numeroItem.length ; i++){
            for(let x =0 ; x < 31 ; x++){
               if(x === this.state.numeroItem[i]){
                  
                  /* console.log(`campo${x}`) */
                  let capturarItem = document.querySelector(`#campo${x}`)
                  capturarItem.innerHTML = 'Status: Indisponivel'
                  /* console.log(capturarItem) */
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
                        <img src={lavabo} alt="kit lavabo"></img>
                     </figure>
                     <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     <div className="presenteHead">
                        <h4> Kit Banheiro Lavabo Cerâmica , sabonete e escova</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo1">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={garfinho} alt="petiscos"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>JOGO 6 GARFOS P/PETISCO </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo2">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={lixo} alt="2 Lixeira Redonda Pedal"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                              2 Lixeira Redonda Pedal 6,5
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
                        <img src={escorredor} alt="Escorredor De Pratos Louças"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Escorredor De Pratos Louças</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo4">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={tapeteC} alt="Tapetes e passadeira de tear cozinha"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Tapetes e passadeira de tear cozinha, cor preta ou azul marinho</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo5">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={churras} alt="kit churrasco"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>kit churrasco</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo6">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={ferramenta} alt="Kit Jogo Ferramentas com 149 Peças"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Kit Jogo Ferramentas com 149 Peças</h4>
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
                        <img src={queijeira} alt="Queijeira Petit"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Queijeira Petit</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo8">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={taca} alt="Taça de Cerveja kit 6"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Taça de Cerveja kit 6</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo9">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={fruteira} alt="Fruteira de chão"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           Fruteira de chão
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
                        <img src={travessa} alt="Travessa inox"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>Travessa inox</h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo11">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={secador} alt="secador de cabelo Taiff"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           Secador de cabelo Taiff
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo12">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={faca} alt="Jogo De Facas Aço"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           jogo de facas Tramontina
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo13">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={bacia} alt=" bacia para roupas"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                              bacia para roupas
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo14">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={batedeira} alt="batedeira elétrica"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           batedeira elétrica
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo15">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={espremedor} alt="Espremedor de fruta elétrico"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           Espremedor de fruta elétrico
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo16">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={jarra} alt=" jarra para flor artificial"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           jarra para flor artificial
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo17">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={churrasq} alt="churrasqueira portátil"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           churrasqueira portátil
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo18">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={colcha} alt="colcha"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                        colcha para cama box casal L: 1,38 cm  C:1,88cm  A: 0,56 cm
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo19">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={faqueiro} alt="faqueiro"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                        Faqueiro jogo de talheres Tramontina Aço Inox
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo20">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={travessaCeramica} alt="travessa"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           Travessa de Ceramica
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo21">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={lencol} alt="lençol"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           lençol para cama box casal 30cm
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo22">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={lixeiraPreta} alt="lixeira preta"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           Lixeira com pedal 30 Litros - cor preta
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo23">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={luva} alt="luva"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           luva térmica e descanso de panela
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo24">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={martini} alt="martini"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           taças de drinks
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo25">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={processador} alt="processador"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           mini processador de alimentos
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo26">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={saia} alt="saia"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           saia para box casal
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo27">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={tapeteBanho} alt="tapete para banho"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           Tapete para Banho
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo28">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={tapeteEntrada} alt="tapete para entrada"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           tapete para entrada
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo29">
                           Status:Disponivel
                        </p>
                     </div>
                  </div>
                  <div className="figuraPresente">
                     <figure>
                        <img src={termometro} alt="termometro"></img>
                        <figcaption>Imagem de exemplo - ilustrativa</figcaption>
                     </figure>
                     <div className="presenteHead">
                        <h4>
                           termometro digital
                        </h4>
                     </div>
                     <div className="presenteBody">
                        <p className="itensStatus" id="campo30">
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
