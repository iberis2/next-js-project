import ProductList from '@/components/ProductList'
import SearchForm from '@/components/SearchForm'
import { getDatas } from '@/lib/apis'
import styles from '@/styles/Home.module.css'

export const getStaticProps = async () => {
  const products = await getDatas()

  return { props: { products } }
}

export default function Home({ products }) {
  return (
    <>
      <SearchForm />
      <ProductList className={styles.products} products={products} />
    </>
  )
}
