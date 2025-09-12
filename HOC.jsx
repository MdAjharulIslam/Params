import React from 'react'




//normal components
const Normal = ()=>{
    return (
        <div>
            <h1>hello normal</h1>
        </div>
    )
}

//HOC
const App = (WropedComponent)=>{
    return function add(){

        return <WropedComponent  />
    }
}

const Hoc = App(Normal)