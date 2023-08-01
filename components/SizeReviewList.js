import { formatDate } from '@/util/formatDate'
import styles from './SizeReviewList.module.css'

const labels = {
  sex: {
    male: '남자',
    female: '여자',
  },
  fit: {
    small: '작음',
    good: '적당함',
    big: '큼',
  },
}

export default function SizeReviewList({ sizeReviews }) {
  return (
    <ul className={styles.SizeReviewList}>
      {sizeReviews.map(sizeReview => (
        <li key={sizeReview.id} className={styles.sizeReview}>
          <div>
            <div className={styles.date}>{formatDate(new Date(sizeReview.createdAt))}</div>
            <div className={styles.profile}>
              ({labels.sex[sizeReview.sex]} {sizeReview.height}cm 기준) {sizeReview.size}
            </div>
          </div>
          <div className={styles.fit}>{labels.fit[sizeReview.fit]}</div>
        </li>
      ))}
    </ul>
  )
}
