import { useEffect,useState } from 'react'

import useAuth from '../../../hooks/useAuth'
const useMyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        fetch(`https://agile-garden-87094.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user, myOrders])
    return myOrders;
}
export default useMyOrders;