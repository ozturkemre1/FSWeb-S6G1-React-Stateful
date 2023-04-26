import React, {useState} from 'react'; /* ADIM 0 */

const todoArray = ["Başarılı Ol!", "Sağlığına dikkat et!"]

export default function ToDo() {
  /* ADIM 1 */
  const [todos,setTodos] = useState(todoArray)
  const [inputDegeri, setInputDegeri] = useState("")
	
  const inputuDeğiştir = evt => {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;
	
    /* ADIM 4 */
    setInputDegeri(value)
  };
  const reset = () => {
    /* ADIM 5 */
    setInputDegeri("")
  };
  const submit = () => {
    /* ADIM 5 */
    const newArray = [...todos]
    console.log("ts1",newArray)
    newArray.push(inputDegeri)
    console.log("ts1",newArray)
    setTodos(newArray)
    
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: inputDegeri.length>10 ? 'crimson': "royalblue" /* ADIM 2 */
  };

  return (
    <div className='widget-input container'>
      <h2>ToDo</h2>
      <div id='output' style={stil}>
      <ul>
        {todos.map((t,i)=>(
            <li key={i}>
                {t}
            </li>
            ))}
      </ul>
      </div>
      <div>
		<input id='input' type='text' onChange={inputuDeğiştir} value={inputDegeri} /> {/* ADIM 6 */}
        <button onClick={submit}>Ekle</button>
        <button id='resetInput' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
