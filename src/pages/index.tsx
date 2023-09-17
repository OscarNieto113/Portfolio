import { NextPage } from "next";
import GeneralSkill from "../components/GeneralSkillCard";
import { generalSkills } from "../data/generalSkills";

const About: NextPage = () => {
  return ( 
    <div className="flex flex-col flex-grow px-6 pt-1 mt-3 overflow-y-scroll" style={{ height: "80vh" }}>
      <div className="text-base font-medium ">
        <p className="mb-2">
          <span className="text-2xl font-bold text-orange">Hello,</span> I'm
          Oscar Nieto, a tech enthusiast with a curious mind and a passion for
          innovation.
        </p>
        <p className="mb-2">
          <strong>
            From a young age, I was drawn to taking things apart to understand
            how they worked.
          </strong>{" "}
          These early experiences ignited my love for technology, and today, I
          bring that same enthusiasm to every project I tackle.
        </p>
        <p className="mb-2">
          <strong>
            My career is a journey marked by relentless curiosity,
          </strong>{" "}
          seeking new possibilities, and creating transformative tech solutions.
        </p>
      </div>
      <div
        className="flex-grow p-4 mt-5 rounded-lg bg-newGray"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <div className="grid gap-6 my-3 md:grid-cols-2 ">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {generalSkills.map((generalSkills) => (
            <div
              className="col-span-2 md:col-span-1 "
              key={generalSkills.title}
            >
              <GeneralSkill service={generalSkills} />
            </div>
          ))}
        </div>
      </div>

      <div className="my-2 text-base font-medium"></div>
      <h4 className="text-xl font-semibold tracking-wide ">
        <strong>Personal Interests</strong>
      </h4>
      <p className="mb-2">
        Beyond the realm of coding, you'll often find me immersed in fantasy
        literature. I'm an avid reader and a devoted fan of{" "}
        <b>Brandon Sanderson's</b> captivating storytelling. Additionally, I'm
        deeply passionate about role-playing games <b>(RPGs)</b>.
      </p>
    </div>
  );
};

export default About;
