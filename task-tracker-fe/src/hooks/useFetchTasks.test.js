import { test, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useFetchTasks from "./useFetchTasks";
import { act } from "react";
import { expect } from "vitest";

const renderedTasks = [
    {
        id: 1,
        description: "My first task",
    },
    {
        id: 2,
        description: "My second task",
    },
    {
        id: 3,
        description: "My third task",
    },
]

global.fetch = vi.fn(()=> Promise.resolve({
    ok: true,
    json: () => Promise.resolve(renderedTasks)
}));

test("useFetchTasks fetches tasks successfully", async () => {
    const { result } = renderHook(() => useFetchTasks());

    let response;
    await act(async () => {
        response = await result.current.fetchTasks();
    });

    expect(response).toEqual(renderedTasks);
});