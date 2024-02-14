import { Heading, Badge, Text, Link } from "@/ui"
import clsx from "clsx"
import { truncate } from "lodash"
import { FiChevronsRight } from "react-icons/fi"

interface IMainCard {
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

export const MainCard = ({
  author,
  category,
  createdAt,
  excerpt,
  image,
  title,
  url,
  reverse = false,
}: IMainCard) => {
  return (
    <div
      className={clsx(
        "w-full flex gap-5 xl:gap-10 justify-between items-center",
        reverse ? "lg:flex-row-reverse flex-col" : "flex-col lg:flex-row",
      )}
    >
      <CardImage image={image} reverse={reverse} />
      <CardInfo {...{ author, category, createdAt, excerpt, title, url }} />
    </div>
  )
}

const CardInfo = ({
  author,
  category,
  createdAt,
  excerpt,
  title,
  url,
}: IMainCard) => {
  return (
    <div className="w-full lg:w-1/2 space-y-8 ">
      {title && (
        <Heading level={2} gloria>
          {title}
        </Heading>
      )}
      <BlogInfo {...{ ...author, createdAt, category }} />

      {excerpt && (
        <Text>
          {truncate(excerpt, {
            length: 400,
          })}
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
        </Text>
      )}
    </div>
  )
}

const BlogInfo = ({
  name,
  avatar,
  createdAt,
  category,
}: {
  name?: string
  avatar?: string
  createdAt?: string
  category?: string
}) => {
  return (
    <div className="flex gap-4 justify-between items-center">
      <div className="flex gap-4 items-center justify-start">
        <img
          src={avatar}
          alt={name}
          className="rounded-full w-[55px] h-[55px] object-cover"
        />
        <div className="space-y-2">
          {name && <h4 className="text-lg leading-6 font-bold">{name}</h4>}
          {createdAt && (
            <span className="inline-block text-lg leading-6 font-light">
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
    <div className="w-full lg:w-1/2 rounded-xl overflow-hidden aspect-square min-h-[250px] max-h-[400px]">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  )
}
