import { MainCard, Section } from "@/shared"

export const LatestBlogs = () => {
  return (
    <Section className="space-y-6" title="Popular Categories">
      <div className="grid grid-cols-1 gap-8">
        {latest_blogs.map((blog, index) => (
          <LatestBlogCard key={index} reverse={index % 2 !== 0} {...blog} />
        ))}
      </div>
    </Section>
  )
}
const LatestBlogCard = ({ ...rest }) => {
  return <MainCard {...rest} />
}

interface ILatestBlog {
  title?: string
  image?: string
  author?: {
    name?: string
    avatar?: string
  }
  createdAt?: string
  category?: string
  excerpt?: string

  url?: string
}

const latest_blogs: ILatestBlog[] = [
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
