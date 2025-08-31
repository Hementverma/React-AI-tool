import {useEffect,useState} from "react";
//import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {Dark} from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkDown from "react-markdown";
const Answer =({ans, totalResult,index,type})=>{
const [heading,setHeading]=useState(false);
const [answer,setAnswer]=useState(ans);

useEffect(()=>{
if(checkHeading(ans)){
    setHeading(true)
    setAnswer(replaceHeadingStarts(ans))
}
},[ans]);

 function checkHeading(str) {
    return /^(\*)(\*)(.*)\*$/.test(str);
  }
  function replaceHeadingStarts(str) {
    return str.replace(/^\*\*|\*$/g, '');
  }
  
/*const renderer={
  code({node,inline,className,children,...props}){
    const match=/language-(\w+)/.exec(className || "");
    return !inline && match?(
      <SyntaxHighlighter
      {...props}
      children={String(children).replace(/\n$/,"")}
      language={match[1]}
      style={dark}
      preTag="div"
      />
    ):(
      <code {...props} className={className}>
        {children}
      </code>
    )
  }
}*/
  return (
  <>
  {
    index==0 && totalResult>1?<span className="pt-2 text-xl  black text-white">{answer}</span>:
   heading?<span className={"pt-2 text-lg  black dark:text-white"}>{answer}</span> 
  :<span className={type=='q'?'pl-1':'pl-5'}>{answer}  </span>
}
  </>
)}

export default Answer;
