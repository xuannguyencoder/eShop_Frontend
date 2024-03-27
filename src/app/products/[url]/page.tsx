import React from 'react'

const ProductSearch = ({params}:{ params :{url: string}}) => {
  return (
    <div>ProductSearch {params.url}</div>
  )
}

export default ProductSearch