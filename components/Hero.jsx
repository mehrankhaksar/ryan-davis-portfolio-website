import Link from "next/link";

import { Button } from "./ui/button";

import { Send, Download } from "lucide-react";

import { RiBriefcase4Fill, RiTodoFill, RiTeamFill } from "react-icons/ri";

import SocialMedia from "./SocialMedia";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="bg-hero bg-no-repeat bg-cover bg-bottom py-12 dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="max-w-md space-y-5 text-center mx-auto xl:text-left xl:mx-0">
            <span className="font-semibold text-primary uppercase tracking-[4px]">
              Web Developer
            </span>
            <h1 className="h1">Hello, my name is Ryan Davis</h1>
            <p className="description">
              Brief description with insights into myself, my vocational
              journey, and what i engage in professionally.
            </p>
            <div className="max-w-[150px] flex flex-col gap-2.5 mx-auto xl:max-w-fit xl:flex-row xl:items-start xl:mx-0">
              <Link href="/contact">
                <Button className="w-full gap-x-2.5 rounded-full">
                  Contact me
                  <Send size={18} />
                </Button>
              </Link>
              <Button className="gap-x-2.5 rounded-full" variant="secondary">
                Download CV
                <Download size={18} />
              </Button>
            </div>
            <SocialMedia
              containerStyles="flex justify-center items-center gap-5 xl:justify-start"
              iconStyles="text-2xl text-muted-foreground transition-all hover:text-primary"
            />
          </div>
          <div className="hidden relative xl:flex">
            <Badge
              containerStyles="absolute top-[25%] -left-[15%]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years of Experience"
            />
            <Badge
              containerStyles="absolute -bottom-[5%] left-0"
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText="K"
              badgeText="Finished Projects"
            />
            <Badge
              containerStyles="absolute bottom-[15%] right-0"
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText="K"
              badgeText="Happy Clients"
            />
            <div className="w-[500px] h-[500px] absolute right-0 -bottom-10 bg-hero_shape_2_light bg-no-repeat dark:bg-hero_shape_2_dark" />
            <DevImg
              containerStyles="w-[500px] h-[450px] relative bg-hero_shape_1 bg-no-repeat bg-bottom bg-cover"
              imageSrc="/assets/hero/developer.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
