import React, { useState, useRef, useEffect } from 'react'

const FullAudioPlayer = (props) => {
    const { audio, title, author, episode } = props;
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [barWidth, setBarWidth] = useState(0);
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            if (!audioPlayer.current.ended) {
                const seconds = Math.floor(audioPlayer.current.currentTime);
                setDuration(Math.floor(audioPlayer.current.duration));
                setCurrentTime(seconds);
                const percent = Math.floor(seconds / Math.floor(audioPlayer.current.duration) * 100);
                setBarWidth(percent);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            //animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            //cancelAnimationFrame(animationRef.current);
        }
    }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const whilePlaying = () => {
        //progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        //progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        //setCurrentTime(progressBar.current.value);
    }

    return (
        <div>
            <audio ref={audioPlayer} src={audio} onEnded={() => setIsPlaying(false)}></audio>
            <div className="border-solid border-8 border-blue-900 p-1 bg-yellow-100 rounded-xl">
                <div class="border-solid border-2 border-blue-800 p-2 rounded-sm">
                    <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
                        <button type="button" className="mx-auto" onClick={togglePlayPause}>
                            <svg width="50" height="50" fill="none">
                                <circle className="text-gray-300 dark:text-gray-500" cx="25" cy="25" r="24" stroke="currentColor" strokeWidth="1.5" />
                                {isPlaying ? <path d="M18 16h4v18h-4V16zM28 16h4v18h-4z" fill="currentColor" /> : <path d="M18 16l18 10-18 10z" fill="currentColor" />}
                            </svg>
                        </button>
                        <div className="min-w-0 flex-auto space-y-0.5">
                            <div className="my-1">
                                <span class="text-lime-600 dark:text-lime-400 text-sm sm:text-base lg:text-sm xl:text-base font-semibold uppercase">{episode}: </span>
                                <span class="text-black dark:text-white text-base sm:text-xl lg:text-base xl:text-xl font-semibold truncate">{title}</span>
                            </div>
                            <div className="pb-2 text-gray-500 dark:text-gray-400 text-base sm:text-lg lg:text-base xl:text-lg font-medium">{author}</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="bg-gray-500 dark:bg-black rounded-full overflow-hidden">
                            <div className="bg-white dark:bg-gray-500 h-1.5" ref={progressBar} role="progressbar" style={{ width: `${barWidth}%` }}></div>
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 flex justify-between text-sm font-medium tabular-nums">
                            <div>{calculateTime(currentTime)}</div>
                            <div>{calculateTime(duration - currentTime)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FullAudioPlayer