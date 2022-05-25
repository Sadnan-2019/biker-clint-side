import React from "react";

const Gallery = () => {
  return (
    <div>
      <h2 className="text-center text-slate-800 text-4xl font-bold   py-10">
        Our  Gallery
      </h2>


      <div class="hero min-h-screen"   style={{backgroundImage: `url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/old-motorcycle-shop-mike-mcglothlen.jpg")`}}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello My Dear</h1>
      <p class="mb-5 text-2xl font-bold">Enjoy and Joyfull </p>
      <button class="btn btn-primary">Click More Gallery</button>
    </div>
  </div>
</div>

      
    </div>
  );
};

export default Gallery;
