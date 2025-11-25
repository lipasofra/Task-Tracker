import { test, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import usePostTask from "./usePostTask";
import { act } from "react";
import { expect } from "vitest";

const newTask = {
        description: "My new task",
    }

global.fetch = vi.fn((post_url, options)=> Promise.resolve({
    ok: true,
    json: () => Promise.resolve(newTask)
}));

test("usePostTasks posts a new task successfully", async () => {
    const { result } = renderHook(() => usePostTask());

    let response;
    await act(async () => {
        response = await result.current.createNewTask(newTask);
    });

    expect(response.description).toEqual(newTask.description);
});