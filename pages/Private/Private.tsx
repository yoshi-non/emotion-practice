import type { NextPage } from 'next'
import PrivateNav from '../../components/Private/PrivateNav'
import { SideNav } from '../../components/SideNav'
import { TopNav } from '../../components/TopNav'
import * as styles from '../../styles/index.styles'

const Private: NextPage = () => {
  return (
    <div css={styles.container}>
      <TopNav />
      <div css={styles.main}>
        <SideNav />
        <div css={styles.mainContents}>
          <PrivateNav/>
        </div>
      </div>
    </div>
  )
}

export default Private
