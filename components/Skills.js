import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaGit,FaPhp, FaLaravel, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiFirebase, SiMariadb, SiMysql, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'PHP', icon: FaPhp, color: '#777BB4' },
    { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Vue.js', icon: FaVuejs, color: '#4FC08D' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'MariaBD', icon: SiMariadb, color: '#02253E' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#0064a5' },
    { name: 'MongoDB', icon: SiMongodb, color: '#589636' },
    { name: 'Firebse', icon: SiFirebase, color: '#ffa611' },
    { name: 'Git', icon: FaGit, color: '#F05032' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
      <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800">My Skills</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white rounded-lg p-4 shadow flex flex-col items-center justify-center">
              <skill.icon className="text-6xl mb-4" style={{ color: skill.color }} />
              <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
