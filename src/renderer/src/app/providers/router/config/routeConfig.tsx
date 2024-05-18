import { MainPage } from '@/pages/MainPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { AppPage } from '@/pages/AppPage'
import { AppDetailPage } from '@/pages/AppDetailPage'
import { AppEditPage } from '@/pages/AppEditPage'
import { AppCreatePage } from '@/pages/AppCreatePage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { LibraryPage } from '@/pages/LibraryPage'
import { AppRoutesProps } from '@/shared/types/router'
import {
  AppRoutes,
  getRouteForbidden,
  getRouteMain,
  getRouteProfile,
  getRouteAppCreate,
  getRouteAppDetails,
  getRouteAppEdit,
  getRouteApps,
  getRouteAuth,
  getRouteLibrary,
  getRouteRegister,
  getRouteSettings
} from '@/shared/const/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />
  },
  [AppRoutes.APPS]: {
    path: getRouteApps(),
    element: <AppPage />
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.APP_DETAILS]: {
    path: getRouteAppDetails(':id'),
    element: <AppDetailPage />,
    authOnly: true
  },
  [AppRoutes.APP_CREATE]: {
    path: getRouteAppCreate(),
    element: <AppCreatePage />,
    authOnly: true
  },
  [AppRoutes.APP_EDIT]: {
    path: getRouteAppEdit(':id'),
    element: <AppEditPage />,
    authOnly: true
  },
  [AppRoutes.AUTH]: {
    path: getRouteAuth(),
    element: <NotFoundPage />
  },
  [AppRoutes.REGISTRATION]: {
    path: getRouteRegister(),
    element: <NotFoundPage />
  },
  [AppRoutes.SETTINGS]: {
    path: getRouteSettings(),
    element: <NotFoundPage />
  },
  [AppRoutes.LIBRARY]: {
    path: getRouteLibrary(),
    element: <LibraryPage />
  },
  // [AppRoutes.ADMIN_PANEL]: {
  //   path: getRouteAdmin(),
  //   element: <AdminPanelPage />,
  //   authOnly: true,
  //   roles: [UserRole.MANAGER, UserRole.ADMIN]
  // },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />
  }
}
