"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const LoginStreakView = () => {
  const router = useRouter();
  const { user } = useAuth();
  const handleLoginClick = () => {
    router.push("/dashboard");
  };
  return (
    <div className="streak-container">
      <div className="min-w-[400px] max-w-[450px] min-h-[500px] max-h-[550px] bg-white/10 text-white justify-between items-center shadow-lg backdrop-blur-lg backdrop-saturate-150 backdrop-filter  border-white/20 border rounded-lg my-auto overflow-hidden">
        <div className="m-auto w-[300px] h-[250px] overflow-hidden z-0 grid justify-center align-middle">
          <div className="inner-gradient">
            <p className="h3 font-grotesk">
              {user?.loginstreak < 10
                ? `0${user?.loginstreak}`
                : user?.loginstreak}
            </p>
          </div>
        </div>
        <div className="z-10 -mt-6 px-6 text-center font-mono">
          <p className="h3">
            You hit a{" "}
            {user?.loginstreak < 10
              ? `0${user?.loginstreak}`
              : user?.loginstreak}{" "}
            day strike!
          </p>
          <p>
            Build up your streak by logging in daily. Your login gifts will be
            delivered to you soon. Thank you for your patience!
          </p>
          <button
            type="submit"
            onClick={handleLoginClick}
            className="mt-4 px-4 py-2 w-full bg-black text-white rounded-lg transition-all duration-300 hover:bg-gray-800"
          >
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginStreakView;
