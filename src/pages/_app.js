import "@/styles/globals.css"
import { SearchProvider } from "@/components/Navbar/SearchFunction/SearchContext"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  )
}
