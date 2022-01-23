import { Flex } from "@chakra-ui/layout";
import SectionHeader from "../../flat/SectionHeader";
import ExperiencePreview from "../ExperiencePreview";
import experiences from "./data.json";

function RecentExperiences() {
  return (
    <Flex flexFlow="column">
      <SectionHeader title="Recent experiences" />
      {experiences.map((experience) => {
        return (
          <ExperiencePreview
            title={experience.title}
            avatar={experience.avatar}
            description={experience.description}
            userCount={experience.userCount}
            color={experience.color}
          />
        );
      })}
    </Flex>
  );
}

export default RecentExperiences;
