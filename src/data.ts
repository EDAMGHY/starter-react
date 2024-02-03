import { v4 as uuidv4 } from "uuid"

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
]
