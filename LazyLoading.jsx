import React, { lazy, Suspense } from 'react'

const Product = lazy(()=> import('./Product'))

const LazyLoading = () => {
  return (
    <div>
      <Suspense  fallback= {<h1>Loading...</h1>}>
       <Product/>
      </Suspense>
    </div>
  )
}

export default LazyLoading
