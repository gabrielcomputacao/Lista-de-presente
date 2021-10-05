import react, { Component } from "react";
import "./modal.css";

class Modal extends Component{
    

    constructor(props){
        super(props)
        this.state={
            visivel:""
        }

        
    }

    

    render(){
        
        return(
            <>
                <div className={`${this.props.classeVisivel} ${this.state.visivel} modal`}>
                    <h3>Você irá nos presentear</h3>
                    <h4>Agradecemos do fundo do coração!!!</h4>
                    <button onClick={()=>{
                        this.props.mudarValor()
                    }}> Fechar </button>
                </div>
            </>
        )
    }


}


export default Modal