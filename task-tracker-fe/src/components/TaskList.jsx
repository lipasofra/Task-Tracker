import React, { useState, useEffect } from "react";
import useFetchTasks from "../hooks/useFetchTasks";
import usePostTask from "../hooks/usePostTask";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from "uuid";


const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const {fetchTasks} = useFetchTasks();
    const {createNewTask} = usePostTask();
    

    const createTask = async (newTask) => {
      const tempId = uuidv4();
      const postResult = await createNewTask({description: newTask});
      if (postResult.error) {
        alert(postResult.error);
        return false;
      } else {
        setTasks([{description: newTask, id: tempId}, ...tasks]);
        return true;
      }
    }

    useEffect(() => {
      const fetchData = async () => {
        const obtainedTasks = await fetchTasks();
        if (obtainedTasks.error) {
          alert(obtainedTasks.error);
          return;
        } else {
          setTasks(obtainedTasks);
        }
      };
      fetchData();
    }, []);

    return (
    <>
        <Typography sx={{ mt: 4, mb: 3 }} variant="h2" component="div">
            Task Tracker
          </Typography>
        <TaskForm sx={{ width: '100%', bgcolor: '' }} onCreate={createTask}/>
        <List  sx={{ width: '100%', bgcolor: '#eeeeee', mt: 4, boxShadow: 2, borderRadius: 2 }}>
        {
            tasks.map((task)=>(
              <ListItem key={task.id}>
                <ListItemText primary={task.description} sx={{ml:2}}/>
              </ListItem>
            ))
        }
        </List>
    </>
    )
  
}

export default TaskList;