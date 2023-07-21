const About = () => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src="/profile.jpg" alt="Profile" className="w-full h-auto rounded-lg" />
            </div>
            <div className="md:w-1/2 md:ml-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-800">About Me</h2>
              <p className="text-lg text-gray-700 mb-6">I am a passionate web developer with expertise in HTML, CSS, and JavaScript. I love building responsive and user-friendly web applications.</p>
              <p className="text-lg text-gray-700">With several years of experience in the industry, I have worked on various projects, collaborating with cross-functional teams to deliver high-quality solutions.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  