'use client'
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Organizations from "../components/Organizations";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Work from "../components/Work";
import Cohorts from "../components/Cohorts";
import Writing from "../components/Writing";
import Podcasts from "../components/Podcasts";
import Community from "../components/Community"
import Impact from "../components/Impact"
import FeaturedWork from "../components/FeaturedWork"
import Philosophy from "../components/Philosophy"
import Journey from "../components/Journey"
import FeaturedPrograms from "../components/FeaturedPrograms"

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(()=>{
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setIsDarkMode(true)
  }else{
    setIsDarkMode(false)
  }
 },[])

 useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
 },[isDarkMode])

  return (
    <>
    <Preloader isDarkMode={isDarkMode} />
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isHidden={isModalOpen}/>
    <Header isDarkMode={isDarkMode} />
    <Organizations isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <FeaturedWork isDarkMode={isDarkMode} />
    <Philosophy isDarkMode={isDarkMode} />
    <Journey isDarkMode={isDarkMode} />
    <FeaturedPrograms isDarkMode={isDarkMode} onModalToggle={setIsModalOpen} />
    <Services isDarkMode={isDarkMode} />
    <Work isDarkMode={isDarkMode} />
    <Cohorts isDarkMode={isDarkMode} />
    <Impact isDarkMode={isDarkMode} />
    <Writing isDarkMode={isDarkMode} />
    <Podcasts isDarkMode={isDarkMode} />
    <Community isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    </>
  );
}
