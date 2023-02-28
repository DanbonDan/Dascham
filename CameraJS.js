// get the video and canvas elements from the HTML page
const video = document.getElementById("video");
const captureBtn = document.getElementById("capture-btn");
const previewImg = document.getElementById("preview");

// get the user's camera stream and display it in the video element
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
});

// function to capture the image from the video stream
function captureImage() {
  // create a canvas element to hold the captured image
  const canvas = document.createElement("canvas");

  // set the canvas dimensions to match the video
