import { ArrowDown, ExternalLinkIcon, Github } from "lucide-react";

export const ProjectsSection = () => { 
    const projects = [
        {
            name: "Project Manager",
            href: "http://projectmanager.cynarkamil.cba.pl",
            image: "/projectManager.png",
            title: "Project Manager",
            description: "A web application for managing projects, tasks, and team collaboration.",
       
        },
        {
            name: "Timer Challange",
            href: "http://timerchallange.cynarkamil.cba.pl",
            image: "/TimerChallange.png",
            title: "Timer Challange",
            description: "A mini game where players must stop a timer as close to a target time as possible.",
         
        }, 
        {
            name: "TicTacToe",
            href: "http://tictactoe.cynarkamil.cba.pl",
            image: "/TictacToe.png",
            title: "TicTacToe",
            description: "A classic Tic Tac Toe game built with React, allowing players to compete against each other.",
        }
        
    ];

    const handleScrollDown = () => {
        const nextSection = document.getElementById("Contact");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-16 bg-background" id="projects">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-glow">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden flex justify-center items-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-sm text-foreground/80 mb-4">{project.description}</p>
                            <div className="flex space-x-4">
                                <a href={project.href} target="_blank" rel="noopener noreferrer">
                                    <ExternalLinkIcon />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <button
                        type="button"
                        onClick={handleScrollDown}
                        className="flex flex-col items-center focus:outline-none bg-transparent border-none animate-bounce"
                        aria-label="Scroll Down"
                    >
                        <span>Scroll Down</span>
                        <ArrowDown className="h-5 w-5 text-primary" />
                    </button>
                </div>
            </div>
        </section>
    );
}