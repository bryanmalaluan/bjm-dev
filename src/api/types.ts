export type User = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  location: string;
  headline: string;
  introText: string;
  summary: string;
  avatar: string;
  linkedIn: string;
  github: string;
  instagram: string;
  getInTouchText: string;
  professionalSkills: ProfessionalSkill[];
  educations: Education[];
  experiences: Experience[];
  dateCreated: Date;
  dateModified: Date;
};

export type Education = {
  id: string;
  course: string;
  endDate: Date;
  school: string;
  specialization: string;
  startDate: Date;
};

export type Experience = {
  company: "string";
  endDate: Date | null;
  id: string;
  image: string;
  isCurrent: true;
  jobTitle: string;
  startDate: Date;
  summary: string;
};

export type ProfessionalSkill = {
  id: string;
  rating: number;
  title: string;
};
