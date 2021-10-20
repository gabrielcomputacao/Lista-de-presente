import React, { Component } from "react";
import "./instrucoes.css";

class Instrucoes extends Component {
   render() {
      return (
         <>
            <section id="instrucaoOrientar">
               <div className="instrucao">
                  <h2 className="titulo">Instruções</h2>
                  <div className="textoInstrucao">
                     <p>
                        Você irá visualizar diversas opções de presentes. Após a
                        escola, aperte "VOU PRESENTEAR" e coloque seu nome e
                        telefone, depois, aperte CONFIRMAR. Assim, o item será
                        marcado e não poderá ser escolhido por outras pessoas.
                     </p>
                  </div>
                  <h3 className="titulo">
                     Pense bem antes de selecionar um item: ele será marcado e
                     ficará desabilitado para os demais!!
                  </h3>
               </div>
            </section>
         </>
      );
   }
}

export default Instrucoes;
