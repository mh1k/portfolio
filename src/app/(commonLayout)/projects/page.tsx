import ProjectCard from "@/components/commonlayout/projects/ProjectCard";

const ProjectPage = () => {
  return (
    <div className="top-[8rem] relative min-h-screen mx-[10%]">
      <div className="text-center">
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold text-center relative z-20">
          Projects
        </h1>
        <div className="w-[40rem] h-40 relative mx-auto">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px w-1/4" />
        </div>
      </div>

      <div className="pointer-events-auto grid grid-cols-3 gap-10">
        <ProjectCard heigh={300}></ProjectCard>
        <ProjectCard heigh={500}></ProjectCard>
        <ProjectCard heigh={500}></ProjectCard>
        <ProjectCard heigh={500}></ProjectCard>
        <ProjectCard heigh={500}></ProjectCard>
        <ProjectCard heigh={500}></ProjectCard>
        <ProjectCard heigh={500}></ProjectCard>
      </div>
    </div>
  );
};

export default ProjectPage;
