import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center text-slate-800 text-4xl font-bold   py-10">
        Answer My Question
      </h2>

      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 px-12">
        <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
            <h2 class="card-title">
              How will you improve the performance of a React Application?
            </h2>
            <p>
              Keeping component state local where necessary. Memoizing React
              components to prevent unnecessary re-renders. Code-splitting React
              using dynamic import. Windowing or list virtualization in
              React.Ignore Lazy loading images in React{" "}
            </p>
          </div>
        </div>
        <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
            <h2 class="card-title">How does prototypical inheritance work? </h2>
            <p>
              1.The Prototypal Inheritance is a feature in javascript used to
              add methods and properties in objects 2.By this method one object
              can inharite properties and method can another object. 3.Protype
              inheritance inharite also prototype object from other prototype.
              4.It s allow us to reuse the properties and method from one
              javascript object to another reference pointer function.
              5.Traditionally, in order to get and set the Prototype of an
              object, we use Object. getPrototypeOf and Object. 6.It is
              performed via a process of reusing existing objects.
            </p>
          </div>
        </div>
      </div>

      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 px-12">
        <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
            <h2 class="card-title">
              Why you do not set the state directly in React?
            </h2>
            <p>
              For example, if you have const [products, setProducts] =
              useState([]). Why you do not set products = [...] instead, you use
              the setProducts One should never update the state directly because
              of the following reasons: If you update it directly, calling the
              setState() afterward may just replace the update you made. When
              you directly update the state, it does not change this. You have
              an array of products. Each product has a name, price, description,
              etc.
            </p>
          </div>
        </div>
        <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
          <div class="card-body">
            <h2 class="card-title">
              How will you implement a search to find products by name?{" "}
            </h2>
            <p>
              You can use the Array.prototype.filter function which takes a
              callback and filters accordingly. Per the documentation: The
              filter() method creates a new array with all elements that pass
              the test implemented by the provided function. The callback, which
              is the provided function, takes three arguments. From the
              documentation: callback Function is a predicate, to test each
              element of the array. Return true to keep the element, false
              otherwise, taking three arguments: element The current element
              being processed in the array. index The index of the current
              element being processed in the array. array The array filter was
              called upon. We may use element to check the current element and
              test if it should be filtered or not, like so:{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="	 ">
        <div className=" grid content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-4 px-12    ">
          <div class="card   bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
            <div class="card-body">
              <h2 class="card-title">What are the different ways to manage a state in a React application? </h2>
              <p>There are 4 different ways for manage a state in React application. 1. Local state. 2. Global state. 3. Server state. 4. URL state. </p>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
