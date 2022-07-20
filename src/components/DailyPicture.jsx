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

    const getPicture = async (pictureDate) => {
        let res
        if (pictureDate) {
            res = await axios.get(BASE_URL + 'date=' + pictureDate)
        } else {
            res = await axios.get(BASE_URL)
        }
        
        setPictureData(res.data)
        //console.log(pictureData)
    }

    useEffect(() => {getPicture(props.pictureDate)}, [props.pictureDate])

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