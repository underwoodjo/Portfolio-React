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
  ];
  return (
    <div className="absolute left-0 right-0 grid place-items-center top-1/4">
      <Tabs value="personal-projects">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab className="hover:bg-green-900/40" key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4">
          {data.map(({ value, cards }) => (
            <TabPanel
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
              key={value}
              value={value}
            >
              {cards.map((card, index) => (
                <div className="" key={index}>
                  <Card
                    className="bg-gradient-to-b from-green-900/40 to-neutral-50/30 p-4 rounded-xl h-52 w-52"
                    color="transparent"
                    shadow={false}
                  >
                    <CardBody>{card.title}</CardBody>
                  </Card>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      {/* <Card
        className="bg-gradient-to-b from-green-900/40 to-neutral-50/30 p-4 rounded-xl h-52 w-52"
        color="transparent"
        shadow={false}
      >
      </Card>
      <Card
        className="bg-gradient-to-b from-green-900/40 to-neutral-50/30 p-4 rounded-xl h-52 w-52"
        color="transparent"
        shadow={false}
      >
        <CardBody className="flex flex-col"></CardBody>
      </Card>
      <Card
        className="bg-gradient-to-b from-green-900/40 to-neutral-50/30 p-4 rounded-xl h-52 w-52"
        color="transparent"
        shadow={false}
      >
        <CardBody className="flex flex-col"></CardBody>
      </Card>
      </Grid>
      </Grid> */}
    </div>
  );
};

export default Projects;
