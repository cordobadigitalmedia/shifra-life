import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    updateProgress, selectProgress
} from '../store/learningDataSlice'

const MarkComplete = ({ lessonid }) => {
    const progress = useSelector(selectProgress)
    const [complete, setComplete] = useState(false)
    const dispatch = useDispatch()

    console.log(lessonid);

    useEffect(() => {
        if (lessonid in progress) {
            setComplete(true);
        }
    }, [])

    const markComplete = () => {
        dispatch(updateProgress(lessonid));
        setComplete(true);
    }

    return (
        <button className={complete ? `btn btn--secondary mr-2` : `btn btn--primary mr-2`}
            onClick={() => markComplete()}>{complete ? `Lesson Complete` : `Mark Lesson Complete`}</button>
    )
}

export default MarkComplete