import React from 'react'

const Form = ({onSubmit,fields}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                {fields.map((field) => <p key={field.description}>{field.description}: <input value={field.value} onChange={field.onChange} /></p>)}
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form