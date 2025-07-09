import { cn } from "@lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

const NavItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    {name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#Contact" },
];

export function NavBar() {
    const [scroll, setScroll] = useState("top");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll handler for navbar links
    const handleNavClick = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const id = href.slice(1);
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false); // close mobile menu if open
            }
        }
    };

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                scroll ? "py-3 bg-background/80 backdroup-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center " href="#">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Kamil </span>Cynar
                    </span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {NavItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={e => handleNavClick(e, item.href)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Hamburger Menu Icon for Mobile View */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground/80 z-50 "
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex",
                        "flex-col items-center justify-center transition-all duration-300 md:hidden",
                        isOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {NavItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={e => handleNavClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}