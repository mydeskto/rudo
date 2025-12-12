import { projects } from "@/lib/projects-data";
import { ProjectDetailClient } from "./project-detail-client";

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailPage() {
  return <ProjectDetailClient />;
}
