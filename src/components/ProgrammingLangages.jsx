import { Building2Icon, ThumbsUpIcon, Users2Icon } from "lucide-react";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const ProgrammingLangages = () => {
  return (
    <div>
      <>
        {/* Icon Blocks */}
        <div className="container px-0 py-24  lg:py-24 lg:flex items-center justify-center">
          <div className="lg:w-1/2">
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background lg:px-12 pb-20 pt-8 ">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>

          <div className="mt-4 lg:w-1/2 mx-auto">
            {/* Grid */}
            <div className="grid gap-12">
              <div>
                <h2 className="text-2xl font-bold lg:text-4xl text-left">Tous les languages sont permis</h2>
                <p className="mt-3 text-muted-foreground text-left">
                Vous êtes plutôt dev React, JS, HTML, CSS, Vue, Angular ou encore Tipescript ? Peu importe votre stack technique, vous êtes le bienvenu.
                </p>
              </div>
              <div className="space-y-6 lg:space-y-10">
                {/* Icon Block */}
                <div className="flex">
                  <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-left">
                      High quality Co-Living spaces
                    </h3>
                    <p className="mt-1 text-muted-foreground text-left">
                      Our fully furnished spaces are designed and purpose-built
                      with Co-Living in mind, featuring high-end finishes and
                      amenities that go far beyond traditional apartment
                      buildings.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex">
                  <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-left">
                      Fostering vibrant communities
                    </h3>
                    <p className="mt-1 text-muted-foreground text-left">
                      Our passion is bringing people together. Beyond creating
                      beautiful spaces, we provide shared experiences.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex">
                  <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-left">
                      Simple and all-inclusive
                    </h3>
                    <p className="mt-1 text-muted-foreground text-left">
                      We worry about the details so that our residents
                      don&apos;t have to. From our online application process to
                      simple, all-inclusive billing we aim to make the living
                      experience as effortless as possible.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Icon Blocks */}
      </>
    </div>
  );
};

export default ProgrammingLangages;
