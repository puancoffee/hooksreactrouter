import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Detail = () => {
    const {id} = useParams()
    const [data,
        setData] = useState({})
    useEffect(() => {
        const URL = 'http://localhost:8000/article'
        axios
            .get(`${URL}/${id}`)
            .then(res => {
                const data = res.data
                setData(data)
                console.log(data);

            })
    }, [])
    const showData =  <div className="col-4">
        <div className="card mt-4">
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text">Author : {data.author}</p>
             </div>
        </div>
    </div>
    return (
        <div className="container">
            <div className="row">
                {showData}
            </div>
        </div>
    )
}
export default Detail