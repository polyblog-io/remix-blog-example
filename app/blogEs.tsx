export type Post = {
  id: number;
  title: string;
  imgUrl: string;
  shortDesc: string;
  authorName: string;
  publishDate: string;
};

export const getPosts = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: "22 tips increíbles de marketing de contenidos",
      imgUrl:
        "https://images.waiterio.com/images/article-cover-22-content-marketing-tips-f7606fd5-640w.webp",
      shortDesc: "Llevando tu marketing de contenidos al siguiente nivel",
      authorName: "Vindya Vithana",
      publishDate: "2 de diciembre de 2021",
    },
    {
      id: 2,
      title: "10 ejemplos de marketing de contenido genial para inspirarte",
      imgUrl:
        "https://images.waiterio.com/images/article-cover-content-marketing-examples-b6079beb-640w.webp",
      shortDesc: "Algunos buenos ejemplos de marketing de contenidos exitoso",
      authorName: "Catherine James",
      publishDate: "12 de noviembre de 2021",
    },
    {
      id: 3,
      title:
        "¿Qué es el marketing de contenidos? [Una guía completa para principiantes]",
      imgUrl:
        "https://images.waiterio.com/images/article-cover-what-is-content-marketing-d8f9acd6-640w.webp",
      shortDesc:
        "Comprender exactamente lo que significa el marketing de contenidos.",
      authorName: "Vindya Vithana",
      publishDate: "11 de noviembre de 2021",
    },
    {
      id: 4,
      title:
        "Tipos de marketing de contenido: la munición para dominar el mundo",
      imgUrl:
        "https://images.waiterio.com/images/article-cover-content-marketing-types-19ec9633-640w.webp",
      shortDesc: "Conozca los distintos tipos de marketing de contenidos.",
      authorName: "Michael Elkins",
      publishDate: "1 de noviembre de 2021",
    },
    {
      id: 5,
      title:
        "12 formas en las que el marketing de contenidos beneficia a su negocio",
      imgUrl:
        "https://images.waiterio.com/images/article-cover-content-marketing-benefits-c5433353-640w.webp",
      shortDesc:
        "¿Por qué el marketing de contenidos es importante para las empresas?",
      authorName: "Catherine James",
      publishDate: "25 de octubre de 2021",
    },
    {
      id: 6,
      title:
        "Cómo crear una estrategia de marketing de contenido increíble [10 pasos]",
      imgUrl:
        "https://images.waiterio.com/images/article-cover-content-marketing-strategy-073689ff-640w.webp",
      shortDesc:
        "Una estrategia sólida que mejorará tu marketing de contenidos",
      authorName: "Vindya Vithana",
      publishDate: "25 de octubre de 2021",
    },
    {
      id: 7,
      title: "Cómo el marketing de contenidos está cambiando el juego",
      imgUrl:
        "https://images.waiterio.com/images/article-cover-content-marketing-is-changing-the-game-619c884c-640w.webp",
      shortDesc: "¡Todo lo que necesitas saber sobre marketing de contenidos!",
      authorName: "Abhi Chatterjee",
      publishDate: "15 de octubre de 2021",
    },
  ];
  return posts;
};
