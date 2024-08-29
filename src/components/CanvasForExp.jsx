import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import FeedFOrEpx from './FeedFOrEpx';

const CanvasForExp = ({ openMonitor, setOpenMonitor }) => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [initialized, setInitialized] = useState(false);
  const [emotions, setEmotions] = useState([]);
  const [lastSadEmotion, setLastSadEmotion] = useState(null); // Track the last sad emotion
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const [alertTime, setAlertTime] = useState(''); // State to manage alert time
  const alertRef = useRef(); // Ref for the alert modal

  const emotionToEmoji = {
    happy: '😊',
    sad: '😢',
    angry: '😠',
    surprised: '😲',
    neutral: '😐',
  };

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setInitialized(true);
    };
    loadModels();
  }, []);

  useEffect(() => {
    if (initialized) {
      startVideo();
    }
  }, [initialized]);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener('play', handleVideoPlay);
      })
      .catch((err) => console.error(err));
  };

  const captureScreenshot = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL(); // Return screenshot as base64 encoded image URL
  };

  const detectEmotion = async () => {
    if (videoRef.current) {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      if (detections.length > 0) {
        const expressions = detections[0].expressions;
        const maxValue = Math.max(...Object.values(expressions));
        const dominantEmotion = Object.keys(expressions).find(
          (key) => expressions[key] === maxValue
        );

        const currentTime = new Date().toLocaleTimeString();

        // Add emotion to state
        setEmotions((prevEmotions) => {
          const newEmotions = [
            ...prevEmotions,
            { emotion: dominantEmotion, time: currentTime },
          ];
          return newEmotions.slice(-5);
        });

        // If sad, update the lastSadEmotion state with the screenshot and timestamp
        if (dominantEmotion === 'sad') {
          const screenshot = captureScreenshot();
          setLastSadEmotion({
            emotion: dominantEmotion,
            time: currentTime,
            screenshot,
          });
          showSadEmotionAlert(currentTime); // Show an alert with the timestamp
        }

        return true; // Face detected and emotion updated
      }
    }
    return false; // No face detected
  };

  const handleVideoPlay = () => {
    const canvas = canvasRef.current;
    const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
    faceapi.matchDimensions(canvas, displaySize);

    const drawDetections = async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    };

    const attemptInitialDetection = async () => {
      const detected = await detectEmotion();
      if (detected) {
        // Face detected, set up interval for future detections
        setInterval(detectEmotion, 3000);
      } else {
        // No face detected, try again in a short while
        setTimeout(attemptInitialDetection, 500);
      }
    };

    // Start attempting to detect the initial emotion
    attemptInitialDetection();

    // Set up the interval for drawing detections
    setInterval(drawDetections, 100);
  };

  // Function to show an alert when a sad emotion is detected
  const showSadEmotionAlert = (time) => {
    setAlertTime(time); // Set the alert time
    setShowAlert(true); // Show the alert modal

    // Automatically close the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 7000);
  };

  // Close the modal when clicking outside of it
  const handleOutsideClick = (e) => {
    if (alertRef.current && !alertRef.current.contains(e.target)) {
      setShowAlert(false);
    }
  };

  useEffect(() => {
    if (showAlert) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showAlert]);

  return (
    <div className="flex lg:flex-row flex-col justify-evenly lg:p-20 p-[20px] gap-20">
      <div className="relative overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          width="720"
          height="560"
          className="relative z-10"
        />
        <canvas
          ref={canvasRef}
          width="720"
          height="560"
          className="absolute top-[0px] left-[0px] z-20"
        />
      </div>

      {showAlert && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={alertRef} className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowAlert(false)}
            >
              &times;
            </button>
            <p className="text-xl font-semibold text-red-600">Sad Emotion Detected 😢</p>
            <p className="text-gray-700 mt-2">at {alertTime}</p>
            <img
              src={lastSadEmotion?.screenshot}
              alt="Sad Emotion Screenshot"
              className="mt-4 border border-gray-300 rounded-lg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      )}

      <FeedFOrEpx
        className="relative"
        lastFiveEmotions={emotions}
        emotionToEmoji={emotionToEmoji}
        lastSadEmotion={lastSadEmotion} // Pass lastSadEmotion as a prop
        openMonitor={openMonitor}
        setOpenMonitor={setOpenMonitor}
      />
    </div>
  );
};

export default CanvasForExp;
