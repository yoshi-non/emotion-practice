import * as styles from '../../styles/Groups.styles'
import GroupsIcon from '@mui/icons-material/Groups';
import { groupItems } from '../../pages/data';

export const Groups = () => {
  let numberWithComma = new Intl.NumberFormat();
    return (
      <div css={styles.container}>
            {
              groupItems.map((groupItem) => {
                return(
                  <div key={groupItem.id} css={styles.groupItem}>
                    <img src={groupItem.img} alt="groupItemIconImg" css={styles.groupItemIconImg} />
                    <section css={styles.groupItemInformations}>
                      <h2 css={styles.groupItemInformationName}>{groupItem.title}</h2>
                      <p css={styles.groupItemInformationStatus}><GroupsIcon/>{numberWithComma.format(groupItem.number)}</p>
                    </section>   
                  </div>
                )
              })
            }
      </div>
    )
  }
