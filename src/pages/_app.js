import '@/styles/globals.css'
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"
import NavigationBar from "@/pages/NavigationBar";
import {useEffect} from "react";

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
                <NavigationBar />
                <Component {...pageProps} />
            </NextUIProvider>
    )
}

