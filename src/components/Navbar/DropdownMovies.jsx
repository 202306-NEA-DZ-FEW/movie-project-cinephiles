import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { MdKeyboardArrowDown } from "react-icons/md"
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
function DropdownMovies() {
  const options = ["Top Rated", "Popular", "Latest", "Now playing", "Upcoming"]

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex flex-row mt-10 ml-10 hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] active text-base">
          Movies
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
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-[#141F26] bg-opacity-90 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-1">
          <div className="py-1">
            {options.map((option) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={option.id} as={Fragment}>
                {({ active }) => (
                  <Link
                    href={`./categorys/${option
                      .toLowerCase()
                      .replace(/\s+/g, "_")}`}
                    className={classNames(
                      active
                        ? "hover:border-b border-b-[#1E4445] hover:text-[#72fbd7] text-gray-300"
                        : "text-gray-600",
                      "block px-4 py-2 text-sm",
                    )}
                  >
                    {" "}
                    {option}
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

export default DropdownMovies
