import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center">

        <div
          className="md:w-1/2 mb-10 md:mb-0 bg-cover bg-no-repeat rounded-full"
          style={{
            backgroundImage: "url(/profile.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "180px",
            height: "180px",
          }}
        ></div>
        <div className="md:w-1/2 md:ml-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
            A Awal Hadi
          </h1>
          <p className="text-xl md:text-2xl mt-2 text-gray-600">
            Web App Developer
          </p>
          <div className="flex align-middle justify-center mt-4">
          <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
