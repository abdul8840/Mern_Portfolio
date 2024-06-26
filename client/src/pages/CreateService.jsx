import { Button, FileInput, Select, TextInput, Alert } from 'flowbite-react'
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase.js';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from 'react-router-dom';

const CreateService = () => {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUpdloadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/service/createservice`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      })
      const data = await res.json()
      if(!res.ok){
        setPublishError(error.message);
      }
      if(res.ok){
        setPublishError(null);
        navigate('/dashboard?tab=services');
      }
      
    } catch (error) {
      setPublishError(error)
    }
  }

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create Service</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput 
            id="serviceTitle"
            type="text"
            placeholder="Service Title"
            required={true}
            className="flex-1"
            onChange={(e) => {
              setFormData({ ...formData, serviceTitle: e.target.value })
            }}
          />
        </div>
        <TextInput 
          id="serviceDescription"
          type="text"
          placeholder="Service Description"
          required={true}
          onChange={(e) => {
            setFormData({ ...formData, serviceDescription: e.target.value })
          }}
        />
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button 
            type='button' 
            gradientDuoTone='purpleToBlue' 
            size='sm' 
            outline 
            onClick={handleUpdloadImage}
            disabled={imageUploadProgress}
            >
          {
            imageUploadProgress ? 
            <div className="w-16 h-16">
              <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0}%`} />
            </div>
            : 'Upload Image'
          }
          </Button>
        </div>
        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover'
          />
        )
        }
        <ReactQuill 
          theme="snow" 
          placeholder='Write Something...' 
          className='h-72 mb-12' 
          required 
          onChange={(value) => 
            setFormData({ ...formData, serviceContent: value })
          }
          />
        <Button type='submit' gradientDuoTone='purpleToPink'>
          Create Service
        </Button>
        {
          publishError && <Alert className='mt-5' color='failure'>{publishError}</Alert>
        }
      </form>
    </div>
  )
}

export default CreateService