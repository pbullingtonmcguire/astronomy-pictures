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
            res = await axios.get(BASE_URL + '&date=' + pictureDate)
        } else {
            res = await axios.get(BASE_URL)
        }
        // res = {
        //     data: {
        //         url: 'https://apod.nasa.gov/apod/image/2207/HalfPleiades_Venkatraman_960.jpg',
        //         title: 'Pleiades over Half Dome',
        //         explanation: 'Stars come in bunches. The most famous bunch of stars on the sky is the Pleiades, a bright cluster that can be easily seen with the unaided eye. The Pleiades lies only about 450 light years away, formed about 100 million years ago, and will likely last about another 250 million years. Our Sun was likely born in a star cluster, but now, being about 4.5 billion years old, its stellar birth companions have long since dispersed. The Pleiades star cluster is pictured over Half Dome, a famous rock structure in Yosemite National Park in California, USA. The featured image is a composite of 28 foreground exposures and 174 images of the stellar background, all taken from the same location and by the same camera on the same night in October 2019. After calculating the timing of a future juxtaposition of the Pleiades and Half Dome, the astrophotrographer was unexpectedly rewarded by an electrical blackout, making the background sky unusually dark.',
        //         date: pictureDate ? pictureDate : '2022-07-19'
        //     }
        // }
        props.setPictureDate(res.data.date)
        setPictureData(res.data)
        console.log(res)
    }

    useEffect(() => {getPicture(props.pictureDate)}, [props.pictureDate])

    return (
        <div>
            <a href={pictureData.hdurl} target='_blank' rel='noreferrer'>
                {
                    pictureData.media_type === 'image' ?
                        <img 
                            className='daily-picture' 
                            src={pictureData.url} 
                            alt={`Copyright: ` + pictureData.copyright ? pictureData.copyright : 'public domain'}
                        />
                    :
                        <iframe 
                            src={pictureData.url} 
                            frameborder="0"
                            width='1000' height='500' 
                            title={pictureData.title}
                        />
                }
            </a>
            <h3>{pictureData.title}</h3>
            <p>{pictureData.explanation}</p>
        </div>
    )
}

export default DailyPicture