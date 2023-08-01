import { useState, useEffect } from 'react'
import ProductList from '@/components/ProductList'
import SearchForm from '@/components/SearchForm'
import { getDatas } from '@/lib/apis'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Container from '@/components/Container'

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
      <Header />
      <Container>
        <SearchForm />
        <ProductList className={styles.products} products={products} />
      </Container>
    </>
  )
}
