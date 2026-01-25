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
    ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

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
                <div className="logo">MODEL SxL</div>

                <div className="nav-links desktop-only">
                    <a href="#soluciones">Soluciones</a>
                    <a href="#proceso">Proceso</a>
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
                        <a href="#proceso" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
                        <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Inversión</a>
                        <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Agendar Demo</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => (
    <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Conversaciones que <span className="gradient-text">Convierten</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="subtitle"
            >
                Bot empático omnicanal diseñado a medida para marcas que buscan excelencia y resultados.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="cta-group"
            >
                <a href="#contact" className="btn btn-primary glow">Agendar demo exclusiva</a>
            </motion.div>
        </div>
    </section>
);

const Problem = () => (
    <section id="problema" className="section bg-secondary">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="gradient-text">El costo de la atención tradicional</h2>
                <p className="max-w-700">Perder leads por respuestas lentas o bots robóticos está frenando tu crecimiento.</p>
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
            <div className="section-header text-center">
                <h2 className="gradient-text">Solución MODEL SxL</h2>
                <p>Inteligencia Artificial con ADN de marca.</p>
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

const Process = () => (
    <section id="proceso" className="section bg-secondary">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="gradient-text">Cómo funciona</h2>
                <p>Tu bot premium listo para operar en tiempo récord.</p>
            </div>
            <div className="timeline">
                {[
                    { step: "Fase 1", title: "Personalidad del Bot", desc: "Definición del tono, manual de identidad conversacional y calibración emocional." },
                    { step: "Fase 2", title: "Gestión + CRM", desc: "Integración de flujos de venta y conexión con tus herramientas de gestión actuales." },
                    { step: "Fase 3", title: "Pagos y Cierre", desc: "Automatización de pasarelas de pago y despliegue final en todos los canales." }
                ].map((item, i) => (
                    <div key={i} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="step-label">{item.step}</span>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Integrations = () => (
    <section className="section">
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
                    <div className="pricing-badge">Servicio Personalizado</div>
                    <h3>Plan Único Premium</h3>
                    <div className="price-main">
                        <span className="currency">USD</span>
                        <span className="amount">500</span>
                        <span className="period">/mes</span>
                    </div>
                    <div className="setup-fee">Implementación: USD 599 (Pago único)</div>

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
        { q: "¿Es un SaaS automático?", a: "No, MODEL SxL es un servicio personalizado. Diseñamos la lógica y personalidad de tu bot a medida para que no parezca un bot genérico." },
        { q: "¿En cuánto tiempo está listo?", a: "La implementación completa toma de 30 a 60 días, dependiendo de la complejidad de tus integraciones." },
        { q: "¿Se puede conectar con mi CRM?", a: "Sí, nos integramos con la mayoría de CRMs del mercado para que los leads fluyan sin fricción." },
        { q: "¿El bot puede procesar pagos?", a: "Totalmente. Integramos pasarelas de pago para que el cliente pueda cerrar la compra dentro de la conversación." },
        { q: "¿Qué pasa si un cliente pide hablar con un humano?", a: "El sistema detecta la intención y realiza un traspaso inteligente al personal humano de forma fluida." }
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
                    <h2 className="gradient-text">Eleva tu estándar de atención hoy.</h2>
                    <p>Escríbenos para una consultoría gratuita y descubre cómo un bot empático puede transformar tu facturación.</p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <Mail className="icon-gold" />
                            <span>hola@modelsxl.com</span>
                        </div>
                        <div className="contact-item">
                            <CheckCircle2 className="icon-gold" />
                            <span>Demo en menos de 48hs</span>
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
                <div className="logo mb-2">MODEL SxL</div>
                <p>Conversaciones que convierten.</p>
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
                <Problem />
                <Solution />
                <Process />
                <Integrations />
                <ROI />
                <Pricing />
                <FAQ />
                <Contact />
            </main>
            <Footer />

            {/* Floating Chat Widget Mockup */}
            <div className="floating-chat glass">
                <MessageSquare size={24} />
            </div>
        </div>
    );
}

export default App;
