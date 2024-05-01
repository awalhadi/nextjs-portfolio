
const ProjectSection = () => {
  const projects = [
    {
      title: 'Address Management package',
      description: 'Features: "awalhadi/addressable" is a versatile Laravel package designed to provide address management functionality within Laravel applications. It also helps you to easily radius search.',
      techStack: ['PHP', 'Laravel'],
      liveDemoLink: 'https://packagist.org/packages/awalhadi/addressable',
      sourceCodeLink: 'https://github.com/awalhadi/addressable',
    },
    {
      title: 'E-Commerce Website',
      description: 'An online e-commerce platform built with Laravel, React, and MySql. Multivariant Product management, Product price, Discount, Coupon, stock management, invoice, and many more feature..',
      techStack: ['Laravel', 'React.js', 'MySql', 'Innertia js', 'Redux'],
      liveDemoLink: 'https://kachabazar.gqrcode.com',
      sourceCodeLink: '#',
    },
    {
      title: 'Learning management',
      description: 'Course system, Quiz system, GED exam system, Course enrollment with payment, Certification system, Automatic marking of MCQ, Student panel, Teacher panel, Admin panel, Payment system, and many more.',
      techStack: ['Laravel', 'Vue.js', 'React.js','Next.js'],
      liveDemoLink: 'https://mentorslearning.com',
      sourceCodeLink: '#',
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="">{project.description}</p>
            <p className="mt-2">Tech Stack: {project.techStack.join(', ')}</p>
            <div className="mt-2">
              <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
                Live Demo
              </a>
              <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
