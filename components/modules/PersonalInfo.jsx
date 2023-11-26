const PersonalInfo = ({ personalInfo }) => {
  return (
    <div className="space-y-10 text-center xl:text-start">
      <h1 className="h2">Unmatched Services Quality for Over 10 Years</h1>
      <p className="description">
        I specialize in crafting intuitive website with cutting-edge technology,
        delivering dynamic and engaging user experience.
      </p>
      <ul className="grid gap-5 sm:grid-cols-2">
        {personalInfo.map((item, index) => (
          <li className="flex items-center gap-2.5 font-semibold" key={index}>
            <div className="text-primary">{item.icon}</div>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfo;
