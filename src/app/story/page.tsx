import Hero from "@/components/story/Hero"
import Intro from "@/components/story/Intro";
import Chokepoint from "@/components/story/Chokepoint";

export default function StoryPage(){
    return(
        <main className=" bg-black text-white">
            <Hero />
            <Intro />
        </main>

);
}