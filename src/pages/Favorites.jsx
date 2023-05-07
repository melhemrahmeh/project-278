import React from "react";
import "../assets/styles/grid.css";
import { Oval } from "react-loader-spinner";
import { getFavorites } from "../services/favoritesServices";
import { getUserId } from "../config/session";

const Favorites = () => {
  let userId = getUserId();
  const { isLoading, data, isFetching } = getFavorites(userId);
  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center h-80">
        <Oval height={80} width={80} color="#111111" />
      </div>
    );
  } else {
    return (
      <>
        {/* Reviews section */}
        <div className="mb-8">
          <br />
          <br />
          <br />

          <h1 className="mb-4 font-semibold">Favorites</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.length == 0 ? (
              <div className="rounded-lg bg-gray-100 p-4">
                There are No Favorites for the current user
              </div>
            ) : (
              data.map((item) => {
                return (
                  <div className="rounded-lg bg-gray-100 p-4 shadow-md">
                    <div className="mb-4 flex items-center">
                      <img
                        src={item.favorite_media}
                        alt="Profile picture"
                        className="mr-2 h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="mb-1 font-semibold text-gray-700">
                          {item.favorite_name}
                          <p className="text-sm text-gray-600">
                            {item.favorite_type}
                          </p>
                        </h3>
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-4 w-4 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 1.105l2.94 6.16 6.576.92-4.755 4.622 1.122 6.852-5.883-3.093L3.12 19.659l1.122-6.852L.484 8.185l6.576-.92L10 1.105z" />
                          </svg>
                          <span className="text-sm text-gray-600">
                            {item.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {item.favorite_description}{" "}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
};

export default Favorites;
