const audios = document.querySelectorAll("audio")
audios.forEach((audio) => {
  audio.addEventListener("play", () => {
    pauseOtherAudios(audio)
  })
})

function pauseOtherAudios(currentAudio) {
  audios.forEach((audio) => {
    if (audio !== currentAudio && !audio.paused) {
      audio.pause()
    }
  })
}
