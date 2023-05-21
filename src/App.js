
import { useState } from 'react';
import './app.css';


export default function App (){
  const[peso,setPeso] = useState('');
  const[altura,setAltura] = useState('');


  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    

    if(imc < 18.6){
      alert("Você está abaixo do peso ideal, coma mais um pouco. Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 18.06 && imc < 24.09){
      alert("Esse é o seu peso ideal, tente mante-lo! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      alert("Você está acima do peso, coloca o tênis e vai correr! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 34.9){
      alert("Cuidado. Você pode morrer a qualquer momento. Seu IMC: " + imc.toFixed(2))
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc!</span>

      <div className="area-input">
        <input
        type="text"
        placeholder="peso em (kg) Ex: 90"
        value={peso}
        onChange={ (e)=> setPeso(e.target.value)}
        />
        <input
        type="text"
        placeholder="Altura em (cm) Ex:180"
        value={altura}
        onChange={ (e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>
      <h3>Para informações detalhadas, procure um profissional.</h3>
    </div>
  )
}
