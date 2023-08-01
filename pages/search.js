import ProductList from '@/components/ProductList'
import SearchForm from '@/components/SearchForm'
import { getDatas } from '@/lib/apis'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Search() {
  const [products, setProducts] = useState([])
  const router = useRouter()
  const { q } = router.query

  const getProducts = async query => {
    const res = await getDatas(query)
    setProducts(res)
  }

  useEffect(() => {
    getProducts(q)
  }, [])

  return (
    <div>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <ProductList className={styles.productList} products={products} />
    </div>
  )
}
