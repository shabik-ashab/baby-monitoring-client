import { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import FeedFOrEpx from './FeedFOrEpx';

const CanvasForExp = ({ openMonitor, setOpenMonitor }) => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [initialized, setInitialized] = useState(false);
  const [emotions, setEmotions] = useState([]);

  // Map emotions to corresponding emojis
  const emotionToEmoji = {
    happy: '😊',
    sad: '😢',
    angry: '😠',
    surprised: '😲',
    neutral: '😐',
    // Add other emotions as needed
  };

  const lastFiveEmotions = emotions.slice(-5);

  useEffect(() => {
    // Load face-api.js models
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
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error(err));
  };

  const handleVideoPlay = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const canvas = canvasRef.current;
      const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
      faceapi.matchDimensions(canvas, displaySize);
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

      if (detections.length > 0) {
        const expressions = detections[0].expressions;
        const maxValue = Math.max(...Object.values(expressions));
        const dominantEmotion = Object.keys(expressions).find(
          (key) => expressions[key] === maxValue
        );

        const currentTime = new Date().toLocaleTimeString();

        setEmotions((prevEmotions) => [
          ...prevEmotions,
          { emotion: dominantEmotion, time: currentTime },
        ]);
      }
    }, 100);
  };

  return (
    <div className="flex lg:flex-row flex-col justify-evenly lg:p-20 p-[20px] gap-20">
      <div className="relative overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          width="720"
          height="560"
          onPlay={handleVideoPlay}
          className="relative z-10"
        />
        <canvas
          ref={canvasRef}
          width="720"
          height="560"
          className="absolute top-[0px] left-[0px] z-20"
        />
      </div>

      <FeedFOrEpx
        className="relative"
        lastFiveEmotions={lastFiveEmotions}
        emotionToEmoji={emotionToEmoji}
        openMonitor={openMonitor}
        setOpenMonitor={setOpenMonitor}
      />
    </div>
  );
};

export default CanvasForExp;
