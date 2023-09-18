import ItemsContainer from "@/components/Footer/ItemsContainer"
// import logo from "../../../public/logo.png"
// import Image from 'next/image';

export default function Footer() {
  const current_year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-white h-50 fixed bottom-0 w-full">
      {/* <div>
        <Image 
        src={logo}
        width={200}
        hight={10}
        alt='logo'
        />
      </div> */}
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10
        text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>Copyright © {current_year}. All Rights Reserved.</span>
        <span>Terms of use | Privacy Policy</span>
      </div>
    </footer>
  )
}
