import { Chip, ListItem } from '@mui/material';
import { v4 as uuidv4 } from "uuid";
import style from './ProjectTags.module.scss'
import IProjectData from '../../../models/Project';

const ProjectTags = (project : IProjectData) => {
  return (
    <div>
    <ul className={style.tagsList}>
      {project.tags.map((el: string) => {
        return (
          <ListItem
            key={uuidv4()}
            sx={{
                width: "fit-content",
                paddingLeft: 0,
            }}
          >
            <Chip label={el}/>
          </ListItem>
        );
      })}
    </ul>
  </div>
  )
}

export default ProjectTags
