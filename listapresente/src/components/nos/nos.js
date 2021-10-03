import react, { Component } from "react";
import eutata from "../images/eutatabh.jpeg";
import "./nos.css";

class Nos extends Component {
   render() {
      return (
         <>
            <section id="nos">
               <div>
                  <img id="eutata" src={eutata} alt="casal juntos" />
               </div>
            </section>
         </>
      );
   }
}

export default Nos;
