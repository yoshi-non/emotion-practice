import type { NextPage } from 'next'
import * as styles from '../../styles/BookmarkNav.styles'
import SortIcon from '@mui/icons-material/Sort';

const BookmarkNav: NextPage = () => {
  return (
    <div css={styles.container}>
        <div css={styles.navTitle}>ブックマーク一覧</div>
        <div css={styles.button}>
          <div css={styles.navSort}><SortIcon/>並び替え</div>
          <div css={styles.navEdit}>編集</div>
        </div>
    </div>
  )
}

export default BookmarkNav
