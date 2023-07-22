import React from "react";

const SkillSection = () => {
    const skillsData = {
        programmingLanguages: ['PHP', 'JavaScript', 'Html', 'CSS', 'Node'],
        frameworks: ['Laravel', 'Vue.js', 'React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
        databases: ['MySql', 'MariaDB', 'PostgreSQL', 'MongoDB'],
        versionControl: ['Git'],
      };
  return (
    <section className="mb-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid gap-4">
        <p className="">
          Programming Languages: {skillsData.programmingLanguages.join(', ')}
        </p>
        <p className="">Frameworks: {skillsData.frameworks.join(', ')}</p>
        <p className="">Databases: {skillsData.databases.join(', ')}</p>
        <p className="">Version Control: {skillsData.versionControl.join(', ')}</p>
      </div>
    </section>
  );
};

export default SkillSection;
