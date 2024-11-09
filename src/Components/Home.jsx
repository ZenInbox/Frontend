import React from "react";

export default function Home() {
  return (
    <>
      <div className=" animate-float  h-screen bg-cover bg-center grid grid-cols-1 lg:grid-cols-12 items-center justify-center text-center px-4 bg-gradient-to-r from-gray-200 via-white to-gray-50">
        <div className="col-span-1 lg:col-span-8 mt-24 sm:m-6">
          <h1 className="text-slate-500  h-[100px] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
              ZenInbox
            </span>
          </h1>
          <p className="text-center md:text-lg lg:text-xl text-gray-500 font-bold px-4 md:px-8 lg:px-12">
            Send custom Emails with our AI-powered platform with realtime
            analytics and ease .
          </p>
        </div>
        <img
          src="https://thumbs.dreamstime.com/b/%D0%B4%D0%BB%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%B0-213295681.jpg"
          alt="EmailMania"
          className=" w-[60%] sm:w-[90%]  h-[300px] sm:h-[400px]  col-span-1 lg:col-span-4 rounded-[40%] mx-auto"
        />
      </div>
    </>
  );
}
