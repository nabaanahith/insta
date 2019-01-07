

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Formm extends React.Component{
    state={
        img:[{}]
        
        }
 constructor(){
    var pes=[{}]

    fetch(`http://localhost:3000/profile`).then(data=>data.json()).then(resp=>{

        console.log('response',resp);
        window.dar=resp
  resp.post.map((item,i)=>{console.log('item.images.thumbnail.url',item.images.thumbnail.url)
        pes.push(item.images.thumbnail.url)
        this.setState({
          img: pes
        })}
  )
            }).catch(err=>{
        console.log("error",err);
            })
 }	

	  render() {
          console.log('state.img',state.img);
          
           this.state.img.map((item, i) => {
            //   console.log("item",item);
               
                return <div id={i} key={i}>
            
            
            
 {/* <button   onClick={()=>{
   
 }}
    >
    
    login with instmmmaagra
    </button> */}
      </div>
           }
        )}}
    ReactDOM.render(<Formm />, document.getElementById('root'))

