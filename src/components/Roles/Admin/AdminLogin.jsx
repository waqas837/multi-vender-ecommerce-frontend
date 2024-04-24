import React, { useEffect, useState } from "react";
import AdminPanel from "./AdminPanel";
import { apiUrl } from "../../../apiUrl";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AdminLogin = () => {
  const [login, setlogin] = useState(false);
  const [credentials, setcredentials] = useState(false);
  useEffect(() => {
    let ifAdmin = localStorage.getItem("cAdmin");
    if (!ifAdmin) {
      setlogin(false);
    } else {
      setlogin(true);
    }
  }, []);

  const loginAdmin = async (e) => {
    try {
      e.preventDefault();
      if (credentials) {
        let { data } = await axios.post(`${apiUrl}/admin/login`, {
          credentials,
        });
        if (data.success) {
          localStorage.setItem("cAdmin", JSON.stringify(data.data));
          // dispatch(UserSignupDetails(data.data));
          toast.success("LoggedIn successfully.");
          setlogin(true);
          return;
        }
        if (data.success === false) {
          toast.error("Invalid credentials.");
          return;
        }
      }
    } catch (error) {
      toast.error("Internal server error");
      console.log("error in signup", error);
    }
  };
  return (
    <>
      <Toaster />
      {login ? (
        <AdminPanel />
      ) : (
        <div>
          <div class="dark:bg-gradient-to-l from-gray-900 to-gray-600 flex justify-center items-center w-screen h-screen p-5">
            <div class="bg-white shadow-md dark:shadow-gray-600 rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/3 dark:bg-gray-800">
              <h1 class="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-200">
                Admin Login
              </h1>
              <form onSubmit={loginAdmin}>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
                    for="email"
                  >
                    Email <span class="text-red-500">*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setcredentials({ ...credentials, email: e.target.value })
                    }
                    class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
                    for="password"
                  >
                    Password <span class="text-red-500">*</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setcredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                    class="shadow appearance-none border border-red-500 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    id="password"
                    type="password"
                    placeholder="******************"
                    required
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-green-500 hover:bg-green-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-green-600"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLogin;
