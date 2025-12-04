type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'VMCB',
    fullName: 'Victor Manuel Cortes Balanta',
    email: 'victormcb0012@outlook.com',
  },
  hero: {
    name: 'Victor M. Cortes',
    p: ['Desarrollo', 'software y aplicationes web.'],
  },
  contact: {
    p: 'Contáctame',
    h2: 'Contanto.',
    form: {
      name: {
        span: 'Nombre',
        placeholder: "¿Cuál es tu nombre?",
      },
      email: { span: 'Email', placeholder: "¿Cual es tu email?" },
      message: {
        span: 'Mensaje',
        placeholder: '¿Deja tu mensaje?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introducción',
      h2: 'Descripción profesional.',
      content: `Soy un hábil desarrollador de software con experiencia en JavaScript y Node.JS,
      con experticia en el diseño e implementación de sistemas distribuidos escalables,
      APIs RESTful y arquitecturas basadas en microservicios.
      Autodidacta analítico orientado al logro de desarrollo de proyectos
      que satisfagan las necesidades y experiencias de mis clientes, y el explorar nuevos
      conocimientos, personas y experiencias en este proceso.`,
    },
    experience: {
      p: 'Lo que he hecho hasta ahora',
      h2: 'Experiencia.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'Mis trabajos',
      h2: 'Proyectos.',
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
