* {
  box-sizing: border-box;
}

body {
  display:flex;
  background-color:#e9f5f4;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

#month {
   font: 5em serif;
}

.container {
    margin: auto;
  display:grid;
  grid-template-columns: repeat(6, 4em);
  grid-auto-rows: 4em;
  grid-gap: 6.5px;
  margin-top: 30px;
}
.date {
  display:flex;
  flex-direction:column;
  border: 2.4px solid black;
  text-align:center;
  font-family: serif;
  align-items: center;
  justify-content:center;
  font-size: 2.2em;
}

.buttons {
    display: flex;
    margin: 20px;
    flex-direction: row;
}
button {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    font-family: serif;
    font-size: 2.2em;
}

.special {
  grid-column : 1 / span 2;
  grid-row : 1 / span 2;
}

button:hover {
    color: antiquewhite;
}

.date:hover {
    border:none;
    font-size: 1.2em;
    font-weight: bold;
}
