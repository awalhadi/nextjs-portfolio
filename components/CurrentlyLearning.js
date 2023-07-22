const CurrentlyLearning = () => {
  const learningItems = [
    {
      title: 'Node.js',
      description: 'Currently learning Node.js to build server-side applications. Familiarizing myself with its event-driven, non-blocking I/O model, and using npm packages to enhance development efficiency.',
      link: 'https://nodejs.org/dist/latest-v18.x/docs/api/',
    },
    {
      title: 'Next.js',
      description: 'I am leveraging my expertise in Next.js to build high-performance, SEO-friendly small web applications.',
      link: 'https://nextjs.org/docs',
    },
    // Add more learning items here
  ];

  return (
    <section className="mb-4">
      <h2 className="text-2xl font-bold mb-4">🌱 Currently Learning</h2>
      <ul className="list-none">
        {learningItems.map((item, index) => (
          <li key={index} className="mb-4">
            <p className="font-bold">{item.title}</p>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Learn more
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CurrentlyLearning;
