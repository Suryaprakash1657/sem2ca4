import React,{useState} from 'react'

function EditBook({name,genere,author}) {
    const formData=useState([
        name:"",
        genere:"",
        author:""
    ])
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log({name,genere,author})
        try{
        const response=await fetch('http://localhost/books/:id',{
            method:PUT,
            headers:{
                'Content-Type':'application.json'
            },
            body:JSON.stringify({name,genere,author})
        })
        if(response.ok){
            console.log("Author Name added");
        }}catch(error){
            console.log(error)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" value={formData.name} onChange={handleChange}/>
        </div>
        <div>
            <label>Name:</label>
            <input type="text" value={formData.genere} onChange={handleChange}/>
        </div>
        <div>
            <label>Name:</label>
            <input type="text" value={formData.author} onChange={handleChange}/>
        </div></form>
    </div>
  )
}

export default EditBook
