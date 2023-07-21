const Hero = () => {
    return (
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">Welcome to My Portfolio</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10">Showcasing my skills and projects</p>
            <a href="#projects" className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-8 rounded-full font-medium text-lg transition duration-300 ease-in-out">
              View Projects
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  