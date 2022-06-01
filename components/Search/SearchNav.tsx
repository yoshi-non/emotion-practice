import type { NextPage } from 'next'
import * as styles from '../../styles/SearchNav.styles'
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';

const SearchNav: NextPage = () => {
  return (
    <div css={styles.container}>
        <div css={styles.navTitle}>グループ検索</div>
        <div css={styles.button}>
            <form action="" css={styles.searchForm}>
                <input type="search" name="" placeholder="検索" css={styles.searchBox} />
                <label css={styles.searchIcon}><SearchIcon/></label>
            </form>
            <div css={styles.navSort}><SortIcon/>並び替え</div>
        </div>
    </div>
  )
}

export default SearchNav
