import type { NextPage } from 'next'
import { TopNav } from '../components/TopNav'
import * as styles from '../styles/index.styles'

const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      <TopNav />
    </div>
  )
}

export default Home
