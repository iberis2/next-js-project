import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getData, getReviews } from '@/lib/apis'
import Header from '@/components/Header'
import Container from '@/components/Container'
import SizeReviewList from '@/components/SizeReviewList'
import StarRating from '@/components/StarRating'
import styles from '@/styles/Product.module.css'

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
    <>
      <Header />
      <Container>
        <h1 className={styles.name}>
          {product.name}
          <span className={styles.englishName}>{product.englishName}</span>
        </h1>
        <div className={styles.content}>
          <div>
            <img className={styles.image} src={product.imgUrl} alt={product.name} />
          </div>
          <div>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>제품정보</h2>
              <div className={styles.info}>
                <table className={styles.infoTable}>
                  <tbody>
                    <tr>
                      <th>브랜드/품번</th>
                      <td>
                        {product.brand} / {product.productCode}
                      </td>
                    </tr>
                    <tr>
                      <th>제품명</th>
                      <td>{product.name}</td>
                    </tr>
                    <tr>
                      <th>가격</th>
                      <td>
                        <span className={styles.salePrice}>{product.price.toLocaleString()}원</span>
                        {product.salePrice.toLocaleString()}원
                      </td>
                    </tr>
                    <tr>
                      <th>포인트 적립</th>
                      <td>{product.point.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <th>구매 후기</th>
                      <td className={styles.starRating}>
                        <StarRating value={product.starRating} />
                        {product.starRatingCount.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <th>좋아요</th>
                      <td className={styles.like}>♥{product.likeCount.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>사이즈 추천</h2>
              <SizeReviewList sizeReviews={sizeReviews ?? []} />
            </section>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>사이즈 추천하기</h2>
            </section>
          </div>
        </div>
      </Container>
    </>
  )
}
