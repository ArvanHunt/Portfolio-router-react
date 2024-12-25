import React from 'react';

function Home() {
  return (
    <div className="text-left py-20 bg-blue-950 h-screen">
      <div className='grid pl-12'>
      {/* <h1 className="text-2xl font-bold m-3">Welcome to</h1>
      <h1 className="text-9xl font-weight: 900 m-3">Arvan Kumar's</h1>
      <h1 className="text-7xl font-bold m-3 hover:underline">Portfolio</h1>
      <p className="mt-4 text-lg hover:text-shadow-lg hover:text-blue-500 transition-all duration-300 text-gray-600">
        I'm a Front-End Developer passionate about creating beautiful web experiences.
      </p> */}
      <p className='text-teal-300 text-xs m-5 ml-5 font-mono'>Hi, my name is</p>

      <h1 className='text-6xl text-stone-200 m-5'>Arvan Kumar.</h1>

      <h1 className='text-5xl text-slate-400 m-5'>I build things for the web.</h1>

      <p className='text-xs text-slate-400 m-5'>"I am a passionate front-end developer skilled in <span className='text-teal-300 text-sm '>HTML, CSS, Tailwind CSS, JavaScript, TypeScript,</span> and <span className='text-teal-300 text-sm '>React</span> ." </p>

      <p className='text-xs text-slate-400 m-5'>"I specialize in crafting 

        <span className='text-teal-300 text-sm '> Responsive, User-friendly </span> 
        web applications with a focus on clean design and functionality."</p>

        <div className='.'><button className='border-2 px-7 py-3 m-5 text-teal-300 border-teal-300 rounded-md text-xs font-mono'>Check out my resume!</button></div>
      </div>
    </div>
  );
}

export default Home;