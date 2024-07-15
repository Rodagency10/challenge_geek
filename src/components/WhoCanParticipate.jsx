import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Binary, Book, BriefcaseBusiness} from "lucide-react";

const WhoCanParticipate = () => {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container  lg:py-24 px-0">
        <h1 className="scroll-m-20 text-xl mb-6 font-medium tracking-tight lg:text-3xl mt-4 text-left">
          Qui peut participer ?
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center p-3 rounded-full border-2 bg-primary">
               
                <Book className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Etudiant</CardTitle>
            </CardHeader>
            <CardContent>
              Peu importe votre école ou votre niveau, vous êtes le bienvenu.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center p-3 rounded-full border-2 bg-primary">
                <BriefcaseBusiness className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Professionnel</CardTitle>
            </CardHeader>
            <CardContent>
              Que vous soyez employé ou freelance, vous pouvez participer.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center p-3 rounded-full border-2 bg-primary">
                <Binary className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Passionné</CardTitle>
            </CardHeader>
            <CardContent>
             Vous êtes passionné par la programmation, vous êtes le bienvenu.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
};

export default WhoCanParticipate;
