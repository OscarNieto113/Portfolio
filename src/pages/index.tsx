import { NextPage } from "next";
import GeneralSkill from "../components/GeneralSkillCard";
import { generalSkills } from "../data/generalSkills";

const About: NextPage = () => {
  const coreSkills = generalSkills.filter((skill) =>
    [
      "Data Analyst",
      "Infrastructure Engineering",
      "Network Engineering",
    ].includes(skill.title)
  );

  const additionalSkills = generalSkills.filter(
    (skill) =>
      ![
        "Data Analyst",
        "Infrastructure Engineering",
        "Network Engineering",
      ].includes(skill.title)
  );

  const getColSpan = (index: number, arrayLength: number) =>
    index === arrayLength - 1 && arrayLength % 2 !== 0
      ? "col-span-2"
      : "col-span-2 md:col-span-1";

  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8 pt-4 mt-3 overflow-y-auto gap-y-3 max-w-6xl mx-auto h-[80vh]">
      <div className="text-base font-medium ">
        <p className="mb-2">
          <span className="text-2xl font-bold text-orange">Hello,</span> I'm
          <strong> Oscar Nieto</strong>, a technology professional focused on{" "}
          <strong>
            Data Analyst, Infrastructure Engineering and Network Engineering
          </strong>
          .
        </p>
        <p className="mb-2">
          I apply a <strong>curious and analytical mindset</strong> to solve
          complex challenges, whether it’s designing reliable infrastructure,
          optimizing data pipelines, or experimenting with new technologies.
        </p>
      </div>

      <div className="p-4 rounded-lg bg-newGray max-w-full mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-semibold tracking-wide text-right text-orange">
          <strong>Core Expertise</strong>
        </h4>
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {coreSkills.map((skill, index) => (
            <div
              className={getColSpan(index, coreSkills.length)}
              key={skill.title}
            >
              <GeneralSkill service={skill} />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-lg bg-newGray max-w-full mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
        <h4 className="text-xl font-semibold tracking-wide text-right text-orange">
          <strong>Additional Skills</strong>
        </h4>
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {additionalSkills.map((skill, index) => (
            <div
              className={getColSpan(index, additionalSkills.length)}
              key={skill.title}
            >
              <GeneralSkill service={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
