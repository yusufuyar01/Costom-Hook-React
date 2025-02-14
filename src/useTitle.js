import { useEffect } from'react'

function useTitle(num) {
    useEffect(() => {
        document.title = `Sayı : ${num}`
    }, [num]);
}

export default useTitle
