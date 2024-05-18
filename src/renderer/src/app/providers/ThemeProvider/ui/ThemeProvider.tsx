import { ConfigProvider as AntdConfigProvider } from 'antd'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { themeDark } from '../config/themeDark'
import { themeLight } from '../config/themeLight'
import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { BgWrapper } from './BgWrapper'

type ConfigProviderProps = {
  initialTheme?: Theme
  children: ReactNode
}

export function ThemeProvider({ children, initialTheme }: ConfigProviderProps) {
  const [isThemeInited, setThemeInited] = useState(false)

  const [theme, setTheme] = useState<Theme>(initialTheme || Theme.DARK)

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(Theme.DARK)
      setThemeInited(true)
    }
  }, [isThemeInited])

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      <AntdConfigProvider theme={theme === Theme.LIGHT ? themeLight : themeDark}>
        <BgWrapper>{children}</BgWrapper>
      </AntdConfigProvider>
    </ThemeContext.Provider>
  )
}
