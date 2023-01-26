export default interface IProjectData {
  id: string;
  projectId: string;
  completionDate: string;
  typeOfProject: string;
  title: string;
  miniature: string;
  cover: string;
  alt: string;
  description: string;
  descriptionSoutenance?: string;
  description_short: string;
  technologies: Array<String>[];
  tags: Array<String>[];
  githubUrl: string;
  githubPagesUrl?: string;
  otherUrl?: string;
}
