import { ReactElement } from "react";

type ExperienceType = {
  company: string;
  role: string;
  date: string;
  iconPath: string;
  bullets?: string[];
};

type PropsType = {
  title: string;
  experiences: ExperienceType[];
};

const Section = ({ title, experiences }: PropsType): ReactElement => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-orange">{title}</h2>

      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center space-x-2">
              <img src={exp.iconPath} alt="Icon" className="w-10 h-10" />
              <p className="text-base font-medium">
                {exp.company} – {exp.role}{" "}
                <span className="text-xs text-gray-500">({exp.date})</span>
              </p>
            </div>
            
            {exp.bullets && exp.bullets.length > 0 && (
              <ul className="list-disc list-inside text-gray-700 ml-6 mt-1 space-y-0.5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-xs">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
