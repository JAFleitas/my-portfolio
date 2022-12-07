interface IProject {
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
  image: string;
}

export const dataProjects: IProject[] = [
  {
    title: "ROOM RENTAL APP",
    description:
      "SPA relacionada al alquiler de viviendas, propiedades o habitaciones en el ámbito turístico. Se puede reservar Habitaciones, pagar, cancelar y calificar la compra.",
    repoLink: "https://github.com/JAFleitas/room-rental-app",
    demoLink: "https://room-rental-app.vercel.app/",
    image: "/assets/projects/room-rental-app.jpeg",
  },
  {
    title: "DIVA E-COMMERCE",
    description:
      "Tienda virtual de ropa, donde podras comprar todo tipo de prendas. La web esta creada con Nextjs por lo que genera las paginas del lado del servidor y mejora la experiencia de usuario. La App posee carrito de compras, metodos de pagos, panel de administrador y autenticaciones.",
    repoLink: "https://github.com/JAFleitas/diva-ecommerce-nextjs",
    demoLink: "https://diva-ecommerce-nextjs.vercel.app/",
    image: "/assets/projects/diva-ecommerce.jpeg",
  },
 
  {
    title: "TECH SHOP",
    description:
      "Tienda virtual de articulos tecnológicos, donde podras comprar articulos informáticos. La web esta creada con Reactjs y la api con Expressjs con una base de datos relacional hecha con PostgreSQL. La App posee carrito de compras, metodos de pagos, panel de administrador y autenticaciones.",
    repoLink: "https://github.com/JAFleitas/ecommerceTech",
    demoLink: "https://ecommerce-tech-khaki.vercel.app/",
    image: "/assets/projects/tecno-ecommerce.jpeg",
  },

  {
    title: "WORK BOOK",
    description:
      "Una App que te permite administras tus tareas, posee drag-and-drop donde podras mover las tareas en tres ileras 'pendiente', 'en progreso' y 'finalizada'. La app fue creada con Nextjs, Typescript y mongodb.",
    repoLink: "https://github.com/JAFleitas/work-book-nextjs",
    demoLink: "https://work-book-nextjs.vercel.app/",
    image: "/assets/projects/work-book-nextjs.jpeg",
  },
  {
    title: "POKEDEX PAGE",
    description:
      "En ésta web encontraras todos los pokemones de la primera temporada, podras agregarlos a favorito y miras sus imagenes. Es una aplicación creada con Nextjs.",
    repoLink: "https://github.com/JAFleitas/pokemon-static-nextjs",
    demoLink: "https://pokemon-static-nextjs-six.vercel.app/",
    image: "/assets/projects/pokemon-page.jpeg",
  },
];
