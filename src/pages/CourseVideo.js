import React, { useEffect, useState } from "react";

function CourseVideo({ course }) {
    const [hourInput, setHourInput] = useState(undefined);
    const [minuteInput, setMinuteInput] = useState(undefined);
    const [secondInput, setSecondInput] = useState(undefined);
    const [totalSeconds, setTotalSeconds] = useState(0)

    useEffect(() => {
        let player; // Reference to the YouTube player
        console.log(course)
        const videoId = course.video_id
        const startTime = course.stopping_point
        const courseUrl = "https://www.youtube.com/embed/ua-CiDNNj30?si=zrbI_Hxa_4BSpM_7&amp;start=6892"
        // Function to initialize the YouTube player
        function initPlayer() {
            player = new window.YT.Player("youtube-player", {
                videoId: videoId,
                playerVars: {
                    start: {startTime},
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange,
                },
            });
        }

        // Function to handle player ready event
        function onPlayerReady(event) {
            // You can do any setup here when the player is ready
        }

        // Function to handle player state change events
        function onPlayerStateChange(event) {
            if (event.data === window.YT.PlayerState.PLAYING) {
                console.log('playing')
            }
            if (event.data === window.YT.PlayerState.PAUSED) {
                console.log('paused')
            }
        }

        // Load the YouTube Player API when the component mounts
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        script.onload = initPlayer;
        document.body.appendChild(script);

        // Cleanup function to remove the player when the component unmounts
        return () => {
            if (player) {
                player.destroy();
            }
        };
    }, []);

    const updateTime = () => {
        let hours = 0
        let minutes = 0
        let seconds = 0
        if (hourInput) {
            hours = Number(hourInput) * 60 * 60
        }
        if (minuteInput) {
            minutes = Number(minuteInput) * 60
        }
        if (secondInput) {
            seconds = Number(secondInput)
        }
        const t = hours + minutes + seconds;
        if (hours || minutes || seconds) {
            setTotalSeconds(t)
        }
    }

    return (
        <div>
            <div>
                <div>
                    <span>hours: </span>
                    <input
                        value={hourInput}
                        onChange={e => setHourInput(e.target.value)}
                    />
                </div>
                <div>
                    <span>minutes: </span>
                    <input
                        value={minuteInput}
                        onChange={e => setMinuteInput(e.target.value)}
                    />
                </div>
                <div>
                    <span>seconds: </span>
                    <input
                        value={secondInput}
                        onChange={e => setSecondInput(e.target.value)}
                    />
                </div>

                <button onClick={updateTime}>Update Times</button>
            </div>
            <div id="youtube-player"></div>
        </div>
    );
}

export default CourseVideo;
