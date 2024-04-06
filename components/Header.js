import Image from "next/image";
import React from "react";


const Header = () => {
  return (
    <>
    <header>
      <div className="flex justify-center">
        <div
          className="bg-cover bg-no-repeat rounded-full"
          style={{
            backgroundImage: "url(/profile.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "300px",
            height: "300px",
          }}
        ></div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
          A Awal Hadi
        </h1>
        <p className="text-xl md:text-2xl mt-2 text-gray-600">
          Web App Developer
        </p>
      </div>
    </header>
    </>
  );
};

export default Header;
