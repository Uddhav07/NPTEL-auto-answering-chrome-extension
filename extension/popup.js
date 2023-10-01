document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.getElementById("button1");
  button1.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}).then((tabs) => {
      const tab = tabs[0];
      chrome.scripting.executeScript({
        target: {tabId:tab.id, allFrames: true},
        files: ['week6.js'],
      });
    });
  });
});