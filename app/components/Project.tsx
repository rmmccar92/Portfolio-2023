import type { FC } from "react";
import Image from "next/image";
import styles from "../styles/Project.module.css";
import data from "../data/technologies";

interface ProjectsProps {
  selectedProject: any;
}

const Projects: FC<ProjectsProps> = ({ selectedProject }) => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectContent}>
        <div className={styles.projectInfo}>
          <h1>{selectedProject.title}</h1>
          <p>{selectedProject.long_description}</p>
        </div>
        <div className={styles.projectImage}>
          {selectedProject.images.map((image: string, i: number) => {
            return (
              <Image
                key={i}
                width={500}
                height={500}
                className={`${styles[selectedProject.alt]} ${
                  styles.projectImage
                }`}
                src={`${image}`}
                alt={`${selectedProject.title} demo image`}
              />
            );
          })}
          <div className={styles.projectTechList}>
            {selectedProject.technologies.map((t: string, i: number) => {
              const selectedTech = data.images.find(
                (item: any) => item.name === t
              ) || { url: "", name: "" };
              return (
                <div className={styles.projectTech}>
                  {/* <p>{selectedTech.name}</p> */}
                  <Image
                    key={i}
                    width={25}
                    height={35}
                    className={styles.projectTech}
                    src={selectedTech.url}
                    alt={`${selectedTech.name} logo`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.projectExtra}>
          <div className={styles.projectLinks}>
            <a href={selectedProject.repo} target="_blank" rel="noreferrer">
              <Image
                width={40}
                height={40}
                className={styles.projectGH}
                src="/images/technologies/GitHub.png"
                alt="GitHub logo"
              />
            </a>
            <a href={selectedProject.link} target="_blank" rel="noreferrer">
              <Image
                width={40}
                height={40}
                className={styles.projectLink}
                src="/images/technologies/deployed-white.png"
                alt="Link logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
