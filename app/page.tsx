import {Header} from "@/components/common/header";
import {ListCatalog} from "@/components/home/list-catalog";

export default function Home() {
  return (
    <div className="w-full bg-primary h-full">
      <Header />
      <ListCatalog />
    </div>
  );
}
