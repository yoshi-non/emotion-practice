import type { NextPage } from 'next'
import Link from 'next/link'
import { Groups } from '../components/Groups/Groups'
import GroupsNav from '../components/Groups/GroupsNav'
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
          <GroupsNav/>
          <Link href="/groups/groupID/list">
            <Groups />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
