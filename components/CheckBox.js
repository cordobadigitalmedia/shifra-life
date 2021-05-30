import React, { useState, useRef, useEffect } from 'react'
import { Switch } from '@headlessui/react'

const CheckBox = ({ label }) => {
    const [checked, setChecked] = React.useState(false);
    const onChangeHandler = () => {
        setChecked();
        props.onChange(checked);
        //need to know what module and lesson this belongs to
        //update session store value
    }

    return (
        <div className="flex items-start">
            <Switch.Group>
                <div className="flex items-center">
                    <Switch
                        checked={checked}
                        onChange={() => onChangeHandler()}
                        className={`${checked ? 'bg-blue-800' : 'bg-gray-300'
                            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    >
                        <span
                            className={`${checked ? 'translate-x-6' : 'translate-x-1'
                                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                        />
                    </Switch>
                </div>
            </Switch.Group>
        </div>

    )
}

export default CheckBox