import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const skills = [
  {
    id: "01",
    name: "JavaScript",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: "02",
    name: "React",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: "03",
    name: "HTML",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: "04",
    name: "CSS3",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: "05",
    name: "Tailwind",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: "06",
    name: "Bootstraps",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    id: "07",
    name: "Matarial UI",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    id: "08",
    name: "Firebase",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    id: "09",
    name: "MongoDB",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    id: "10",
    name: "Typescript",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: "11",
    name: "Mongoose",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
  },
  {
    id: "12",
    name: "NextJs",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: "13",
    name: "NodeJs",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: "14",
    name: "ExpressJs",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: "15",
    name: "Postman",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    id: "16",
    name: "redux",
    imgage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
];

const Skills = () => {
  return (
    <div className="mx-[10%] mt-8">
      <h1 className="text-3xl mb-5">Skills</h1>
      <div className="pointer-events-auto">
        {/* marquee slider for technologies */}
        <Marquee pauseOnHover className="[--duration:25s]">
          {skills.map((skill) => (
            <div key={skill.id} className="border rounded p-5">
              <Image
                src={skill.imgage}
                alt={skill.name}
                width={68}
                height={68}
              ></Image>
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {skills.map((skill) => (
            <div key={skill.id} className="border rounded p-5">
              <Image
                src={skill.imgage}
                alt={skill.name}
                width={68}
                height={68}
              ></Image>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
