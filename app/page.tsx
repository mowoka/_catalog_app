import {Header} from "@/components/common/header";
import {ListCatalog} from "@/components/home/list-catalog";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full bg-primary h-full pb-8">
      <Header />
      <section className="px-5">
        <div className="mt-12 w-full flex flex-col justify-center items-center">
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight text-primary-foreground font-montserat">
            Catalog App
          </h3>
          <p className="leading-7 text-primary-foreground">Ebook karya insan jaya</p>
        </div>
        <ListCatalog />
        <div className="w-full flex justify-center items-center mt-8">
          <Button variant="outline">Lihat Postingan Lainnya</Button>
        </div>
      </section>
    </div>
  );
}
