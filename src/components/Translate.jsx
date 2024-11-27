import React, { useRef, useState } from "react";

const Translate = () => {
    const engText = useRef(null)
    const uzbText = useRef(null);
    async function translate() {
        try {
            if(engText.current.value){
                const apiUrl= `https://api.mymemory.translated.net/get?q=${engText.current.value}&langpair=en|uz`
                let res = await fetch(apiUrl);
                const result = await res.json();
                console.log(result.responseData?.translatedText);
                uzbText.current.value = result?.responseData?.translatedText
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <section className="w-full h-screen flex justify-center items-center flex-col gap-10 rounded-xl">
                <h1 className="text-4xl text-blue-400">My Translator</h1>
                <div className="shadow-2xl p-5 flex flex-col gap-5">
                    <div className="w-full flex justify-between">
                        <select name="input_lang" id="" className="w-full bg-white border p-2">
                            <option value="English">English</option>
                            <option value="O'zbek">O'zbek</option>
                        </select>
                        <button className="p-2">&</button>
                        <select name="output_val" id="" className="w-full bg-white border p-2">
                            <option value="O'zbek">O'zbek</option>
                            <option value="English">English</option>
                        </select>
                    </div>
                    <div className="flex gap-5 relative">
                        <textarea ref={engText} name="inpt_val" id="" placeholder="Enter text" className="h-44">
                        </textarea>
                        <i className="absolute bottom-0 right-[65%] cursor-pointer">mic</i>
                        <i className="absolute bottom-0 right-[60%] cursor-pointer">cp</i>
                        <button onClick={translate}>O</button>
                        <textarea ref={uzbText} name="inpt_val" id="" placeholder="Translation" className="h-44">
                        </textarea>
                        <i className="absolute right-[10%] bottom-0 cursor-pointer">mic</i>
                        <i className="absolute right-[5%] bottom-0 cursor-pointer">cp</i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Translate