import { useState } from 'react';
import './App.css';
// const result = document.getElementsByClassName("res")[0];
//     result.innerHTML=flamesResult;


    function removeSimilar(name , name2){

        for(var i=0 ; i<name.length ; i++){
             for(var j=0 ; j<name2.length ; j++)
             {
               if(name[i] === name2[j])
               {
                 name = name.replace(name[i] , "");
                 name2 = name2.replace(name2[j] , "");
                 i--;
                 break;
               }
             }
        }
        var game;
        console.log(name + name2);
        var resultName = name+name2;
        console.log(resultName.length);
        var FLAMES = "FLAMES";
        let arr=[""];
        var count=0;
        for(var i=0 ; FLAMES.length >0 ; i++)
        {
          count++;
          if(count === resultName.length)
          {
            game = FLAMES[i%(FLAMES.length)];
            console.log(game);
            FLAMES = FLAMES.replace(FLAMES[i%(FLAMES.length)] , "");
            i--;
            count=0;
          }
        }

        const result1 = document.getElementsByClassName("res1")[0];
        const result2 = document.getElementsByClassName("res2")[0];

        switch(game){
            case 'F':{
                result1.innerHTML="FRIEND";
                result2.innerHTML="FRIEND";
                break;
            }

            case 'L':{
                result1.innerHTML="Love";
                result2.innerHTML="Love";
                break;
            }

            case 'A':{
                result1.innerHTML="AFFECTION";
                result2.innerHTML="AFFECTION";
                break;
            }

            case 'M':{
                result1.innerHTML="MARRIAGE";
                result2.innerHTML="MARRIAGE";
                break;
            }

            case 'E':{
                result1.innerHTML="ENEMY";
                result2.innerHTML="ENEMY";
                console.log(result1,result2);
                break;
            }

            case 'S':{
                result1.innerHTML="SIBLING";
                result2.innerHTML="SIBLING";
                break;
            }
        }
        
      }

const ReloadPage = ()=> {
       window.location.reload();
}
function App() {

    const [ value , setValue ] = useState("");
    const [value2 , setValue2] = useState("");
  return (
    <div className="app">
        <div className='heading'>
        <h1><button className='reloadbtn' onClick={()=>{ReloadPage()}}>@</button>  FLAMES GAME</h1>
        </div>

        <div className='form'>
      <form> 
      <div className='name1'> 
        <label htmlFor='name' className='myname'>YOUR NAME </label>
        <input className='myinput' type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
      </div>
        
        <div className='name2'>
        <label htmlFor='name' className='myname'>CRUSH'S NAME </label>
        <input className='myinput' type="text" value={value2} onChange={(e)=>{setValue2(e.target.value)}}/>
        </div>
      </form>
      <div className='cbtn'>
        <div className='content'>
        <h1 className='res1'></h1>
        <h1 className='res2'></h1>
        </div>

        <button className='cbtn-btn' onClick={()=>{removeSimilar(value,value2)}}>></button>
      </div>
      </div>
    </div>
  );
}

export default App;
