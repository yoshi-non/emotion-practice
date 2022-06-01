import * as styles from '../styles/SideNav.styles'
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import StarIcon from '@mui/icons-material/Star';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Link from "next/link";

export const SideNav = () => {
  return (
    <div css={styles.container}>
      <Link href="/">
        <div css={styles.SideNavLink}><GroupIcon/>グループ</div>
      </Link>
      <Link href="/Private/Private">
        <div css={styles.SideNavLink}><LockIcon/>プライベート</div>
      </Link>
      <Link href="/Bookmark/Bookmark">
        <div css={styles.SideNavLink}><StarIcon/>ブックマーク</div>
      </Link>
      <Link href="/Search/Search">
        <div css={styles.SideNavLink}><PersonSearchIcon/>さがす</div>
      </Link>
      {/* <Link href="/group-add/">
        <div css={styles.SideNavLink}><GroupAddIcon/>グループ作成</div>
      </Link> */}
    </div>
  )
}
