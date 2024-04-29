import React from "react";

function OrderListPage() {
  // Dummy data for orders
  const orders = [
    {
      id: 1,
      project: "Website Redesign",
      deliveryTime: "2024-05-01",
      price: 500,
    },
    {
      id: 2,
      project: "Mobile App Development",
      deliveryTime: "2024-05-03",
      price: 800,
    },
    { id: 3, project: "Logo Design", deliveryTime: "2024-05-05", price: 200 },
    // Add more orders as needed
  ];

  const handleAcceptOffer = (orderId) => {
    // This function should handle the logic when an offer is accepted
    console.log(`Offer ${orderId} accepted`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 underline text-center">Order List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center p-5">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg overflow-hidden shadow-md text-center md:text-left"
          >
            <div className="px-6 py-4">
              <h2 className="text-lg font-semibold mb-2">Order #{order.id}</h2>
              <p className="text-gray-600 mb-2">Project: {order.project}</p>
              <p className="text-gray-600 mb-2">
                Delivery Time: {order.deliveryTime}
              </p>
              <p className="text-gray-600 mb-2">
                Price: ${order.price.toFixed(2)}
              </p>
            </div>
            <div className="px-6 pb-4">
              <button
                onClick={() => handleAcceptOffer(order.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Accept Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderListPage;
