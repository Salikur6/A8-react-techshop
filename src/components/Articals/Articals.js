import React from 'react';

const Articals = () => {
    return (
        <div className='row'>
            <div className="col-lg-12 col-md-12 col-12">
                <h3 className='fw-bold'>How reac works?</h3>
                <p className='fw-bold'>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code.React is a declarative, efficient, and flexible JavaScript library for building user interfaces.It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. </p>
            </div>

            <div className="col-lg-12 col-md-12 col-12">
                <h3 className='fw-bold'>how useState works?</h3>
                <p className='fw-bold'>The useState hook allows us declare one or more state variables in function components. Under the hood.If you want to set an initial value for the variable, pass the initial value as an argument to the useState function.You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
            </div>
        </div>
    );
};

export default Articals;