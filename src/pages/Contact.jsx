

import React from 'react';

function Contact() {
  return (
    <div className="text-left py-20 bg-blue-950 h-screen ">
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
      <p className="text-slate-500 m-5 ml-5 text-3xl">
        Phone : <span className="text-teal-300 text-xl font-mono">+91 8095454726</span>
      </p>
      <p className="text-slate-500 m-5 ml-5 text-3xl">
        Instagram : <span className="text-teal-300 text-xl font-mono">arvan_k15</span>
      </p>
    </div>
  );
}

export default Contact;
