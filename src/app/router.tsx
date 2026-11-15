import { createBrowserRouter } from 'react-router'
import { Layout } from '../components/layout/Layout'
import { AboutPage } from '../pages/AboutPage'
import { DiscoverPage } from '../pages/DiscoverPage'
import { FavoritesPage } from '../pages/FavoritesPage'
import { Home } from '../pages/Home'
import { MixPage } from '../pages/MixPage'
import { MomentCategoryPage } from '../pages/moments/MomentCategoryPage'
import { MomentsPage } from '../pages/moments/MomentsPage'
import { NotFound } from '../pages/NotFound'
import { PlayPage } from '../pages/play/PlayPage'
import { TwoTruthsGame } from '../pages/play/TwoTruthsGame'
import { WhoKnowsGame } from '../pages/play/WhoKnowsGame'
import { WouldYouRatherGame } from '../pages/play/WouldYouRatherGame'
import { SurprisePage } from '../pages/SurprisePage'
import { TalkPage } from '../pages/TalkPage'
import { TopicPage } from '../pages/TopicPage'

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'surprise', element: <SurprisePage /> },
        { path: 'talk', element: <TalkPage /> },
        { path: 'talk/mix', element: <MixPage /> },
        { path: 'talk/:topicId', element: <TopicPage section="talk" /> },
        { path: 'discover', element: <DiscoverPage /> },
        { path: 'discover/:topicId', element: <TopicPage section="discover" /> },
        { path: 'play', element: <PlayPage /> },
        { path: 'play/would-you-rather', element: <WouldYouRatherGame /> },
        { path: 'play/who-knows', element: <WhoKnowsGame /> },
        { path: 'play/two-truths', element: <TwoTruthsGame /> },
        { path: 'moments', element: <MomentsPage /> },
        { path: 'moments/:categoryId', element: <MomentCategoryPage /> },
        { path: 'favorites', element: <FavoritesPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
