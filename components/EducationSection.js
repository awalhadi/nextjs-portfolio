
const EducationSection = () => {
  const educationItems = [
    {
      degree: 'Bachelor of Science in EEE',
      institution: 'Canadian University of Bangladesh (CUB)',
      yearOfGraduation: '2018-2023',
      cgpa: '3.40',
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div>
        {educationItems.map((education, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-bold">{education.degree}</h3>
            <p className="">{education.institution}</p>
            <p className="">{education.yearOfGraduation}</p>
            <p className="mt-2">CGPA: {education.cgpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
