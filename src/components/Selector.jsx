import { useState, useEffect } from "react"

const Selector = (props) => {

    const [inputDate, setInputDate] = useState('')

    const handleChange = (event) => {
        setInputDate(event.target.value)
        console.log(inputDate)
    }

    const addDays = (dateString, days) => {
        console.log(new Date(dateString))
        let milliseconds = Date.parse(dateString)
        milliseconds += 86400000 * days
        const newDate = new Date(milliseconds)
        console.log(newDate)
        const newDateString = newDate.toISOString().substring(0, 10)
        console.log(newDateString)
        return newDateString
    }

    const adjustDate = (days) => {
        props.setPictureDate(addDays(props.pictureDate, days))
    }

    useEffect(() => {
        setInputDate(props.pictureDate)
    }, [props.pictureDate])

    return (
        <div className='selector'>
            <div>
                <button onClick={() => {adjustDate(-1)}}>{'<'}</button>
                <input type="date" onChange={(event) => {handleChange(event)}} value={inputDate} />
                <button onClick={() => {adjustDate(1)}}>{'>'}</button>
            </div>
            <button onClick={()=>{props.setPictureDate(inputDate)}}>Submit Date</button>
        </div>
    )
}

export default Selector