import React, { useState } from "react";
import { Link } from "react-router-dom"

function BookingOrder() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderStatus, setOrderStatus] = useState("");
  const [project, setProject] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [price, setPrice] = useState("");
  const [Order, setOrder] = useState(false);
  const [inputvalues, setinputvalues] = useState(false)

  // Function to get today's date in the correct format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Add leading zero if month or day is less than 10
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  const handleOrderRequest = () => {
    // Simulate order request
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderStatus(
        "Your order has been Requested! Return to this page to see the order status while seller accepts your offer."
      );
      setOrder(true);
    }, 2000); // Simulating a 2-second delay for processing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!project || !deliveryTime || !price) {
      alert("Please fill in all fields");
      return;
    }
    // Submit the form data
    // onBook({ project, deliveryTime, price });
    // Clear form fields
    setProject("");
    setDeliveryTime("");
    setPrice("");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {!Order && (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">
            Book Your Order
          </h1>

          {/* we need a form here */}
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="project"
              >
                Project Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="project"
                rows="4"
                placeholder="Briefly describe your project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="deliveryTime"
              >
                Delivery Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="deliveryTime"
                type="date"
                min={getTodayDate()}
                placeholder="Estimated delivery time"
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="Price in USD"
                min={10}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </form>
          {isProcessing ? (
            <p className="text-blue-500 font-semibold mt-4">
              Processing your order...
            </p>
          ) : (
            <button
              onClick={handleOrderRequest}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 inline-block"
            >
              Request Order
            </button>
          )}
          {orderStatus && (
            <p className="text-green-500 font-semibold mt-4">{orderStatus}</p>
          )}
        </div>
      )}
      {/*  if order offer accepted*/}
      {Order && (
        <section class="py-24 relative">
          <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 class="font-manrope font-bold text-4xl leading-10 text-black text-center">
              Your Offer Order Accepted
            </h2>
            <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
              Thanks for booking a order you can check our order summary frm
              below
            </p>
            <div class="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full shadow-lg">
              <div class="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                <div class="m-auto font-bold">
                  <h1 className="text-2xl text-center">Orders List</h1>
                </div>
              </div>
              <div class="w-full px-3 min-[400px]:px-6">
                <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                  <div class="img-box max-lg:w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                      />
                    </svg>
                  </div>
                  <div class="flex flex-row items-center w-full ">
                    <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                      <div class="flex items-center">
                        <div class="">
                          <h2 class="font-semibold text-xl leading-8 text-black mb-3">
                            Premium Quality Dust Watch
                          </h2>
                          <p class="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                            By: Dust Studios
                          </p>
                          <div class="flex items-center ">
                            <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                              Size: <span class="text-gray-500">100 ml</span>
                            </p>
                            <Link
                              to={"/payment"}
                              type="button"
                              class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5"
                              >
                                <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              Pay Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-5">
                        <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                          <div class="flex gap-3 lg:block">
                            <p class="font-medium text-sm leading-7 text-black">
                              price
                            </p>
                            <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                              $100
                            </p>
                          </div>
                        </div>
                        <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                          <div class="flex gap-3 lg:block">
                            <p class="font-medium text-sm leading-7 text-black">
                              Status
                            </p>
                            <p class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                              Ready for Delivery
                            </p>
                          </div>
                        </div>
                        <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                          <div class="flex gap-3 lg:block">
                            <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">
                              Expected Delivery Time
                            </p>
                            <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                              23rd March 2021
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col lg:flex-row items-center py-6 gap-6 w-full">
                  <div class="img-box max-lg:w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                      />
                    </svg>
                  </div>
                  <div class="flex flex-row items-center w-full ">
                    <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                      <div class="flex items-center">
                        <div class="">
                          <h2 class="font-semibold text-xl leading-8 text-black mb-3 ">
                            Diamond Platinum Watch
                          </h2>
                          <p class="font-normal text-lg leading-8 text-gray-500 mb-3">
                            Diamond Dials
                          </p>
                          <div class="flex items-center  ">
                            <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                              Size: <span class="text-gray-500">Regular</span>
                            </p>
                            <Link
                              type="button"
                              class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5"
                              >
                                <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              Pay Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-5">
                        <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                          <div class="flex gap-3 lg:block">
                            <p class="font-medium text-sm leading-7 text-black">
                              price
                            </p>
                            <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                              $100
                            </p>
                          </div>
                        </div>
                        <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                          <div class="flex gap-3 lg:block">
                            <p class="font-medium text-sm leading-7 text-black">
                              Status
                            </p>
                            <p class="font-medium text-sm leading-6 py-0.5 px-3 whitespace-nowrap rounded-full lg:mt-3 bg-indigo-50 text-indigo-600">
                              Dispatched
                            </p>
                          </div>
                        </div>
                        <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                          <div class="flex gap-3 lg:block">
                            <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">
                              Expected Delivery Time
                            </p>
                            <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                              23rd March 2021
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BookingOrder;
