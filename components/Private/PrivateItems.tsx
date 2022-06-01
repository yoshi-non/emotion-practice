import * as styles from '../../styles/itemList.styles'
import { userItems } from '../../pages/data';

export const PrivateItems = () => {
    return (
        <div css={styles.container}>
              {
                userItems.map((userItem) => {
                  return(
                    <div key={userItem.id} css={styles.item}>
                      <img src={userItem.img} alt="userItemImg" css={styles.itemImg} />
                      <section css={styles.itemInformations}>
                        <h2 css={styles.itemInformationName}>{userItem.name}</h2>
                      </section>
                    </div>
                  )
                })
              }
        </div>
      )
    }
