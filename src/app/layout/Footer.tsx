import { socials } from "@/data"
import { Link } from "react-router-dom"
import { Logo } from "@/shared"
import clsx from "clsx"

export const Footer = ({ dashboard = false }) => {
  return (
    <footer
      className={clsx("bg-primary text-secondary py-4", dashboard && "rounded")}
    >
      <div className="container space-y-5">
        <div className="md:flex-row flex-col gap-6 flex justify-between items-center">
          <Link to={"/"}>
            <Logo />
          </Link>

          <ul className="flex gap-3 md:gap-6 justify-center items-center flex-wrap">
            {socials.map(social => (
              <li key={social?.id}>
                <Link
                  target="_blank"
                  className={`relative rounded transition-all duration-300 hover:bg-secondary hover:text-primary p-2 inline-flex text-base  hover:underline`}
                  to={social.path}
                >
                  <social.icon className="size-4 md:size-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="border-secondary" />
        <p className="text-center font-gloria text-sm md:text-base">
          Copyright © {new Date().getFullYear()} THE BLOGGER, All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}
