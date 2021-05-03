import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./header.jsx";
import Note from "./note.jsx"
import Footer from "./footer.jsx";
import Createnote from "./createnote.jsx"
// import newnotes from "../newnotes.jsx";

// function createnote(newnoteitem){
// return <Note
// key={newnoteitem.key}
// title={newnoteitem.title}
// content={newnoteitem.content}

// />
// }
// {newnotes.map(createnote)}



function App() {

    const [notes, setnotes] = useState([]);


    function addnote(newnote) {
        setnotes(prevnotes => {

            return [...prevnotes, newnote];
        });
    }

    function deletenote(id) {
        setnotes(prevnotes => {
            return prevnotes.filter((noteitem, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div>
            <Header />
            <Createnote
                onadd={addnote}
            />
            { notes.map((noteitem, index) => {
                return (<Note
                    key={index}
                    id={index}
                    title={noteitem.title} content={noteitem.content}
                    ondelete={deletenote}
                />
                );

            })}
            <Footer />
        </div>
    );
}


export default App;