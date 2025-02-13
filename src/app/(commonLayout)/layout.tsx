import { ThemeProvider } from "@/components/provider/theme-provider";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { Inter, Poppins } from "next/font/google";

export const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <main
          className={`${poppins.className} bg-gray-100 dark:bg-[#0b1120]  dark:text-white`}
        >
          <InteractiveGridPattern
            className={cn(
              "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
              "fixed top-0 left-0 pointer-events-auto  opacity-10"
            )}
            width={40}
            height={40}
            squares={[120, 120]}
            squaresClassName="transition duration-200 data-[hover]:fill-blue-500"
          />

          <main className="pointer-events-none relative z-10 ">{children}</main>
        </main>
      </ThemeProvider>
    </>
  );
};

export default layout;
