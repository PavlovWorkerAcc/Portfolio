import React from "react";
import Photo from "../../img/Me.png"

export default function Me() {

    return (

        <div className="Me_Container text-white w-11/12 mt-40 ml-auto mr-auto flex flex-col">

            <div className="Me_Banner flex justify-between items-center">

                <div className="Me_Text_Container">

                    <h1>Hey There</h1>

                </div>
                
                <div className="Me_Photo_Container w-2/5">

                    <img className="" src={Photo}/>

                </div>

            </div>

        </div>
    )
}