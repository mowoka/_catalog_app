import {FacebookFilled, InstagramFilled, YoutubeFilled} from "@ant-design/icons";
import {Button} from "../ui/button";

export function Footer() {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-8 bg-secondary p-8">
      <h3 className="text-xl font-bold font-montserat text-alternativeTwo">Follow Us</h3>
      <div className="flex w-[40px] justify-center items-center mt-2">
        <Button variant="link" size="default">
          <InstagramFilled className="text-lg text-alternativeTwo" />
        </Button>
        <Button variant="link" size="default">
          <FacebookFilled className="text-lg text-alternativeTwo" />
        </Button>
        <Button variant="link" size="default">
          <YoutubeFilled className="text-lg text-alternativeTwo" />
        </Button>
      </div>
    </div>
  );
}
