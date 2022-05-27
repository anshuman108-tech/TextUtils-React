import React, {useState} from 'react'
//useState is a Hook in react

export default function Textform(props) {
  const handleUpClick = ()=>{                        //function executed when button was clicked
      //console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = ()=>{                        //function executed when button was clicked
      //console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!", "success");
  }

  const handleOnChange = (event)=>{
      //console.log("On Change");
      setText(event.target.value);
  }

  const handleClearClick = ()=>{
    let newText= '';
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }

  const handleCopy= ()=> {
    var text = document.getElementById("myBox");
    text.select();
    //text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success");
  }

  const [text, setText]= useState('');      // here text is a state and initialised with value="". Here setText is a kind of function which sets the value
  //text= "new text";    //wrong way to change the state
  //setText("new text"); //correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'? 'lightblue': 'white', color: props.mode==='dark'?'black':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className= "container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ")} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0 ?text: "Enter something in the textbox above"  }</p>
    </div>
    </>
  )
}
