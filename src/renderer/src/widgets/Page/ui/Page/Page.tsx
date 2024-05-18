import { memo, MutableRefObject, ReactNode, useRef } from 'react'
import { TestProps } from '@/shared/types/tests'

interface PageProps extends TestProps {
  children: ReactNode
  onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE_ID'

export const Page = memo((props: PageProps) => {
  const { children } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  return (
    <main ref={wrapperRef} id={PAGE_ID} data-testid={props['data-testid'] ?? 'Page'}>
      {children}
    </main>
  )
})
