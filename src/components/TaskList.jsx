import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";

const TaskList = () => {
  const { tasks } = useSelector((state) => state?.tasks || []);
  console.log(tasks);
  const [progressTask, setProgressTask] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);
  const [deferredTask, setDeferredTask] = useState([]);

  useEffect(() => {
    const getProgressTask = tasks?.filter(
      (task) => task.status === "inProgress"
    );
    const getCompleteTask = tasks?.filter((task) => task.status === "complete");
    const getDeferredTask = tasks?.filter((task) => task.status === "deferred");
    setCompleteTask(getCompleteTask);
    setProgressTask(getProgressTask);
    setDeferredTask(getDeferredTask);
  }, [tasks]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
      {/* In progress tasks */}
      <div className="h-full bg-white rounded border drop-shadow">
        <h3 className="bg-[#c7821c] text-center py-2 font-semibold text-white ">
          In Progress
        </h3>
        <div>
          {progressTask?.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </div>
      </div>
      {/* completed tasks */}
      <div className="h-full bg-white rounded border drop-shadow">
        <h3 className="bg-green-600 text-center py-2 font-semibold text-white ">
          Completed
        </h3>
        <div>
          {completeTask?.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </div>
      </div>

      {/* deferred tasks */}
      <div className="h-full bg-white rounded border drop-shadow">
        <h3 className="bg-[#F68870] text-center py-2 font-semibold text-white">
          Deferred
        </h3>
        <div>
          {deferredTask?.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
