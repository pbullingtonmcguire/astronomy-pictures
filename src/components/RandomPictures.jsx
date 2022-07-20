import axios from "axios"
import { useState, useEffect } from "react"

import { BASE_URL } from "../globals"

const RandomPictures = (props) => {

    const [pictures, setPictures] = useState([])

    const getPictures = async () => {
        const res = await axios.get(BASE_URL + '&count=5')
        const arr = res.data
        // console.log(arr)
        setPictures(arr)
    }

    const selectPic = (event) => {
        const date = event.target.dataset.date
        console.log(event.target)
        console.log(event.target.dataset.date)
        props.setPictureDate(date)
    }

    useEffect(() => {
        getPictures()
    }, [])

    return (
        <div>
            <div>
                {pictures.map(picture => (
                    <img src={picture.url} alt={picture.title} key={picture.url} data-date={picture.date} onClick={(event) => {selectPic(event)}} />
                ))}
            </div>
        </div>
    )
}

export default RandomPictures