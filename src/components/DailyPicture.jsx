import axios from "axios"
import { useState, useEffect } from "react"

import { BASE_URL } from "../globals"

const DailyPicture = () => {

    
    // const logApiCall = async () => {
    //     console.log(BASE_URL)
    //     console.log(await axios.get(BASE_URL))
    // }

    // logApiCall()

    const [pictureData, setPictureData] = useState({})

    const getPicture = async () => {
        const res = await axios.get(BASE_URL)
        setPictureData(res.data)
        //console.log(pictureData)
    }

    useEffect(() => {getPicture()}, [])

    return (
        <div>
            <img 
                class='daily-picture' 
                src={pictureData.url} 
                alt=''
            />
            <h3>{pictureData.title}</h3>
            <p>{pictureData.explanation}</p>
        </div>
    )
}

export default DailyPicture