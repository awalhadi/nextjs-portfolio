import "@/styles/application.scss";
import "@/styles/index.scss";
import { NextUIProvider } from "@nextui-org/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
