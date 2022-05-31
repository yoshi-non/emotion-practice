import * as styles from '../styles/TopNav.styles'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';

export const TopNav = () => {
  return (
    <div css={styles.container}>
      <Link href="/" >
        <div css={styles.logo}>Logo</div>
      </Link>
      <div css={styles.settingBox}>
        <div css={styles.settingMine}>
          <img src="http://kai-you.net/images/a/2021/04/267752288aa2d5db2a5ffe6720dfbec6.jpg" alt="iconImg" css={styles.navIconImg} />
          <ArrowDropDownIcon />
        </div>
        <NotificationsIcon css={styles.bell} />
      </div>
    </div>
  )
}
