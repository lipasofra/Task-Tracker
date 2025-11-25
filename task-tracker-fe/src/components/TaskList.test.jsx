import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import TaskList from "./TaskList";
import { test, vi } from "vitest";

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

vi.mock("../hooks/useFetchTasks", () => ({
    default: () => ({
        fetchTasks: vi.fn(async () => renderedTasks)
    }),
}));

test("shows input and button", () => {
    render(<TaskList />);

    expect(screen.getByLabelText(/description/i)).not.toBeNull();
    expect(screen.getByText(/add/i)).not.toBeNull();
});

test("list fetched elements", async () => {
    render(<TaskList />);
    
    for (const task of renderedTasks) {
        const item = screen.queryByText(task.description);
        expect(item).not.toBeNull();
    }
});