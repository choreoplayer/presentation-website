const video = document.querySelector('.choreoplayer-presentation-video')
const logoText = document.querySelector('.logotext')

if (video !== null) {
  video.onplay = (event) => {
    logoText.style.display = 'none'
    console.log('hello')
  }
} else {
  console.log('video element not found')
}
