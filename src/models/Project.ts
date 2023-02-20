import { Timestamp } from "firebase/firestore";

export default interface IProjectData {
  id: string;
  projectId: number;
  progression: string;
  ["completion-date"]: Timestamp;
  ["project-type"]: string;
  typeIconUrl: string;
  miniature: string;
  miniatureAlt: string;
  cover: string;
  alt: string;
  description: string;
  ["soutenance-description"]?: string;
  description_short: string;
  technologies: string[];
  ["soutenance-tools"]: string[];
  tags: string[];
  githubUrl: string;
  githubPagesUrl?: string;
  firebaseUrl?: string;
  otherUrls?: string[];
  ['project-name']: string;
}
