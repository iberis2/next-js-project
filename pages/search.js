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
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <p>{q} 검색 결과 </p>
      <ProductList products={products} />
    </div>
  )
}
