import Footer from "@/components/Footer/Footer"
import { Html, Head, Main, NextScript } from "next/document"
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer style={{ marginBottom: "0", position: "fixed" }} />
    </Html>
  )
}
