"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  // MenuItem,
  // MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
const navigation = [
  { name: "Dashboard", to: "#" },
  { name: "Team", to: "#" },
  { name: "Projects", to: "#" },
  { name: "Calendar", to: "#" },
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  // window.onscroll = () => {
  //   const currentScroll = window.pageYOffset;
  //   if (currentScroll > 0) {
  //     setScroll(true);
  //     // console.log(currentScroll);
  //   } else {
  //     // console.log(currentScroll);
  //     setScroll(false);
  //   }
  // }

  useEffect(() => {
    // Ensure this runs only on the client
    setScroll(window.scrollY > 0);
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`bg-transparent border border-b-1 border-t-0 border-r-0 border-l-0 border-transparent  fixed w-full top-0 z-50 ${
        !scroll
          ? " transition duration-500 "
          : "backdrop-blur-xl  border-b-1 border-t-0 border-r-0 border-l-0 border-gray-800 transition duration-500"
      }`}
    >
      <div className="mx-[10%] max-w-7xl px-2 py-1  sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center  justify-center sm:items-center sm:justify-end">
            <div className="hidden  sm:block">
              <div className="flex  space-x-10">
                <Link
                  href="/"
                  className=" relative py-[1.3rem] font-regular text-lg  transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:h-[0.14rem] before:w-0 dark:before:bg-white before:bg-black before:-translate-x-1/2 before:duration-300 hover:before:w-full"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className=" relative py-[1.3rem] font-regular text-lg  transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:h-[0.14rem] before:w-0 before:bg-white before:-translate-x-1/2 before:duration-300 hover:before:w-full"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className=" relative py-[1.3rem] font-regular text-lg  transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:h-[0.14rem] before:w-0 before:bg-white before:-translate-x-1/2 before:duration-300 hover:before:w-full"
                >
                  Project
                </Link>
                <Link
                  href="/blogs"
                  className=" relative py-[1.3rem] font-regular text-lg  transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:h-[0.14rem] before:w-0 before:bg-white before:-translate-x-1/2 before:duration-300 hover:before:w-full"
                >
                  Blogs
                </Link>
                <Link
                  href="/project"
                  className=" relative py-[1.3rem] font-regular text-lg  transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:h-[0.14rem] before:w-0 before:bg-white before:-translate-x-1/2 before:duration-300 hover:before:w-full"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full p-1 bg-transparent text-white text-sm hover: focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <ShoppingCartIcon aria-hidden="true" className="size-6" />
            </button> */}

            <button className="px-4 py-2  text-lg font-semibold text-white rounded-full bg-purple-700 active:scale-110  duration-200 transition ease-in-out">
              Login
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <UserCircleIcon className="size-8 text-white bg-transparent"></UserCircleIcon>
                </MenuButton>
              </div>
              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems> */}
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 flex flex-col px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Link href={item.to} key={item.to}>
              <DisclosureButton>{item.name}</DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
