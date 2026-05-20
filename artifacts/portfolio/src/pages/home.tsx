import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Layers, Globe, Mail, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import logoPath from "@assets/ASTRIFYDZ_1779285145220.jpeg";

// Simple counter hook
const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth stop
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, end, duration]);

  return { count, ref };
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div data-testid="logo">
          <img src={logoPath} alt="Astrifydz" className="h-10 w-auto object-contain" />
        </div>
        
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {['Services', 'Projets', 'À propos', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`nav-link-${item}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default function Home() {
  const expCounter = useCounter(4, 2);
  const projCounter = useCounter(20, 2);
  const satCounter = useCounter(100, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  const services = [
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Web Design & UI/UX",
      desc: "Maquettes Figma, prototypages interactifs, expériences visuelles mémorables."
    },
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Développement Web",
      desc: "Sites vitrine, applications web, intégrations CMS (Next.js, Strapi, WordPress)."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Solutions Institutionnelles",
      desc: "Portails, plateformes de candidature, sites multilingues, optimisation SEO."
    }
  ];

  const projects = [
    {
      title: "ONA Patrimoine",
      category: "Application Web",
      year: "2024",
      desc: "Application de saisie et gestion du patrimoine pour ONA. Formulaires dynamiques, tableaux de bord, export de données et suivi en temps réel.",
    },
    {
      title: "DEP PLUS",
      category: "Application Web",
      year: "2024",
      desc: "Plateforme web complète pour la gestion et le suivi des dépenses. Interface intuitive, rapports détaillés et gestion multi-utilisateurs.",
    },
    {
      title: "Site E-commerce",
      category: "E-commerce",
      year: "2023",
      desc: "Boutique en ligne complète avec catalogue produits, panier d'achat, gestion des commandes et interface d'administration.",
    },
    {
      title: "Data Entry",
      category: "Outil Métier",
      year: "2023",
      desc: "Outil de saisie de données optimisé pour la productivité. Interface ergonomique, validation automatique et synchronisation base de données.",
    }
  ];

  const stack = ["React", "Next.js", "Node.js", "TypeScript", "Strapi", "WordPress", "PostgreSQL", "Figma", "TailwindCSS", "Framer Motion"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-secondary/50 rounded-full px-3 py-1 mb-6 border border-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-muted-foreground">Disponible pour nouveaux projets</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter mb-6">
              Bonjour, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                Je suis Astrifydz.
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-sans">
              Studio digital freelance basé à Alger. Je conçois et développe des expériences web premium pour les entreprises ambitieuses.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base font-medium rounded-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })} data-testid="hero-cta-projects">
                Voir mes projets <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium rounded-full hover:bg-secondary border-border" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} data-testid="hero-cta-contact">
                Me contacter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 relative" id="services">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Expertises</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(124,58,237,0.3)]"
                data-testid={`service-card-${index}`}
              >
                <div className="mb-6 p-4 bg-secondary inline-block rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 md:py-32 bg-secondary/30" id="projets">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Projets Récents</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <Button variant="ghost" className="rounded-full group" data-testid="btn-all-projects">
              Tous les projets <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
                className={`group relative overflow-hidden rounded-3xl bg-card border border-border flex flex-col h-full ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
                data-testid={`project-card-${index}`}
              >
                <div className="p-8 md:p-10 flex flex-col flex-grow z-10 relative">
                  <div className="flex justify-between items-start mb-16">
                    <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground font-mono">
                      {project.year}
                    </span>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>
                
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 border-y border-border bg-card overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-6 py-3 bg-secondary border border-border rounded-full text-sm md:text-base font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                data-testid={`tech-badge-${tech}`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 relative" id="a-propos">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">À propos</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Je suis un développeur et designer freelance basé à Alger. J'accompagne les entreprises et institutions dans la création de solutions digitales premium — du premier pixel au déploiement final.
              </p>
              <div className="flex items-center space-x-3 text-foreground">
                <MapPin className="text-primary w-6 h-6" />
                <span className="text-lg font-medium">Basé à Alger, Algérie</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                ref={expCounter.ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-secondary/50 border border-border"
              >
                <div className="text-5xl font-bold text-primary mb-2">
                  {expCounter.count}+
                </div>
                <div className="text-muted-foreground font-medium">Années d'expérience</div>
              </motion.div>
              
              <motion.div 
                ref={projCounter.ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-3xl bg-secondary/50 border border-border"
              >
                <div className="text-5xl font-bold text-primary mb-2">
                  {projCounter.count}+
                </div>
                <div className="text-muted-foreground font-medium">Projets livrés</div>
              </motion.div>

              <motion.div 
                ref={satCounter.ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-3xl bg-secondary/50 border border-border sm:col-span-2"
              >
                <div className="text-5xl font-bold text-primary mb-2 flex items-center gap-2">
                  {satCounter.count}%
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-muted-foreground font-medium">Clients satisfaits</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-primary/5 border-t border-border relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Démarrons votre projet</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Un projet en tête ? Je serais ravi d'en discuter.
            </p>
            
            <a href="mailto:a.zerguini@yahoo.com">
              <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1" data-testid="btn-send-message">
                <Mail className="mr-3 w-6 h-6" /> Envoyer un message
              </Button>
            </a>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-border/50 pt-12">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <a href="mailto:a.zerguini@yahoo.com" className="text-lg font-medium hover:text-primary transition-colors block">a.zerguini@yahoo.com</a>
                <a href="mailto:astrifydz@outlook.fr" className="text-lg font-medium hover:text-primary transition-colors block">astrifydz@outlook.fr</a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Téléphone</div>
                <a href="tel:+213559948244" className="text-lg font-medium hover:text-primary transition-colors">+213 559 94 82 44</a>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Localisation</div>
                <div className="text-lg font-medium">Alger, Algérie</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <img src={logoPath} alt="Astrifydz" className="h-8 w-auto object-contain" />
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Astrifydz. Tous droits réservés.
          </div>
          
        </div>
      </footer>
    </div>
  );
}