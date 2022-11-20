import NavBar from '../components/ui/navbar/navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <NavBar />
        </header>
        <div className={"container"}>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
