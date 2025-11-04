import Link from "next/link";
import { BgImage } from "@/components/BgImage";
import { BgSection } from "@/components/BgSection";
import { MotionDiv } from "@/components/MotionDiv";
import LoginForm from "./LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bōdo - Войти',
  description: 'Войти в Bōdo Planner',
  keywords: ['войти', 'авторизироваться', 'залогиниться', 'зайти', "войти в аккаунт"],
  icons: '/logo.svg'
};

export default function RegisterPage() {
  return (
    <main className="w-full h-[100vh] lg:grid grid-cols-2 flex justify-center text-white">
      <section className="w-full flex justify-end items-center">
        <MotionDiv
          initial={{ y: 10, opacity: 0, filter: "blur(5px)" }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "none",
            transition: { duration: 0.4 },
          }}
          className="max-w-[300px] lg:mr-[15%] mx-auto w-[-webkit-fill-available] z-100"
        >
          <LoginForm />
        </MotionDiv>

        <MotionDiv
          className="lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          <BgImage />
        </MotionDiv>
      </section>

      <Link href={"/"}>
        <BgSection style="hidden lg:block" textStyle="" />
      </Link>
    </main>
  );
}
