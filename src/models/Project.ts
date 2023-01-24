export default interface IProjectData {
  id: string;
  title: string;
  description: string;
  descriptionSoutenance?: string;
  technos: Array<String>[];
  tags: Array<String>[];
  githubUrl: string;
  githubPagesUrl?: string;
  otherUrl?: string;
}
