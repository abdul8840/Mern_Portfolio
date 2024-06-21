import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CreatePost = () => {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create Post</h1>
      <form className='flex flex-col gap-4'>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput 
            id="title"
            type="text"
            placeholder="Title"
            required={true}
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="nodejs">Node Js</option>
            <option value="reactjs">React Js</option>
            <option value="nextjs">Next Js</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="reactnative">React Native</option>
          </Select>
        </div>
        <TextInput 
          id="description"
          type="text"
          placeholder="Description"
          required={true}
        />
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
          />
          <Button type='button' gradientDuoTone='purpleToBlue' size='sm' outline>
            Upload Image
          </Button>
        </div>
        <ReactQuill theme="snow" placeholder='Write Something...' className='h-72 mb-12' required />
        <Button type='submit' gradientDuoTone='purpleToPink'>
          Create Post
        </Button>
      </form>
    </div>
  )
}

export default CreatePost