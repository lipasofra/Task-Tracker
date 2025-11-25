const usePostTask = () => {
    const post_url = "http://localhost:3000/tasks"

    const createNewTask = async (task) => {
        try {
            const res = await fetch(post_url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ task })
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.errors?.join(', ') || 'Error creating task');
            }
            return data;
        } catch (error) {
            return ({ error: error.message })
        }
    };

    return { createNewTask };

}

export default usePostTask;