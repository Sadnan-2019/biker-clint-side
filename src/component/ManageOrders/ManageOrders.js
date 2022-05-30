import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://shrouded-beyond-12388.herokuapp.com/manage-orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <div class="overflow-x-auto">
        <h3 className="text-2xl text-center font-bold mb-4">Manage Orders</h3>
        <table class="table w-full">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Tools Name</th>
              <th>Price</th>
              <th>Name</th>
              <th>Email</th>
              <th>Quentity</th>
              <th>Phone</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{order.toolsName}</td>
                <td>${order.price}</td>

                <td>{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td>{order.totalQuentity}</td>
                <td>{order.phone}</td>
                <td>
                  <img src={order.img} alt="" className="w-[20%]" />
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
