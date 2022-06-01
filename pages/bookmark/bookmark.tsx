import type { NextPage } from 'next'
import { SideNav } from '../../components/SideNav'
import { TopNav } from '../../components/TopNav'
import * as styles from '../../styles/index.styles'

const Bookmark: NextPage = () => {
  return (
    <div css={styles.container}>
      <TopNav />
      <div css={styles.main}>
        <SideNav />
        <div css={styles.mainContents}>
          vhmgurthgirmhgrihy
        </div>
      </div>
    </div>
  )
}

export default Bookmark
