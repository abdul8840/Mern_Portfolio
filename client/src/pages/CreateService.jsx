import { Select, TextInput, FileInput, Button } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateService = () => {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create Service</h1>
      <form className='flex flex-col gap-4'>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput 
            id="title"
            type="text"
            placeholder="Title"
            required={true}
            className="flex-1"
          />
        </div>
        <TextInput 
          id="description"
          type="text"
          placeholder="Description"
          required={true}
        />
        <ReactQuill 
          theme="snow" 
          placeholder='Write Something...' 
          className='h-72 mb-12' 
          required 
          />
        <Button type='submit' gradientDuoTone='purpleToPink'>
          Create Service
        </Button>
      </form>
    </div>
  )
}

export default CreateService