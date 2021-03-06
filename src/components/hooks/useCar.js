import { useEffect, useState } from "react";

const useCar = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return [services, setServices]
}
export default useCar;