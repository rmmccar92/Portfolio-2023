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
        {projects.map((project, i: number) => (
          <div className={styles.projectCard} key={i}>
            <div className={styles.projectImage}>
              <Image
                className={`${styles[project.alt]} ${styles.projectImage}`}
                fill
                src={project.icon}
                alt={project.alt}
              />
            </div>
            <div className={styles.projectInfo}>
              <h2>{project.title}</h2>
              <div className={styles.projectLinks}>
                <a href={`/project/${project.alt}`}>
                  <button>Find out more!</button>
                </a>
                <div className={styles.projectSubLinks}>
                  <a href={project.repo} target="_blank">
                    <button>
                      <Image
                        width={35}
                        height={35}
                        alt="github"
                        src="/images/technologies/GitHub.png"
                      />
                    </button>
                  </a>
                  <a href={project.link} target="_blank">
                    <button>
                      <Image
                        width={35}
                        height={35}
                        alt="github"
                        src="/images/technologies/deployed-white.png"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Work;
