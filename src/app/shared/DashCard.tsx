import { Heading, Text, Link, Badge } from "@/ui"
import clsx from "clsx"
import { truncate } from "lodash"
import { FiChevronsRight } from "react-icons/fi"

interface IDashCard {
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
  rounded?: boolean
}

export const DashCard = ({
  author,
  category,
  createdAt,
  excerpt,
  image,
  title,
  url,
  reverse = false,
  rounded = false,
}: IDashCard) => {
  return (
    <div
      className={clsx(
        "w-full flex gap-5 justify-start items-start",
        reverse ? "lg:flex-row-reverse flex-col" : "flex-col lg:flex-row",
      )}
    >
      <CardImage rounded={rounded} image={image} reverse={reverse} />
      <CardInfo {...{ author, category, createdAt, excerpt, title, url }} />
    </div>
  )
}

const CardInfo = ({
  excerpt,
  category,
  createdAt,
  title,
  url,
  author,
}: IDashCard) => {
  return (
    <div className="w-full space-y-2 ">
      <div className="flex gap-4 items-center justify-between">
        {author && <AuthorInfo {...author} />}
        {createdAt && (
          <Text className="text-sm underline font-thin">{createdAt}</Text>
        )}
        {category && <Badge inverse text={category} />}
      </div>
      {title && (
        <Heading level={5} gloria>
          {title}
        </Heading>
      )}

      {excerpt && (
        <Text className="text-sm">
          {truncate(excerpt, {
            length: 100,
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

const CardImage = ({
  image,
  title,
  rounded,
}: {
  image?: string
  title?: string
  reverse?: boolean
  rounded?: boolean
}) => {
  return (
    <div
      className={clsx(
        rounded ? "rounded-full" : "rounded-xl",
        "shrink-0 size-[100px] overflow-hidden",
      )}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  )
}

const AuthorInfo = ({ name, avatar }: { name?: string; avatar?: string }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="rounded-full size-[30px] object-cover"
        />
      )}
      {name && <h4 className="text-base leading-5 font-bold">{name}</h4>}
    </div>
  )
}
