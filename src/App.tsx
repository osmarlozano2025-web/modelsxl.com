import React, { useState, useEffect } from 'react';
import {
    MessageSquare,
    Smartphone,
    Users,
    Zap,
    CheckCircle2,
    Clock,
    TrendingUp,
    ShieldCheck,
    Menu,
    X,
    ChevronDown,
    Instagram,
    Facebook,
    Send,
    Globe,
    Mail,
    ArrowRight,
    Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const LogoSVG = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
  // Representación vectorial del logo "M X" con mira (target circle) y dots de colores AGENTIA
  <svg style={{ width: size, height: size }} className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Círculo superior (Mira) */}
    <circle cx="50" cy="30" r="20" stroke="currentColor" strokeWidth="3" />
    <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="3" />
    <line x1="50" y1="45" x2="50" y2="55" stroke="currentColor" strokeWidth="3" />
    <line x1="25" y1="30" x2="35" y2="30" stroke="currentColor" strokeWidth="3" />
    <line x1="65" y1="30" x2="75" y2="30" stroke="currentColor" strokeWidth="3" />
    <path d="M43 23 L57 37 M57 23 L43 37" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="20" r="2.5" fill="#10B981" /> {/* Verde arriba */}
    <circle cx="50" cy="40" r="2.5" fill="#1D4ED8" /> {/* Azul oscura abajo */}
    <circle cx="40" cy="30" r="2.5" fill="#06B6D4" /> {/* Cyan izquierda */}
    <circle cx="60" cy="30" r="2.5" fill="#10B981" /> {/* Verde derecha */}

    {/* Dots sueltos periféricos de la mira inspirados en la foto */}
    <circle cx="37" cy="20" r="3" stroke="#e81cff" strokeWidth="2" /> {/* Magenta */}
    <circle cx="63" cy="20" r="3" fill="#06B6D4" /> {/* Cyan */}
    <circle cx="37" cy="40" r="3" stroke="#06B6D4" strokeWidth="2" /> {/* Cyan hueco */}
    <circle cx="63" cy="40" r="3" stroke="#e81cff" strokeWidth="2" /> {/* Magenta hueco */}

    {/* Letra M cruzada con X geométrica inferior */}
    <path d="M22 45 V85 L35 70 V55 L50 70 L65 55 V70 L78 85 V45 M35 70 L50 85 L65 70" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
    {/* Detalles laterales (los pequeños "glitches" / conectores laterales del logo original) */}
    <rect x="19" y="55" width="4" height="6" fill="currentColor" />
    <rect x="77" y="65" width="4" height="6" fill="currentColor" />
  </svg>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'glass is-scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo flex items-center gap-3">
                    <LogoSVG size={22} className="text-brand-vibrant" />
                    <span>MODEL SxL</span>
                </div>

                <div className="nav-links desktop-only">
                    <a href="#soluciones">Soluciones</a>
                    <a href="#analitica">Analítica</a>
                    <a href="#operaciones">Operaciones</a>
                    <a href="#proceso">Proceso</a>
                    <a href="#integraciones">Integraciones</a>
                    <a href="#pricing">Inversión</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contact" className="btn btn-primary btn-sm">Agendar Demo</a>
                </div>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu glass"
                    >
                        <a href="#soluciones" onClick={() => setMobileMenuOpen(false)}>Soluciones</a>
                        <a href="#analitica" onClick={() => setMobileMenuOpen(false)}>Analítica</a>
                        <a href="#operaciones" onClick={() => setMobileMenuOpen(false)}>Operaciones</a>
                        <a href="#proceso" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
                        <a href="#integraciones" onClick={() => setMobileMenuOpen(false)}>Integraciones</a>
                        <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Inversión</a>
                        <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                        <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Agendar Demo</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const ChatMockup = () => (
    <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="chat-mockup"
    >
        <div className="chat-header">
            <div className="chat-avatar"><Zap size={20} /></div>
            <div>
                <div className="chat-title">Agente IA</div>
                <div className="chat-status"><div className="status-dot"></div> Activo ahora</div>
            </div>
            <div className="chat-actions">
                <div className="icon-btn bg-green"><Smartphone size={16} /></div>
                <div className="icon-btn bg-pink"><Instagram size={16} /></div>
            </div>
        </div>
        <div className="chat-body">
            <div className="chat-message-row">
                <div className="chat-user-icon"><Users size={14} /></div>
                <div className="chat-bubble chat-bubble-received">
                    Hola, quiero información sobre sus servicios de marketing digital
                    <span className="chat-time">14:32</span>
                </div>
            </div>
            <div className="chat-message-row sent">
                <div className="chat-agent-icon"><Zap size={14} /></div>
                <div className="chat-bubble chat-bubble-sent">
                    ¡Hola! 👋 Gracias por escribirnos.<br/>Ofrecemos soluciones completas de marketing digital y automatización con IA.<br/><br/>¿Te gustaría agendar una demo personalizada? Solo necesito tu nombre y correo 📧
                    <span className="chat-time" style={{ color: 'rgba(255,255,255,0.7)' }}>14:32</span>
                </div>
            </div>
            <div className="chat-message-row">
                <div className="chat-user-icon"><Users size={14} /></div>
                <div className="chat-bubble chat-bubble-received" style={{ padding: '16px' }}>
                    <div className="typing-dots"><span></span><span></span><span></span></div>
                </div>
            </div>
        </div>
        <div className="chat-footer">
            <span className="chat-footer-text">Conectado en:</span>
            <div className="chat-footer-icons">
               <div className="mini-icon cf-whatsapp"><Smartphone size={12} /></div>
               <div className="mini-icon cf-fb"><Facebook size={12} /></div>
               <div className="mini-icon cf-ig"><Instagram size={12} /></div>
            </div>
        </div>
    </motion.div>
);

