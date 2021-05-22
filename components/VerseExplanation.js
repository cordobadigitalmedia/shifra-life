import { Switch } from '@headlessui/react'
import React, { useState, useRef, useEffect } from 'react'

const VerseExplanation = ({ audiofiles, children }) => {
    const [showContent, setshowContent] = React.useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioPlayer = useRef();   // reference our audio component
    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }
    return (
        <div className="mt-3">
            <audio ref={audioPlayer} src={audiofiles[0]} onEnded={() => setIsPlaying(false)}></audio>
            <Switch.Group>
                <div className="flex items-center">
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
                    <Switch.Label className="ml-3">{showContent ? `Hide Explanation` : `Show Explanation`}</Switch.Label>
                    <button type="button" className="ml-3" onClick={togglePlayPause}>
                        <svg width="50" height="50" fill="none">
                            <circle className="text-gray-300 dark:text-gray-500" cx="25" cy="25" r="24" stroke="currentColor" strokeWidth="1.5" />
                            {isPlaying ? <path d="M18 16h4v18h-4V16zM28 16h4v18h-4z" fill="currentColor" /> : <path d="M18 16l18 10-18 10z" fill="currentColor" />}
                        </svg>
                    </button>
                    <Switch.Label className="ml-3">{isPlaying ? `Pause Audio` : `Play Audio`}</Switch.Label>
                </div>
            </Switch.Group>
            <div className={showContent ? "block pt-2" : "hidden"}>{children}</div>
        </div>
    )
}

export default VerseExplanation
