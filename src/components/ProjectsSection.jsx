import { ArrowDown, ExternalLinkIcon, Github } from "lucide-react";


export const ProjectsSection = () => { 
    
    const projects = [
    { name: "1", href: "/", image: "/projects/download.jpg", title: "Project 1", description: "This is a description for project 1." },
    { name: "2", href: "/2" },
    { name: "3", href: "/3" },
    
]
  const handleScrollDown = () => {
    const nextSection = document.getElementById("Contact");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    return (
        <section className="py-16 bg-background" id='projects'>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-glow">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {projects.map((project, key) => (
                <div
                key={key}
                className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover' 
                >
                  <div className="h-48 overflow-hidden justify-center items-center">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                  </div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-foreground/80 mb-4">{project.description}</p>
                        <a>
                        <ExternalLinkIcon  /> 
                        </a>
                        <a href="https://www.youtube.com/?app=desktop&gl=PL&hl=pl" target="_blank" rel="noopener noreferrer"> 
                        <Github/>
                    </a>
</div>
                         ))}
                </div>
            </div>

        
        </section>
    );
}