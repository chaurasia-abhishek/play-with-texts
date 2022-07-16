import React, { useState } from 'react'  //importing react(default export module) and useState component (not a default export module)
export default function Form(props) {
    const [converttext, convert] = useState('Enter Text Here!')
    const convertcap = () => {
        convert(converttext.toUpperCase())
        props.showalert('text is converted into upper case', 'primary')
    };
    const convertlow = () => {
        convert(converttext.toLowerCase())
        props.showalert('text is converted in lower case', 'primary')
    };
    const removespaces = () => {
        convert(converttext.replace(/\s+/g, ' '))
        props.showalert('extra spaces are removed from text', 'primary')
    };
    const cleartext = () => {
        convert('');
        props.showalert('cleaned the text box', 'primary')
    };
    const copytext = () => {
        navigator.clipboard.writeText(converttext)
        props.showalert('text are copied on your clipboard', 'primary')
    };
    const convertcew = () => {
        let text = converttext.toLowerCase().split(" ");
        text.forEach((element, i) => { text[i] = element.charAt(0).toUpperCase() + element.slice(1, element.length) })
        convert(text.join(' '))
        props.showalert('text is converted into each word capital', 'primary')
    };
    const onchange = (event) => { convert(event.target.value) };

    return (
        <div className={`d-flex flex-column vh-100 pt-5 align-items-center text-${props.mode === 'light' ? 'dark' : 'light'}`} 
        >
            <h1 className='p-3'>{props.text.toUpperCase()} </h1>
            <div >
                <textarea className={`form-control mb-1 text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} rows='8' value={converttext} onChange={onchange}></textarea>
                <div className="d-flex align-items-center my-3">
                    <button type="button " className="btn btn-primary mx-2" onClick={convertcap}>Convet To UpperCase</button>
                    <button type="button " className="btn btn-primary mx-2" onClick={convertlow}>Convet To LowerCase</button>
                    <button type="button " className="btn btn-primary mx-2" onClick={convertcew}>Capitalise Each Word</button>
                    <button type="button " className="btn btn-primary mx-2" onClick={removespaces}>Remove Extra Spaces</button>
                    <button type="button " className="btn btn-primary mx-2" onClick={copytext}>Copy Text</button>
                    <button type="button " className="btn btn-primary mx-2" onClick={cleartext}>Clear Text Box</button>
                </div>
            </div>
            <h2>Your Text Summary</h2>
            <div>
                <strong>{converttext.trim() === '' ? 0 : converttext.trim().split(/\s+/g).length}</strong> Words and <strong>{converttext.length}</strong> Characters
            </div>

        </div>
    )
}
