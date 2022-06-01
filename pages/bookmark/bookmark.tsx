import type { NextPage } from 'next'
import { BookmarkItems } from '../../components/Bookmark/BookmarkItems'
import BookmarkNav from '../../components/Bookmark/BookmarkNav'
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
          <BookmarkNav/>
          <BookmarkItems/>
        </div>
      </div>
    </div>
  )
}

export default Bookmark
