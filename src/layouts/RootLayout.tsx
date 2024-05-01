import Header from "../modules/ui/Header"

interface Props{
    children?: React.ReactNode
}


export default function RootLayout({ children }: Props) {
  
  return (<>
    <Header />
    {children}

  </>)
}
