import axios from "axios"
import { useState, useEffect } from "react"

import { BASE_URL } from "../globals"

const RandomPictures = () => {

    const [pictures, setPictures] = useState([])

    const getPictures = async () => {
        const res = await axios.get(BASE_URL + '&count=5')
        const arr = res.data
        // console.log(arr)
        setPictures(arr)
    }

    useEffect(() => {
        getPictures()
    }, [])

    return (
        <div>
            <div>
                {pictures.map(picture => (
                    <img src={picture.url} alt="" key={picture.url} />
                ))}
            </div>
        </div>
    )
}

export default RandomPictures