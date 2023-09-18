import "@/styles/globals.css"
import { NextUIProvider } from "@nextui-org/react"
import { SearchProvider } from "@/components/Navbar/SearchFunction/SearchContext"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false
export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SearchProvider>
  )
}
