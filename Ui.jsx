import React from 'react'

const Ui = () => {
  return (
    <div>
      <div className="m-2 flex min-h-screen items-center justify-center rounded-2xl bg-black">
  <div className="w-2/3 rounded-2xl border border-white text-white">
    <p className="py-5 pt-10 text-center text-4xl font-bold">Login</p>

    <div className="">
      <form action="" class="p-10">
        <div className="flex flex-col gap-3 p-5">
          <label for="email">Enter your Email</label>
          <input type="email" value="" className="scroll-px-56 rounded-2xl border p-2" />
        </div>
        <div className="flex flex-col gap-3 p-5">
          <label for="password">Enter your Password</label>
          <input type="password" value="" className="rounded-2xl border p-2 px-5" />
        </div>
        <div className="p-5">
          <button className="mt-5 w-full cursor-pointer rounded-2xl bg-white py-2 text-2xl text-black hover:bg-amber-50 hover:scale-105 transition">Login</button>
        </div>
      </form>
    </div>
  </div>
  
</div>

<div className="text-white bg-black min-h-screen m-2 rounded-2xl flex items-center justify-center">
    <div class="w-48 border border-amber-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
  <img src="https://via.placeholder.com/150" alt="Sample" className="w-full h-40 object-cover border rounded border-amber-500 hover:scale-105 transition-all duration-300">
  
  <div className="p-3">
    <h1 className="text-lg font-semibold">Image</h1>
    <p className="text-sm text-gray-600">gr</p>
    <p>133$</p>
  </div>
</div>

  </div>
  <div>
     <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-16 w-16 border-4 border-t-white border-gray-700 '></div>
    </div>
  </div>
    </div>
  )
}

export default Ui
