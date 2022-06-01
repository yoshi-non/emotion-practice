import type { NextPage } from 'next'
import * as styles from '../../styles/PrivateNav.styles'
import SortIcon from '@mui/icons-material/Sort';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const PrivateNav: NextPage = () => {
  return (
    <div css={styles.container}>
        <div css={styles.navTitle}>登録済アイテム</div>
        <div css={styles.button}>
          <div css={styles.navSort}><SortIcon/>並び替え</div>
          <div css={styles.navSort}>全グループ<ArrowDropDownIcon/></div>
          <div css={styles.navItemAdd}>アイテム追加</div>
          <div css={styles.navEdit}>編集</div>
        </div>
    </div>
  )
}

export default PrivateNav
