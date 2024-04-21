import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

import { Button } from "./ui/button";

import { Menu } from "lucide-react";

import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button type="button" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div className="space-y-10">
          <Logo />
          <Nav
            containerStyles="flex flex-col items-center gap-5"
            linkStyles="text-xl font-medium hover:text-primary"
          />
        </div>
        <Socials containerStyles="flex justify-center items-center gap-5" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
