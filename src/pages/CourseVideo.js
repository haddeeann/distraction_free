import React, { useEffect } from "react";

function CourseVideo({ videoId }) {
    useEffect(() => {
        let player; // Reference to the YouTube player

        // Function to initialize the YouTube player
        function initPlayer() {
            player = new window.YT.Player("youtube-player", {
                videoId: videoId,
                playerVars: {
                    start: '3600',
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
    }, [videoId]);

    return <div id="youtube-player"></div>;
}

export default CourseVideo;
