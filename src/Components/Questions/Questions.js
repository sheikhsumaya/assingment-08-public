import React from 'react';
import './Questions.css'

const Questions = () => {
  return (
    <div className='container-qus'>
      <div>
        <h4>How Reacts Works?</h4>
        <p>Ans:React creates another dom similar to the same browser dom which is called virtual dom. Now this dome looks exactly like the real dome, but this virtual dome is actually a JavaScript object. React builds it in such a way that any element can be modified easily and efficiently using JavaScript with this DOM.</p>
      </div>
      <div>
        <h4>Props Vs State:</h4>
        <p>1. props are read-only.  State changes can be asynchronous. <br />
          2. Props make components reusable.	State cannot make components reusable. <br />
          3.Props can be accessed by the child component.	State cannot be accessed by child components. <br />
          4.Props are external and controlled by whatever renders the component.	The State is internal and controlled by the React Component itself.
        </p>
      </div>
    </div>
  );
};

export default Questions;