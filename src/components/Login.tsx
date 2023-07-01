import { useState } from "react";

const Login = () => {
    const [email,setEmail] = useState<string>('');
    // khai báo 1 state errors dảng mảng 
    const [errors,setErrors] = useState<string[]>([]);
    const handleSubmit = () => {
       // tạo ra 1 mảng lỗi mới 
       console.log(123);
       let newErrors :string[] = [];
       if(!email || email.length === 0) {
            
            newErrors.push("Email không được để trống");
       } else if (email.length < 6){ // chiều dài email phải lớn hơn 6 ký tự
            
            newErrors.push("Chiều dài email phải lớn hơn 6 ký tự ");
       }
       // set đống newErrors này vào trong state errors

       setErrors((prevErrors)=> {
            const uniqueErrors = new Set([...prevErrors,...newErrors]);
            return Array.from(uniqueErrors);
       }) // lọc xong những phần tử trùng và sẽ 1 mảng lỗi mới vào trong 
       //state errors

    }
    return(
        <>
        <h1>Đăng nhập</h1>
        <form>
            <label>Email
                <input type="text" onChange={(event)=> setEmail(event.target.value)}/>
            </label>
            <button type="button" onClick={handleSubmit}>Gửi</button>
            {
                errors.length > 0 && (
                    <ul>
                        {
                           errors.map((error,index)=>(
                            <li key={index}>{error}</li>
                           )) 
                        }
                    </ul>    
                )
            }
        </form>
        </>
    );
}
export default Login;