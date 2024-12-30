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
import pic50 from '../Photos/pic50.png'
import pic0 from '../Photos/project management tool.png'


function Projects() {
  return (
    <div className='grid grid-cols-3 py-5 gap-0 bg-blue-950 '>
          <div>
          <h1 className="ml-10 mt-8 text-slate-400 text-3xl">
              This
            <a
              href="https://github.com/ArvanHunt/Portfolio-router-react"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 text-4xl m-1 ml-5 font-mono underline"
            >
              PORTFOLIO 
            </a>
              is my
            <span className="text-teal-300 text-4xl m-1 ml-5 font-mono">
              React Router
            </span>
              Project.
            </h1>
            <p className="ml-10 mt-8 text-slate-400 text-xl">
               Click on PORTFOLIO to check this project 
            </p>
          </div> 

          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/ToDo-reactjs" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic50} 
                alt="ToDo - React" 
              />
            </a>
            <p className="mt-5 text-slate-400">ToDo - React</p>
          </div>

          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/Project-mangement-react" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic0} 
                alt="Project Management Tool - React" 
              />
            </a>
            <p className="mt-5 text-slate-400">Project Management Tool - React</p>
          </div>


          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/currency-react" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={photo1} 
                alt="Currency Converter - React" 
              />
            </a>
            <p className="mt-5 text-slate-400">Currency Converter - React</p>
          </div>
 

          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/e-commerce-reactjs" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic24} 
                alt="E-Cart - React" 
              />
            </a>
            <p className="mt-5 text-slate-400">E-Cart - React</p>
          </div>


          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/markdown-react" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic22} 
                alt="Markdown Preview - React" 
              />
            </a>
            <p className="mt-5 text-slate-400">Markdown Preview - React</p>
          </div>


          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/memory-game-react" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic23} 
                alt="Memory Game - React" 
              />
            </a>
            <p className="mt-5 text-slate-400">Memory Game - React</p>
          </div>


          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/expense-tracker-reactjs" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic21} 
                alt="Expense Tracker - React" 
              />
            </a>
            <p className="mt-5 text-slate-400">Expense Tracker - React</p>
          </div>


          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/Password-Generator-React" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={photo2} 
                alt="Password Generator - React" 
              />
            </a>
            <p className="mt-5 text-slate-400">Password Generator - React</p>
          </div>


          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/meme-generator-reactjs" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic20} 
                alt="Meme Generator - React" 
              />
            </a>
            <p className="mt-5 text-slate-400">Meme-Generator - React</p>
          </div>


          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/Tic-Tac-Toe" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic00} 
                alt="Tic Tac Toe - JavaScript" 
              />
            </a>
            <p className="mt-5 text-slate-400">Tic Tac Toe - JavaScript</p>
          </div>


          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/Chat-App" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic10} 
                alt="Chat - JavaScript" 
              />
            </a>
            <p className="mt-5 text-slate-400">Chat - JavaScript</p>
          </div>


          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/Speech-To-Text" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic30}  
                alt="Speech to Text - JavaScript" 
              />
            </a>
            <p className="mt-5 text-slate-400">Speech to Text - JavaScript</p>
          </div>


          <div className="ml-10 mt-10">
            <a 
              href="https://github.com/ArvanHunt/Text-To-Speech" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img  
                className="h-44 rounded-lg hover:shadow-lg hover:shadow-blue-500 transition duration-300" 
                src={pic40} 
                alt="Text to Speech - JavaScript" 
              />
            </a>
            <p className="mt-5 text-slate-400">Text to Speech - JavaScript</p>
          </div>

          <div>
          <p className="ml-10 mt-8 text-slate-400 text-3xl">
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
      
    </div>
  )
}

export default Projects
