import { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Section from "./components/Shared/Section";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Cerifications/Certifications";
import "./App.css";
import DarkModeSection from "./components/DarkModeSection/DarkModeSection";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get initial theme from local storage if it exists
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark"; // Return true if savedTheme is "dark"
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Update local storage with the current theme
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme); // Set data-theme attribute
  }, [isDarkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (elId: string) => {
    document
      .getElementById(elId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header onNavItemClick={handleScroll} />
      <div className="container-fluid p-0">
        <DarkModeSection toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Section className="d-column section" id="about">
          <About />
        </Section>
        <Section className="flex-column section" id="experience">
          <Experience />
        </Section>
        <Section
          className="flex-column scroll-section section-education section"
          id="education"
        >
          <Education />
        </Section>
        <Section className="flex-column section" id="skills">
          <Skills />
        </Section>
        <Section className="flex-column section" id="certifications">
          <Certifications />
        </Section>
      </div>
    </>
  );
};

export default App;
