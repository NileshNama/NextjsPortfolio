'use client'
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Work from "../components/Work";
import Cohorts from "../components/Cohorts";
import Writing from "../components/Writing";
import Podcasts from "../components/Podcasts";
import Community from "../components/Community"
import Impact from "../components/Impact"
import Philosophy from "../components/Philosophy"
import Journey from "../components/Journey"
import AudienceFilter from "../components/AudienceFilter"
import Outcomes from "../components/Outcomes"
import Struggles from "../components/Struggles"
import StudentProof from "../components/StudentProof"
import NNSessions from "../components/NNSessions"
import WhoThrives from "../components/WhoThrives"
import QuestionFramework from "../components/QuestionFramework"
import BeliefSection from "../components/BeliefSection"
import StudentTestimonial from "../components/StudentTestimonial"
import ExecutionRoadmap from "../components/ExecutionRoadmap"
import Faq from "../components/Faq"








export default function Home() {

 const [isDarkMode, setIsDarkMode] = useState(false);

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
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode} />
    <Outcomes isDarkMode={isDarkMode} />
    <Struggles isDarkMode={isDarkMode} />
    <BeliefSection isDarkMode={isDarkMode}  />
    <StudentProof isDarkMode={isDarkMode} />
    <NNSessions isDarkMode={isDarkMode} />
    <StudentTestimonial isDarkMode={isDarkMode}  />
    <WhoThrives isDarkMode={isDarkMode}  />
    <AudienceFilter isDarkMode={isDarkMode} />
    <QuestionFramework isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <Philosophy isDarkMode={isDarkMode} />
    <Journey isDarkMode={isDarkMode} />
    <Services isDarkMode={isDarkMode} />
    <Work isDarkMode={isDarkMode} />
    <Cohorts isDarkMode={isDarkMode} />
    <ExecutionRoadmap isDarkMode={isDarkMode} />
    <Faq />
    <Impact isDarkMode={isDarkMode} />
    <Writing isDarkMode={isDarkMode} />
    <Podcasts isDarkMode={isDarkMode} />
    <Community isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    </>
  );
}
