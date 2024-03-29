const TaskList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
      {/* In progress tasks */}
      <div className="h-full bg-white rounded border drop-shadow">
        <h3 className="bg-[#c7821c] text-center py-2 font-semibold text-white ">
          In Progress
        </h3>
        <div>
          <p>hellll</p>
          <p>hellll</p>
          <p>hellll</p>
          <p>hellll</p>
          <p>hellll</p>
          <p>hellll</p>
        </div>
      </div>
      {/* completed tasks */}
      <div className="h-full bg-white rounded border drop-shadow">
        <h3 className="bg-green-600 text-center py-2 font-semibold text-white ">
          Completed
        </h3>
        <div></div>
      </div>

      {/* deferred tasks */}
      <div className="h-full bg-white rounded border drop-shadow">
        <h3 className="bg-[#F68870] text-center py-2 font-semibold text-white">
          Deferred
        </h3>
        <div></div>
      </div>
    </div>
  );
};

export default TaskList;
