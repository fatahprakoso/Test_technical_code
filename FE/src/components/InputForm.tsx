import React, {useState} from 'react'
import { generateGanjil, generatePrima, generateSegitiga } from '../services/numberGenerateService'

function InputForm () {
  const [inputNumber, setInputNumber] = useState<number>(0)
  const [result, setResult] = useState([])
  const [isSegitiga, setIsSegitiga] = useState(false)
  
  const baseContainerStylsheet:React.CSSProperties= {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 30
  }
  
  const buttonContainerStylsheet:React.CSSProperties= {
    display: "flex",
    gap: 10
  }
  
  const resultContainerStylesheet:React.CSSProperties= {
    display: "flex",
    width: "75vw",
    flexDirection: isSegitiga ? 'column' : 'row',
    flexWrap: "wrap",
    gap: 10
  }
  
  const onClickEventHandlers = {
    generateSegitiga: () => {
      generateSegitiga(inputNumber)
        .then((d)=>{
          setResult(d.data)
          setIsSegitiga(true)
        })
        .catch(e=>console.log(e))
    },
    generateGanjil: () => {
      generateGanjil(inputNumber)
        .then((d)=>{
          setResult(d.data)
          setIsSegitiga(false)
        })
        .catch(e=>console.log(e))
    },
    generatePrima: () => {
      generatePrima(inputNumber)
        .then((d)=>{
          setResult(d.data)
          setIsSegitiga(false)
        })
        .catch(e=>console.log(e))
    },
  }
  
  return <>
    <div style={baseContainerStylsheet}>
      <input type="number" value={inputNumber} onChange={e => setInputNumber(parseInt(e.currentTarget.value))}/>
      <div style={buttonContainerStylsheet}>
        <button onClick={onClickEventHandlers.generateSegitiga}>Generate Segitiga</button>
        <button onClick={onClickEventHandlers.generateGanjil}>Generate Bilangan Ganjil</button>
        <button onClick={onClickEventHandlers.generatePrima}>Generate Bilangan Prima</button>
      </div>
      <h2>Result:</h2>
      <div style={resultContainerStylesheet}> 
        {
          result.map(d=>(<div>{d}</div>))
        }
      </div>
    </div>
  </>
}

export default InputForm