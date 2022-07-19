import axios from "axios"
import { useState, useEffect } from "react"

import { BASE_URL } from "../globals"

const DailyPicture = (props) => {

    
    // const logApiCall = async () => {
    //     console.log(BASE_URL)
    //     console.log(await axios.get(BASE_URL))
    // }

    // logApiCall()

    const [pictureData, setPictureData] = useState({})

    const getPicture = async (apiParams) => {
        const res = await axios.get(BASE_URL + apiParams)
        setPictureData(res.data)
        //console.log(pictureData)
    }

    useEffect(() => {getPicture(props.apiParams)}, [props.apiParams])

    return (
        <div>
            <img 
                className='daily-picture' 
                src={pictureData.url} 
                alt=''
            />
            <h3>{pictureData.title}</h3>
            <p>{pictureData.explanation}</p>
        </div>
    )
}

export default DailyPicture