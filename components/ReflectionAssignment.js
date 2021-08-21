import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    updateProgress, selectProgress
} from '../store/learningDataSlice'

const ReflectionAssignment = ({ lessonid }) => {
    const reflections = useSelector(selectReflections)
    const [reflection, setReflection] = useState("")
    const [emailExists, setEmailExists] = useState(false)
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

    // first check if email exist in storage
    // if it does set the state to show the reflection assignment box
    // also read if reflection assignment exists for that lesson and show it with last date submitted
    // Show button text to update, other show button to Add
    // if not show box to add email to log in
    // when reflection submitted
    // set state to reflection submitted with date of submission
    // 

    return (
        <div>
            <textarea class="mt-1 block w-full" rows="3"></textarea>
            <button className={complete ? `btn btn--secondary mr-2` : `btn btn--primary mr-2`}
            onClick={() => markComplete()}>{complete ? `Lesson Complete` : `Mark Lesson Complete`}</button>
        </div>

    )
}

export default ReflectionAssignment