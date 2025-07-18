import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { SkillsSection } from "../components/SkillsSection";
export const Home = () => { 
    return <div className="min-h-screen bg-backgorund text-foreground overflow-x-hidden "> 


        {/* Theme Toggle */}
        <ThemeToggle /> 

        {/* BackGround Effects */}
         <StarBackground />
        {/* Navbar */}
         <Navbar /> 
        {/* Main Content */}
            <main> 
                <HeroSection /> 
                <AboutSection />
                <SkillsSection />
                <ProjectsSection /> 
                <ContactSection /> 
                
            </main>
        {/* Footer */}
    </div>; 
}