import React from 'react'

function MyButton() {
    const handleClick = () => {
        click++;
        console.log("Button clicked", click, "times");
    };
  return (
    <div>
        <p>Click on the button</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default MyButton
