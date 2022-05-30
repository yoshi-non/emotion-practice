import type { NextPage } from 'next'
import { MainContent } from '../components/MainContent'
import { SideNav } from '../components/SideNav'
import { TopNav } from '../components/TopNav'
import * as styles from '../styles/index.styles'

const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      <TopNav />
      <div css={styles.main}>
        <SideNav />
        <MainContent />
      </div>
    </div>
  )
}

export default Home
