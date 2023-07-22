
const ProfessionalSkills = () => {
  const skills = [
    'Strong understanding of object-oriented programming, design patterns, and MVC architecture.',
    'Experience with query optimization and handling efficient large data.',
    'Experience with database management systems, including MongoDB, MySQL, and PostgreSQL.',
    'Excellent problem-solving skills and the ability to work efficiently.',
    'Adept at writing clean, maintainable, and scalable coding practices.',
    'Familiarity with version control systems like Git and agile development methodologies.',
  ];

  return (
    <section className="mb-4">
      <h2 className="text-2xl font-bold mb-4">Professional Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="mb-2">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProfessionalSkills;
