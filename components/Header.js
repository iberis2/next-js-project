import Link from 'next/link'
import Container from './Container'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link className={styles.logo} href='/'>
          NexJS Shopping Mall
        </Link>
        <Link className={styles.setting} href='/setting'>
          설정
        </Link>
      </Container>
    </header>
  )
}
