import { Link } from 'react-router-dom'
import { Page } from '@/widgets/Page'
import { Button } from '@/shared/ui/Button'
import { routeConfig } from '@/app/providers/router/config/routeConfig'

const MainPage = () => {
  return (
    <Page data-testid="MainPage">
      Главная страница
      <Link to={routeConfig.apps.path ?? ''}>
        <Button>Кнопка</Button>
      </Link>
    </Page>
  )
}

export default MainPage
