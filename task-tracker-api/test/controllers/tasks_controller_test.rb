require "test_helper"

class TasksControllerTest < ActionDispatch::IntegrationTest
  fixtures :tasks

  test "should get index" do
    get tasks_url
    assert_response :success

    json_response = JSON.parse(response.body)
    assert_equal 2, json_response.length
  end

  test "should get index in order created_at desc" do
    get tasks_url
    assert_response :success

    json_response = JSON.parse(response.body)
    timestamps = json_response.map { |t| t["created_at"]}
    assert_equal timestamps.sort.reverse, timestamps
  end

  test "should create task" do
    assert_difference("Task.count", 1) do
      post tasks_url, params: {task:{description: "My other task"}}
    end
    assert_response :success
  end

  test "should return id after creation" do
    post tasks_url, params: {task:{description: "My other task"}}
    json_response = JSON.parse(response.body)
    assert json_response.key?("id")
  end

  test "should not create task without description" do
    post tasks_url, params: {task:{description: ""}}
    assert_response :unprocessable_entity
    json_response = JSON.parse(response.body)
    assert_equal "Description can't be blank", json_response["errors"][0]
  end

end
