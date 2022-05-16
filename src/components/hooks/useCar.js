import { useEffect, useState } from "react";

const useCar = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('lo /service')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return [cars, setCars]
}
export default useCar;