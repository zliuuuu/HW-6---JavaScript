
var video = document.getElementById("player1");

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
});

document.getElementById('play').addEventListener('click', function() {
	video.play();
	updateVolumeDisplay();
});

document.getElementById('pause').addEventListener('click', function() {
	video.pause();
});

document.getElementById('slower').addEventListener('click', function() {
	video.playbackRate *= 0.9;
	console.log('New speed: ' + video.playbackRate.toFixed(5));
});

document.getElementById('faster').addEventListener('click', function() {
	video.playbackRate /= 0.9;
	console.log('New speed: ' + video.playbackRate.toFixed(5));
});


document.getElementById('skip').addEventListener('click', function() {
	var newTime = video.currentTime + 10;
	video.currentTime = newTime > video.duration ? 0 : newTime;
	console.log('Current location: ' + video.currentTime.toFixed(2));
});
//Mute
document.querySelector("#mute").addEventListener("click", function () {
	video.muted = !video.muted;
	this.innerHTML = video.muted ? "Unmute" : "Mute";
  });

//change volume
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	updateVolumeDisplay();
  });


  document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
  });
  
  document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
  });

function updateVolumeDisplay() {
	document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
  }

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

