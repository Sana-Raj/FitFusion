import React, { useState } from 'react';
import './Tracker.css'

function WorkoutTracker() {
    const [workouts, setWorkouts] = useState([]);
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [view, setView] = useState(false);

    function addWorkout() {
        if (type && duration) {
            setWorkouts([...workouts, { type, duration }]);
            setType('');
            setDuration('');
        }
    }

    return (
        <>
        <h2>Workout Tracker</h2>
        <div className='container'>
            

        <p id='task_scheduler'>Your Task Scheduler</p>
        <br></br>
                <>
                    
                    <input
                        type="text"
                        placeholder="Workout Type (e.g., Running)"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="Duration (mins)"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    /><br></br>
                    <button onClick={addWorkout}>Add Workout</button>
                    <button onClick={() => setView((prevView) => !prevView)}>
                        {view ? "Hide Schedule" : "Show Schedule"}
                    </button>
                    {view && workouts.length>0 &&  (
                    <ul id='create_task'>
                        {workouts.map((workout, index) => (
                            <li key={index}>
                                {workout.type} - {workout.duration} mins - {workout.caloriesBurned} kcal
                            </li> 
                        ))}
                    </ul>)}
                    {view && workouts.length===0 && <p id='workout_length'>No workouts scheduled</p>}
                </>
            
        </div>
        </>
    );
}

export default WorkoutTracker;
