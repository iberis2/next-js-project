import SizeReviewList from '@/components/SizeReviewList'
import { getData, getReviews } from '@/lib/apis'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Product() {
  const [product, setProduct] = useState()
  const [sizeReviews, setSizeReviews] = useState([])
  const router = useRouter()
  const { id } = router.query

  const getProduct = async targetId => {
    const res = await getData(targetId)
    setProduct(res)
  }

  const getSizeReviews = async targetId => {
    const res = await getReviews(targetId)
    setSizeReviews(res)
  }

  useEffect(() => {
    if (!id) return
    getProduct(id)
    getSizeReviews(id)
  }, [id])

  if (!product) return null

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imgUrl} alt={product.name} />
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  )
}
