import * as styles from '../../styles/itemList.styles'
import { bookmarkItems } from '../../pages/data';

export const BookmarkItems = () => {
    return (
        <div css={styles.container}>
              {
                bookmarkItems.map((bookmarkItem) => {
                  return(
                    <div key={bookmarkItem.id} css={styles.item}>
                      <img src={bookmarkItem.img} alt="bookmarkItemImg" css={styles.itemImg} />
                      <section css={styles.itemInformations}>
                        <h2 css={styles.itemInformationName}>{bookmarkItem.name}</h2>
                      </section>
                    </div>
                  )
                })
              }
        </div>
      )
    }
