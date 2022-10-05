import React from 'react'

function Notice() {
  return (
    <div style={{ background: 'white', padding: "10px 20px", marginTop: 40}}>
        <p>Hi,</p>
        <p>These are the key part which I focused:</p>
        <ul>
            <li><p>I did my best to keep it as minimalistic as possible, without any heavy plugins.</p></li>
            <li><p>Used <strong>Redux Toolkit</strong> as state management.</p></li>
        </ul>
    </div>
  )
}

export default Notice;