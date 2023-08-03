import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

export const getDatas = async query => {
  try {
    if (query) {
      const response = await instance.get(`/products/?q=${query}`)
      return response.data.results ?? []
    }
    const response = await instance.get('/products')
    return response.data.results ?? []
  } catch (error) {
    console.log(error.response)
  }
}

export const getData = async targetId => {
  try {
    const response = await instance.get(`/products/${targetId}`)
    return response.data
  } catch (error) {
    console.log(error.response)
  }
}

export const getReviews = async targetId => {
  try {
    const response = await instance.get(`/size_reviews/?product_id=${targetId}`)
    return response.data.results ?? []
  } catch (error) {
    console.log(error.response)
  }
}

export const postReviews = async review => {
  try {
    const res = await instance.post('/size_reviews/', review)
    return res.data
  } catch (error) {
    console.log(error.response)
  }
}
