import React, { useEffect, useState } from 'react';

const ManageOrders = () => {

          const [orders, setOrders] = useState([]);
          useEffect(()=>{

                    fetch("http://localhost:5000/manage-orders")
     .then((res) => res.json())
     .then((data) => setOrders(data));
          },[])
          return (
                    <div>
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
            {orders.map((tool, i) => (
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
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>  
                    </div>
          );
};

export default ManageOrders;