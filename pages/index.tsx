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
import useNavigateToRegisterIfNotLoggedIn from "../src/features/Authentication/Register/hooks/useNavigateToRegisterIfNotLoggedIn";
import styles from "../styles/Home.module.css";
import { RootState } from "../src/store";

const Home: NextPage = () => {
  useNavigateToRegisterIfNotLoggedIn();

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
