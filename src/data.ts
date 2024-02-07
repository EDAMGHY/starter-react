import { v4 as uuidv4 } from "uuid"
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi"

export const menus = [
  {
    id: uuidv4(),
    path: "/",
    name: "Home",
  },
  {
    id: uuidv4(),
    path: "/about",
    name: "About",
  },
  {
    id: uuidv4(),
    path: "/contact",
    name: "Contact",
  },
  {
    id: uuidv4(),
    path: "/dashboard",
    name: "Dashboard",
  },
]

export const socials = [
  {
    id: uuidv4(),
    path: "https://facebook.com",
    icon: FiFacebook,
  },
  {
    id: uuidv4(),
    path: "https://linkedin.com",
    icon: FiLinkedin,
  },
  {
    id: uuidv4(),
    path: "https://instagram.com",
    icon: FiInstagram,
  },
  {
    id: uuidv4(),
    path: "https://twitter.com",
    icon: FiTwitter,
  },
]
