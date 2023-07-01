import { useEffect, useState } from "react";
const tabs = ['posts','comments','albums'];
const Mount = () => {
    //2 đối số 
    //useEffect( callback,[deps])
    //  đối số đầu tiên là hàm callback đây là hàm do chúng ta tự tạo 
    // bắt buộc phải có 
    // depenentcies (Không bắt buôc)
    //1.useEffect(callback)
    //- Call back được gọi mỗi khi component re-render 
    //2.useEffect(callback,[])
    //3. useEffect(callback,[deps])
    const [title,setTitle] = useState<string>('');
    const [posts,setPosts] = useState<any[]>([]);
    const [type,setType] = useState<string>('posts');
    useEffect(()=>{
        console.log("mounted",type);
        fetch(`http://localhost:3001/${type}`)
        .then(res=>res.json())
        .then(posts => {
            setPosts(posts);
        })
    },[type])
    // document.title = title
    //lý thuyết chung : callback của useEffect luôn được sau khi componet được mounted
    return (<div>
        <h1>AHIHI</h1>
        {tabs.map((tab,index)=>(
            <button
            onClick={()=>setType(tab)}
            style={type === tab ? {
                color:'#fff',
                backgroundColor:'red'
            }: {}}
            key={index}>{tab}</button>
        ))}
        <input value={title} onChange={e=>setTitle(e.target.value)}></input>
        <ul>
            {posts.map(post=>(
                 <li key={post.id}>{post.name}</li>
            ))}
           
        </ul>
    </div>)
} 
export default Mount;