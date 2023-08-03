import ProductList from '@/components/ProductList'
import SearchForm from '@/components/SearchForm'
import { getDatas } from '@/lib/apis'
import Head from 'next/head'
import styles from '@/styles/Search.module.css'

export const getServerSideProps = async context => {
  const { q } = context.query
  const products = await getDatas(q)

  return { props: { q, products } }
}

export default function Search({ q, products }) {
  return (
    <div>
      <Head>
        <title>{q} 검색 결과</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <ProductList className={styles.productList} products={products} />
    </div>
  )
}
