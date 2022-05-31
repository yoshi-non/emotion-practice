import * as styles from '../styles/Group.styles'
import GroupsIcon from '@mui/icons-material/Groups';

export const Group = () => {
    return (
      <div css={styles.container}>
          <div css={styles.groupItem}>
            <img src="http://kai-you.net/images/a/2021/04/267752288aa2d5db2a5ffe6720dfbec6.jpg" alt="groupItemIconImg" css={styles.groupItemIconImg} />
            <section css={styles.groupItemInformations}>
              <h2 css={styles.groupItemInformationName}>グループ名</h2>
              <p css={styles.groupItemInformationStatus}><GroupsIcon/>人数</p>
            </section>
          </div>
          <div css={styles.groupItem}>
            <img src="https://64.media.tumblr.com/f9759b2dea9ec75c1cf1de3e1e00374c/tumblr_pf255uvaPX1sha35ho1_1280.jpg" alt="groupItemIconImg" css={styles.groupItemIconImg} />
            <section css={styles.groupItemInformations}>
              <h2 css={styles.groupItemInformationName}>グループ名</h2>
              <p css={styles.groupItemInformationStatus}><GroupsIcon/>人数</p>
            </section>
          </div>
          <div css={styles.groupItem}>
            <img src="https://64.media.tumblr.com/1e235997ae27140b549bbc119d661b06/tumblr_oc60av7sXX1sha35ho1_1280.png" alt="groupItemIconImg" css={styles.groupItemIconImg} />
            <section css={styles.groupItemInformations}>
              <h2 css={styles.groupItemInformationName}>グループ名</h2>
              <p css={styles.groupItemInformationStatus}><GroupsIcon/>人数</p>
            </section>
          </div>
          <div css={styles.groupItem}>
            <img src="https://64.media.tumblr.com/b6b9563da14e8f672f6bffc844bbc263/tumblr_p5n1f1YONt1sha35ho1_1280.png" alt="groupItemIconImg" css={styles.groupItemIconImg} />
            <section css={styles.groupItemInformations}>
              <h2 css={styles.groupItemInformationName}>グループ名</h2>
              <p css={styles.groupItemInformationStatus}><GroupsIcon/>人数</p>
            </section>
          </div>
          <div css={styles.groupItem}>1</div>
          <div css={styles.groupItem}>2</div>
          <div css={styles.groupItem}>3</div>
          <div css={styles.groupItem}>4</div>
          <div css={styles.groupItem}>5</div>
          <div css={styles.groupItem}>6</div>
      </div>
    )
  }
  
