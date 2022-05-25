import React, { useEffect, useState } from "react";
import Tool from "../Tool/Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-slate-800 text-4xl font-bold   py-10">
        Our Tools:{tools.length}
      </h2>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12">
        {tools.map((tool) => (
          <Tool key={tool.id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
