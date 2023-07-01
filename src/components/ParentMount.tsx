import { useState } from "react"
import Mount from "./Mount";

const ParentMount = () => {
    const [show,setShow] = useState<boolean>(false);
    return (
        <div style={{padding:20}}>
            <button onClick={()=> setShow(!show)}>Toggle</button>
            {show && <Mount/>}
        </div>
    )
}
export default ParentMount;