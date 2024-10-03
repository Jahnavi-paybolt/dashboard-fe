import { Poppins, Roboto_Mono } from "next/font/google";

export const fontPoppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    variable: "--font-poppins"
})

export const fontRoboto = Roboto_Mono({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700"],
    variable: "--font-roboto"
})