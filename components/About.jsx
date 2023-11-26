import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

import {
  User2,
  Phone,
  Mail,
  Calendar,
  GraduationCap,
  HomeIcon,
} from "lucide-react";

import DevImg from "./DevImg";
import PersonalInfo from "./modules/PersonalInfo";

const personalInfo = [
  {
    icon: <User2 />,
    text: "Ryan Davis",
  },
  {
    icon: <Phone />,
    text: "+0123456789",
  },
  {
    icon: <Mail />,
    text: "youremail@email.com",
  },
  {
    icon: <Calendar />,
    text: "Born on 10 Mar, 1998",
  },
  {
    icon: <GraduationCap />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon />,
    text: "321 Blue Avenue, NY, USA",
  },
];

const About = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-16">
          <h2 className="section-title">About Me</h2>
          <div className="grid xl:grid-cols-2 gap-10">
            <div className="hidden xl:flex">
              <DevImg
                containerStyles="w-[500px] h-[500px] relative bg-about_shape_light bg-no-repeat bg-bottom"
                imageSrc="/assets/about/developer.png"
              />
            </div>
            <div>
              <Tabs
                className="flex flex-col items-center gap-5"
                defaultValue="personalInfo"
              >
                <TabsList className="w-full sm:w-fit xl:w-full">
                  <TabsTrigger value="personalInfo">Personal Info</TabsTrigger>
                  <TabsTrigger value="qualifications">
                    Qualifications
                  </TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
                <div className="w-full sm:max-w-[400px] xl:max-w-full">
                  <TabsContent value="personalInfo">
                    <PersonalInfo personalInfo={personalInfo} />
                  </TabsContent>
                  <TabsContent value="qualifications">
                    Qualifications
                  </TabsContent>
                  <TabsContent value="skills">Skills</TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
