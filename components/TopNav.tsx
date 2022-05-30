import * as styles from '../styles/TopNav.styles'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const TopNav = () => {
  return (
    <div css={styles.container}>
      <div css={styles.logo}>Logo</div>
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
