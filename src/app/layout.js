import { Inter } from 'next/font/google'
import './globals.css'

// search context provider
import { SearchContextProvider } from './context/search'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Car Rental',
   description: 'Find your ideal ride for any adventure with our diverse range of affordable and dependable car rentals.',
}

export default function RootLayout({ children }) {
   
   return (
      <SearchContextProvider>
         <html lang="en">
            <body className={''}>{children}</body>
         </html>
      </SearchContextProvider>
   )
}
