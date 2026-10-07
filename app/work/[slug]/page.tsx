import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import WorkDetail from "@/components/WorkDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} — Portfolio` : "Work" };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  return <WorkDetail project={project} others={others} />;
}
