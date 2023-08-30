import SkillCarousel from "@/components/Carrousel";
import Bar from "../components/Bar";
import Section from "../components/Section";
import { languages} from "../data/skills";

const Resume = () => {
  return (
    <div className="px-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Section
          title="Education"
          subTitle="Computer Science"
          description="Monterrey Institute of Technology and Higher Education"
          date="2020 - Current"
          iconPath="/icons/itesm.ico"
        />
        <Section
          title="Work Experience"
          subTitle="IT System Analys"
          description="Aeropuerto Internacional Felipe Ángeles"
          date="2023 - 2024"
          iconPath="/icons/aifa.ico"
        />
      </div>
      <SkillCarousel skills={languages} />
      <div className="grid gap-9 md:grid-cols-2">
      
        {["Language & Framework", "Tools & Software"].map(
          (sectionTitle, index) => (
            <div key={index}>
              <h2 className="my-3 text-2xl font-bold">{sectionTitle}</h2>
              {/*<div>
              {(index === 0 ? languages : tools).map((item) => (
                <Bar value={item} key={item.id} />
              ))}
            </div>*/}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Resume;
