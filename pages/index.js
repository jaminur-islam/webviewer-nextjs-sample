import Link from "next/link"
export default function HomePage(){
    return <div style={{background:"blue" , textAlign:"center" , fontSize: "30px", marginTop:"20px" , color:"white"}}> 
     <Link href="/about">
 
            Click Pdf view 
      
     </Link>
       
    </div>
}