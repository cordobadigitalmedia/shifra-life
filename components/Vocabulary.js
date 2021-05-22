import React, { useState, useRef, useEffect } from 'react'
import { Switch } from '@headlessui/react'

const Vocabulary = ({ word, children }) => {
    const [showContent, setshowContent] = React.useState(true);

    return (
        <div className="border-solid border-2 border-blue-800 p-3 bg-yellow-100">
            <Switch.Group>
                <div className="flex items-center">
                    <Switch.Label className="mr-3 font-titleArabic text-2xl">{word}</Switch.Label>
                    <Switch
                        checked={showContent}
                        onChange={setshowContent}
                        className={`${showContent ? 'bg-blue-800' : 'bg-gray-300'
                            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    >
                        <span
                            className={`${showContent ? 'translate-x-6' : 'translate-x-1'
                                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                        />
                    </Switch>
                    <Switch.Label className="ml-2">{showContent ? children : `Show Meaning`}</Switch.Label>
                </div>
            </Switch.Group>
        </div>

    )
}

export default Vocabulary