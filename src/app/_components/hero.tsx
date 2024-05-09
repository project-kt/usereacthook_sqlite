import { Button } from "@/components/ui/button";
import { ArrowUpRight, Atom, File, Github, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Hero(): React.JSX.Element {
  return (
    <section className="flex  flex-col gap-y-8 py-20 text-center">
      <h1 className="text-4xl font-extrabold text-primary md:text-7xl">Collection of React Hooks</h1>
      <h2 className="mx-auto max-w-4xl text-neutral-400 md:text-3xl">
        Find and copy expertly crafted custom hooks with <span className="text-primary">clear documentation</span>,
        usage <span className="text-primary">examples</span>, and tips for optimization.
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
