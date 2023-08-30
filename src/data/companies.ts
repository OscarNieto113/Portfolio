function generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

export interface Company {
  id: string;
  iconPath: string
  companyName: string;
}

export const companies: Company[] = [
  {
    id: generateUniqueId(),
    iconPath: "/icons/natgas.ico",
    companyName: "Natgas",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/atemporal.ico",
    companyName: "Atemporal A.C",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/ceceq.ico",
    companyName: "CECEQ GM",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/kiara.ico",
    companyName: "Kiara",
  },
  {
    id: generateUniqueId(),
    iconPath: "/icons/aifa.ico",
    companyName: "AIFA",
  },
];