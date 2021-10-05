import react, { Component } from "react";
import eutata from "../images/eutatabh.jpeg";
import "./nos.css";

class Nos extends Component {
   render() {
      return (
         <>
            <section id="nos">
               <h2>Sobre Nós</h2>
               <div className="divisaoNos">
                  <div id="imagemNos">
                     <img id="eutata" src={eutata} alt="casal juntos" />
                  </div>
                  <div id="textoNos">
                     <p>
                        Tudo começou há seis anos. Enquanto algumas pessoas
                        fazem de tudo para se tornarem marcantes, outras agem
                        naturalmente e conquistam com muita intensidade. E foi
                        assim com a gente. Claro que não teve apenas momentos
                        bons. Não existe casal que não conheça pequenos
                        fracassos, tristezas, brigas que parecem nunca terminar.
                        Ela sempre foi tímida. Ele, extrovertido. Ela sempre
                        romântica. Ele, bem longe disso. Ela sempre princesa.
                        Ele, mais para Tarzan. Para muitos, impossível duas
                        pessoas tão opostas darem certos. Para os que acreditam
                        em astrologia, impossível aquário e peixes serem uma boa
                        combinação. Mas agora, não é ele ou ela. Nada mais será
                        seu, nem meu, apenas nosso; nosso amor, nosso casamento,
                        nossa casa, nossa vida, nosso chá de casa nova.
                     </p>

                     <article id="pensamento">
                        ...Até que a morte nos separe??JAMAIS<br/>
                        Até que o AMOR se perpetue...
                     </article>

                  </div>
               </div>
            </section>
         </>
      );
   }
}

export default Nos;
