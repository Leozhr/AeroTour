import { ReactNode } from "react"


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Header layout</h1>
      {children}
    </div>
  )
}

export default Layout