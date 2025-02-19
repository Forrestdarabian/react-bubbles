import React, { useState } from "react";
import axiosWithAuth from "axios";


const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ props, colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  

  const editColors = color => {
    axiosWithAuth().put(`http://localhost:5000/api/colors/${props.match.params.id}`, color)
      .then(res => {
        updateColors(res.data);
        props.history.push("/colors");
      })
      .catch(err => console.log(err.response));
  };
  };





  const deleteColor = color => {
    // make a delete request to delete this color
  
  const deleteColors = id => {
    axiosWithAuth().delete(`http://localhost:5000/api/colors/${props.match.params.id}`)
      .then(res => updateColors(res.data))
      .catch(err => console.log(err.response));
  };
  };

  

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
       {colors && colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
