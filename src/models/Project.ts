export default interface IProjectData {
  id: string;
  projectId: number;
  progression: string;
  completionDate: Date;
  typeOfProject: string;
  typeIconUrl: string;
  title: string;
  miniature: string;
  miniatureAlt: string;
  cover: string;
  alt: string;
  description: string;
  descriptionSoutenance?: string;
  description_short: string;
  technologies: string[];
  soutenanceTools: string[];
  tags: string[];
  githubUrl: string;
  githubPagesUrl?: string;
  firebaseUrl?: string;
  otherUrls?: string[];
}
