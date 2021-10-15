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
                     Terá várias opções de presentes, voce irá apertar o Botão
                     <span id="textoEspecifico"> VOU PRESENTEAR</span> e colocar seu nome e seu
                     telefone e apertar em CONFIRMAR, assim o item irá ser marcado e
                     esse item não poderá ser escolhido mais vezes.
                  </p>
               </div>
               <h3 className="titulo">
                  Pense bem antes de escolher um item ele será marcado e ficará
                  desabilitado para os demais!!
               </h3>
            </div>
            </section>
         </>
      );
   }
}

export default Instrucoes;
