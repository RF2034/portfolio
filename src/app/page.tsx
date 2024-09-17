import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      <Timeline />
      <Skills />
      {/* <Projects /> */}
    </main>
  );
}
