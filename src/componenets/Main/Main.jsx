import React, { useContext, useState } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/context.jsx'

const Main = () => {
  const {onSent,recent,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <p>Geminie</p>
        <img src={assets.user_icon} alt="icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello Dev.</span>
              </p>
              <p>How can i help you</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="icon" />
              </div>
              <div className="card">
                <p>Brefily sumerise the concept : urban planning</p>
                <img src={assets.bulb_icon} alt="icon" />
              </div>
              <div className="card">
                <p>Brainstorming team bonding activites for our work retreat</p>
                <img src={assets.message_icon} alt="icon" />
              </div>
              <div className="card">
                <p>Improve the readablity of a following code</p>
                <img src={assets.code_icon} alt="icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-tittle">
              <img src={assets.user_icon} alt="icon" />
              <p>{recent}</p>
            </div>
            <div className="result_data">
              <img src={assets.gemini_icon} alt="geminie" />
              {loading 
              ?<>
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
              </>:
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter a prompt here"
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="icon" />
              <img src={assets.mic_icon} alt="icon" />
              {input ?<img onClick={() => onSent()} src={assets.send_icon} alt="icon" /> :null}
            </div>
          </div>
          <p className="bottom-info">
            {" "}
            consectetur adipisicing elit. Vitae illum ipsa repellat rem
            distinctio perferendis esse id architecto et qui deserunt accusamus,
            praesentium error fugit, obcaecati numquam quod pariatur
            necessitatibus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main