const Hero = () => (
    <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
            <div className="hero-grid">
                <div className="hero-text text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Conversaciones que <span className="gradient-text">escalan tu negocio</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="subtitle"
                        style={{ margin: "0 0 40px 0" }}
                    >
                        Agentes IA con ADN de marca. Atrae, fideliza y cierra ventas en automático a través de todos tus canales.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="cta-group"
                        style={{ justifyContent: "flex-start" }}
                    >
                        <a href="#contact" className="btn btn-primary">Agendar demo exclusiva</a>
                        <a href="#soluciones" className="btn btn-outline">Ver soluciones</a>
                    </motion.div>
                </div>
                <ChatMockup />
            </div>
        </div>
    </section>
);

const DashboardPreview = () => (
    <section id="analitica" className="section bg-secondary" style={{ padding: "120px 20px" }}>
        <div className="container">
            <div className="grid-2" style={{ alignItems: "center" }}>
                <div style={{ textAlign: "left" }}>
                    <span className="inline-block px-4 py-2 rounded-full" style={{ background: "rgba(37, 99, 235, 0.1)", color: "#2563EB", fontWeight: 600, fontSize: "0.9rem", marginBottom: "24px" }}>
                        Analítica en vivo
                    </span>
                    <h2 className="font-sora font-bold text-3xl md:text-5xl text-night mb-6" style={{ fontSize: "2.6rem", color: "var(--text-primary)", fontWeight: 700, lineHeight: 1.2 }}>
                        Monitorea tu crecimiento <br className="hidden md:block"/><span className="gradient-text">en tiempo real</span>
                    </h2>
                    <p className="text-lg text-text-muted mb-8" style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
                        Ten control absoluto sobre tus conversiones, procedencia de clientes e interacciones mediante un panel de reportería diseñado para escalar. Tu negocio en números, de un simple vistazo.
                    </p>
                    <ul className="pricing-list" style={{ marginBottom: 0 }}>
                        <li style={{ color: "var(--text-secondary)", marginBottom: "12px", display: "flex", gap: "10px" }}><CheckCircle2 size={18} style={{ color: "#10B981" }}/> Cientos de leads organizados</li>
                        <li style={{ color: "var(--text-secondary)", marginBottom: "12px", display: "flex", gap: "10px" }}><CheckCircle2 size={18} style={{ color: "#10B981" }}/> Historial de desempeño de tu Agente IA</li>
                        <li style={{ color: "var(--text-secondary)", display: "flex", gap: "10px" }}><CheckCircle2 size={18} style={{ color: "#10B981" }}/> Visualización amigable de ventas</li>
                    </ul>
                </div>

                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mac-window" style={{ maxWidth: "550px", margin: "0 auto" }}>
                        <div className="mac-header">
                            <span className="mac-dot red"></span>
                            <span className="mac-dot yellow"></span>
                            <span className="mac-dot green"></span>
                        </div>
                        <div className="mac-body">
                            <img src="/dashboard-demo.gif" alt="Panel de Análisis de MODEL SXL" className="w-full h-auto" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const Problem = () => (
    <section id="problema" className="section bg-secondary">
        <div className="container">
            <div className="section-header text-center max-w-700">
                <h2 className="gradient-text">El costo del soporte tradicional</h2>
                <p>Perder leads por respuestas lentas o workflows robóticos frena el ritmo de tu startup o marca.</p>
            </div>
            <div className="grid-3">
                {[
                    { icon: <Clock size={40} />, title: "Demoras que matan ventas", desc: "El 70% de los clientes abandona si no recibe respuesta en los primeros 5 minutos." },
                    { icon: <X size={40} />, title: "Bots genéricos y fríos", desc: "Las respuestas automatizadas sin empatía alejan a los clientes de ticket alto." },
                    { icon: <Smartphone size={40} />, title: "Omnicanalidad rota", desc: "Información fragmentada entre WhatsApp, Instagram y Facebook. Sin control." }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        className="problem-card"
                    >
                        <div className="icon-gold">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const Solution = () => (
    <section id="soluciones" className="section">
        <div className="container">
            <div className="section-header text-center max-w-700">
                <h2 className="gradient-text">Arquitectura MODEL SxL</h2>
                <p>Inteligencia con identidad corporativa, integrada nativamente.</p>
            </div>
            <div className="grid-2">
                <div className="glass-card">
                    <div className="icon-wrapper"><MessageSquare /></div>
                    <h3>Bot Empático</h3>
                    <p>No solo responde, entiende el contexto y la emoción. Diseñamos una personalidad única que refleja los valores y el tono de tu empresa.</p>
                </div>
                <div className="glass-card">
                    <div className="icon-wrapper"><Smartphone /></div>
                    <h3>Omnicanal Real</h3>
                    <p>Una única inteligencia gestionando WhatsApp, Instagram (DMs y comentarios), Facebook y Webchat de forma sincronizada.</p>
                </div>
                <div className="glass-card">
                    <div className="icon-wrapper"><Users /></div>
                    <h3>Personalización Total</h3>
                    <p>Nada de plantillas. Construimos el flujo conversacional basado en tus objetivos de negocio y catálogo real.</p>
                </div>
                <div className="glass-card">
                    <div className="icon-wrapper"><Zap /></div>
                    <h3>Gestión Proactiva</h3>
                    <p>Capacidad de agendar citas, gestionar carritos y conectar con tu CRM sin intervención humana.</p>
                </div>
            </div>
        </div>
    </section>
);

const WorkflowPreview = () => (
    <section id="operaciones" className="section bg-primary" style={{ padding: "100px 20px" }}>
        <div className="container">
            {/* El grid-2 asigna automáticamente mitad y mitad. Si ponemos la imagen primero, va a la izquierda. */}
            <div className="grid-2" style={{ alignItems: "center" }}>
                
                {/* IZQUIERDA: GIF / Imágen */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mac-window" style={{ maxWidth: "550px", margin: "0 auto" }}>
                        <div className="mac-header">
                            <span className="mac-dot red"></span>
                            <span className="mac-dot yellow"></span>
                            <span className="mac-dot green"></span>
                        </div>
                        <div className="mac-body">
                            {/* Al cliente le pediré que guarde su nuevo GIF en 'public' como 'flujo-demo.gif' */}
                            <img src="/flujo-demo.gif" alt="Flujo de operaciones MODEL SXL" className="w-full h-auto" />
                        </div>
                    </div>
                </motion.div>

                {/* DERECHA: TEXTO */}
                <div style={{ textAlign: "left" }}>
                    <span className="inline-block px-4 py-2 rounded-full" style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10B981", fontWeight: 600, fontSize: "0.9rem", marginBottom: "24px" }}>
                        Integración sin fricción
                    </span>
                    <h2 className="font-sora font-bold text-3xl md:text-5xl text-night mb-6" style={{ fontSize: "2.6rem", color: "var(--text-primary)", fontWeight: 700, lineHeight: 1.2 }}>
                        Tus operaciones, <br className="hidden md:block"/>ahora en <span className="gradient-text" style={{ background: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>piloto automático</span>
                    </h2>
                    <p className="text-lg text-text-muted mb-8" style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
                        Conectamos con tus bases de datos, catálogos y sistemas actuales para que el agente maneje escenarios complejos y derive a humanos solo lo imprescindible.
                    </p>
                    <ul className="pricing-list" style={{ marginBottom: 0 }}>
                        <li style={{ color: "var(--text-secondary)", marginBottom: "12px", display: "flex", gap: "10px" }}><CheckCircle2 size={18} style={{ color: "#2563EB" }}/> Lectura de stock y catálogos en vivo</li>
        <li style={{ color: "var(--text-secondary)", marginBottom: "12px", display: "flex", gap: "10px" }}><CheckCircle2 size={18} style={{ color: "#2563EB" }}/> Agenda nativa de citas y pagos</li>
                        <li style={{ color: "var(--text-secondary)", display: "flex", gap: "10px" }}><CheckCircle2 size={18} style={{ color: "#2563EB" }}/> Escalabilidad y multicanalidad nativa</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
);
const Process = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openVideoModal, setOpenVideoModal] = useState(false);

    // Bloquear scroll cuando algún modal está abierto
    useEffect(() => {
        if (openModal || openVideoModal) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset' };
    }, [openModal, openVideoModal]);

    return (
        <section id="proceso" className="section bg-secondary">
            <div className="container">
                <div className="section-header text-center max-w-700">
                    <h2 className="gradient-text">Flujo de despliegue</h2>
                    <p>Tu propio agente operativo en semanas, no meses.</p>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <span className="step-label">Fase 1</span>
                            <h3>Personalidad del Bot</h3>
                            <p>Definición del tono, manual de identidad conversacional y calibración emocional.</p>
                            <button 
                                onClick={() => setOpenModal(true)} 
                                style={{ 
                                    background: "rgba(37, 99, 235, 0.05)", color: "var(--brand-vibrant)", 
                                    fontSize: "0.85rem", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(37,99,235,0.2)",
                                    display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 600, marginTop: "16px", cursor: "pointer"
                                }}
                            >
                                <Zap size={14} /> Mira cómo cobra vida
                            </button>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <span className="step-label">Fase 2</span>
                            <h3>Gestión + CRM</h3>
                            <p>Integración de flujos de venta y conexión con tus herramientas de gestión actuales.</p>
                            <button 
                                onClick={() => setOpenVideoModal(true)} 
                                style={{ 
                                    background: "rgba(16, 185, 129, 0.05)", color: "#10B981", 
                                    fontSize: "0.85rem", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(16,185,129,0.2)",
                                    display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 600, marginTop: "16px", cursor: "pointer"
                                }}
                            >
                                <Play size={14} /> Ver el CRM en acción
                            </button>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <span className="step-label">Fase 3</span>
                            <h3>Pagos y Cierre</h3>
                            <p>Automatización de pasarelas de pago y despliegue final en todos los canales.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal GIF — Fase 1 */}
            <AnimatePresence>
                {openModal && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setOpenModal(false)}
                        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", 
                            background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(5px)",
                            zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
                    >
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="mac-window" onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: "700px", width: "100%", margin: 0, boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)", background: "#fff" }}
                        >
                            <div className="mac-header" style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", background:"#f1f5f9" }}>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <span className="mac-dot red" onClick={() => setOpenModal(false)} style={{cursor: "pointer"}}></span>
                                    <span className="mac-dot yellow"></span>
                                    <span className="mac-dot green"></span>
                                </div>
                                <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", fontWeight: 600 }}>personalidad-bot.gif</span>
                            </div>
                            <div className="mac-body" style={{ padding: 0 }}>
                                <img src="/agente.gif" alt="Personalidad del Agente IA en vivo" style={{ width: "100%", height: "auto", display: "block" }} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal VIDEO — Fase 2 CRM */}
            <AnimatePresence>
                {openVideoModal && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setOpenVideoModal(false)}
                        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", 
                            background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(8px)",
                            zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
                    >
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="mac-window" onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: "800px", width: "100%", margin: 0, boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)", background: "#fff" }}
                        >
                            <div className="mac-header" style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", background:"#f1f5f9" }}>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <span className="mac-dot red" onClick={() => setOpenVideoModal(false)} style={{cursor: "pointer"}}></span>
                                    <span className="mac-dot yellow"></span>
                                    <span className="mac-dot green"></span>
                                </div>
                                <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", fontWeight: 600 }}>crm-vista.gif — Gestión + CRM</span>
                            </div>
                            <div className="mac-body" style={{ padding: 0 }}>
                                <img src="/crm-vista.gif" alt="CRM en acción — MODEL SXL" style={{ width: "100%", height: "auto", display: "block" }} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const Integrations = () => (
    <section id="integraciones" className="section">
        <div className="container text-center">
            <h3 className="mb-4">Integración sin fricción</h3>
            <div className="integration-icons">
                <div className="icon-box"><Smartphone /> <span>WhatsApp</span></div>
                <div className="icon-box"><Instagram /> <span>Instagram</span></div>
                <div className="icon-box"><Facebook /> <span>Facebook</span></div>
                <div className="icon-box"><Send /> <span>Telegram</span></div>
                <div className="icon-box"><Globe /> <span>Webchat</span></div>
            </div>
        </div>
    </section>
);

const ROI = () => (
    <section className="section bg-gold-dark">
        <div className="container">
            <div className="grid-3 stats-grid">
                <div className="stat-card">
                    <span className="stat-number">+25%</span>
                    <span className="stat-label">Facturación</span>
                </div>
                <div className="stat-card">
                    <span className="stat-number">+70%</span>
                    <span className="stat-label">Fidelización</span>
                </div>
                <div className="stat-card">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Atención sin pausas</span>
                </div>
            </div>
            <p className="text-center mt-4">Escala tu negocio sin aumentar tu plantilla de personal.</p>
        </div>
    </section>
);

const Pricing = () => (
    <section id="pricing" className="section">
        <div className="container">
            <div className="pricing-container">
                <div className="glass-card pricing-card featured">
                    <div className="pricing-badge">Implementation</div>
                    <h3>Arquitectura Avanzada</h3>
                    <div className="price-main">
                        <span className="currency">$</span>
                        <span className="amount">250</span>
                        <span className="period">/mes</span>
                    </div>
                    <div className="setup-fee">Implementación: $300 (Pago único)</div>

                    <ul className="pricing-list">
                        <li><CheckCircle2 size={18} /> Personalización total del bot</li>
                        <li><CheckCircle2 size={18} /> Omnicanalidad Completa</li>
                        <li><CheckCircle2 size={18} /> Integración con CRM</li>
                        <li><CheckCircle2 size={18} /> Automatización de Pagos</li>
                        <li><CheckCircle2 size={18} /> Soporte Prioritario</li>
                        <li><CheckCircle2 size={18} /> Entrenamiento Continuo</li>
                    </ul>

                    <a href="#contact" className="btn btn-primary full-width">Agendar Mi Demo</a>
                </div>
            </div>
        </div>
    </section>
);

const FAQ = () => {
    const [open, setOpen] = useState<number | null>(null);

    const faqs = [
        { q: "¿Qué es MODEL SXL?", a: "MODEL SXL es un conjunto de herramientas y metodología especializada para crear agentes de inteligencia artificial que atienden a tus clientes en todos sus canales: WhatsApp, Messenger, DMs de Instagram, comentarios de TikTok, webchat y email. Automatizamos tus conversaciones para que vendas más, atiendas mejor y no pierdas ningún cliente — sin importar desde dónde te escriban." },
        { q: "¿Cómo funciona un agente MODEL SXL?", a: "Tu cliente te contacta por WhatsApp, Instagram, TikTok, Messenger, webchat o email — y el agente lo atiende al instante. Responde preguntas, toma pedidos, cobra y agenda turnos de forma automática y natural. Tu equipo solo interviene cuando realmente hace falta." },
        { q: "¿Para qué tipo de negocios sirve?", a: "Para cualquier negocio que reciba consultas o ventas por mensajes: delivery, tiendas online, clínicas, peluquerías, academias, talleres mecánicos, inmobiliarias y más. Si tus clientes te escriben — por donde sea — tenemos una solución para vos." },
        { q: "¿Qué puede hacer exactamente por mi negocio?", a: "Toma pedidos, responde consultas, valida pagos, agenda turnos, registra clientes en planillas y avisa a tu equipo cuando hay que actuar. En todos tus canales, al mismo tiempo, sin que vos estés pendiente. Tu negocio trabaja aunque vos no estés." },
        { q: "¿Cómo sé que va a funcionar bien antes de pagar?", a: "Cada agente pasa por un proceso de diseño a medida y se valida con pruebas reales antes de entregarse. No entregamos prototipos — entregamos soluciones listas para producción, probadas y documentadas." }
    ];

    return (
        <section id="faq" className="section bg-secondary">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="gradient-text">Preguntas Frecuentes</h2>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <div key={i} className="faq-item glass" onClick={() => setOpen(open === i ? null : i)}>
                            <div className="faq-question">
                                {faq.q}
                                <ChevronDown className={`chevron ${open === i ? 'rotate' : ''}`} />
                            </div>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="faq-answer"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => (
    <section id="contact" className="section">
        <div className="container">
            <div className="grid-2 contact-grid">
                <div className="contact-info">
                    <h2 className="gradient-text">Escala tu soporte inteligente.</h2>
                    <p>Contacta con nosotros para un diseño de arquitectura y aprende cómo un agente de modelo grande transformará tus márgenes.</p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <Mail size={24} />
                            <span>hola@modelsxl.com</span>
                        </div>
                        <div className="contact-item">
                            <CheckCircle2 size={24} />
                            <span>Propuesta técnica en 48hs</span>
                        </div>
                    </div>
                </div>
                <div className="glass-card">
                    <form className="contact-form">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" placeholder="Tu nombre" />
                        </div>
                        <div className="form-group">
                            <label>Email Corporativo</label>
                            <input type="email" placeholder="tu@empresa.com" />
                        </div>
                        <div className="form-group">
                            <label>Mensaje</label>
                            <textarea placeholder="Cuéntanos brevemente sobre tu negocio"></textarea>
                        </div>
                        <button className="btn btn-primary full-width">Enviar Solicitud</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer glass">
        <div className="container grid-3">
            <div className="footer-brand">
                <div className="logo mb-2 flex flex-col gap-2">
                    <LogoSVG size={28} className="text-white" />
                    <span>MODEL SxL</span>
                </div>
                <p>Conversaciones que escalan tu negocio.</p>
            </div>
            <div>
                <h4>Enlaces</h4>
                <ul className="footer-links">
                    <li><a href="#soluciones">Soluciones</a></li>
                    <li><a href="#proceso">Proceso</a></li>
                    <li><a href="#pricing">Inversión</a></li>
                </ul>
            </div>
            <div>
                <h4>Contacto</h4>
                <p>hola@modelsxl.com</p>
                <div className="social-links mt-1">
                    <Instagram size={20} />
                    <Facebook size={20} className="ml-1" />
                </div>
            </div>
        </div>
        <div className="footer-bottom text-center">
            <p>&copy; 2026 MODEL SxL. Todos los derechos reservados.</p>
        </div>
    </footer>
);

function App() {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <Hero />
                <DashboardPreview />
                <Problem />
                <Solution />
                <WorkflowPreview />
                <Process />
                <Integrations />
                <ROI />
                <Pricing />
                <FAQ />
                <Contact />
            </main>
            <Footer />

        </div>
    );
}

export default App;
