import React, { useState } from 'react';
import { useSelector } from 'react-redux';



function Home() {

    const state = useSelector(state => state)
    console.log(state)

    const [ind, setInd] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedval, setSelectedval] = useState("")
    const [showresult, setShowresult] = useState(false)

    function checkAns(e) {

        let correct = state.user[ind].correctAns
        if (selectedval == correct) {
            setScore(score + 1)
        }
        if (state.user.length == ind + 1) {
            setShowresult(true)
        } else {

            setInd(ind + 1)
        }
    }
    console.log(score)

    return (
        <div>

            {showresult ? (<div className="container">
                <div className="row">
                    <div className="col-md-12 shadow my-result rounded ">
                        <h3 className="p-3">Result </h3>
                        <progress id="file" value={score} max={state.user.length}></progress>
                        <h5>{((score / state.user.length).toFixed(4)) * 100} </h5>
                        <h5>{(score / state.user.length) * 100 < 60 ? "fail" : "Pass"} </h5>
                    </div>
                </div>
            </div>) : null}

            {!showresult ? (<div className="Container mt-5 p-5">

                <div className="row">

                    <div className="col-md-12">

                        <h3 className="My-Question-length">Question <span className="my-span">{ind + 1}</span>/{state.user.length}</h3>

                        <p className="Question mt-3 p-4">{state.user[ind].question}</p>

                    </div>

                </div>

            </div>) : null}

            {/* Options  */}

            {!showresult ? (<div className="Container m-3 p-3 ">

                <div className="row">

                    {state.user[ind].answer.map((e, i) => {
                        return <div onClick={() => setSelectedval(e)} key={i} className="col-md-6 p-2">
                            <button className="btn p-3 btn-lg btn-block my-css">{e}</button>
                        </div>
                    })}

                </div>

            </div>) : null}

            {!showresult ? (<div align="center">
                <button onClick={() => checkAns()} className="btn btn-primary pl-5 pr-5 next-btn">
                    N E X T
                </button>
            </div>) : null}

        </div>
    )
}

export default Home;