import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../apiUrl";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserSignupDetails } from "../Redux/actions";
import PendingApproval from ".././PendingApproval";

const BuyerProfile = () => {
  const location = useLocation();
  let { buyerid: userid } = useParams();
  const [file2, setFile2] = useState(null);
  const [rerender, setrerender] = useState(null);
  const [userdata, setuserdata] = useState(null);
  const gotUserData = useSelector((state) => state.userReducer.userdata);
  const navigate = useNavigate();
  console.log("redux data::", gotUserData);
  let dispatch = useDispatch();

  useEffect(() => {
    getAllUserData();
  }, [rerender]);

  const logout = () => {
    localStorage.removeItem("cUser");
    navigate("/login");
  };

  const getAllUserData = async () => {
    try {
      let { data } = await axios.get(`${apiUrl}/user/getUserData/${userid}`);
      console.log("let logs the user data", data);
      setuserdata(data.data);
      localStorage.setItem("cUser", JSON.stringify(data.data));
      dispatch(UserSignupDetails(data.data));
    } catch (error) {
      console.log("Err in function getAllUserData", error);
    }
  };

  const onprofileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile2(selectedFile);
  };
  const emailPrefix = userdata && userdata.email.split("@")[0];
  // user profile update
  const userProfileUpdateSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(); // Create FormData object to send file
      formData.append("file", file2);
      setFile2(false);
      let userdata = localStorage.getItem("cUser");
      let userdataparsed = JSON.parse(userdata);
      let userid = userdataparsed._id;
      let { data } = await axios.patch(
        `${apiUrl}/user/userProfileImage/${userid}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setrerender(!rerender);
    } catch (error) {
      console.log("error in userProfileUpdate", error);
    }
  };
  return (
    <>
      {userdata && userdata.approved === false ? (
        <PendingApproval />
      ) : (
        <div>
          <Toaster />
          <div className="flex justify-around items-center">
            <h1 className="py-5 text-3xl font-bold text-center text-gray-500 underline">
              {"Buyer Dashboard"}
            </h1>
            {!location.state.userVisit && (
              <button
                onClick={logout}
                className="px-4 py-2 text-sm text-purple-600 font-semibold rounded-md border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Logout
              </button>
            )}
          </div>

          <div class="pt-12 grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div class="w-[70%] mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div class="border-b px-4 pb-6">
                <div class="text-center my-4">
                  <label
                    for="userprofile"
                    class="inline-flex items-center justify-center w-32 h-32 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-full cursor-pointer my-6"
                  >
                    {userdata && (
                      <img
                        class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                        src={`${apiUrl}/images/${userdata.profileImg}`}
                        alt=""
                      />
                    )}
                  </label>
                  <form onSubmit={userProfileUpdateSubmit}>
                    <input
                      onChange={onprofileChange}
                      type="file"
                      name="file"
                      id="userprofile"
                      className="sr-only"
                      required
                    />

                    {/* User image */}
                    {file2 && (
                      <button
                        type="submit"
                        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                      >
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Upload image!
                        </span>
                      </button>
                    )}
                  </form>

                  <div class="py-2">
                    {!location.state.userVisit && (
                      <>
                        <h1 className="text-2xl">
                          {gotUserData && gotUserData.userType === "buyer"
                            ? "Current account is buyer"
                            : "Seller Account"}
                        </h1>
                      </>
                    )}
                    <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                      {emailPrefix}
                    </h3>
                    <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                      <svg
                        class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          class=""
                          d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                        />
                      </svg>
                      New York, NY
                    </div>
                  </div>
                </div>
                <div class="flex gap-2 px-2">
                  <button
                    onClick={() => navigate("/")}
                    class="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2"
                  >
                    Find Services
                  </button>
                </div>
              </div>
              <div class="px-4 py-4"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyerProfile;
