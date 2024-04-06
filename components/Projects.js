const Projects = () => {
    const projects = [
      {
        title: 'Learning management',
        description: 'Learning management system. Online course enroll system. Course test, progress, results and certification and many more features. Build with Laravel, React js, Next js, Vue js',
        image: '/projects/mentors.webp',
        demoLink: 'http://online.mentors.com.bd/',
        sourceLink: '#',
      },
      {
        title: 'Matrimonial website',
        description: 'The platform provides a user-friendly interface for users to create profiles, advance matching algorithm, and connect, whats-app notifications, chats with others in a secure and convenient manner.',
        image: '/projects/islamarriage.webp',
        demoLink: 'https://islamarriage.com',
        sourceLink: '#',
      },
      {
        title: 'Laravel Package',
        description: '"awalhadi/addressable" is a versatile Laravel package designed to provide address management functionality within Laravel applications. It also helps you to easy radius search.',
        image: '/projects/addressable.webp',
        demoLink: 'https://github.com/awalhadi/addressable',
        sourceLink: 'https://github.com/awalhadi/addressable',
      },
      // Add more projects as needed
    ];
  
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800">My Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-64 object-contain" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-teal-800">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex justify-between">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-sm font-medium"
                    >
                      Demo
                    </a>
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md text-sm font-medium"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  