import {Catalog} from "./catalog";

export function ListCatalog() {
  return (
    <div className="w-full py-5 flex flex-row justify-start items-start flex-wrap">
      {[1, 2, 3, 6, 7, 8, 9, 10].map((item) => {
        return <Catalog key={item} />;
      })}
    </div>
  );
}
