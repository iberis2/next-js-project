import ButtonLink from '@/components/ButtonLink'
import styles from '@/styles/NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <div className={styles.notFound}>
        <div className={styles.content}>
          페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
          <br />
          입력하신 주소가 정확한지 다시 한 번 확인해주시기 바랍니다.
        </div>
        <ButtonLink className={styles.button} href='/'>
          홈으로 이동
        </ButtonLink>
      </div>
    </>
  )
}
