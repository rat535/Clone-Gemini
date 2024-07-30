import { createContext, useState } from "react";
import run from "../Geminie/Geminie";


export const Context = createContext();

const ContextProvider = (props)=>{

    const [input,setInput] = useState("");
    const [recent,setRecent] = useState("");
    const [previousPrompts,setPreviousPromts]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] =useState("");
    const delayPara =(index, nextWord)=>{
        setTimeout(function (){
            setResultData(prev => prev+nextWord);
        },75*index)
    }

    const newChat = ()=>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async(prompt) =>{
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if( prompt !== undefined)
        {
        response=await run(prompt)
        setRecent(prompt) 
        }
        else{
            setPreviousPromts(prev =>[...prev,input])
            setRecent(input)
            response = await run(input)
        }
        
        let responseArray = response.split("**");
        let newArray="";
        for(let i =0 ;i< responseArray.length;i++)
        {
            if(i === 0 || i%2 !== 1){
                newArray +=responseArray[i];
            }
            else{
                newArray +="<b>"+responseArray[i]+"</b>";
            }
        }
        let newRespone = newArray.split("*").join("</br>")
        let newResounseArray = newRespone.split(" ");
        for(let i =0 ;i<newResounseArray.length;i++)
        {
            const nextWord = newResounseArray[i]
            delayPara(i,nextWord+" ")
        }
        
        setLoading(false)
        setInput("")

    }
    

    const contaxtValue={
        previousPrompts,
        setPreviousPromts,
        onSent,
        recent,
        setRecent,
        input,
        setInput,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        newChat,
    }
    return(
        <Context.Provider value={contaxtValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;