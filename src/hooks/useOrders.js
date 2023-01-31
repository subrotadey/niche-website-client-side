import { useEffect, useState } from "react"

const useOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://carniche.onrender.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    return orders;
}
export default useOrders;
