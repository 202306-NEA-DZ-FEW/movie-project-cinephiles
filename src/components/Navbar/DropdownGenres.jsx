import { genres } from "./../../utils/dbGenres"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { MdKeyboardArrowDown } from "react-icons/md"
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex flex-row mt-10 ml-10 hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base">
          Genres
          <MdKeyboardArrowDown size={20} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-[#141F26] bg-opacity-60 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {genres.map((item) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={item.id} as={Fragment}>
                {({ active }) => (
                  <Link
                    href="#"
                    className={classNames(
                      active
                        ? "hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] text-gray-300"
                        : "text-gray-600",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    {" "}
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
