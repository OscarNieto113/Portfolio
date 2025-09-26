import CompanyCarrousel from "../components/CompanyCarousel";
import Section from "../components/Section";
import SkillsList from "@/components/SkillList";
import { companies } from "../data/companies";
import {
  DataAnalyst,
  Infraestructure,
  Network,
  Backend,
  ArtificialIntelligence,
  Frontend,
} from "../data/skills";

const Resume = () => {
  return (
    <div
      className="flex flex-col flex-grow overflow-x-hidden overflow-y-auto"
      style={{ height: "80vh" }}
    >
      <div className="grid gap-6 p-4 mx-4 md:grid-cols-2">
        <Section
          title="Education"
          experiences={[
            {
              role: "Oracle Database 19c: Administration Workshop",
              company: "Executrain",
              date: "Nov 2024",
              iconPath: "/icons/executrain.ico",
              bullets: [
                "Hands on training in database administration, backup, recovery, and performance optimization.",
              ],
            },
            {
              role: "Microsoft Power BI Data Analyst Certification",
              company: "Microsoft",
              date: "Oct 2024",
              iconPath: "/icons/microsoft.ico",
              bullets: [
                "Gained expertise in data modeling, DAX, and visualization best practices for business insights.",
              ],
            },
            {
              role: "Computer Science",
              company: "Tecnológico de Monterrey",
              date: "2020 - 2024",
              iconPath: "/icons/itesm.ico",
              bullets: [
                "Specialized in Systems Engineering, Data Analytics, and Artificial Intelligence.",
              ],
            },
          ]}
        />
        <Section
          title="Work Experience"
          experiences={[
            {
              role: "IT System Analyst",
              company: "SeismicPS",
              date: "Jul 2025 - Sep 2025",
              iconPath: "/icons/seismicps.ico",
              bullets: [
                "Provided high-performance computing resources for engineering simulations. Implemented best practices in data storage, backups, and recovery, ensuring system reliability and business continuity.",
              ],
            },
            {
              role: "Data Analyst",
              company: "Altea Castring",
              date: "Apr 2025 - Jun 2025",
              iconPath: "/icons/alteacasting.ico",
              bullets: [
                "Designed a Power BI dashboard to track aluminum parts production with key KPIs. Built the underlying database and data collection system, enabling data-driven decision-making for operations.",
              ],
            },
            {
              role: "Data Analyst",
              company: "iGeckoo",
              date: "Aug 2024 - 2025 Mar",
              iconPath: "/icons/igeckoo.ico",
              bullets: [
                "Delivered analytics projects for multiple clients, including ETL automation, database design, and dashboard development, adapting solutions to diverse business needs.",
              ],
            },
            {
              role: "IT System Analyst",
              company: "AIFA",
              date: "2023 - 2024",
              iconPath: "/icons/aifa.ico",
              bullets: [
                "Maintained IT infrastructure and provided system support for airport operations.",
              ],
            },
          ]}
        />
      </div>
      <CompanyCarrousel
        companies={companies}
        subtitle="Companies I've Added Value"
      />
      <div className="grid gap-6 px-4 py-4 mx-4 md:grid-cols-2">
        <SkillsList skills={DataAnalyst} title="Data Analyst"/>
        <SkillsList skills={Infraestructure} title="Infrastructure Engineering"/>
        <SkillsList skills={Network} title="Network Engineering"/>
        <SkillsList skills={Backend} title="Backend Development"/>
        <SkillsList skills={ArtificialIntelligence} title="Artificial Intelligence"/>
        <SkillsList skills={Frontend} title="Frontend Development"/>
      </div>
    </div>
  );
};

export default Resume;
