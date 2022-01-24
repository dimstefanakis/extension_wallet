import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Flex, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Header from "../../src/flat/Header";
import ExperienceHero from "../../src/features/Experience/ExperienceHero";
import ExperienceTabs from "../../src/features/ExperienceTabs";
import { ExperienceProps } from "../../src/features/Experience/interface";
import experiences from "../../src/data/experiences.json";

function ExperiencePage() {
  const router = useRouter();
  const [experience, setExperience] = useState<ExperienceProps | null>(null);
  const { slug } = router.query;

  useEffect(() => {
    // should search by id instead of title but it's fine for now
    const foundExperience = experiences.find(
      (experience) => experience.slug == slug
    );
    if (foundExperience) {
      setExperience(foundExperience);
    }
  }, [slug]);

  if (!experience) {
    return null;
  }

  return (
    <>
      <Header />
      <Flex flexFlow="column" width="100%">
        <ExperienceHero
          color={experience.color}
          avatar={experience.avatar}
          title={experience.title}
          description={experience.description}
          userCount={experience.userCount}
        />
        <ExperienceTabs
          longDescription={experience.longDescription}
          url={experience.url}
        />
      </Flex>
    </>
  );
}

export default ExperiencePage;
