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
  professionalSkills: { id: string }[];
  educations: Education[];
  experiences: { id: string }[];
  dateCreated: Date;
  dateModified: Date;
};

export type Education = {
  id: string;
  course: string;
  endDate: string;
  school: string;
  specialization: string;
  startDate: string;
};
