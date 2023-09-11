"use client";
import { useParams } from "next/navigation";
import type { FC } from "react";
import Project from "../../components/Project";
import projects from "../../data/projects";
import styles from "../../styles/Project.module.css";
interface pageProps {}

const ProjectPage: FC<pageProps> = ({}) => {
  const { projectName } = useParams();
  const selectedProject = projects.find((item) => item.alt === projectName);

  return (
    <div className={styles.projectMain}>
      {selectedProject ? (
        <Project selectedProject={selectedProject} />
      ) : (
        <h1>Project not found</h1>
      )}
    </div>
  );
};
export default ProjectPage;
