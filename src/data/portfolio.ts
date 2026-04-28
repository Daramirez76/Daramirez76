export const projects = [
  {
    title: "Agente OCR para comerciantes informales",
    description:
      "Módulo OCR de un agente de WhatsApp con IA que digitaliza comprobantes y apoya la gestión contable. Integra captura por chat, procesamiento de imágenes y un dashboard web para visualizar los datos extraídos.",
    stack: ["Python", "OCR", "React", "MySQL", "Docker"],
    year: "2026",
    problem:
      "Comerciantes informales gestionan comprobantes de forma manual, lo que dificulta llevar control contable y tomar decisiones con datos reales.",
    solution:
      "Agente conversacional en WhatsApp con OCR que digitaliza cada comprobante, lo estructura y lo expone en un dashboard web centralizado.",
    impact:
      "Automatización del registro contable y transformación de imágenes de comprobantes en información útil para el negocio.",
    repo: "https://github.com/FranklinSRomero/HACKTHON-NODI/tree/feature/ocr_agent",
    featured: true,
  },
  {
    title: "Sistema de gestión geriátrica con chatbot IA",
    description:
      "Plataforma web para administrar la operación de un hogar geriátrico, con un chatbot basado en IA como punto de entrada para atender consultas y orientar a familiares y personal.",
    stack: ["Python", "JavaScript", "Chatbot IA", "MySQL"],
    year: "2024",
    problem:
      "Atención a familiares y gestión interna realizadas de forma manual, con consultas repetitivas que saturan al personal.",
    solution:
      "Sistema web con chatbot inteligente que resuelve consultas frecuentes y un panel para gestionar residentes, turnos e información clínica.",
    impact: "Optimización de la atención y mayor eficiencia en los procesos internos del centro.",
    repo: "https://github.com/Daramirez76/hga/tree/dev",
  },
];

export const capabilities = [
  {
    area: "AI & Automatización",
    description:
      "OCR, extracción de datos y agentes conversacionales que reemplazan tareas manuales por flujos automáticos.",
    items: ["OCR", "Chatbots IA", "Extracción de datos", "Automatización"],
  },
  {
    area: "Backend",
    description:
      "Lógica de negocio en Python e integración de servicios para sostener sistemas confiables y mantenibles.",
    items: ["Python", "APIs", "MySQL", "Integraciones"],
  },
  {
    area: "Interfaces",
    description:
      "Dashboards en React conectados al backend para exponer la información procesada al usuario final.",
    items: ["React", "Dashboards", "JavaScript"],
  },
  {
    area: "Infraestructura",
    description:
      "Entornos reproducibles y control de versiones para entregar con confianza desde desarrollo a producción.",
    items: ["Docker", "Linux", "Git"],
  },
];

export const stack = ["Python", "JavaScript", "React", "MySQL", "Docker", "Linux", "Git", "OCR"];

export const interests = [
  "IA aplicada",
  "Automatización",
  "Sistemas escalables",
  "Open source",
  "Agentes conversacionales",
  "OCR & visión",
];

export const contact = {
  email: "da.ramirez25@hotmail.com",
  github: "https://github.com/Daramirez76",
  githubLabel: "github.com/Daramirez76",
  linkedin: "https://www.linkedin.com/in/david-ramirez-6bb33b3b8/",
  linkedinLabel: "linkedin.com/in/david-ramirez",
  location: "Bogotá, Colombia",
  phone: "+57 313 325 1374",
};
