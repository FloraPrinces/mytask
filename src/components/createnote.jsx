import React, { useState } from "react";


function Createnote(props) {


    const [note, setnote] = useState({ title: "", content: "" });


    function handlechange(event) {
        const { name, value } = event.target;
        setnote(prevnote => {
            return {
                ...prevnote, [name]: value
            };
        })
    };

    function handleadd(event) {
        props.onadd(note)
     setnote({ title: "", content: "" });
        event.preventDefault();
    };


    return (
        <div>
            <form class="formnote">
                <input class="forminput" onChange={handlechange}
                    value={note.title} name="title" placeholder="Title" autoComplete="off" />
                <textarea class="formtextarea" onChange={handlechange}
                    value={note.content} name="content" placeholder=" Content" rows="2" autoComplete="off" />
                <button class="btn" onClick={handleadd}>ADD </button>
            </form>
        </div>

    );

}

export default Createnote;