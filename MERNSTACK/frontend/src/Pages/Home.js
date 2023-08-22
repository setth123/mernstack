import { useEffect} from "react"
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from "../Hook/useWorkoutContext"
const Home= () =>{
    const {workouts,dispatch}= useWorkoutContext()
    useEffect(()=>{
        const fetchWorkouts= async ()=>{
            const response =await fetch('/api/workouts')
            const json=await response.json()
            if(response.ok){
                dispatch({type:'SET_WORKOUTS',payload: json})
            }
        }
        fetchWorkouts()
    },[dispatch])
    return (
        <div className="home">
            <div className="workouts">
             {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workouts._id} workout={workout} />
             ))}
            </div>
            <div>
                <WorkoutForm />
            </div>
        </div>
    )
}

export default Home