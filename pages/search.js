import { useRouter } from 'next/router'

export default function Search() {
  const router = useRouter()
  const { q } = router.query
  return (
    <div>
      <h1>search 페이지</h1>
      <p>{q} 검색 결과 </p>
    </div>
  )
}
