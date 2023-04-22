import '@/styles/globals.css'
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"

const dark = createTheme({
    type: 'dark',
    theme: {
        colors: {},
        space: {},
        fonts: {}
    }
})

const light = createTheme({
    type: 'light',
    theme: {
        colors: {},
        space: {},
        fonts: {}
    }
})

export default function App({ Component, pageProps }) {
    return (
        <NextUIProvider theme={light}>
            <Component {...pageProps} />
        </NextUIProvider>
    )
}
