
import Aviso from './components/avisos/aviso';
import Instrucoes from './components/instrucoes/instrucoes';

import Navegacao from './components/nav/navegacao';
import Nos from './components/nos/nos';
import Presentes from './components/presentes/presentes';
import Rodape from './components/rodape/rodape';
import "./reset.css"

function App() {

 


  return (
    <>
      <Navegacao/>
      <Instrucoes/>
      <Nos/>
      <Presentes/>
      <Aviso/>
      <Rodape/>    
    </>
  );
}

export default App;
