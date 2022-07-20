import { useState, useEffect } from "react"

const Selector = (props) => {

    const [inputDate, setInputDate] = useState('')

    const handleChange = (event) => {
        setInputDate(event.target.value)
        console.log(inputDate)
    }

    useEffect(() => {
        setInputDate(props.pictureDate)
    }, [props.pictureDate])

    return (
        <div className='selector'>
            <div>
                <button>{'<'}</button>
                <input type="date" onChange={(event) => {handleChange(event)}} value={inputDate} />
                <button>{'>'}</button>
            </div>
            <button onClick={()=>{props.setPictureDate(inputDate)}}>Submit Date</button>
        </div>
    )
}

export default Selector