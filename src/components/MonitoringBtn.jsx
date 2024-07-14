


import { useEffect, useRef, useState } from 'react';
import Feed from './Feed';
// import axios from 'axios';

function App() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [initialized, setInitialized] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [openMonitor, setOpenMonitor] = useState(false);



  useEffect(() => {
    startVideo();
  }, []);

  useEffect(() => {
    if (initialized) {
      const interval = setInterval(captureImage, 5000); // Capture image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [initialized]);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setInitialized(true);
      })
      .catch((err) => console.error('Error accessing webcam:', err));
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(blob => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result); // Save the image data to state
      };
      reader.readAsDataURL(blob);
    }, 'image/jpeg');
  };

  useEffect(() => {
    if (imageData) {
      sendImageToBackend(imageData);
    }
  }, [imageData]);

  const sendImageToBackend = (imageData) => {
    const formData = new FormData();
    formData.append('image', imageData);

    //   axios.post('http://localhost:5000/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   })
    //   .then(response => console.log('Image uploaded successfully:', response.data))
    //   .catch(error => console.error('Error uploading image:', error));

    console.log(imageData)
  };

  return (
    <div className="">

     

      {
        openMonitor ?  
        <div className='flex lg:flex-row flex-col m-20 gap-20'>
          <video className='rounded-[20px]' ref={videoRef} autoPlay muted width="720" height="560" />
          <canvas className='rounded-[20px]' ref={canvasRef} width="720" height="560" style={{ display: 'none' }} />
         <Feed openMonitor={openMonitor} setOpenMonitor={setImageData}/>
        </div>
        : 
        <div className='h-[100vh] flex justify-center items-center'>

        <button className="btn btn-neutral" onClick={() => setOpenMonitor(!openMonitor)}>Start Monitoring</button>
      </div>


      }

    </div>
  );
}

export default App;


