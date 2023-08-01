import SearchForm from '@/components/SearchForm'
import ProductList from '@/components/ProductList'
import { useState, useEffect } from 'react'
import { getDatas } from '@/lib/apis'

export default function Home() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await getDatas()
    setProducts(res)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1>Next JS shopping mall</h1>
      <SearchForm />
      <ProductList products={products} />
    </>
  )
}
