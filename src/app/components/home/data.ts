import { IPopularCategory, ILatestBlog } from "./types"
import { FiBarChart2, FiPieChart } from "react-icons/fi"

export const featured_blogs = {
  title: "The new Way of Creating Blogs",
  image: "https://source.unsplash.com/random?nature",
  author: {
    name: "John Doe",
    avatar: "https://source.unsplash.com/random?gaming",
  },
  createdAt: "21, December 2023",
  category: "Sports",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum accusantium iste quae omnis enim maiores voluptate culpa placeat, unde ratione neque perspiciatis assumenda iusto sapiente veniam corporis, voluptates laudantium. Sapiente earum laudantium similique distinctio, illum unde, voluptatem nulla odit soluta ducimus perferendis iste inventore iusto reiciendis non iure qui ut nam ab expedita, nobis magni numquam delectus. Aut earum asperiores minima? Facere eligendi beatae rerum sapiente debitis! Delectus minima eius officia, numquam veniam error assumenda similique ullam voluptates consectetur dolorem architecto repudiandae perspiciatis animi amet reiciendis provident dolor eaque pariatur nulla explicabo placeat aut. Repudiandae minima exercitationem dolorum itaque!",

  url: "/",
}

export const latest_blogs: ILatestBlog[] = [
  {
    title: "The new Way of Creating Blogs",
    image: "https://source.unsplash.com/random?nature",
    author: {
      name: "John Doe",
      avatar: "https://source.unsplash.com/random?gaming",
    },
    createdAt: "21, December 2023",
    category: "Sports",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum accusantium iste quae omnis enim maiores voluptate culpa placeat, unde ratione neque perspiciatis assumenda iusto sapiente veniam corporis, voluptates laudantium. Sapiente earum laudantium similique distinctio, illum unde, voluptatem nulla odit soluta ducimus perferendis iste inventore iusto reiciendis non iure qui ut nam ab expedita, nobis magni numquam delectus. Aut earum asperiores minima? Facere eligendi beatae rerum sapiente debitis! Delectus minima eius officia, numquam veniam error assumenda similique ullam voluptates consectetur dolorem architecto repudiandae perspiciatis animi amet reiciendis provident dolor eaque pariatur nulla explicabo placeat aut. Repudiandae minima exercitationem dolorum itaque!",

    url: "/",
  },
  {
    title: "The new Way of Creating Blogs",
    image: "https://source.unsplash.com/random?nature",
    author: {
      name: "John Doe",
      avatar: "https://source.unsplash.com/random?gaming",
    },
    createdAt: "21, December 2023",
    category: "Sports",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum accusantium iste quae omnis enim maiores voluptate culpa placeat, unde ratione neque perspiciatis assumenda iusto sapiente veniam corporis, voluptates laudantium. Sapiente earum laudantium similique distinctio, illum unde, voluptatem nulla odit soluta ducimus perferendis iste inventore iusto reiciendis non iure qui ut nam ab expedita, nobis magni numquam delectus. Aut earum asperiores minima? Facere eligendi beatae rerum sapiente debitis! Delectus minima eius officia, numquam veniam error assumenda similique ullam voluptates consectetur dolorem architecto repudiandae perspiciatis animi amet reiciendis provident dolor eaque pariatur nulla explicabo placeat aut. Repudiandae minima exercitationem dolorum itaque!",

    url: "/",
  },
  {
    title: "The new Way of Creating Blogs",
    image: "https://source.unsplash.com/random?nature",
    author: {
      name: "John Doe",
      avatar: "https://source.unsplash.com/random?gaming",
    },
    createdAt: "21, December 2023",
    category: "Sports",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum accusantium iste quae omnis enim maiores voluptate culpa placeat, unde ratione neque perspiciatis assumenda iusto sapiente veniam corporis, voluptates laudantium. Sapiente earum laudantium similique distinctio, illum unde, voluptatem nulla odit soluta ducimus perferendis iste inventore iusto reiciendis non iure qui ut nam ab expedita, nobis magni numquam delectus. Aut earum asperiores minima? Facere eligendi beatae rerum sapiente debitis! Delectus minima eius officia, numquam veniam error assumenda similique ullam voluptates consectetur dolorem architecto repudiandae perspiciatis animi amet reiciendis provident dolor eaque pariatur nulla explicabo placeat aut. Repudiandae minima exercitationem dolorum itaque!",

    url: "/",
  },
  {
    title: "The new Way of Creating Blogs",
    image: "https://source.unsplash.com/random?nature",
    author: {
      name: "John Doe",
      avatar: "https://source.unsplash.com/random?gaming",
    },
    createdAt: "21, December 2023",
    category: "Sports",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum accusantium iste quae omnis enim maiores voluptate culpa placeat, unde ratione neque perspiciatis assumenda iusto sapiente veniam corporis, voluptates laudantium. Sapiente earum laudantium similique distinctio, illum unde, voluptatem nulla odit soluta ducimus perferendis iste inventore iusto reiciendis non iure qui ut nam ab expedita, nobis magni numquam delectus. Aut earum asperiores minima? Facere eligendi beatae rerum sapiente debitis! Delectus minima eius officia, numquam veniam error assumenda similique ullam voluptates consectetur dolorem architecto repudiandae perspiciatis animi amet reiciendis provident dolor eaque pariatur nulla explicabo placeat aut. Repudiandae minima exercitationem dolorum itaque!",

    url: "/",
  },
]

export const popular_categories: IPopularCategory[] = [
  {
    icon: FiPieChart,
    title: "Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum animi sapiente voluptate voluptates.",
  },
  {
    icon: FiBarChart2,
    title: "Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum animi sapiente voluptate voluptates.",
  },
  {
    icon: FiPieChart,
    title: "Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum animi sapiente voluptate voluptates.",
  },
  {
    icon: FiBarChart2,
    title: "Sports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum animi sapiente voluptate voluptates.",
  },
]
