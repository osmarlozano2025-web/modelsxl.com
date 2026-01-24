
import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Instagram, 
  Facebook, 
  Send, 
  Zap, 
  BarChart3, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  CreditCard,
  Target,
  Users,
  BookOpen,
  FileText,
  Briefcase,
  Palette,
  Scale,
  HelpCircle,
  DollarSign
} from 'lucide-react';

// --- Documentation Data ---

const DOCUMENTATION = {
  empresa: {
    title: "01 Empresa",
    icon: <Briefcase className="w-5 h-5" />,
    content: [
      {
        sub: "Información General",
        text: "MODEL SxL (Sebastián x Lozano). Producto premium personalizado de bots conversacionales emocionales omnicanal para Argentina y LATAM. Marca que refleja personalización y posicionamiento tech profesional."
      },
      {
        sub: "Gastos de Registro",
        text: "Dominio (.com): $21.109,26. Casilla Email: $16.788,00. Total invertido: ARS 37.897,26."
      }
    ]
  },
  producto: {
    title: "02 Producto",
    icon: <Zap className="w-5 h-5" />,
    content: [
      {
        sub: "Servicios",
        text: "Implementación: USD $599 (único). Mensualidad: USD $500. Timeline: 60-90 días para implementación total."
      },
      {
        sub: "Integraciones",
        text: "WhatsApp Business, Instagram (DMs y comentarios), Facebook Messenger, Telegram y Webchat. Integración con CRMs del mercado y pasarelas de pago custom."
      },
      {
        sub: "Resultados (ROI)",
        text: "Mejora en facturación hasta 25%. Fidelización hasta 70%. ROI potencial hasta 35%."
      }
    ]
  },
  diseno: {
    title: "03 Diseño",
    icon: <Palette className="w-5 h-5" />,
    content: [
      {
        sub: "Paleta de Colores",
        text: "Principal: #0a0a0a (Negro Profundo). Acento: #d4af37 (Dorado Principal) y #f4d03f (Dorado Claro). Texto: Blanco y Gris claro (#b0b0b0)."
      },
      {
        sub: "Tipografía",
        text: "Outfit (Google Fonts). Pesos: 400, 600, 700. Títulos Hero: 5rem. Responsive: 3rem mobile."
      }
    ]
  },
  legal: {
    title: "04 Legal",
    icon: <Scale className="w-5 h-5" />,
    content: [
      {
        sub: "Términos y Condiciones",
        text: "MODEL SxL retiene derechos sobre tecnología base. El cliente retiene marca y datos. Cancelación con 30 días de preaviso. Jurisdicción: República Argentina."
      },
      {
        sub: "Privacidad",
        text: "Encriptación de datos en tránsito y reposo. Retención de datos de usuarios finales por máximo 2 años."
      },
      {
        sub: "Reembolsos",
        text: "Costo de implementación no reembolsable una vez iniciado. En caso de insatisfacción en primeros 30 días: 50% reembolso de implementación."
      }
    ]
  },
  faq: {
    title: "FAQ",
    icon: <HelpCircle className="w-5 h-5" />,
    content: [
      {
        sub: "¿Es caro?",
        text: "Es una inversión boutique personalizada. Reportamos mejoras reales en facturación que justifican el ticket alto."
      },
      {
        sub: "¿Reemplaza humanos?",
        text: "Potencia, no reemplaza. Libera al equipo de tareas repetitivas para enfocarse en casos complejos."
      }
    ]
  }
};

// --- Components ---

const NVDModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<keyof typeof DOCUMENTATION>('empresa');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-brand-black border-l border-brand-gold/20 shadow-2xl h-full flex flex-col animate-in slide-in-from-right duration-500">
        
        <div className="p-6 border-b border-brand-gold/10 flex justify-between items-center bg-brand-black-light">
          <div className="flex items-center space-x-3">
            <BookOpen className="text-brand-gold w-6 h-6" />
            <h2 className="text-xl font-bold tracking-tight">NVD: Núcleo de Visualización de Datos</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar Tabs */}
          <div className="w-20 md:w-48 border-r border-brand-gold/10 flex flex-col bg-brand-black">
            {Object.entries(DOCUMENTATION).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`p-4 flex flex-col md:flex-row items-center md:space-x-3 transition-all ${
                  activeTab === key ? 'bg-brand-gold/10 text-brand-gold border-r-2 border-brand-gold' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                }`}
              >
                {data.icon}
                <span className="hidden md:block text-xs font-bold uppercase tracking-wider">{data.title.split(' ')[1] || data.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-b from-brand-black-light to-brand-black">
            <h3 className="text-3xl font-bold mb-8 text-gradient">{DOCUMENTATION[activeTab].title}</h3>
            <div className="space-y-10">
              {DOCUMENTATION[activeTab].content.map((item, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-brand-gold font-bold text-sm uppercase tracking-[0.2em] mb-3 flex items-center">
                    <span className="w-8 h-px bg-brand-gold/30 mr-3"></span>
                    {item.sub}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg bg-white/5 p-6 rounded-2xl border border-white/5 group-hover:border-brand-gold/20 transition-all">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl border border-brand-gold/10 bg-brand-gold/5 italic text-sm text-gray-500 text-center">
              Información confidencial para uso interno de MODEL SxL - Actualizado Enero 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ onOpenNVD }: { onOpenNVD: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Implementación', href: '#implementation' },
    { name: 'Beneficios', href: '#benefits' },
    { name: 'Precios', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-brand-gold/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter flex items-center">
          <span className="text-white">MODEL</span>
          <span className="bg-gold-gradient bg-clip-text text-transparent ml-1">SxL</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors text-sm font-medium uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenNVD}
            className="text-gray-400 hover:text-brand-gold transition-colors text-sm font-medium uppercase tracking-widest flex items-center"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            NVD
          </button>
          <a href="mailto:hola@modelsxl.com" className="bg-gold-gradient text-brand-black px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
            DEMO EXCLUSIVA
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-black border-b border-brand-gold/20 flex flex-col p-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-400 text-lg py-2" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { onOpenNVD(); setIsOpen(false); }}
            className="text-brand-gold text-lg py-2 text-left flex items-center"
          >
            <BookOpen className="w-5 h-5 mr-3" />
            NVD (Documentación)
          </button>
          <a href="mailto:hola@modelsxl.com" className="bg-gold-gradient text-brand-black text-center py-3 rounded-full font-bold">
            DEMO EXCLUSIVA
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-effect rounded-full animate-pulse-slow"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-effect rounded-full animate-float opacity-50"></div>
    
    <div className="max-w-7xl mx-auto px-6 text-center z-10">
      <div className="inline-block px-4 py-1.5 mb-6 border border-brand-gold/30 rounded-full bg-brand-gold/5 animate-in fade-in slide-in-from-bottom-2 duration-700">
        <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">Automatización Premium LATAM</span>
      </div>
      <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <span className="block text-white">Conversaciones que</span>
        <span className="text-gradient">convierten</span>
      </h1>
      <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
        Bot empático omnicanal diseñado a medida para empresas que buscan excelencia sin perder el toque humano.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <a href="mailto:hola@modelsxl.com" className="group bg-gold-gradient text-brand-black px-10 py-5 rounded-full font-bold text-lg flex items-center shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all">
          Agendar Demo Exclusiva
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#implementation" className="text-white hover:text-brand-gold transition-colors font-semibold flex items-center group">
          Cómo funciona
          <ChevronDown className="ml-1 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const Features = () => {
  const cases = [
    { title: 'Ecommerce', desc: 'Venta asistida y seguimiento de carritos.', icon: <Zap className="text-brand-gold" /> },
    { title: 'Reservas', desc: 'Gestión inteligente de citas y turnos.', icon: <Clock className="text-brand-gold" /> },
    { title: 'Soporte', desc: 'Resolución inmediata 24/7 en todo canal.', icon: <MessageSquare className="text-brand-gold" /> },
    { title: 'Venta Directa', desc: 'Calificación de leads y cierre automático.', icon: <Target className="text-brand-gold" /> },
  ];

  return (
    <section id="features" className="py-24 bg-brand-black-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="bg-white/5 border border-brand-gold/10 p-8 rounded-3xl hover:border-brand-gold/40 transition-all hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{c.title}</h3>
              <p className="text-gray-400">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const steps = [
    { 
      phase: 'Fase 1: Personalidad', 
      time: '10-15 días', 
      desc: 'Desarrollo de la personalidad del bot y configuración inicial en 48-72h. Ajustes hasta respuesta perfecta.' 
    },
    { 
      phase: 'Fase 2: Gestión + CRM', 
      time: '30 días', 
      desc: 'Integración completa con tu CRM actual. Gestión de pedidos, reservas y seguimiento de leads.' 
    },
    { 
      phase: 'Fase 3: Pagos', 
      time: '60-90 días', 
      desc: 'Implementaciones custom de cobros y estabilización total del flujo conversacional.' 
    }
  ];

  return (
    <section id="implementation" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Implementación Gradual</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">Nuestro proceso de 60-90 días garantiza una integración orgánica y efectiva.</p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-gold/20"></div>
          
          <div className="space-y-20">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 mb-8 md:mb-0 px-10">
                  <div className={`text-center ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-2 block">{step.time}</span>
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.phase}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                
                <div className="relative z-10 w-12 h-12 bg-brand-gold flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <span className="text-brand-black font-bold">{i + 1}</span>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Integrations = () => {
  const icons = [
    { name: 'WhatsApp', icon: <MessageSquare className="w-8 h-8" /> },
    { name: 'Instagram', icon: <Instagram className="w-8 h-8" /> },
    { name: 'Facebook', icon: <Facebook className="w-8 h-8" /> },
    { name: 'Telegram', icon: <Send className="w-8 h-8" /> },
    { name: 'Webchat', icon: <Zap className="w-8 h-8" /> },
  ];

  return (
    <section className="py-24 bg-brand-black-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Omnicanalidad Real</h2>
        <p className="text-gray-400">Toda tu atención centralizada en un solo bot emocional.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        {icons.map((item, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="p-6 border border-white/10 rounded-full group-hover:border-brand-gold/50 transition-colors">
              {item.icon}
            </div>
            <span className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-brand-gold">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Benefits = () => {
  const metrics = [
    { val: '+25%', label: 'Mejora en Facturación' },
    { val: '+70%', label: 'Mejora en Fidelización' },
    { val: '35%', label: 'ROI Potencial' },
    { val: '24/7', label: 'Disponibilidad Total' },
  ];

  return (
    <section id="benefits" className="py-32 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mb-24">
          {metrics.map((m, i) => (
            <div key={i} className="animate-in fade-in duration-1000">
              <div className="text-5xl md:text-6xl font-bold text-brand-gold mb-2">{m.val}</div>
              <div className="text-gray-400 font-semibold tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-brand-gold/10 to-transparent p-12 rounded-[3rem] border border-brand-gold/20 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Automatización Premium sin perder el toque humano.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Cada bot es una extensión única de tu marca. No usamos plantillas; diseñamos cada palabra para que tus clientes se sientan escuchados.</p>
          </div>
          <div className="md:w-1/3 flex justify-center">
             <div className="w-32 h-32 bg-brand-gold/20 rounded-full flex items-center justify-center animate-pulse">
                <Users className="w-16 h-16 text-brand-gold" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="py-32 bg-brand-black-light relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Plan Único Premium</h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">Servicio exclusivo hecho a medida para marcas de alto impacto.</p>
      </div>
      
      <div className="max-w-2xl mx-auto bg-brand-black border border-brand-gold/30 rounded-[3rem] p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-brand-gold/10 pb-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Implementación</h3>
            <p className="text-gray-500">Pago único inicial</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-4xl font-bold text-brand-gold">USD $599</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Mensualidad</h3>
            <p className="text-gray-500">Mantenimiento y soporte</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-4xl font-bold text-brand-gold">USD $500</span>
          </div>
        </div>
        
        <ul className="space-y-5 mb-12">
          {[
            'Personalización total de personalidad',
            'Integración Omnicanal Completa',
            'Sincronización con CRM existente',
            'Pasarela de Pagos Custom',
            'Soporte Técnico Continuo',
            'Ajustes mensuales sin costo adicional'
          ].map((feature, i) => (
            <li key={i} className="flex items-center text-gray-300">
              <CheckCircle2 className="text-brand-gold mr-3 w-5 h-5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <a href="mailto:hola@modelsxl.com" className="block text-center bg-gold-gradient text-brand-black py-5 rounded-full font-bold text-xl hover:scale-[1.02] transition-transform">
          Empezar Ahora
        </a>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "¿Cuánto tiempo tarda la implementación completa?", a: "La configuración inicial toma 48-72h. El proceso completo con todas las funcionalidades (personalidad, CRM, pagos) se desarrolla en 60-90 días." },
    { q: "¿Por qué el costo es superior a otros bots?", a: "MODEL SxL es un producto boutique. No usamos plantillas. Cada bot es único, emocional y omnicanal, diseñado para maximizar el ROI." },
    { q: "¿Qué pasa si el bot no entiende a mis clientes?", a: "Durante los primeros 15 días afinamos la personalidad. Incluimos monitoreo continuo y ajustes mensuales para asegurar la perfección." },
    { q: "¿Necesito conocimientos técnicos?", a: "No. Nosotros nos encargamos de todo. Te entregamos un sistema intuitivo y funcional listo para convertir." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-brand-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10 pb-6">
              <button 
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-xl font-semibold text-gray-200">{faq.q}</span>
                <ChevronDown className={`text-brand-gold transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <p className="mt-4 text-gray-400 leading-relaxed animate-in fade-in slide-in-from-top-2">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 bg-brand-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        <div>
          <div className="text-3xl font-bold tracking-tighter flex items-center mb-6">
            <span className="text-white">MODEL</span>
            <span className="bg-gold-gradient bg-clip-text text-transparent ml-1">SxL</span>
          </div>
          <p className="text-gray-500 leading-relaxed mb-6">Automatización premium sin perder el toque humano. Bots conversacionales empáticos para Argentina y LATAM.</p>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-gold/20 transition-colors">
              <Instagram className="w-5 h-5 text-brand-gold" />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-gold/20 transition-colors">
              <Facebook className="w-5 h-5 text-brand-gold" />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-gold/20 transition-colors">
              <Send className="w-5 h-5 text-brand-gold" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Navegación</h4>
          <ul className="space-y-4">
            <li><a href="#implementation" className="text-gray-500 hover:text-brand-gold transition-colors">Proceso</a></li>
            <li><a href="#benefits" className="text-gray-500 hover:text-brand-gold transition-colors">Resultados</a></li>
            <li><a href="#pricing" className="text-gray-500 hover:text-brand-gold transition-colors">Precios</a></li>
            <li><a href="#" className="text-gray-500 hover:text-brand-gold transition-colors">Términos Legales</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contacto</h4>
          <ul className="space-y-4">
            <li className="text-gray-500">hola@modelsxl.com</li>
            <li className="text-gray-500">Argentina | LATAM</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center pt-10 border-t border-white/5">
        <p className="text-gray-600 text-sm">© 2026 MODEL SxL. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

function App() {
  const [isNVDOpen, setIsNVDOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Navbar onOpenNVD={() => setIsNVDOpen(true)} />
      
      <Hero />
      <Features />
      <Timeline />
      <Integrations />
      <Benefits />
      <Pricing />
      <FAQ />
      
      <section className="py-32 bg-gold-gradient relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-8">¿Listo para transformar tus conversaciones?</h2>
          <p className="text-brand-black/70 text-xl mb-12 font-medium">Agenda hoy una demo personalizada y descubre el potencial de tu marca.</p>
          <a href="mailto:hola@modelsxl.com" className="inline-block bg-brand-black text-brand-gold px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
            Agendar Ahora
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] rotate-45 bg-white/40 blur-3xl"></div>
        </div>
      </section>
      
      <Footer />

      {/* Floating NVD Button */}
      <button 
        onClick={() => setIsNVDOpen(true)}
        className="fixed bottom-8 right-8 z-[60] bg-brand-black border border-brand-gold/30 p-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform group"
      >
        <BookOpen className="text-brand-gold w-6 h-6" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-black text-brand-gold px-4 py-2 rounded-xl border border-brand-gold/20 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Consultar NVD
        </span>
      </button>

      <NVDModal isOpen={isNVDOpen} onClose={() => setIsNVDOpen(false)} />
    </div>
  );
}

export default App;
