import { calculateExperience } from "../utils/dateUtils";

const About = () => {
  const startDate = '2021-03-14'; // Replace this with your actual starting date
  const yearsOfExperience = calculateExperience(startDate);
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">About</h2>
      <p>
        I'm a passionate software developer with a strong background in PHP,
        Laravel.Highly skilled and motivated web developer with {yearsOfExperience.years} {yearsOfExperience.months && yearsOfExperience.months > 0 && '+'} years of
        experience.
        <br />
        <br />
        I love building applications that solve real-world problems and
        contribute to the open-source community. Constantly seeking new
        challenges to learn and grow as a developer.
      </p>
    </section>
  );
};

export default About;
