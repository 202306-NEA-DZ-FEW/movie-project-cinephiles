import "@/styles/globals.css"
import { SearchProvider } from "@/components/Navbar/Search/SearchContext"

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  )
}
