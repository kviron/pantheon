import { theme } from 'antd'
import { ReactNode } from 'react'

const { useToken } = theme

type AppWrapperProps = {
  children: ReactNode
}

export function BgWrapper({ children }: AppWrapperProps) {
  const { token } = useToken()

  return (
    <div style={{ backgroundColor: token.colorBgBase, height: '100vh', color: token.colorText }}>
      {children}
    </div>
  )
}
