import React from 'react'
import photo1 from '../Photos/photo1.png'
import photo2 from '../Photos/photo2.png'
import pic10 from '../Photos/pic10.png'
import pic30 from '../Photos/pic30.png'
import pic40 from '../Photos/pic40.png'

function Projects() {
  return (
    <div className='grid grid-cols-1 gap-3 py-20 bg-blue-950'>
        <h1 className='ml-40 text-slate-400 text-3xl'>This <span className='text-teal-300 text-4xl m-1 ml-5 font-mono'> PORTFOLIO </span>is my React Router Project</h1>


      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 hover:shadow-lg hover:shadow-blue-500 transition duration-300' src={photo1} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Currency Converter using React</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 hover:shadow-lg hover:shadow-blue-500 transition duration-300' src={photo2} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Password Generator using React</p>
      </div>
      
      
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 hover:shadow-lg hover:shadow-blue-500 transition duration-300' src={pic10} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Chat</p>
      </div>
      
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 hover:shadow-lg hover:shadow-blue-500 transition duration-300' src={pic30} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Props using React</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 hover:shadow-lg hover:shadow-blue-500 transition duration-300' src={pic40} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Props using React</p>
      </div>
      
    </div>
  )
}

export default Projects
