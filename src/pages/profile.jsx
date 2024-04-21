import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer, PageTitle } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
export function Profile() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
          <Typography
            variant="h1"
            color="white"
            className="mb-6 font-black"
          >
          Custom Website Development Experts
          </Typography>
          <Typography variant="lead" color="white" className="opacity-80">
            At Brotherhood's Design Development, we are a team of passionate web developers dedicated to creating stunning, high-performance websites tailored to our clients' unique needs. With experience and expertise in the latest web technologies, we craft custom solutions that not only look modern but also deliver exceptional user experiences.
          </Typography>
        </div>
    </div>
  </div>
      </div>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Meet the team">
          What brings us together is a shared passion for creating exceptional digital experiences that captivate and engage users. We understand that every client has distinct needs, goals, and target audiences, which is why we tailor our approach to each project.
          <br />
          <br />
Our team's diverse backgrounds allow us to tackle challenges from multiple angles, ensuring that we deliver innovative and effective solutions. Whether you're a small business looking to establish an online presence or a large corporation seeking to revamp your digital platform, we have the expertise to bring your vision to life.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name, url }) => (
                      <a href={url} target="_blank">
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-xl fa-${name}`} />
                        </IconButton>
                      </a>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Profile;
