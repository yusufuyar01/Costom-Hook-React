import React from 'react'
import useCounter from './useCounter';



function Meter() {
    // const [num2, setNum2] = useState(0)
    // const Azalt = () => {
    //     setNum2(num2 - 1)
    // }
    // const Arttır = () => {
    //     setNum2(num2 + 1)
    // }
    // const Sıfırla = () => {
    //     setNum2(0)
    // }
    const [num2, Arttır, Azalt, Sıfırla] = useCounter();
  return (
    <div>
      <h2>Sayı : {num2}</h2>
      <button onClick={Arttır}>Arttır</button>
      <button onClick={Azalt}>Azalt</button>
      <button onClick={Sıfırla}>Sıfırla</button>
    </div>
  )
}

export default Meter
