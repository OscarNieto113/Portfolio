function generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

export interface Company {
  id: string;
  iconPath: string
  companyName: string;
  description: string;
}

export const companies: Company[] = [
  {
    id: generateUniqueId(),
    iconPath: "/icons/natgas.ico",
    companyName: "Natgas",
    description: "Full Stack Development",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/atemporal.ico",
    companyName: "Atemporal A.C",
    description: "Full Stack Development",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/ceceq.ico",
    companyName: "CECEQ GM",
    description: "IT System Analyst",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/kiara.ico",
    companyName: "Kiara",
    description: "IT Support",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/aifa.ico",
    companyName: "AIFA",
    description: "IT System Analyst",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/igeckoo.ico",
    companyName: "igeckoo",
    description: "Data Analytics",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/alteacasting.ico",
    companyName: "Altea Castring",
    description: "Data Analytics",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/seismicps.ico",
    companyName: "SeismicPS",
    description: "IT System Analyst",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/ge.ico",
    companyName: "General Electric Aeroespace",
    description: "Data Analytics",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/kellanova.ico",
    companyName: "Kellanova",
    description: "Data Analytics",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/secura.ico",
    companyName: "Secura Insurance",
    description: "IT Support",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/notaria33.ico",
    companyName: "Notaria 33",
    description: "IT Support",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/caeq.ico",
    companyName: "CAEQ",
    description: "IT System Analyst",
  },
];