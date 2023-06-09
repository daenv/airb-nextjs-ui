import { Nunito } from 'next/font/google';
import './globals.css';
import ClientOnly from './components/ClientOnly';
import Navbar from './components/Navbar/index';
import RegisterModal from './components/Modal/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

import getCurrentUser from './actions/getCurrentUser';
import LoginModal from './components/Modal/LoginModal';
import RentModal from './components/Modal/RentModal';

export const metadata = {
   title: 'AirB',
   description: 'Generated by An',
};
const font = Nunito({
   subsets: ['latin'],
});
export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const currentUser = await getCurrentUser();
   return (
      <html lang="en">
         <body className={font.className}>
            <ClientOnly>
               <ToasterProvider />
               <LoginModal />
               <RentModal />
               <RegisterModal />
               <Navbar currentUser={currentUser} />
            </ClientOnly>
            {children}
         </body>
      </html>
   );
}
