import { v4 as uuidv4 } from "uuid"
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiHome,
} from "react-icons/fi"

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
export const sidebar_menus = [
  {
    id: uuidv4(),
    path: "/dashboard",
    name: "Dashboard",
    icon: FiHome,
  },
  {
    id: uuidv4(),
    path: "/dashboard/blogs",
    name: "My Blogs",
    icon: FiHome,
  },
  {
    id: uuidv4(),
    path: "/dashboard/all-blogs",
    name: "All Blogs",
    icon: FiHome,
  },
  {
    id: uuidv4(),
    path: "/dashboard/users",
    name: "Users",
    icon: FiHome,
  },
  {
    id: uuidv4(),
    path: "/dashboard/categories",
    name: "Categories",
    icon: FiHome,
  },
  {
    id: uuidv4(),
    path: "/dashboard/profile",
    name: "Profile",
    icon: FiHome,
  },
  {
    id: uuidv4(),
    path: "/dashboard/settings",
    name: "Settings",
    icon: FiHome,
  },
  {
    id: uuidv4(),
    path: "/dashboard/help",
    name: "Help",
    icon: FiHome,
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
