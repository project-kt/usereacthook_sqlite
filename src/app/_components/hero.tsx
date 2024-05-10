import { Button } from "@/components/ui/button";
import { Atom, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

function Hero(): React.JSX.Element {
  return (
    <section className="flex  flex-col gap-y-8 py-20 text-center">
      <div className="react-logo-container">
        <span className="react-logo">
          <span className="nucleo"></span>
        </span>
      </div>
      <h1 className="text-gradient text-4xl font-extrabold md:text-7xl">Collection of React Hooks</h1>
      <h2 className="mx-auto max-w-4xl text-neutral-400 md:text-3xl">
        Find and copy expertly crafted custom hooks with <span className="text-gradient">clear documentation</span>,
        usage <span className="text-gradient">examples</span>, and tips for optimization.
      </h2>
      <div className="flex flex-row items-center justify-center gap-x-3">
        <Button size={"lg"} asChild>
          <Link href={"/docs"}>
            Documentation <Atom className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant={"outline"} size={"lg"} asChild>
          <Link href={"https://github.com"}>
            Github
            <Github className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
