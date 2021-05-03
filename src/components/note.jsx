import React from "react";

function Note(props) {
  const d = new Date().getDate();
  var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "Sept";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
  const m = month[new Date().getMonth()];
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
