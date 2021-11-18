import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://agile-garden-87094.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return reviews;
}
export default useReviews;