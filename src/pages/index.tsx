import { routes } from "@/App";
import { Link } from "react-router-dom";

export default function Page() {
  return (
    <div className="h-screen flex-center bg-slate-900 gap-10 flex-col text-white">
      <h1 className="text-[60px] font-bold text-white">Animation effects</h1>

      <div className="grid gap-1 text-sm">
        [{" "}
        {routes.map(item => (
          <div className="pl-10 ">
            <Link to={item.path} className=" ">
              {item.path}
            </Link>
            ,
          </div>
        ))}{" "}
        ]
      </div>
    </div>
  );
}
