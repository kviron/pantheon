import { ConfigProvider as AntdConfigProvider } from 'antd'
import { themeDark } from '../config/themeDark'
import { themeLight } from '../config/themeLight'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { Theme } from '@/shared/const/theme'
import { useJsonSettings } from '../../../../entities/User'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'

type ConfigProviderProps = {
  initialTheme?: Theme
  children: ReactNode
}

export const ThemeProvider = ({ children, initialTheme }: ConfigProviderProps) => {
  const { theme: defaultTheme } = useJsonSettings()
  const [isThemeInited, setThemeInited] = useState(false)

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT)

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme)
      setThemeInited(true)
    }
  }, [defaultTheme, isThemeInited])

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
        {children}
      </AntdConfigProvider>
    </ThemeContext.Provider>
  )
}
