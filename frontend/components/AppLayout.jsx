import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#0f1117] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-400/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-400/40 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
