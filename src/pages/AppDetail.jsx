import React from "react";
import { Oval } from "react-loader-spinner";

import { useParams } from "react-router-dom";
import { getItem } from "../services/itemServices";

function AppDetail() {
  let { id, type } = useParams();

  const { isLoading, data, isFetching } = getItem(id, type);
  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center h-80">
        <Oval height={80} width={80} color="#111111" />
      </div>
    );
  } else {
    return (
      <div class="container mx-auto px-4 md:px-6 py-8">
        <div class="mb-8 flex flex-wrap items-center justify-between">
          <h1 class="text-4xl font-bold">{data.name}</h1>
          <div class="flex items-center mt-4 md:mt-0">
            <span class="text-lg font-bold text-yellow-500">{data.rating}</span>
          </div>
        </div>

        <div class="mb-8 flex items-center">
          <img
            src={data.media}
            alt="Developer Logo"
            class="mr-4 h-12 w-12 rounded-full"
          />
          <div>
            <p class="text-lg font-semibold text-gray-800">{data.category}</p>
            <p class="text-base font-semibold text-gray-800">{data.price}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src={data.media}
            alt="App Screenshot"
            class="rounded-lg shadow-lg h-48 w-48"
          />
          <img
            src={data.media}
            alt="App Screenshot"
            class="rounded-lg shadow-lg h-48 w-48"
          />
          <img
            src={data.media}
            alt="App Screenshot"
            class="rounded-lg shadow-lg h-48 w-48"
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div class="my-8">
          <h2 class="mb-4 text-2xl font-semibold">Description</h2>
          <p class="text-lg leading-relaxed text-gray-800">
            {data.description}
          </p>
        </div>

        <div class="mb-4">
          <div class="flex items-center">
            <img src={data.media} alt="Information Icon" class="mr-2 h-5 w-5" />
            <span class="text-sm text-gray-600">
              Version: 1.0.0 | Size: 50MB | Updated: May 7, 2023
            </span>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="mb-4 text-lg font-semibold">Reviews</h2>
          <div class="mb-2 flex items-center">
            <span class="mr-2 text-lg font-bold text-yellow-500">
              {data.rating}
            </span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="rounded-lg bg-gray-100 p-4 shadow-md mb-4 md:mb-0">
              <div class="mb-4 flex items-center">
                <img
                  src="https://i.pinimg.com/564x/54/26/a5/5426a51fe15b4bb1dca378b3f6963d30.jpg"
                  alt="Reviewer Avatar"
                  class="mr-2 h-8 w-8 rounded-full"
                />
                <span class="text-sm font-semibold text-gray-600">
                  Reviewer Name
                </span>
              </div>
              <p class="leading-relaxed text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sodales velit eu pharetra tristique. Aliquam erat volutpat.
                Mauris euismod, lorem eu consequat sodales, nisi elit
                ullamcorper ante, non placerat lorem dolor eget ipsum."
              </p>
            </div>
            <div class="rounded-lg bg-gray-100 p-4 shadow-md">
              <div class="mb-4 flex items-center">
                <img
                  src="https://i.pinimg.com/564x/54/26/a5/5426a51fe15b4bb1dca378b3f6963d30.jpg"
                  alt="Reviewer Avatar"
                  class="mr-2 h-8 w-8 rounded-full"
                />
                <span class="text-sm font-semibold text-gray-600">
                  Reviewer Name
                </span>
              </div>
              <p class="leading-relaxed text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sodales velit eu pharetra tristique. Aliquam erat volutpat.
                Mauris euismod, lorem eu consequat sodales, nisi elit
                ullamcorper ante, non placerat lorem dolor eget ipsum."
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-between">
          <button class="mr-4 mb-4 md:mb-0 rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600">
            Download
          </button>
          <button class="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 shadow-md hover:bg-gray-300">
            Share
          </button>
        </div>
      </div>
    );
  }
}

export default AppDetail;
