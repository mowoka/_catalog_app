import {Footer} from "@/components/common/footer";
import {Header} from "@/components/common/header";
import {MainContent} from "@/components/home/main-content";

export default function Home() {
  return (
    <div className="w-full bg-primary h-full">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
