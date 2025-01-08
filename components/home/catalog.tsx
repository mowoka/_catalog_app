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
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div className="p-3">
        <p>40 Alasan Kenapa Ilmu Agama Lebih Baik Daripada Harta</p>
        <p className="mt-1">Rp 25.000</p>
      </div>
    </Card>
  );
}
