import Image from "next/image";
import {Card} from "../ui/card";
import BookPlaceholder from "@/app/images/book-placeholder.jpeg";

export function Catalog() {
  return (
    <Card className="w-[286px] bg-card border-none m-4">
      <div className="w-[286px] h-[286px] bg-primary-foreground rounded-lg">
        <Image
          src={BookPlaceholder}
          alt="book placeholder"
          width={286}
          height={286}
          className="rounded-lg"
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="p-3">
        <p className="font-medium font-montserat text-xs">
          40 Alasan Kenapa Ilmu Agama Lebih Baik Daripada Harta
        </p>
        <p className="mt-1 font-bold font-roboto text-sm text-red-400">Rp 25.000</p>
      </div>
    </Card>
  );
}
