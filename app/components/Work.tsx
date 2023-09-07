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
                className={styles[project.alt]}
                width={200}
                height={150}
                style={{ maxWidth: "100%", height: "auto" }}
                src={project.image}
                alt={project.alt}
              />
            </div>
            <div className={styles.projectInfo}>
              <h2>{project.title}</h2>
              <div className={styles.projectLinks}>
                <a href={`/project/${project.alt}`} target="_blank">
                  <button>Find out more!</button>
                </a>
                <div className={styles.projectSubLinks}>
                  <a href={project.repo} target="_blank">
                    <button>
                      <Image
                        width={35}
                        height={35}
                        alt="github"
                        src="/images/technologies/github.png"
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
