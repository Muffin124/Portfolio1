export const SkillsSection = () => {
    
   const handleScrollDown = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

    const skills = [
        { name: "JavaScript", value: 95 },
        { name: "React", value: 70 },
        { name: "Node.js", value: 70 },
        { name: "CSS", value: 90 },
        { name: "HTML", value: 95 },
        { name: "SQL", value: 95 },
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
            <input
                type="range"
                value={skill.value}
                readOnly
                min={0}
                max={100}
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
                style={{
                    background: `linear-gradient(90deg,rgba(12, 56, 177, 0.55) ${skill.value}%,rgb(63, 111, 207) ${skill.value}%)`
                }}
            />
            <span className="text-sm font-semibold text-primary">{skill.value}%</span>
        </div>
        <style jsx>{`
            input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #a78bfa;
                border: 2px solid #fff;
                box-shadow: 0 2px 6px rgba(0,0,0,0.15);
                transition: background 0.3s;
            }
            input[type="range"]:focus::-webkit-slider-thumb {
                background: #7c3aed;
            }
            input[type="range"]::-moz-range-thumb {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #a78bfa;
                border: 2px solid #fff;
                box-shadow: 0 2px 6px rgba(0,0,0,0.15);
                transition: background 0.3s;
            }
            input[type="range"]:focus::-moz-range-thumb {
                background: #7c3aed;
            }
            input[type="range"]::-ms-thumb {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #a78bfa;
                border: 2px solid #fff;
                box-shadow: 0 2px 6px rgba(0,0,0,0.15);
                transition: background 0.3s;
            }
            input[type="range"]:focus::-ms-thumb {
                background: #7c3aed;
            }
        `}</style>
    </div>
))}
                </div>
            </div>
        </section>
    );
}