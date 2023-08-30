import type { FC } from "react";
import styles from "../styles/Work.module.css";
import projects from "../data/projects";
import Image from "next/image";

interface WorkProps {}

const Work: FC<WorkProps> = ({}) => {
  return (
    <div className={styles.workMain}>
      <h1>Work</h1>

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                width={300}
                height={250}
                // fill
                style={{ maxWidth: "100%", height: "auto" }}
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className={styles.projectInfo}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank">
                <button>View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Work;
