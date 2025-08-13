import Contactsection from "@/components/Contactsection";
import { ExperienceSection } from "@/components/Experiencesection";
import Herosection from "@/components/Herosection";
import Miniaboutsection from "@/components/Miniaboutsection";
import Miniservices from "@/components/Miniservices";
import { ProcessSection } from "@/components/Process";
import { Servicesection } from "@/components/Servicesection";


export default function Home() {
  return (
    <div className=" overflow-x-hidden ">
      <Herosection/>
      <Miniservices/>
      <Miniaboutsection/>
      <Servicesection/>
      <ExperienceSection/>
      <ProcessSection/>
      <Contactsection/>
    </div>
  );
}
