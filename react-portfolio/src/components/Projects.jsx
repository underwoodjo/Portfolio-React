import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";

const Projects = () => {
  const data = [
    {
      label: "Personal Projects",
      value: "personal-projects",
      cards: [
        {
          title: "My Plant Playbook",
          github: "",
          href: "",
          shortDescription: "",
          image: "",
          completed: "false",
        },
        {
          title: "My Plant Playbook",
          github: "",
          href: "",
          shortDescription: "",
          image: "",
          completed: "false",
        },
        {
          title: "My Plant Playbook",
          github: "",
          href: "",
          shortDescription: "",
          image: "",
          completed: "false",
        },
      ],
    },
    {
      label: "Collaborative Projects",
      value: "collaborative projects",
      cards: [
        {
          title: "GitFitNotFat",
          github: "",
          href: "",
          shortDescription: "",
          image: "/images/gitfit.jpeg",
          completed: "false",
        },
        {
          title: "Destinary",
          github: "",
          href: "",
          shortDescription: "",
          image: "",
          completed: "false",
        },
        {
          title: "Disclone",
          github: "",
          href: "",
          shortDescription: "",
          image: "",
          completed: "false",
        },
      ],
    },
  ];
  return (
    // <div className="absolute left-0 right-0 grid place-items-center top-1/4">
    <div className="absolute left-16 right-0 top-16 md:top-36  text-center">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Welcome to my Portfolio!",
          2000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
      <Tabs className="flex justify-center flex-wrap" value="personal-projects">
        <TabsHeader
          className="bg-gradient-to-b from-green-900/40 to-neutral-50/30 p-2 mb-6 mt-6 flex xs:flex-col sm:flex-row"
          style={{ width: "500px", height: "50px" }}
        >
          {data.map(({ label, value }) => (
            <Tab
              className="hover:bg-green-900/40 rounded-lg"
              key={value}
              value={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="flex gap-4">
          {data.map(({ value, cards }) => (
            <TabPanel
              className="gap-4 flex flex-wrap justify-center"
              key={value}
              value={value}
            >
              {cards.map((card, index) => (
                <div className="" key={index}>
                  <Card
                    className="bg-gradient-to-b from-green-900/40 to-neutral-50/30 p-4 rounded-xl h-60 w-56 text-center"
                    color="transparent"
                    shadow={false}
                  >
                    <CardBody>
                      {card.title}
                      <img className="pt-2" src={card.image} />
                    </CardBody>
                  </Card>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      </div>
  );
};

export default Projects;
