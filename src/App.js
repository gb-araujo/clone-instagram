import './App.css';
import Feed from './componentes/Feed/Feed';
import Stories from './componentes/Stories/Stories';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo'
import LadoDireito from './componentes/LadoDireito/LadoDireito';

function App() {
  return (
    <div className="App">
      <LadoEsquerdo />
      <LadoDireito />

      <div className='Centro'>
        <Stories />
        <Feed />
      </div>
      </div>
  );
}

export default App;
