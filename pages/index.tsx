import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/layout";
import Header from "../src/flat/Header";
import Search from "../src/features/Search";
import SectionHeader from "../src/flat/SectionHeader";
import RecentExperiences from "../src/features/Experience/RecentExperiences";
import PopularCategories from "../src/features/Category/PopularCategories";
import styles from "../styles/Home.module.css";
import { RootState } from "../src/store";

const Home: NextPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.authentication
  );

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/register");
    }
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <Flex flexFlow="column" p={3}>
        <Search />
        <RecentExperiences />
        <PopularCategories />
      </Flex>
    </>
  );
};

export default Home;
