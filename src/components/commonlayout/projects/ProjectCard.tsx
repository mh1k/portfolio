import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/evervault-card";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

const ProjectCard = ({ heigh }: { heigh: number }) => {
  return (
    <Card className="dark:bg-slate-900 bg-white transition-transform duration-300 hover:scale-105  rounded-none relative h-auto w-fit">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-gray-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-gray-400" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-gray-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-gray-400" />
      {/* <HoverBorderGradient containerClassName="rounded-none" className="bg-slate-900 border-none p-0"> */}
      <MagicCard >
        <CardTitle className="p-4">Cycling Emporium</CardTitle>
        <CardContent className="px-0 overflow-hidden ">
          <Image
            src="https://i.ibb.co/8bBkzBG/empor1.png"
            alt="project1"
            width={400}
            height={heigh}
            className="object-cover"
          ></Image>
        </CardContent>
        <CardFooter>
          <p>Deatails</p>
        </CardFooter>
        {/* </HoverBorderGradient> */}
      </MagicCard>
    </Card>
  );
};

export default ProjectCard;
