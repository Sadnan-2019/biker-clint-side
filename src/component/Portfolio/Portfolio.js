import React from "react";

const Portfolio = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 px-12 py-12 ">
      <div>
        <img
          src="https://cdn4.vectorstock.com/i/thumb-large/26/38/professional-programmer-character-smiling-man-vector-21172638.jpg"
          alt=""
        />
        <p className="text-2xl font-bold">I'm Sadnan Hoosain</p>
        <p className="font-bold">
          A self-motivated and enthusiastic web developer with a deep interest
          in JavaScript. To work in the Software industry with modern web
          technologies of different local & multinational Software/ IT agencies
          of Bangladesh and grow rapidly with increasing responsibilities.
        </p>
      </div>
      <div className="">
        <a
          href="https://graceful-fairy-8681ee.netlify.app/"
          className="text-2xl font-bold "
        >
          Resume
        </a>
        
        <p className="text-2xl mt-2 text-teal-900 mb-5">Expertise</p>

        <p class="btn btn-active mx-2">HTML</p>
        <p class="btn btn-active btn-primary mx-2 ">CSS</p>
        <p class="btn btn-active btn-secondary mx-2">PHP</p>
        <p class="btn btn-active btn-accent mx-2">BOOTSTRAP</p>
        <p class="btn btn-active btn-ghost mx-2">REACT COMPONENT</p>
        <div className="mt-10">
        <a
          href="https://www.linkedin.com/in/md-sadnan-hossain-7a6746214/"
          className="text-2xl font-bold  "
        >
          LinkedIn
        </a>
        
        <p className="text-2xl mt-2 text-teal-900 mb-5">Interested</p>

        <p class="btn btn-active mx-2">Node Js</p>
        <p class="btn btn-active btn-primary mx-2 ">Node express</p>
        <p class="btn btn-active btn-secondary mx-2">MongoBD</p>
        <p class="btn btn-active btn-accent mx-2">Firebase</p>
        <p class="btn btn-active btn-accent mx-2 mt-3">REACT PACAKGE</p>
         
        
      </div>
      </div>
    
      
    </div>
  );
};

export default Portfolio;
