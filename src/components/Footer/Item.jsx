import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Item({ title, githubLink, linkedinLink }) {
  return (
    <div className="bg-gray-800 shadow-md shadow-teal-500/50 rounded-lg p-4 text-center">
      <h2 className="text-l font-semibold">{title}</h2>
      <div className=" mt-2 text-center">
        <a href={githubLink} target="_blank">
          <span
            className="p-2 cursor-pointer inline-flex items-center
    bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
    duration-300 rounded-full h-8 w-8 flex items-center justify-center"
          >
            {/* <FontAwesomeIcon icon={faGithub} /> */}
          </span>
        </a>
        <a href={linkedinLink} target="_blank">
          <span
            className="p-2 cursor-pointer inline-flex items-center
    bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
    duration-300 rounded-full h-8 w-8 flex items-center justify-center"
          >
            {/* <FontAwesomeIcon icon={faLinkedin} /> */}
          </span>
        </a>
      </div>
    </div>
  )
}
