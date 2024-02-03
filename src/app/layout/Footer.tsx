import { menus } from "@/data"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-4">
      <div className="container space-y-5">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold">Logo</h1>
          </Link>

          <ul className="flex gap-5 flex-wrap">
            {menus.map(menu => (
              <li key={menu?.id}>
                <Link
                  className={`relative inline-flex text-base  hover:underline`}
                  to={menu.path}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="text-gray-300" />
        <p className="text-center font-gloria text-base uppercase">
          All Right reserved &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
