import React from 'react';

const ExerciseQuestion = () => {
  return (
    <div className="container">

    {/* Challenge Description */}
    <ul>
        <li>rows can be added and removed</li>
        <li>each row have a sign (minus or plus)</li>
        <li>each row can be enabled or disabled by a dedicated control button. Disabled rows must be excluded from the addition.</li>
        <li>The result must be updated "live" while the user is writing</li>
    </ul>
    <p>Feel free to add libraries if needed.</p>
    <p>Structure and quality of the code, are matter of evaluation</p>
    <p>ES6+ Javascript knowledge is matter of evaluation</p>
    <p>Look and feel of the solution is a plus</p>
    {/* End Challenge Description */}

    {/* Read Me */}
    <h2>Example below</h2>
    <div className="wrapper">
        <div>
            <button>Add row</button>
        </div>

        <ul>
            <li>
                <select>
                    <option defaultValue>+</option>
                    <option>-</option>
                </select>
                <input type="text" defaultValue="100"/>
                <button>Delete</button>
                <button>Disable</button>
            </li>
            <li>
                <select>
                    <option defaultValue>+</option>
                    <option>-</option>
                </select>
                <input type="text" defaultValue="30"/>
                <button>Delete</button>
                <button>Disable</button>
            </li>
            <li>
                <select>
                    <option>+</option>
                    <option defaultValue>-</option>
                </select>
                <input type="text" defaultValue="7"/>
                <button>Delete</button>
                <button>Disable</button>
            </li>
        </ul>

        <div>
            Result: 123
        </div>
    </div>
    {/* End Read Me */}
    </div>
  )
}

export default ExerciseQuestion;