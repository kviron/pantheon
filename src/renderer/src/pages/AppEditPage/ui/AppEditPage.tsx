import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const AppEditPage = () => {
  const { t } = useTranslation()

  return <Page data-testid="AppEditPage">{t('Страница редактирования игры')}</Page>
}

export default AppEditPage
