import type { NextPage } from 'next'
import * as styles from '../../styles/GroupsNav.styles'
import SortIcon from '@mui/icons-material/Sort';

const GroupsNav: NextPage = () => {
  return (
    <div css={styles.container}>
        <div css={styles.navTitle}>グループ一覧</div>
        <div css={styles.button}>
          <div css={styles.navSort}><SortIcon/>並び替え</div>
          <div css={styles.navItemAdd}>グループ追加</div>
          <div css={styles.navEdit}>編集</div>
        </div>
    </div>
  )
}

export default GroupsNav
