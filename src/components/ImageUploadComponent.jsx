import axios from 'axios';
import React from 'react';

const sendImageToBackend = async (file) => {
  const formData = new FormData();
  formData.append('image', file); // Append the file to FormData

  try {
    const response = await axios.post('http://localhost:5000/detect-emotion', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Image uploaded successfully:', response.data);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    sendImageToBackend(file);
  }
};

const ImageUploadComponent = () => (
  <div>
    <input type="file" onChange={handleImageUpload} />
  </div>
);

export default ImageUploadComponent;
