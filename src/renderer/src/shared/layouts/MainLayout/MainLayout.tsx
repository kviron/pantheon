import { memo, ReactElement } from 'react'

interface MainLayoutProps {
  header: ReactElement
  content: ReactElement
  sidebar: ReactElement
  toolbar?: ReactElement
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { content, toolbar, header, sidebar } = props

  return (
    <div>
      <div>{content}</div>
      <div>{sidebar}</div>
      <div>
        <div>{header}</div>
        <div>{toolbar}</div>
      </div>
    </div>
  )
})
