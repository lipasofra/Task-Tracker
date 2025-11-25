class TasksController < ApplicationController
  def index
    tasks = Task.all.order(created_at: :desc)
    render json: tasks
  end

  def create
    task = Task.create(task_params)
    render json: task
  end

  private

  def task_params
    params.require(:task).permit(:description)
  end
end
