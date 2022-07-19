import axios from "axios"

import { BASE_URL } from "../globals"

const DailyPicture = () => {

    
    const logApiCall = async () => {
        console.log(BASE_URL)
        console.log(await axios.get(BASE_URL))
    }

    logApiCall()

    return (
        <div>
            <img 
                class='daily-picture' 
                src='https://apod.nasa.gov/apod/image/2207/HalfPleiades_Venkatraman_1365.jpg' 
                alt=''
            />
        </div>
    )
}

export default DailyPicture