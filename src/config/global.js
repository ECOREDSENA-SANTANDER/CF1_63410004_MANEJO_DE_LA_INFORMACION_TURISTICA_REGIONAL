export default {
  global: {
    Name:
      'Caracterización del visitante y comunicación en la atención turística',
    Description:
      'Este componente formativo permite comprender los fundamentos de la atención al cliente en el sector turístico, identificando los diferentes tipos de visitantes, sus necesidades, comportamientos y expectativas. Además, fortalece las habilidades de comunicación y servicio mediante estrategias como <i>storytelling</i>, enfoque STEAM e historietas, junto con la aplicación de protocolos, normas de cortesía e imagen personal, para brindar una atención profesional, segura y de calidad acorde con la normativa vigente. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Usuario: conceptos y características',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Concepto de consumidor, cliente, tipos y características de comportamiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipología de clientes en turismo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Parámetros de condición física, médica y requerimientos de alimentación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación en el sector turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Técnicas de comunicación (<i>storytelling</i>, STEAM e historietas)',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Protocolos de servicio en turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Parámetros de manejo de imagen personal',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Parámetros de urbanidad y normas de cortesía en turismo',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63410004_CF01_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Amabilidad',
      significado:
        'Actitud de trato cordial, respetuoso y atento hacia los demás.',
    },
    {
      termino: 'Atención al cliente',
      significado:
        'Conjunto de acciones orientadas a satisfacer las necesidades del visitante durante el servicio.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona que compra de manera frecuente o mantiene una relación continua con una empresa turística.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Persona que adquiere o utiliza un producto o servicio turístico.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'Forma en que una persona piensa, decide, compra y evalúa un servicio turístico.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Proceso de transmitir información de manera clara, respetuosa y efectiva.',
    },
    {
      termino: 'Convivencia',
      significado:
        'Relación armónica entre personas que comparten un mismo espacio.',
    },
    {
      termino: 'Cortesía',
      significado:
        'Expresión de respeto, educación y consideración hacia los demás.',
    },
    {
      termino: 'Cultura local',
      significado:
        'Conjunto de costumbres, tradiciones y valores propios de una comunidad.',
    },
    {
      termino: 'Empatía',
      significado: 'Capacidad de comprender y ponerse en el lugar del otro.',
    },
    {
      termino: 'Excursionista',
      significado:
        'Visitante que permanece menos de 24 horas en un destino y no pernocta.',
    },
    {
      termino: 'Imagen profesional',
      significado:
        'Percepción que proyecta una persona a través de su presentación y comportamiento.',
    },
    {
      termino: 'Necesidad',
      significado:
        'Carencia, deseo o motivación que impulsa al turista a buscar experiencia o servicio.',
    },
    {
      termino: 'Protocolo de servicio',
      significado:
        'Conjunto de normas que orientan la atención, comunicación y comportamiento del prestador turístico.',
    },
    {
      termino: 'Puntualidad',
      significado: 'Cumplimiento responsable de horarios establecidos.',
    },
    {
      termino: 'Respeto',
      significado: 'Reconocimiento del valor y los derechos de los demás.',
    },
    {
      termino: 'Responsabilidad',
      significado:
        'Compromiso de cumplir adecuadamente con las funciones asignadas.',
    },
    {
      termino: 'Servicio turístico',
      significado:
        'Actividades ofrecidas para atender y satisfacer a los visitantes.',
    },
    {
      termino: 'Tacto social',
      significado:
        'Habilidad para actuar con prudencia, respeto y adecuación en diferentes situaciones sociales.',
    },
    {
      termino: 'Turismo',
      significado:
        'Conjunto de actividades que realizan las personas cuando viajan y permanecen temporalmente fuera de su entorno habitual.',
    },
    {
      termino: 'Turista',
      significado:
        'Visitante que permanece 24 horas o más en un destino y generalmente pernocta.',
    },
    {
      termino: 'Urbanidad',
      significado:
        'Conjunto de normas que orientan el comportamiento adecuado en la sociedad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carreño, M. A. (2022). Manual de urbanidad y buenas costumbres para uso de la juventud de ambos sexos. Centro Nacional del Libro. (Obra original publicada en 1853).',
      link: '',
    },
    {
      referencia:
        'Centers for Disease Control and Prevention. (2023). Traveler advice. Travelers’ Health.',
      link: '',
    },
    {
      referencia:
        'Centers for Disease Control and Prevention. (2025). Food and water precautions for travelers. En CDC Yellow Book 2026.',
      link: '',
    },
    {
      referencia:
        'Centro Común de Investigación. (2025). A roadmap for science, technology and innovation for sustainable development. Oficina de Publicaciones de la Unión Europea.',
      link: '',
    },
    {
      referencia:
        'Comunicaciones ProColombia. (2026). Colombia proyecta crecimiento aéreo internacional con nuevas rutas en 2026. ProColombia.',
      link: '',
    },
    {
      referencia:
        'Congreso STEAM. (s. f.). ¿Qué es la metodología STEAM y para qué sirve?',
      link: '',
    },
    {
      referencia:
        'El País. (2020). Los mejores destinos para nómadas digitales. El Viajero. Lonely Planet.',
      link: '',
    },
    {
      referencia:
        'Fondo Nacional de Turismo [FONTUR]. (s. f.). Manual de buenas prácticas de turismo responsable. Ministerio de Comercio, Industria y Turismo.',
      link: '',
    },
    {
      referencia:
        'Fondo Nacional de Turismo [FONTUR] & Ministerio de Comercio, Industria y Turismo. (2024). Resultados estudio de investigación de mercados sobre el turismo en Colombia: Encuesta turistas y hogares 2024.',
      link: '',
    },
    {
      referencia:
        'George, R. (2025). Marketing tourism and hospitality: Concepts and cases (2.ª ed.). Springer.',
      link: '',
    },
    {
      referencia:
        'Horner, S., & Swarbrooke, J. (2021). Consumer behaviour in tourism (4.ª ed.). Routledge.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., Bowen, J. T., & Baloglu, S. (2021). Marketing for hospitality and tourism (8.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Lemoine Quintero, F. Á., Caicedo Coello, E. A., Hernández Rodríguez, N. R., Montesdeoca Calderón, M. G., & Saltos Saltos, J. E. (2020). Gestión del comportamiento del consumidor turístico. 3Ciencias.',
      link: '',
    },
    {
      referencia:
        'Middleton, V., Fyall, A., Morgan, M., & Ranchhod, A. (2009). Marketing in travel and tourism (4.ª ed.). Butterworth-Heinemann.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s. f.). NTS agencias de viajes: Normas técnicas sectoriales.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2026). Esquemas de vacunación: viajeros. MinSalud.',
      link: '',
    },
    {
      referencia:
        'Morillo Moreno, M. C. (2011). Turismo y producto turístico: evolución, conceptos, componentes y clasificación. Visión Gerencial, (1), 135–158.',
      link: '',
    },
    {
      referencia:
        'Nguyen, E. (2023). El nómada digital se ha convertido en un personaje emblemático de la era moderna del trabajo remoto. BBC News Mundo.',
      link: '',
    },
    {
      referencia:
        'OAG Aviation. (s. f.). Procolombia relies on OAG’s analyser platform to discover new markets and grow tourism.',
      link: '',
    },
    {
      referencia: 'ONU Turismo. (2024). Digital tools to revitalize tourism.',
      link: '',
    },
    {
      referencia: 'ONU Turismo. (s. f.). Misión y principios.',
      link: '',
    },
    {
      referencia:
        'ONU Turismo. (s. f.). Turismo accesible: publicaciones y guías.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud [OMS]. (2020). Directrices sobre actividad física y hábitos sedentarios.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (2021). Estadísticas de llegada de visitantes residentes en Estados Unidos a Colombia.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (2022). Toolkit narrativas regionales de turismo. Colombia Travel.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (2021). El guía de turismo en la gestión de la experiencia del visitante [Video]. Colombia Travel.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (s. f.). Tendencias y recomendaciones del turista canadiense.',
      link: '',
    },
    {
      referencia:
        'ProColombia. (s. f.). Salud y vacunas para viajar a Colombia. Colombia Travel.',
      link: '',
    },
    {
      referencia:
        'ProColombia, & Destination Analyst. (s. f.). Estudio de segmentación del viajero estadounidense.',
      link: '',
    },
    {
      referencia:
        'Quesada Castro, R. (2006). Elementos del turismo: teoría, clasificación y actividad. EUNED.',
      link: '',
    },
    {
      referencia:
        'Reynolds, B. W. (2022). FlexJobs Digital Nomad Survey: Insights into the Remote Lifestyle. FlexJobs.',
      link: '',
    },
    {
      referencia:
        'THiNK. (2024). Cómo hacer un buen storytelling: el arte de conectar con tu audiencia. Mérida Anáhuac.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (s. f.). Science, technology, engineering and mathematics (STEM).',
      link: '',
    },
    {
      referencia: 'Workmotion. (s. f.). Best remote work cities.',
      link: '',
    },
    {
      referencia:
        'Worldpackers. (s. f.). Empleos para trabajar y viajar como nómada digital.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Celmira Pereira Franco',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
