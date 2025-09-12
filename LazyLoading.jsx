// import React, { lazy, Suspense } from 'react'

// const Product = lazy(()=> import('./Product'))

// const LazyLoading = () => {
//   return (
//     <div>
//       <Suspense  fallback= {<h1>Loading...</h1>}>
//        <Product/>
//       </Suspense>
//     </div>
//   )
// }

// export default LazyLoading;


import React from 'react';
import {lazy, Suspence} from 'react'

const LazyLoading = ()=>{
const Product = lazy(()=> import('./src/Product'));

  return(
    <div>
    <Suspence  fallback={<h1>Loading...</h1> }>
      <Product/>
    </Suspence>
    
    </div>
  )
}

export default LazyLoading;