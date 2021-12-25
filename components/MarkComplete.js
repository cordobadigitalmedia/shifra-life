import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProgress, selectProgress } from '../store/learningDataSlice'

const MarkComplete = ({ lessonid }) => {
  const progress = useSelector(selectProgress)
  const [complete, setComplete] = useState(false)
  const dispatch = useDispatch()

  console.log(lessonid)

  useEffect(() => {
    if (lessonid in progress) {
      setComplete(true)
    }
  }, [lessonid, progress])

  const markComplete = () => {
    dispatch(updateProgress(lessonid))
    setComplete(true)
  }

  return (
    <div>
      <textarea className="mt-1 block w-full" rows="3">
        {' '}
      </textarea>{' '}
      <button
        className={complete ? `btn btn--secondary mr-2` : `btn btn--primary mr-2`}
        onClick={() => markComplete()}
      >
        {' '}
        {complete ? `Lesson Complete` : `Mark Lesson Complete`}{' '}
      </button>{' '}
    </div>
  )
}

export default MarkComplete
