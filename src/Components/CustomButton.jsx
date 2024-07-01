import { useState } from "react";
import { Link,useNavigate } from "react-router-dom"
export default function CustomButton(props){

      const navigate = useNavigate();

      const handleClick = (e) => {
            e.preventDefault();
          
            const { contentButtonLink } = props;
          
            if (contentButtonLink) {
              const [path, hash] = contentButtonLink.split("#");
              // Navigate to the page specified in the link
              navigate(path);
          
              // Scroll to the element with the ID specified in the hash
              if (hash) {
                
                setTimeout(() => {
                  const element = document.getElementById(hash);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth',
                                             block: 'center', // Scroll to the center of the element
                                             inline: 'nearest'
                                          });
                  }
                }, 800); // Adjust the delay as needed based on your page loading time
              }
            }
          };
          
          const [isHovered,setIsHovered]=useState(false);
          const handleMouseEnter=()=>{
                          setIsHovered(true);
                      }
          const handleMouseLeave=()=>{
                        setIsHovered(false);
                    }
return (

      <Link
      to={props.contentButtonLink}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
            display: 'inline-flex',
            textDecoration: 'none',
            padding: '10px 20px',
            marginTop: '10px',
            width:props.isMoreEvents==false?'77px':'auto',
            fontSize:props.isMoreEvents==false?'0.9rem':'1.5rem',
            height: '24px',
            backgroundColor:props.isMoreEvents==false?'#e66137':'white',
            color: props.isMoreEvents==false?'white':(isHovered?'blue':'black'),
            borderRadius: '4px',
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
            cursor: 'pointer',
            textAlign:'center',
            textJustify:'inter-word'
        }}

>
{props.buttonText}
</Link>
)
}