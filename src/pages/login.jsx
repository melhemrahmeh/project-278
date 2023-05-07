import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logIn } from "../config/utils";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitUserInfo = async (data) => {
    try {
      await logIn(data).then(() => {
        navigate("/apps");
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="bg-white flex flex-row justify-center items-center py-12">
        <div className="shadow-xl rounded-lg p-12 place-items-center">
          <p className="text-2xl font-bold pb-4 mb-4">Log in to Galaxy Store</p>

          <form onSubmit={handleSubmit(submitUserInfo)}>
            <label
              htmlFor="login-email"
              class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: { value: true, message: "This field is required" },

                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email",
                },
              })}
              id="login-email"
              type="email"
              placeholder="Email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.email?.message}
            </span>
            <br />
            <label
              htmlFor="login-password"
              class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: { value: true, message: "This field is required" },
              })}
              id="login-password"
              type="password"
              placeholder="Password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />{" "}
            <span className="text-xs text-red-500">
              {errors.password?.message}
            </span>
            <div className="mt-4 flex flex-col items-center">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
            <div>
              <p class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-700">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
