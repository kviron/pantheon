import { memo } from 'react'
import { Button as AntdButton, ButtonProps } from 'antd'

export const Button = memo((props: ButtonProps) => {
  return <AntdButton {...props} />
})
