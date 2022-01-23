import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import Header from "../src/flat/Header";
import { RootState } from "../src/store";

const Home: NextPage = () => {
  const router = useRouter();
  const {isLoggedIn} = useSelector((state: RootState)=>state.authentication);

  useEffect(() => {
    if(!isLoggedIn){
      router.push('/register');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
