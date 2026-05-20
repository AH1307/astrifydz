import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, ChevronRight, Clock, Code2, Database, 
  Figma, Globe, LayoutTemplate, Mail, MapPin, MonitorSmartphone, 
  Phone, Rocket, Search, Server, ShieldCheck, Star, Users 
} from "lucide-react";
import logoPath from "@assets/ASTRIFYDZ_1779285145220.jpeg";
import { SiCloudflare, SiNextdotjs, SiNodedotjs, SiPostgresql, SiStrapi } from "react-icons/si";

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up" | "left" | "right" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const y = direction === "up" ? 30 : 0;
  const x = direction === "left" ? 30 : direction === "right" ? -30 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logoPath} alt="Astrifydz" className="h-10 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#agence" className="hover:text-primary transition-colors">L'Agence</a>
            <a href="#references" className="hover:text-primary transition-colors">Références</a>
            <a href="#approche" className="hover:text-primary transition-colors">Approche</a>
            <a href="#delais" className="hover:text-primary transition-colors">Délais</a>
            <a href="#budget" className="hover:text-primary transition-colors">Devis</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background z-10" />
          <motion.div style={{ y }} className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
            <div className="absolute top-1/2 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[128px]" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8">
                <Star size={14} />
                <span className="text-sm font-medium tracking-wide uppercase">Proposition Commerciale</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white mb-8">
                Excellence & Innovation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">
                  au service de votre prestige digital.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                Nous proposons une solution web premium, multilingue et évolutive pour les AEI Awards — Algeria Excellence & Innovation Awards.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#budget" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:gap-4">
                  Voir la proposition <ArrowRight size={20} />
                </a>
                <a href="#references" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border bg-card/50 hover:bg-card text-foreground font-semibold transition-all">
                  Nos références
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Agency Presentation & Team */}
      <section id="agence" className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <FadeIn>
                <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Qui sommes-nous</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">L'Excellence depuis 2020</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Fondée en 2020 et basée à Alger, Astrifydz est un studio digital freelance spécialisé dans les solutions web institutionnelles et premium. Notre approche repose sur trois piliers fondamentaux :
                </p>
                <div className="space-y-4 mb-8">
                  {['Innovation Technologique', 'Transparence Totale', 'Excellence Opérationnelle'].map((value, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { role: "Designers UI/UX", count: 1, icon: <Figma size={24} /> },
                { role: "Développeurs Frontend", count: 1, icon: <LayoutTemplate size={24} /> },
                { role: "Développeurs Backend", count: 1, icon: <Server size={24} /> },
                { role: "Architecte & Chef de Projet", count: 1, icon: <Search size={24} /> },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{item.count}</div>
                  <div className="text-sm text-muted-foreground">{item.role}</div>
                </FadeIn>
              ))}
              <FadeIn delay={0.4} className="bg-card border border-border p-6 rounded-2xl col-span-2 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-primary"><Users size={24} /></div>
                  <div>
                    <div className="text-2xl font-bold text-white">1 Interlocuteur Unique</div>
                    <div className="text-sm text-muted-foreground">Suivi personnalisé de bout en bout</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Team Cards */}
          <FadeIn>
            <h3 className="text-2xl font-bold text-white mb-8">L'Équipe</h3>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Moi-même", role: "Lead Dev & Architecte Digital", bio: "Garant de l'architecture, du code et de la livraison." },
              { name: "Sarah B.", role: "Designer UI/UX Senior", bio: "Expertise en UX et interfaces premium/institutionnelles." },
              { name: "Karim M.", role: "Développeur Frontend", bio: "Spécialiste Next.js, accessibilité & animations web." },
              { name: "Yassine D.", role: "Développeur Backend & CMS", bio: "Expert Strapi, bases de données & sécurité." }
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-6 bg-card border border-border rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-lg mb-4">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                <div className="text-sm text-primary font-medium mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references" className="py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Portfolio</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Nos Références</h2>
              <p className="text-lg text-muted-foreground">Une sélection de nos réalisations, démontrant notre capacité à répondre aux exigences des projets institutionnels et internationaux de premier plan.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "E-commerce Djelfa Motors", client: "Automobile", year: "2023", type: "E-commerce", desc: "Plateforme de vente en ligne de pièces détachées avec gestion des stocks en temps réel et paiement intégré." },
              { name: "Portail RH Sonatrach", client: "Énergie", year: "2023", type: "Application Métier", desc: "Intranet sécurisé pour la gestion des congés, évaluations et parcours professionnels pour plus de 5000 employés." },
              { name: "El Djazair Tourisme", client: "Voyage", year: "2022", type: "Site Vitrine Luxe", desc: "Expérience immersive et système de réservation sur mesure pour des séjours touristiques de prestige." },
              { name: "Plateforme EduAlgérie", client: "Éducation", year: "2022", type: "LMS", desc: "Plateforme e-learning avec classes virtuelles, suivi de progression et certification en ligne." },
              { name: "Boutique Kabylie Artisan", client: "Artisanat", year: "2021", type: "E-commerce", desc: "Boutique en ligne valorisant l'artisanat local avec expédition internationale." }
            ].map((ref, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-colors ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:opacity-10 group-hover:scale-110 transition-all">
                  <Globe size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary">{ref.type}</div>
                    <div className="text-muted-foreground text-sm font-mono">{ref.year}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{ref.name}</h3>
                  <div className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">{ref.client}</div>
                  <p className="text-muted-foreground">{ref.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Approche (Methodology) */}
      <section id="approche" className="py-32 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Méthodologie</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Notre Approche</h2>
              <p className="text-lg text-muted-foreground">Un processus rigoureux et éprouvé pour garantir la réussite de votre projet.</p>
            </div>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
            <div className="space-y-12">
              {[
                { title: "Audit & Découverte", icon: <Search size={20} />, desc: "Analyse approfondie de vos besoins, étude de la concurrence et définition des KPIs." },
                { title: "Design UX/UI", icon: <Figma size={20} />, desc: "Création de wireframes, prototypes interactifs bi-langue et validation de la direction artistique." },
                { title: "Développement Agile", icon: <Code2 size={20} />, desc: "Développement Next.js / Strapi par sprints avec intégration du multilingue et des formulaires de candidature." },
                { title: "Tests & QA", icon: <ShieldCheck size={20} />, desc: "Tests rigoureux multi-devices, performances, sécurité et validation des parcours utilisateurs." },
                { title: "Déploiement & Formation", icon: <Rocket size={20} />, desc: "Mise en production, configuration SEO/Analytics et formation de vos équipes à l'administration du CMS." }
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="left" className="relative pl-0 md:pl-24">
                  <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-background border-2 border-border items-center justify-center text-primary z-10 group-hover:border-primary transition-colors">
                    {step.icon}
                  </div>
                  <div className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm md:hidden">
                        {i + 1}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Technologies</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Stack Recommandée</h2>
              <p className="text-lg text-muted-foreground">Nous sélectionnons les technologies les plus performantes pour garantir sécurité, rapidité et évolutivité.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Next.js (Frontend SSR)", icon: <SiNextdotjs size={32} /> },
              { name: "Node.js (Backend)", icon: <SiNodedotjs size={32} /> },
              { name: "Strapi (CMS Multilingue)", icon: <SiStrapi size={32} /> },
              { name: "PostgreSQL (BDD)", icon: <SiPostgresql size={32} /> },
              { name: "Google Analytics 4", icon: <Search size={32} /> },
              { name: "Facebook Pixel", icon: <Globe size={32} /> },
              { name: "OVH / Algérie Telecom", icon: <Server size={32} /> },
              { name: "Cloudflare (CDN)", icon: <SiCloudflare size={32} /> },
            ].map((tech, i) => (
              <FadeIn key={i} delay={i * 0.05} className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:border-primary hover:text-primary transition-colors text-muted-foreground text-center">
                <div className="mb-3">{tech.icon}</div>
                <div className="text-sm font-medium text-white">{tech.name}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Délais */}
      <section id="delais" className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Planning</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Délais Estimatifs</h2>
              <p className="text-lg text-muted-foreground">Un planning réaliste pour une livraison de qualité supérieure.</p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {[
              { phase: "Phase 1", title: "Analyse & Cahier des charges", duration: "1-2 semaines", progress: "w-[15%]" },
              { phase: "Phase 2", title: "Design UI/UX multilingue", duration: "2-3 semaines", progress: "w-[25%]" },
              { phase: "Phase 3", title: "Développement + CMS + Formulaires", duration: "5-7 semaines", progress: "w-[50%]" },
              { phase: "Phase 4", title: "Intégration multilingue FR/EN", duration: "1-2 semaines", progress: "w-[15%]" },
              { phase: "Phase 5", title: "Tests, SEO & Analytics", duration: "1-2 semaines", progress: "w-[15%]" },
              { phase: "Phase 6", title: "Mise en ligne & Formation", duration: "1 semaine", progress: "w-[10%]" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-background border border-border p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-full md:w-1/3">
                  <div className="text-sm text-primary font-medium mb-1">{item.phase}</div>
                  <div className="font-bold text-white">{item.title}</div>
                </div>
                <div className="w-full md:w-1/3 flex-grow">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className={`h-full bg-primary rounded-full ${item.progress}`}></div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 text-right">
                  <div className="inline-flex items-center gap-2 text-muted-foreground font-medium">
                    <Clock size={16} /> {item.duration}
                  </div>
                </div>
              </FadeIn>
            ))}
            
            <FadeIn delay={0.6} className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-between">
              <div className="text-xl font-bold text-white">Durée totale estimée du projet</div>
              <div className="text-2xl font-bold text-primary">11 à 17 semaines</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Detailed Quote */}
      <section id="budget" className="py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Investissement</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Devis Détaillé</h2>
              <p className="text-lg text-muted-foreground">Une tarification transparente et adaptée aux exigences du projet, garantissant un retour sur investissement optimal.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-card rounded-3xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-background/50">
                    <th className="p-6 font-semibold text-white">Prestation</th>
                    <th className="p-6 font-semibold text-white hidden md:table-cell">Description</th>
                    <th className="p-6 font-semibold text-white text-right">Prix (DZD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { pre: "Audit & Cahier des charges", desc: "Analyse besoins AEI Awards, wireframes, spécs techniques", price: "55 000" },
                    { pre: "Design UI/UX Premium", desc: "Maquettes Figma bi-langue, charte graphique institutionnelle", price: "95 000" },
                    { pre: "Développement Frontend (Next.js)", desc: "Intégration responsive, animations, accessibilité", price: "130 000" },
                    { pre: "Développement Backend + CMS Strapi", desc: "API REST, base de données, espace admin", price: "165 000" },
                    { pre: "Module candidatures en ligne", desc: "Formulaires, upload documents, gestion dossiers", price: "80 000" },
                    { pre: "Multilingue FR / EN", desc: "Traduction, i18n, détection langue auto", price: "45 000" },
                    { pre: "SEO Technique", desc: "Balises, sitemap, performance Core Web Vitals", price: "35 000" },
                    { pre: "Analytics & Pixels", desc: "Google Analytics 4, Facebook Pixel, Tag Manager", price: "25 000" },
                    { pre: "Formation back-office", desc: "2 sessions administrateurs", price: "20 000" },
                    { pre: "Mise en ligne & déploiement", desc: "VPS, DNS, SSL, CI/CD", price: "30 000" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-secondary/20 transition-colors">
                      <td className="p-6 font-medium text-white">{row.pre}</td>
                      <td className="p-6 text-muted-foreground hidden md:table-cell">{row.desc}</td>
                      <td className="p-6 font-mono text-right text-white">{row.price}</td>
                    </tr>
                  ))}
                  <tr className="bg-background/50 border-t-2 border-border">
                    <td className="p-6 font-semibold text-white uppercase text-right" colSpan={2}>Total HT</td>
                    <td className="p-6 font-mono font-bold text-white text-right">680 000 DZD</td>
                  </tr>
                  <tr className="bg-background/50">
                    <td className="p-6 font-semibold text-muted-foreground uppercase text-right" colSpan={2}>TVA 19%</td>
                    <td className="p-6 font-mono text-muted-foreground text-right">129 200 DZD</td>
                  </tr>
                  <tr className="bg-primary/10 border-t-2 border-primary/30">
                    <td className="p-6 text-xl font-bold text-primary uppercase text-right" colSpan={2}>Total TTC</td>
                    <td className="p-6 text-xl font-mono font-bold text-primary text-right">809 200 DZD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Maintenance & Support */}
      <section className="py-32 bg-card/30 border-t border-border">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Après-Lancement</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Maintenance & Support</h2>
              <p className="text-lg text-muted-foreground">Des forfaits évolutifs pour garantir la sécurité et la pérennité de votre plateforme web.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Formule Basique", price: "15 000",
                features: ["Mises à jour de sécurité", "Support par email", "1 modification/mois", "Sauvegardes hebdomadaires"]
              },
              { 
                name: "Formule Standard", price: "30 000", popular: true,
                features: ["Tout le basique", "5 modifications/mois", "Support téléphonique", "Rapport de performance mensuel", "Sauvegardes journalières"]
              },
              { 
                name: "Formule Premium", price: "55 000",
                features: ["Tout le standard", "Modifications illimitées", "Support prioritaire 24/7", "Hébergement Cloud inclus", "Optimisation SEO mensuelle"]
              }
            ].map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`relative flex flex-col bg-background border ${plan.popular ? 'border-primary shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]' : 'border-border'} rounded-2xl overflow-hidden`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1.5 text-center">
                    Recommandé
                  </div>
                )}
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6 border-b border-border pb-6">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-muted-foreground font-mono text-sm">DZD/mois</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-white hover:bg-secondary/80'}`}>
                    Sélectionner
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Contactez-nous pour valider cette proposition ou pour planifier un appel afin d'en discuter en détail.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2">
                Valider le devis <CheckCircle2 size={20} />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground bg-card/50 border border-border py-6 px-12 rounded-full w-fit mx-auto backdrop-blur-sm">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <Mail size={18} />
                </div>
                <a href="mailto:a.zerguini@yahoo.com" className="hover:text-white transition-colors font-medium">a.zerguini@yahoo.com</a>
              </div>
              <div className="hidden md:block w-px h-8 bg-border" />
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <Phone size={18} />
                </div>
                <a href="tel:+213559948244" className="hover:text-white transition-colors font-medium">+213 559 94 82 44</a>
              </div>
              <div className="hidden md:block w-px h-8 bg-border" />
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="font-medium">Alger, Algérie</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border bg-background">
        <p>© {new Date().getFullYear()} Astrifydz. Confidentiel - Réservé au client.</p>
      </footer>
    </div>
  );
}
