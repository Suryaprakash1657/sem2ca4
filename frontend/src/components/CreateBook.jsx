import React,{useState} from 'react'

function CreateBook() {
    const[name,setName]=useState("")
    const[genere,setGenere]=useState("")
    const[author,setAuthor]=useState("")
const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log({name,genere,author})
    try{
    const response=await fetch('http://localhost/books',{
        method:POST,
        headers:{
            'Content-Type':'application.json'
        },
        body:JSON.stringify({name,genere,author})
    })
    if(response.ok){
        console.log("Book added Succesfully");
    }}catch(error){
        console.log(error)
    }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.name)}/>
        </div>
        <div>
            <label>Name:</label>
            <input type="text" value={genere} onChange={(e)=>setGenere(e.target.genere)}/>
        </div>
        <div>
            <label>Name:</label>
            <input type="text" value={author} onChange={(e)=>setAuthor(e.target.author)}/>
        </div></form>
    </div>
  )
}

export default CreateBook
