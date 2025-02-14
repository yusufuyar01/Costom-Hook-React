
import { useState } from'react'

function useCounter() {
    const [num2, setNum2] = useState(0)
    const Azalt = () => {
        setNum2((prevNum) => prevNum - 1)
    }
    
    const Arttır = () => {
        setNum2((prevNum) => prevNum + 1)
    }
    
    const Sıfırla = () => {
        setNum2(0)
    }
    return [num2, Azalt, Arttır, Sıfırla]
  
}

export default useCounter
