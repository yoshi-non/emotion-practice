import type { NextPage } from 'next'
import Link from 'next/link'
import { Group } from '../components/Group'
import { SideNav } from '../components/SideNav'
import { TopNav } from '../components/TopNav'
import * as styles from '../styles/index.styles'

 const Home: NextPage = () => {
  return (
    <div css={styles.container}>
      <TopNav />
      <div css={styles.main}>
        <SideNav />
        <div css={styles.mainContents}>
          <Link href="/group/groupID/list">
            <Group />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
