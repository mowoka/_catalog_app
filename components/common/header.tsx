import {SearchOutlined} from "@ant-design/icons";
import {Button} from "../ui/button";

export function Header() {
  return (
    <div className="w-full h-16 border-b border-border py-3 px-5 flex flex-row justify-between items-center">
      <div>
        <SearchOutlined className="text-alternativeTwo text-2xl" />
      </div>

      <div className="flex flex-row justify-start items-center">
        <Button variant="link" size="sm" className="text-alternativeTwo font-semibold text-base">
          Log In
        </Button>
        <div className="h-[25px] w-[1px] border-r border-alternativeTwo mx-2" />
        <Button variant="link" size="sm" className="text-alternativeTwo font-semibold text-base">
          Register
        </Button>
      </div>
    </div>
  );
}
