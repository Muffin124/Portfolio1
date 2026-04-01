export const SkillsSection = () => {
    
   const handleScrollDown = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

    const skills = [
        { name: "JavaScript"},
        { name: "React"  },
        { name: "Node.js"  },
        { name: "CSS" },
        { name: "HTML" },
        { name: "SQL" },
    ];

    return (
        <section className="py-16 transition-colors rounded-lg shadow-md" id="skills">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-glow">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
    <div key={index} className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
        <div className="flex items-center space-x-3">
            <span
                className="
                    flex-1
                    h-2
                    rounded-lg
                    appearance-none
                    bg-gray-200
                    dark:bg-gray-700
                    outline-none
                    transition
                    duration-200
                    shadow-inner
                    accent-primary
                "
            />
        </div>
    </div>
))}
                </div>
            </div>
        </section>
    );
}