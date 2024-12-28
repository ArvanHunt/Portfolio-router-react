import React from 'react'
import photo1 from '../Photos/photo1.png'
import photo2 from '../Photos/photo2.png'
import pic00 from '../Photos/pic00.png'
import pic10 from '../Photos/pic10.png'
import pic20 from '../Photos/pic20.png'
import pic30 from '../Photos/pic30.png'
import pic40 from '../Photos/pic40.png'
import pic24 from '../Photos/pic24.png'
import pic22 from '../Photos/pic22.png'
import pic23 from '../Photos/pic23.png'
import pic21 from '../Photos/pic21.png'


function Projects() {
  return (
    <div className='grid grid-cols-2 gap-0 py-5  bg-blue-950 '>
        <h1 className='ml-40 mt-8 text-slate-400 text-3xl'>This
             <span className='text-teal-300 text-4xl m-1 ml-5 font-mono'> PORTFOLIO </span>
             is my 
             <span className='text-teal-300 text-4xl m-1 ml-5 font-mono'>React Router</span>
              Project.
              </h1>
              

              <div>
          <img className='h-44 rounded-lg ml-40 mt-10 
          hover:shadow-lg hover:shadow-blue-500 transition duration-300' 
          src={photo1} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Currency Converter - React</p>
      </div>        
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 
          hover:shadow-lg hover:shadow-blue-500 transition duration-300' 
          src={pic24} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>E-Cart - React</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 
          hover:shadow-lg hover:shadow-blue-500 transition duration-300' 
          src={pic22} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Markdown Preview - React</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 
          hover:shadow-lg hover:shadow-blue-500 transition duration-300' 
          src={pic23} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Memory game - react</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 
          hover:shadow-lg hover:shadow-blue-500 transition duration-300' 
          src={pic21} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Expense Tracker - React</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 
          hover:shadow-lg hover:shadow-blue-500 transition duration-300' 
          src={photo2} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Password Generator - React</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 
          hover:shadow-lg hover:shadow-blue-500 transition duration-300' 
          src={pic20} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Meme-Generator - React</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 
          hover:shadow-lg hover:shadow-blue-500 transition duration-300' 
          src={pic00} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Tic Tac Toe - Java Script</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 hover:shadow-lg hover:shadow-blue-500 transition duration-300' src={pic10} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Chat - Java Script</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 hover:shadow-lg hover:shadow-blue-500 transition duration-300' src={pic30} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Speech to Text - Java Script</p>
      </div>
      <div>
          <img className='h-44 rounded-lg ml-40 mt-10 hover:shadow-lg hover:shadow-blue-500 transition duration-300' src={pic40} alt="curr conv" />
          <p className='ml-40 mt-5 text-slate-400'>Text to Speech - Java Script</p>
      </div>
      <p className="ml-40 mt-8 text-slate-400 text-3xl">
            More 
                <span className="text-teal-300 text-4xl m-1 ml-5 font-mono">Projects</span> 
            at 
             <a 
            href="https://github.com/ArvanHunt?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal-300 text-4xl m-1 ml-5 font-mono underline"
            >
            GitHub
            </a>
            </p>
      
    </div>
  )
}

export default Projects
