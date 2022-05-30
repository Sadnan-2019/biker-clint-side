import React from "react";
import useTools from "../../hooks/useTools";

const ManageTools = () => {
  const [tools, setTools] = useTools();

  const handleDelete = (id) => {
    // console.log(id)

    const proceed = window.confirm("Are you sure");
    if (proceed) {
      const url = `https://shrouded-beyond-12388.herokuapp.com/delete-tools/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaning = tools.filter((tool) => tool._id !== id);
          setTools(remaning);

          console.log(data);
        });
    }
  };

  return (
    <div>
      {/* <h4>my appoinment:{appoinment.length}</h4> */}
      <div class="overflow-x-auto">
        <h3 className="text-2xl text-center font-bold mb-4">Manage Tools</h3>
        <table class="table w-full">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Short-description</th>
              <th>Available quantity</th>
              <th>Minimum quantity</th>
              <th>Price</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{tool.name}</td>
                <td>{tool.shortdescription}</td>
                <td>{tool.availablequantity}</td>

                <td>{tool.minimumquantity}</td>
                <td>${tool.price}</td>
                <td>
                  <img src={tool.img} alt="" className="w-[20%]" />
                </td>
                <td>
                  <button className="" onClick={() => handleDelete(tool._id)}>
                    <i class="fa-solid   fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTools;
