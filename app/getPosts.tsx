import type { Post } from "~/Post";

const englishPosts: Post[] = [
  {
    id: 1,
    title: "22 Brilliant Content Marketing Tips",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-22-content-marketing-tips-f7606fd5-640w.webp",
    shortDesc: "Taking your content marketing to the next level",
    authorName: "Vindya Vithana",
    publishDate: "November 30, 2021",
  },
  {
    id: 2,
    title: "10 Killer Content Marketing Examples To Inspire You",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-content-marketing-examples-b6079beb-640w.webp",
    shortDesc: "Some great examples of successful content marketing",
    authorName: "Catherine James",
    publishDate: "November 12, 2021",
  },
  {
    id: 3,
    title: "What is Content Marketing? [A Comprehensive Beginner's Guide]",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-what-is-content-marketing-d8f9acd6-640w.webp",
    shortDesc: "Understand exactly what content marketing means",
    authorName: "Vindya Vithana",
    publishDate: "November 11, 2021",
  },
  {
    id: 4,
    title: "Content Marketing Types: The Ammo for World Domination",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-content-marketing-types-19ec9633-640w.webp",
    shortDesc: "Learn about the various types of content marketing",
    authorName: "Michael Elkins",
    publishDate: "October 27, 2021",
  },
  {
    id: 5,
    title: "12 Ways Content Marketing Benefits Your Business",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-content-marketing-benefits-c5433353-640w.webp",
    shortDesc: "Why content marketing is important for businesses?",
    authorName: "Catherine James",
    publishDate: "October 25, 2021",
  },
  {
    id: 6,
    title: "How to Create a Killer Content Marketing Strategy [10 Steps]",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-content-marketing-strategy-073689ff-640w.webp",
    shortDesc: "A solid strategy will improve your content marketing",
    authorName: "Vindya Vithana",
    publishDate: "October 25, 2021",
  },
  {
    id: 7,
    title: "How Content Marketing Is Changing The Game",
    imgUrl:
      "https://images.waiterio.com/images/article-cover-content-marketing-is-changing-the-game-619c884c-640w.webp",
    shortDesc: "All you need to know about content marketing",
    authorName: "Abhi Chatterjee",
    publishDate: "September 3, 2021",
  },
]

const spanishPosts: Post[] = [
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
  ]

export const getPosts = (locale = 'en') => {

  let posts: Post[] = []

  if (locale === 'en') {
    posts = englishPosts
  } else if (locale === 'es') {
    posts = spanishPosts
  }

  return posts;
  
};
