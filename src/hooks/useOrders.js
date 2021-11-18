import { useEffect, useState } from "react"

const useOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://agile-garden-87094.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    return orders;
}
export default useOrders;