import { useParams } from 'react-router-dom';
import GoBack from '../../../../components/GoBack';
import { useState } from 'react';

function Button({ classButton, events, title ,type }) {
  return (
    <div className="flex items-center justify-end">
      <button  type={type}   className={`${classButton}`}>
        {title}
      </button>
    </div>
  );
}

const Unit = () => {
  const { unit } = useParams();
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const video = form.video.files[0];
    const pdf = form.pdf.files[0];
    const title = form.title.value;
    const description = form.description.value;

    // log  data
    if (!video || !pdf) {
      setMessage('Both video and PDF files are required!');
      return;
    }

    const formData = new FormData();
    formData.append('video', video);
    formData.append('pdf', pdf);
    formData.append('title', title);
    formData.append('description', description);
    console.log(pdf, title, description,video);


    setUploading(true);
    setMessage('Uploading...');

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload files');
      }

      const result = await response.json();
      setMessage('Upload successful!');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setUploading(false);
    }


  };

  return (
    <div>
      {/* Head */}

      {/* Body */}
      <div className="flex w-full items-start flex-col">
        <form onSubmit={handleFormSubmit} className="w-full">
      <div className="flex">
        <GoBack title={unit} />
        <div className="flex-1 flex justify-end gap-x-2">
          <Button
            events={() => console.log('Test')}
            classButton="bg-primary py-2 px-2 text-white rounded-md"
            title="Add Unit Test"
          />
          <Button
            classButton="bg-primary py-2 px-2 text-white rounded-md"
            title="Submit"
            type="submit"
          />
        </div>
      </div>
          <div className="flex flex-col w-full md:w-1/2 my-4 gap-y-4">
            <label htmlFor="title" className="text-base font-normal text-[#00000078]">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2"
              required
            />

            <label htmlFor="description" className="text-base font-normal text-[#00000078]">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="bg-[#E8E8E8] h-36 rounded-lg outline-none ring-0 py-1 px-2"
              required
            />
          </div>

          <div className="flex justify-between gap-x-8">
            {/* Upload Video */}
            <div className="w-full">
              <label htmlFor="video" className="text-[#00000078] py-4">
                Upload Video:
              </label>
              <div className="w-full h-72 border-dashed border-gray-300 border rounded-md flex items-center justify-center mt-4">
                <div className="flex justify-center w-full flex-col items-center pb-10">
                  <img src="/public/Video/video.svg" alt="" className="w-auto absolute cursor-pointer" />
                  <input
                    id="video"
                    name="video"
                    type="file"
                    accept="video/*"
                    className="cursor-pointer opacity-0 z-20 py-7 mt-10"
                    required
                  />
                  <span className="mt-2">
                    Drop Your Video Here or <span className="text-blue-600">Browse</span>
                  </span>
                  <span className="text-[#00000078] text-sm">Supports MP4</span>
                </div>
              </div>
            </div>

            {/* Upload PDF */}
            <div className="w-full">
              <label htmlFor="pdf" className="text-[#00000078] py-4">
                Upload PDF:
              </label>
              <div className="w-full h-72 border-dashed border-gray-300 border rounded-md flex items-center justify-center mt-4">
                <div className="flex justify-center w-full flex-col items-center pb-10">
                  <img src="/public/Video/pdfIcon.svg" alt="" className="w-auto absolute cursor-pointer" />
                  <input
                    id="pdf"
                    name="pdf"
                    type="file"
                    accept="application/pdf"
                    className="cursor-pointer opacity-0 z-20 py-7 mt-10"
                    required
                  />
                  <span className="mt-2">
                    Drop Your Material Here or <span className="text-blue-600">Browse</span>
                  </span>
                  <span className="text-[#00000078] text-sm">Supports PDF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className='w-full bg-zinc-300  h-32'>

          </div>
          {/* <div className="mt-4">
            <button
              type="submit"
              disabled={uploading}
              className="bg-primary py-2 px-4 text-white rounded-md"
            >
              {uploading ? 'Uploading...' : 'Upload Files'}
            </button>
          </div> */}

          {message && (
            <p className={`mt-4 ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Unit;
