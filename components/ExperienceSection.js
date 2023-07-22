
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Web App Developer',
      company: 'ITclan BD',
      duration: 'March 2021 - Present',
      description: 'Develop and maintain web applications using modern technologies like Laravel, Vuejs, React js. Collaborate with cross-functional teams to deliver high-quality software products.\nDesigned and implemented complex backend functionalities, including database schema design, API integrations, and user authentication systems.',
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-bold">{experience.title}</h3>
            <p className="text-gray-600">{experience.company}</p>
            <p className="text-gray-600">{experience.duration}</p>
            <p className="mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
