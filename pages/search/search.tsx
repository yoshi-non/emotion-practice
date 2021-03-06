import type { NextPage } from 'next'
import SearchNav from '../../components/Search/SearchNav'
import { SideNav } from '../../components/SideNav'
import { TopNav } from '../../components/TopNav'
import * as styles from '../../styles/index.styles'

const Search: NextPage = () => {
  return (
    <div css={styles.container}>
      <TopNav />
      <div css={styles.main}>
        <SideNav />
        <div css={styles.mainContents}>
          <SearchNav/>
        </div>
      </div>
    </div>
  )
}

export default Search
