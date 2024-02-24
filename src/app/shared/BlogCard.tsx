import { Heading, Badge, Text, Link } from "@/ui"
import clsx from "clsx"
import { truncate } from "lodash"
import { FiChevronsRight } from "react-icons/fi"

interface IBlogCard {
  hide?: boolean
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
  reverse?: boolean
}

export const BlogCard = ({
  author,
  category,
  createdAt,
  excerpt,
  image,
  title,
  url,
  reverse = false,
}: IBlogCard) => {
  return (
    <div className={clsx("space-y-4")}>
      <div className={clsx("w-full flex gap-5 justify-start items-center")}>
        <CardImage image={image} reverse={reverse} />
        <CardInfo hide {...{ author, category, createdAt, title }} />
      </div>
      <CardInfo {...{ author, category, createdAt, title }} />
      {excerpt && (
        <Text>
          {truncate(excerpt, {
            length: 200,
          })}
          {url && (
            <Link
              href={url}
              icon={
                <FiChevronsRight className="transition-all duration-500 group-hover:translate-x-1 w-5 h-5" />
              }
              iconRight
              variant="custom"
              className="group underline underline-offset-4 inline-flex gap-1 items-center justify-center font-bold"
            >
              Read More
            </Link>
          )}
        </Text>
      )}
    </div>
  )
}

const CardInfo = ({
  hide = false,
  author,
  category,
  createdAt,
  title,
}: IBlogCard) => {
  return (
    <div className="w-full space-y-8 ">
      {title && hide && (
        <Heading level={3} gloria className="line-clamp-2">
          {title}
        </Heading>
      )}
      <BlogInfo {...{ ...author, hide, createdAt, category }} />
    </div>
  )
}

const BlogInfo = ({
  name,
  avatar,
  createdAt,
  category,
  hide,
}: {
  name?: string
  avatar?: string
  createdAt?: string
  category?: string
  hide?: boolean
}) => {
  return (
    <div
      className={clsx(
        hide ? "hidden md:flex" : "md:hidden flex",
        "gap-4 justify-between items-center",
      )}
    >
      <div className="flex gap-4 items-center justify-start">
        <img
          src={avatar}
          alt={name}
          className="rounded-full w-[40px] h-[40px] object-cover"
        />
        <div className="space-y-1">
          {name && <h4 className="text-base leading-5 font-bold">{name}</h4>}
          {createdAt && (
            <span className="inline-block text-base leading-5 font-light">
              {createdAt}
            </span>
          )}
        </div>
      </div>

      {category && <Badge text={category} />}
    </div>
  )
}

const CardImage = ({
  image,
  title,
}: {
  image?: string
  title?: string
  reverse?: boolean
}) => {
  return (
    <div className="w-[225px] rounded-xl overflow-hidden aspect-square">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  )
}
