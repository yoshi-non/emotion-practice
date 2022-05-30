import * as styles from '../styles/SideNav.styles'
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import StarIcon from '@mui/icons-material/Star';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export const SideNav = () => {
  return (
    <div css={styles.container}>
        <div css={styles.SideNavLink}><GroupIcon/>グループ</div>
        <div css={styles.SideNavLink}><LockIcon/>プライベート</div>
        <div css={styles.SideNavLink}><StarIcon/>ブックマーク</div>
        <div css={styles.SideNavLink}><PersonSearchIcon/>さがす</div>
        <div css={styles.SideNavLink}><GroupAddIcon/>グループ作成</div>
    </div>
  )
}
