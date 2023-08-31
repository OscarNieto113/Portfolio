import CompanyCarrousel from "../components/CompanyCarousel";
import Section from "../components/Section";
import SkillsList from "@/components/SkillList";
import { companies } from "../data/companies";
import {
  languagesAndTools,
  librariesAndFrameworks,
  databases,
  others,
} from "../data/skills";

const Resume = () => {
  return (
    <div className="mx-4">
      <div className="grid gap-6 p-4 md:grid-cols-2">
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
      <CompanyCarrousel
        companies={companies}
        subtitle="Companies I've Added Value"
      />
      <div className="grid gap-6 px-4 md:grid-cols-2">
        <SkillsList skills={languagesAndTools} title="Languages & Tools" />
        <SkillsList
          skills={librariesAndFrameworks}
          title="Libraries and Frameworks"
        />
        <SkillsList skills={databases} title="Databases" />
        <SkillsList skills={others} title="Others" />
      </div>
    </div>
  );
};

export default Resume;
