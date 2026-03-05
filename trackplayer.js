const trackEls = [...document.querySelectorAll(".track")];
let currentTrack;

for (const trackEl of trackEls) {
  const audioEl = trackEl.querySelector("audio");
  trackEl.addEventListener("click", () => {
    if (audioEl !== currentTrack) {
      if (currentTrack) {
        currentTrack.pause();
        currentTrack.currentTime = 0;
      }

      currentTrack = audioEl;
    }

    audioEl.paused ? audioEl.play() : audioEl.pause();
  });  
}