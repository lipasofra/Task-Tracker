const useFetchTasks = () => {
    const get_url = "http://localhost:3000/tasks";

    const fetchTasks = async () => {
        try {
            const res = await fetch(get_url);
            if (!res.ok) {
                throw new Error('Error fetching tasks');
            }
            const data = await res.json();
            return data;
        } catch (error) {
            return { error: 'Error fetching tasks' };
        }
    };

    return { fetchTasks };
}

export default useFetchTasks;