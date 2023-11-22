import './App.css'
import ConteudoEsquerdo from './Components/ConteudoEsquerdo'
import ConteudoCentral from './Components/ConteudoCentral'
import ConteudoDireito from './Components/ConteudoDireito'

function App() { 
  return (
    <main>
      <ConteudoEsquerdo />
      
      <div className='ContainerScroll'>
      <ConteudoCentral />
      <ConteudoDireito />
      </div>
    </main>
  )
}

export default App
