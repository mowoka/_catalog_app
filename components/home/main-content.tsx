import {Button} from "../ui/button";
import {ListCatalog} from "./list-catalog";

export function MainContent() {
  return (
    <section className="px-5">
      <div className="mt-12 w-full flex flex-col justify-center items-center">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight text-alternativeTwo font-montserat">
          Catalog App
        </h3>
        <p className="leading-7 text-alternativeTwo">Ebook karya insan jaya</p>
      </div>
      <ListCatalog />
      <div className="w-full flex justify-center items-center mt-8">
        <Button variant="outline">Lihat Postingan Lainnya</Button>
      </div>
    </section>
  );
}
