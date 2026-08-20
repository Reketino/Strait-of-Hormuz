import Hero from "@/components/story/Hero";
import Intro from "@/components/story/Intro";
import Chokepoint from "@/components/story/Chokepoint";
import OilSection from "@/components/story/OilSection";
import MapSection from "@/components/story/MapSection";
import TrafficSection from "@/components/story/TrafficSection";
import TimelineSection from "@/components/story/TimelineSection";

export default function StoryPage() {
  return (
    <main className=" bg-black text-white">
      <Hero />
      <Intro />
      <Chokepoint />
      <OilSection />
      <MapSection />
      <TrafficSection />
      <TimelineSection />
    </main>
  );
}
