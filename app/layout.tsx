import { alegreya } from './ui/fonts';
import './ui/global.css'

// todo lo que se ponga aca se va a ver en todas las paginas

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${alegreya.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          <ul className='flex flex-row gap-10'>
            <li>Ola</li>
            <li>Mina</li>
            <li>XD</li>
            <li>XDXD</li>
            <li>xd</li>
          </ul>
        </footer>
        </body>
    </html>
  );
}
