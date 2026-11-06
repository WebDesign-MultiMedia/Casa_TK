// Central copy deck for the site. Every visible string lives here so the
// LanguageContext can swap the whole page between English and Spanish
// without duplicating markup in every component.
export const translations = {
  en: {
    meta: {
      home: {
        title: "Casa TK | Bronx Coffee Shop & Bakery in Soundview, NY",
        description:
          "Casa TK is a women-owned coffee shop and bakery in Soundview, Bronx serving fresh Mexican pan dulce, espresso drinks, and aguas frescas six days a week from 8am.",
      },
      menu: {
        title: "Menu | Casa TK Coffee & Bakery",
        description:
          "Explore Casa TK's menu: espresso drinks, Mexican-candy iced lattes, matcha, aguas frescas, Mexican sodas, and fresh pan dulce in Soundview, Bronx.",
      },
      about: {
        title: "About Us | Casa TK Bronx Coffee Shop",
        description:
          "Casa TK is a women-owned coffee shop and bakery in Soundview, The Bronx, making everything from scratch in small batches, open early to late six days a week.",
      },
      gallery: {
        title: "Gallery | Casa TK Coffee & Bakery",
        description:
          "See real photos of Casa TK's storefront, coffee bar, and bakery case in Soundview, Bronx — straight from our Google listing.",
      },
      reviews: {
        title: "Reviews | Casa TK Coffee & Bakery",
        description:
          "4.9 out of 5 on Google. See what the Soundview, Bronx neighborhood is saying about Casa TK's coffee, pan dulce, and service.",
      },
      contact: {
        title: "Visit Us | Casa TK, 1497 Westchester Ave, Bronx",
        description:
          "Visit Casa TK at 1497 Westchester Ave, Soundview, Bronx. Call, get directions, or send a message — open six days a week from 8am.",
      },
    },
    nav: {
      home: "Home",
      services: "Menu",
      about: "About",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Contact",
      cta: "Order Ahead",
    },
    hero: {
      eyebrow: "Soundview, Bronx • Women-Owned",
      headline: "Your home away from home, one cafecito at a time.",
      subhead:
        "Fresh Mexican pan dulce, slow-brewed coffee, and breakfast comfort food made from scratch — open early, open late, six days a week.",
      ctaPrimary: "See The Menu",
      ctaSecondary: "Get Directions",
      badge: "4.9 ★ · New Yorkers' 1st Choice",
      headlineStart: "Your home away from home, one ",
      headlineEm: "cafecito",
      headlineEnd: " at a time.",
      ratingLabel: "on Google",
      reviewsLabel: "reviews",
      sticker: "Made from scratch · Hecho con amor · ",
    },
    status: {
      open: "Open now",
      closed: "Closed now",
      until: "until",
      opens: "Opens",
      today: "today",
      tomorrow: "tomorrow",
      at: "at",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    home: {
      marquee: [
        "Pan dulce",
        "Iced Duvalín latte",
        "Strawberry matcha",
        "Horchata",
        "Mangonada",
        "Dessert cups",
        "Mazapán latte",
        "Chamoy aguas frescas",
      ],
      favorites: {
        eyebrow: "House favorites",
        title: "Little things we're known for",
        subtitle: "The orders regulars come back for — sweet, bright, and made right in front of you.",
        cta: "Explore the full menu",
        items: [
          { name: "Strawberry Matcha", desc: "Layered, iced, and as pretty as it tastes." },
          { name: "Loaded Dessert Cups", desc: "Oreos, M&M's, strawberries, and a lot of love." },
          { name: "The Bakery Case", desc: "Chocolate-covered strawberries and fresh cake, daily." },
        ],
      },
      story: {
        eyebrow: "Our story",
        title: "A corner of Soundview that feels like home",
        cta: "More about us",
      },
      reviews: {
        eyebrow: "Kind words",
        cta: "Read all reviews",
      },
      visit: {
        eyebrow: "Come say hola",
        title: "Pull up a chair — we saved you a seat.",
        subtitle: "Six days a week, from the morning rush to the late-night sweet tooth.",
        call: "Call us",
      },
    },
    services: {
      eyebrow: "The menu",
      title: "What We're Pouring & Baking",
      subtitle:
        "Everything on the counter is made in small batches with limited tools — which means it's genuinely fresh, and worth the short wait.",
      items: [
        {
          name: "Espresso & Coffee Bar",
          desc: "Black coffee, lattes, cappuccinos, and Americanos — hot or iced, pulled fresh at the counter.",
          icon: "coffee",
        },
        {
          name: "Mexican-Candy Iced Lattes",
          desc: "Mazapán, Duvalín, and tiramisu iced lattes — the flavors that make regulars order the same thing every time.",
          icon: "sparkle",
        },
        {
          name: "Matcha & Non-Coffee",
          desc: "Iced matcha, strawberry matcha, banana pudding matcha, hot chocolate, herbal tea, and mangonada for the non-coffee crowd.",
          icon: "tea",
        },
        {
          name: "Aguas Frescas & Sodas",
          desc: "Piña, horchata, and jamaica aguas frescas alongside Mexican sodas like Boing, Topo Chico, and Sidral Mundet.",
          icon: "soda",
        },
        {
          name: "Dessert Cups & Bakery Case",
          desc: "Loaded dessert cups piled with Oreos, M&M's, and strawberries, plus fresh cake slices and chocolate-covered strawberries from the case.",
          icon: "pastry",
        },
        {
          name: "Free Wi-Fi & Seating",
          desc: "Outlets, steady Wi-Fi, and a table that's yours for as long as you need it — built for freelancers and slow mornings.",
          icon: "wifi",
        },
      ],
    },
    about: {
      eyebrow: "About us",
      title: "About Casa TK",
      p1: "Casa TK is a women-owned coffee shop and bakery tucked into Soundview, The Bronx — the kind of corner spot where the barista learns your order by your second visit.",
      p2: "Everything is made from scratch, in small batches, with the kind of care that takes time. We'd rather you wait a few extra minutes for a concha that's actually fresh than rush you through a shortcut.",
      p3: "We built Casa TK to be flexible: early enough for the 8am shift crew, cozy enough for a first date, quiet enough for a chapter of your book, and open late enough for whoever needs a sweet something after midnight.",
      stats: [
        { label: "Rating", value: "4.9 / 5" },
        { label: "Open", value: "Tue–Sun, 8AM–12AM" },
        { label: "Neighborhood", value: "Soundview, Bronx" },
        { label: "Owned By", value: "Local Women" },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      all: "All",
      title: "A Look Inside",
      subtitle: "A taste of the counter, the corner booth, and everything in between.",
      note: "Straight from our Google listing — real drinks, real desserts, real storefront.",
    },
    reviews: {
      eyebrow: "Reviews",
      outOf: "out of 5",
      basedOn: "Based on",
      googleReviews: "Google reviews",
      highlights: ["Atmosphere", "Service", "Food & drink"],
      title: "What The Neighborhood Is Saying",
      subtitle: "4.9 out of 5 on Google — 100% marks for atmosphere, service, and food & drink.",
      linkText: "Read more reviews on Google",
      items: [
        {
          quote: "The desserts here are out of this world and taste amazing.",
          name: "Ana M.",
          rating: 5,
        },
        {
          quote:
            "Staff is always warm and welcoming — feels like walking into a friend's kitchen, not a chain coffee shop.",
          name: "Marcus D.",
          rating: 5,
        },
        {
          quote:
            "Open late is clutch. Grabbed pan dulce and coffee at 11pm and it was still made fresh in front of us.",
          name: "Priya K.",
          rating: 5,
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Visit Or Say Hello",
      subtitle:
        "Stop by Westchester Ave, call ahead, or send a message — we read every one.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      hours: [
        { days: "Monday", time: "Closed" },
        { days: "Tuesday", time: "8:00 AM – 10:30 PM" },
        { days: "Wednesday – Sunday", time: "8:00 AM – 12:00 AM" },
      ],
      instagramLabel: "Instagram",
      tiktokLabel: "TikTok",
      mapLink: "Get Directions",
      formTitle: "Send Us A Message",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Message",
      submit: "Send Message",
      submitting: "Sending...",
      success: "Thanks! We got your message and will get back to you soon.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please write a short message so we know how to help.",
      },
    },
    footer: {
      tagline: "Fresh coffee, fresh pan dulce, familiar faces.",
      followLabel: "Follow Us",
      rights: "All rights reserved.",
      builtWith: "Bronx-brewed, Bronx-owned.",
    },
  },
  es: {
    meta: {
      home: {
        title: "Casa TK | Cafetería y Panadería en Soundview, Bronx",
        description:
          "Casa TK es una cafetería y panadería de mujeres en Soundview, El Bronx, con pan dulce mexicano fresco, café espresso y aguas frescas seis días a la semana desde las 8am.",
      },
      menu: {
        title: "Menú | Casa TK Cafetería y Panadería",
        description:
          "Descubre el menú de Casa TK: café espresso, lattes de dulces mexicanos, matcha, aguas frescas, refrescos mexicanos y pan dulce fresco en Soundview, El Bronx.",
      },
      about: {
        title: "Nosotros | Casa TK Cafetería en El Bronx",
        description:
          "Casa TK es una cafetería de mujeres en Soundview, El Bronx, donde todo se hace desde cero en tandas pequeñas, abierta desde temprano hasta tarde seis días a la semana.",
      },
      gallery: {
        title: "Galería | Casa TK Cafetería y Panadería",
        description:
          "Mira fotos reales de la fachada, la barra de café y la vitrina de postres de Casa TK en Soundview, El Bronx — directo de nuestro perfil de Google.",
      },
      reviews: {
        title: "Reseñas | Casa TK Cafetería y Panadería",
        description:
          "4.9 de 5 en Google. Mira lo que dice el vecindario de Soundview, El Bronx sobre el café, el pan dulce y el servicio de Casa TK.",
      },
      contact: {
        title: "Visítanos | Casa TK, 1497 Westchester Ave, Bronx",
        description:
          "Visita Casa TK en 1497 Westchester Ave, Soundview, El Bronx. Llama, pide direcciones o envía un mensaje — abierto seis días a la semana desde las 8am.",
      },
    },
    nav: {
      home: "Inicio",
      services: "Menú",
      about: "Nosotros",
      gallery: "Galería",
      reviews: "Reseñas",
      contact: "Contacto",
      cta: "Ordenar",
    },
    hero: {
      eyebrow: "Soundview, Bronx • Negocio de Mujeres",
      headline: "Tu segunda casa, un cafecito a la vez.",
      subhead:
        "Pan dulce mexicano recién horneado, café de grano lento y desayunos caseros hechos desde cero — abrimos temprano, cerramos tarde, seis días a la semana.",
      ctaPrimary: "Ver El Menú",
      ctaSecondary: "Cómo Llegar",
      badge: "4.9 ★ · Favorito De Los Neoyorquinos",
      headlineStart: "Tu segunda casa, un ",
      headlineEm: "cafecito",
      headlineEnd: " a la vez.",
      ratingLabel: "en Google",
      reviewsLabel: "reseñas",
      sticker: "Hecho con amor · Made from scratch · ",
    },
    status: {
      open: "Abierto ahora",
      closed: "Cerrado ahora",
      until: "hasta las",
      opens: "Abre",
      today: "hoy",
      tomorrow: "mañana",
      at: "a las",
      days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    },
    home: {
      marquee: [
        "Pan dulce",
        "Latte helado de Duvalín",
        "Matcha de fresa",
        "Horchata",
        "Mangonada",
        "Vasos de postre",
        "Latte de mazapán",
        "Aguas frescas con chamoy",
      ],
      favorites: {
        eyebrow: "Favoritos de la casa",
        title: "Las cositas por las que nos conocen",
        subtitle: "Lo que los clientes de siempre vuelven a pedir — dulce, colorido y hecho frente a ti.",
        cta: "Ver el menú completo",
        items: [
          { name: "Matcha De Fresa", desc: "En capas, helado y tan bonito como sabe." },
          { name: "Vasos De Postre", desc: "Oreos, M&M's, fresas y mucho cariño." },
          { name: "La Vitrina", desc: "Fresas con chocolate y pastel fresco, todos los días." },
        ],
      },
      story: {
        eyebrow: "Nuestra historia",
        title: "Una esquina de Soundview que se siente como casa",
        cta: "Más sobre nosotros",
      },
      reviews: {
        eyebrow: "Palabras bonitas",
        cta: "Ver todas las reseñas",
      },
      visit: {
        eyebrow: "Ven a saludar",
        title: "Toma asiento — te guardamos un lugar.",
        subtitle: "Seis días a la semana, desde la prisa de la mañana hasta el antojo de medianoche.",
        call: "Llámanos",
      },
    },
    services: {
      eyebrow: "El menú",
      title: "Lo Que Servimos Y Horneamos",
      subtitle:
        "Todo en el mostrador se prepara en tandas pequeñas con herramientas limitadas — por eso es genuinamente fresco y vale la pena la breve espera.",
      items: [
        {
          name: "Barra De Café",
          desc: "Café negro, lattes, capuchinos y americanos — calientes o helados, preparados frescos en el mostrador.",
          icon: "coffee",
        },
        {
          name: "Lattes Helados De Dulces Mexicanos",
          desc: "Lattes helados de mazapán, Duvalín y tiramisú — los sabores que hacen que los habituales pidan lo mismo cada vez.",
          icon: "sparkle",
        },
        {
          name: "Matcha Y Sin Café",
          desc: "Matcha helado, matcha de fresa, matcha de pudín de plátano, chocolate caliente, té de hierbas y mangonada para quienes no toman café.",
          icon: "tea",
        },
        {
          name: "Aguas Frescas Y Refrescos",
          desc: "Aguas frescas de piña, horchata y jamaica junto a refrescos mexicanos como Boing, Topo Chico y Sidral Mundet.",
          icon: "soda",
        },
        {
          name: "Vasos De Postre Y Vitrina",
          desc: "Vasos de postre cargados de Oreos, M&M's y fresas, además de rebanadas de pastel fresco y fresas cubiertas de chocolate de la vitrina.",
          icon: "pastry",
        },
        {
          name: "Wi-Fi Gratis Y Asientos",
          desc: "Enchufes, Wi-Fi estable y una mesa que es tuya el tiempo que necesites — pensado para freelancers y mañanas tranquilas.",
          icon: "wifi",
        },
      ],
    },
    about: {
      eyebrow: "Nosotros",
      title: "Sobre Casa TK",
      p1: "Casa TK es una cafetería y panadería de dueñas mujeres ubicada en Soundview, El Bronx — el tipo de esquina donde el barista aprende tu orden desde tu segunda visita.",
      p2: "Todo se hace desde cero, en tandas pequeñas, con el cuidado que toma tiempo. Preferimos que esperes unos minutos más por una concha realmente fresca que apresurarte con un atajo.",
      p3: "Creamos Casa TK para ser flexible: lo suficientemente temprano para el turno de las 8am, acogedor para una primera cita, tranquilo para leer un capítulo de tu libro, y abierto hasta tarde para quien necesite algo dulce después de medianoche.",
      stats: [
        { label: "Calificación", value: "4.9 / 5" },
        { label: "Horario", value: "Mar–Dom, 8AM–12AM" },
        { label: "Vecindario", value: "Soundview, Bronx" },
        { label: "Propiedad De", value: "Mujeres Locales" },
      ],
    },
    gallery: {
      eyebrow: "Galería",
      all: "Todo",
      title: "Un Vistazo Por Dentro",
      subtitle: "Una probadita del mostrador, la mesa del rincón y todo lo demás.",
      note: "Directo de nuestro perfil de Google — bebidas reales, postres reales, nuestra fachada real.",
    },
    reviews: {
      eyebrow: "Reseñas",
      outOf: "de 5",
      basedOn: "Basado en",
      googleReviews: "reseñas de Google",
      highlights: ["Ambiente", "Servicio", "Comida y bebida"],
      title: "Lo Que Dice El Vecindario",
      subtitle: "4.9 de 5 en Google — 100% en ambiente, servicio y comida y bebida.",
      linkText: "Lee más reseñas en Google",
      items: [
        {
          quote: "Los postres aquí son increíbles y saben espectacular.",
          name: "Ana M.",
          rating: 5,
        },
        {
          quote:
            "El personal siempre es cálido y acogedor — se siente como entrar a la cocina de un amigo, no a una cafetería de cadena.",
          name: "Marcus D.",
          rating: 5,
        },
        {
          quote:
            "Que abran tarde es clave. Compramos pan dulce y café a las 11pm y todo estaba recién hecho frente a nosotros.",
          name: "Priya K.",
          rating: 5,
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Visítanos O Escríbenos",
      subtitle:
        "Pasa por Westchester Ave, llama con anticipación, o envía un mensaje — leemos todos.",
      addressLabel: "Dirección",
      phoneLabel: "Teléfono",
      hoursLabel: "Horario",
      hours: [
        { days: "Lunes", time: "Cerrado" },
        { days: "Martes", time: "8:00 AM – 10:30 PM" },
        { days: "Miércoles – Domingo", time: "8:00 AM – 12:00 AM" },
      ],
      instagramLabel: "Instagram",
      tiktokLabel: "TikTok",
      mapLink: "Cómo Llegar",
      formTitle: "Envíanos Un Mensaje",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número De Teléfono",
      message: "Mensaje",
      submit: "Enviar Mensaje",
      submitting: "Enviando...",
      success: "¡Gracias! Recibimos tu mensaje y te responderemos pronto.",
      errors: {
        name: "Por favor ingresa tu nombre.",
        email: "Por favor ingresa un correo electrónico válido.",
        message: "Por favor escribe un mensaje breve para saber cómo ayudarte.",
      },
    },
    footer: {
      tagline: "Café fresco, pan dulce fresco, caras conocidas.",
      followLabel: "Síguenos",
      rights: "Todos los derechos reservados.",
      builtWith: "Hecho en el Bronx, del Bronx.",
    },
  },
};
