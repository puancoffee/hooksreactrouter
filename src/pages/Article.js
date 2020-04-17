import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Article = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const URL = 'http://localhost:8000/article'
        axios
            .get(URL)
            .then(res => {
                const data = res.data
                setData(res.data)
                console.log(data);

            })
    }, [])
    const showData = data.map((item, index) => <div key={index} className="col-4">
        <div className="card mt-4">
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Author : {item.author}</p>
                <Link to={`/article/${item.id}`} className="btn btn-primary">Read more</Link>
            </div>
        </div>
    </div>)
    return (
        <div className="container">
            <div className="row">
                {showData}
            </div>
        </div>
    )
}
export default Article