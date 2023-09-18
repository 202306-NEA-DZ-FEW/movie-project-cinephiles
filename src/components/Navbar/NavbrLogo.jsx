import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"
export default function Logo() {
  return (
    <Link href="#">
      <Image src={logo} width={200} height={200} alt="Logo-Cinephile" />
    </Link>
  )
}
