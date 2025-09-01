import HomePage from "@/components/home";
import Header from "@/common/components/header/header";
import Footer from "@/common/components/footer/footer";
import MainLayout from "./(main)/layout";

export default function Home() {
  return (
    <>
      <MainLayout >
        <HomePage />
      </MainLayout>
    </>
  );
}
