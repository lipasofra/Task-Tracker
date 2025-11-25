import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TaskForm = ({ onCreate }) => {

    const [newTask, setNewTask] = useState("");
    const [disabled, setDisabled] = useState(true);

    const createTask = async () => {
        const result = await onCreate(newTask);
        if (result) {
            setNewTask("");
            setDisabled(true);
        }
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        setNewTask(value);
        if (value === "") {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    return (
        <>
            <TextField
                required
                id="outlined-required"
                label="Description"
                helperText="eg: Grocery shopping"
                value={newTask}
                onChange={handleInputChange}
            />
            <Button disabled={disabled} onClick={createTask} sx={{ ml: 2, mt: 1, height: '40px', bgcolor: '#eceff1', border: 'none', color: 'black' }}>
                Add
            </Button>
        </>

    )
}

export default TaskForm;