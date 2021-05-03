import React from "react";

function Note(props) {
  const d = new Date().getDate();
  const m = new Date().getMonth();
  const y = new Date().getFullYear();

  function handledelete() {
    props.ondelete(props.id);
  }

  return (
    <div class="note ">
      <h3>
        {props.title}{" "}
        <i>
          [{d}-{m}-{y}]
        </i>
      </h3>
      <p>{props.content} </p>

      <button class="btn" onClick={handledelete}>
        {" "}
        DELETE
      </button>
    </div>
  );
}

export default Note;
