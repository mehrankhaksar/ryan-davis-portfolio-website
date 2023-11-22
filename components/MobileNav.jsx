import Logo from "./Logo";
import Nav from "./Nav";
import SocialMedia from "./SocialMedia";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

import { AlignJustify } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="h-full flex flex-col justify-between items-center">
          <div className="flex flex-col items-center gap-12">
            <Logo />
            <Nav
              mobileNav={true}
              containerStyles="flex flex-col items-center gap-5"
              linkStyles="relative font-medium py-1.5 px-3 rounded-md overflow-hidden"
              activeLinkStyles="absolute inset-0 bg-primary"
            />
          </div>
          <SocialMedia
            containerStyles="flex items-center gap-5"
            iconStyles="text-2xl"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
