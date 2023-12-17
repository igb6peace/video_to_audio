chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "convertVideoToAudio") {
      var videos = document.querySelectorAll('video');
      if (videos.length > 0) {
        videos[0].muted = false; // 確実に音声が聞こえるように
        var audio = new Audio();
        audio.src = videos[0].src;
        audio.play();
      } else {
        alert("No video found on this page.");
      }
    }
  });
  