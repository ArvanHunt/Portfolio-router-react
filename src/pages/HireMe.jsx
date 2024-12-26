import React from 'react';
import Resume from '../assets/Arvan_resume_frontend_fresher-1.pdf'


function HireMe() {
  return (
    <div className="py-20 bg-blue-950 h-screen pl-20">

      <h1 className="text-gray-500 text-lg ml-5 mb-11 font-mono ">
      <span className='text-teal-300 font-mono text-2xl'>Let's </span> Build Something 
      <span className='text-teal-300 font-mono text-2xl'> Amazing</span> Together!
      </h1>

      <p className="mt-4 ml-5 text-xl text-slate-500">
        I am a
        <span className='text-teal-300 text-2xl font-mono'> Passionate</span> front-end developer 
      <span className='text-teal-300 text-2xl font-mono'> Skilled</span> in crafting responsive and user-friendly web applications.
      </p>

      <p className='text-slate-500 mt-4 ml-5 mr-80 text-xl'> With expertise in 
      <span className='text-teal-300 text-2xl font-mono'> HTML, CSS, Tailwind CSS, 
        JavaScript, TypeScript, and React.</span> I specialize in turning ideas into functional,
         visually appealing digital experiences.
      </p>

      <p className='text-slate-500 mt-4 ml-5 mr-80 text-xl'>If you're looking for a
        <span className='text-teal-300 text-2xl font-mono'> Frontend Developer</span> 
        who values clean design, efficient code, and collaboration, I'm
      <span className='text-teal-300 text-2xl font-mono'> ready </span>
       to contribute to your team's success. Let's create something impactful together!
      </p>

      <h1 className='text-slate-500 mt-4 ml-5 mb-11 text-xl'>Ready to hire me? Feel free to get in touch or
      <span className='text-teal-300 text-2xl font-mono'> Download</span> my<span className='text-teal-300 text-2xl font-mono'> Resume</span> to learn more about my
      <span className='text-teal-300 text-2xl font-mono'> Skills </span> 
      and experience.
      </h1>

      <h1 className="text-slate-500 m-5 ml-5 text-3xl">
        LinkedIn :{' '}
        <a
          href="https://www.linkedin.com/in/arvankumar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 text-xl font-mono underline hover:text-teal-400"
        >
          www.linkedin.com/in/arvankumar/
        </a>
      </h1>

      <p className="text-slate-500 m-5 ml-5 text-3xl">
        Email :{' '}
        <a
          href="mailto:arvankumar95@gmail.com"
          className="text-teal-300 text-xl font-mono underline hover:text-teal-400"
        >
          arvankumar95@gmail.com
        </a>
      </p>

      <h1 className="text-slate-500 m-5 ml-5 text-3xl">
        Github :{' '}
        <a
          href="https://github.com/ArvanHunt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 text-xl font-mono underline hover:text-teal-400"
        >
          https://github.com/ArvanHunt
        </a>
      </h1>

      <p className="text-slate-500 m-5 ml-5 text-3xl">
        Phone : <span className="text-teal-300 text-xl font-mono">+91 8095454726</span>
      </p>

      <p className="text-slate-500 m-5 ml-5 text-3xl">
        Instagram : <span className="text-teal-300 text-xl font-mono">arvan_k15</span>
      </p>

      <div>
          <a
            href={Resume}
            download="Resume"
            className="border-2 px-7 py-3 m-5 text-teal-300 border-teal-300 rounded-md text-xs font-mono
             hover:bg-teal-300 hover:text-blue-950 transition duration-300"
          >
            Download Resume!
          </a>
        </div>

    </div>

  );

}

export default HireMe;