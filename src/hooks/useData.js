import { useEffect, useState } from "react"

const useData = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://agile-garden-87094.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data)
                setLoading(false)
            })
    }, [cars])
    return {
        cars,
        loading
    }
}
export default useData;