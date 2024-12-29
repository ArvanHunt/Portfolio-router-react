import React from 'react';


function About() {
  return (
    <div className='text-left py-20 bg-blue-950 h-screen'>
      
      <h1 className="mt-4 ml-10 mb-10 text-4xl text-stone-200">
        I craft websites with a great attention to details.
      </h1>

      <p className="mt-4 ml-10  text-xl text-gray-500"> Technologies I commonly use</p>
      
      <div className='flex mt-4'>
        
      <h1 className='ml-10'><img className='h-10 mt-2' 
      src="https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png" 
      alt="" /> </h1>
      
      <h1 className='ml-10'><img className='h-10 mt-2' 
      src="https://w7.pngwing.com/pngs/224/77/png-transparent-website-web-internet-css-style-css3-technology-social-media-logos-i-flat-colorful-icon-thumbnail.png" 
      alt="" /></h1>

      <h1 className='ml-10'><img className='h-10 mt-2' 
      src="https://w7.pngwing.com/pngs/199/348/png-transparent-javascript-programmer-programming-language-computer-programming-node-js-angle-text-rectangle-thumbnail.png" 
      alt="" /></h1>

      <h1 className='ml-10'><img className='h-10 mt-2' 
      src="https://seekvectors.com/files/download/Typescript-01.png" alt="" /></h1>

      <h1 className='ml-10'><img className='h-10 mt-2' 
      src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg" alt="" /></h1>
        
      </div>
        
      <p className='ml-10 mt-5 text-gray-500 font-mono text-xl' >When I’m not coding, 
        I explore new design trends, collaborate on exciting projects, and continuously 
      <span className='text-teal-300 text-2xl font-mono'> Expand </span> 
      my skill set.
      </p>
      <p className='ml-10 mt-5 text-gray-500 font-mono text-xl'>
        <span className='text-teal-300 text-2xl font-mono'>Let’s Connect</span> 
        to create something amazing together!
        </p>

    </div>

  );
  
}

export default About;