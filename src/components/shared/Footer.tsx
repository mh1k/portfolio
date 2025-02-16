import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className=" border mt-[10rem] relative z-30 bg-gray-100 dark:bg-[#0b1120]">
      <div className="grid grid-cols-1 md:grid-cols-2 text-center mx-[10%] md:mx-0">
        <div className="md:border-r pb-5 pt-2 md:p-5  flex justify-center items-center"><p>© {date} Mahmudul Hasan</p></div>
        <div className="p-5 flex order-first md:order-none justify-center items-center gap-5">
          <FaFacebook className="h-8 w-8" />
          <FaLinkedin className="h-8 w-8" />
          <FaGithub className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
