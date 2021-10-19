import React, { Component } from "react";
import "../avisos/aviso.css"

class Aviso extends Component {


   render() {
      return (
         <>
            <div className="avisar">
               <p>
                  Endereço para envio dos presentes: Será entregue no dia do
                  evento, mas, caso queira entregar antecipadamente, segue os
                  endereços: Rua Caio Notini, 441, apartamento 302. Bairro Nossa
                  Senhora das Graças. CEP: 35501-057 (apartamento mãe Thauany)
                  Avenida Paraná, 791, apartamento 202. Bairro São José. CEP:
                  35501-660 ,apartamento dos noivos
               </p>
               <p className="alertando">
                   AVISO : VAI TER BEBIDA ALCOOLICA, VÁ DE UBER , IRIRIRIRIRI !!
                   
               </p>
            </div>
         </>
      );
   }
}

export default Aviso;
