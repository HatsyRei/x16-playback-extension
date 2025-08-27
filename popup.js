document.getElementById('speed1').addEventListener('click', () => {
  setPlaybackSpeed(1);
});

document.getElementById('speed16').addEventListener('click', () => {
  setPlaybackSpeed(16);
});

function setPlaybackSpeed(speed) {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (s) => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => video.playbackRate = s);
      },
      args: [speed]
    });
  });
}