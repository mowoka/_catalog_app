import {Button} from "../ui/button";

export function Header() {
  return (
    <div className="w-full h-16 border-b border-border py-3 px-5 flex flex-row justify-between items-center">
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary-foreground">
          Catalog App
        </h3>
      </div>

      <div className="flex flex-row justify-start items-start">
        <Button variant="secondary" size="sm">
          Log In
        </Button>
        <Button variant="secondary" size="sm" className="ml-4">
          Register
        </Button>
      </div>
    </div>
  );
}
