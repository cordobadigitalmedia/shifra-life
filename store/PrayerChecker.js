import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch } from '@headlessui/react'

import {
    updateTracking,
    selectTracking,
} from './learningDataSlice'
export function PrayerChecker(props) {
    const { selectedDate, currentChapter } = props;
    const tracking = useSelector(selectTracking)
    let [dayStatus, setDayStatus] = useState(false);
    if (currentChapter in tracking) {
        if (selectedDate in tracking[currentChapter]) {
            //setDayStatus(tracking[currentChapter][selectedDate]);
        }
    }
    console.log(tracking);
    const dispatch = useDispatch()
    const updateCheck = () => {
        setDayStatus(!dayStatus);
        dispatch(updateTracking({ date: selectedDate, checked: dayStatus, chapter: currentChapter }));
    }

    return (
        <div>
            <Switch.Group>
                <div className="flex items-center">
                    <Switch
                        checked={dayStatus}
                        onChange={() => updateCheck()}
                        className={`${dayStatus ? 'bg-blue-800' : 'bg-gray-300'
                            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    >
                        <span
                            className={`${dayStatus ? 'translate-x-6' : 'translate-x-1'
                                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                        />
                    </Switch>
                </div>
            </Switch.Group>
        </div>
    )
}
