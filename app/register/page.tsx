"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterLoginForm } from "../types/login-reg-form.types";
import Link from "next/link";
import Image from "next/image";
import TypingAnimation from "@/components/TypeWriter";


export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterLoginForm>({
    resolver: zodResolver(RegisterLoginForm),
  });

  const onSubmit: SubmitHandler<RegisterLoginForm> = (data) => {
    console.log(data);
  };

  return (
    <main className="w-full h-[100vh] lg:grid grid-cols-2 flex justify-center text-white">
      <section className="w-full flex justify-end items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[300px] flex lg:mr-[15%] mx-auto flex-col gap-5 w-[-webkit-fill-available] z-100"
        >
          <h1 className="text-2xl text-center font-unbounded">
            Регистрация
          </h1>
          <div>
            {errors.login && (
              <span className="text-sm text-red-400">
                {errors.login.message}
              </span>
            )}
            <Input
              {...register("login")}
              placeholder="Введите логин"
              type="text"
              className={
                errors.login &&
                "border-red-400 placeholder:text-red-400 focus-visible:border-red-400! text-red-400"
              }
            ></Input>
          </div>

          <div>
            {errors.email && (
              <span className="text-sm text-red-400">
                {errors.email.message}
              </span>
            )}
            <Input
              {...register("email")}
              placeholder="Введите email"
              type="text"
              className={
                errors.email &&
                "border-red-400 placeholder:text-red-400 focus-visible:border-red-400! text-red-400"
              }
            ></Input>
          </div>

          <div>
            {errors.password && (
              <span className="text-sm text-red-400">
                {errors.password.message}
              </span>
            )}
            <Input
              {...register("password")}
              placeholder="Введите пароль"
              type="password"
              className={
                errors.password &&
                "border-red-400 placeholder:text-red-400 focus-visible:border-red-400! text-red-400"
              }
            ></Input>
          </div>

          <Button
            type="submit"
            variant={"secondary"}
            className="text-lg h-auto"
          >
            Зарегистрироваться
          </Button>
          <span className="text-sm mx-auto">
            Уже есть аккаунт?{" "}
            <Link className="text-neutral-500" href={"/login"}>
              Войдите!
            </Link>
          </span>
        </form>

        <Image
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2EwNjVrbGdydDhxZTVveWoydmJ1a3F2Zm13MnNlaW9taWFsb2dmayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fx4zxFLVDAluXnk4qH/giphy.gif"
          alt="Background"
          fill
          className="object-cover lg:hidden select-none pointer-events-none draggable-false"
          unoptimized
          priority
        />
      </section>

      <section className="hidden lg:block relative w-full h-full">
        <Image
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2EwNjVrbGdydDhxZTVveWoydmJ1a3F2Zm13MnNlaW9taWFsb2dmayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fx4zxFLVDAluXnk4qH/giphy.gif"
          alt="Background"
          fill
          className="object-cover select-none pointer-events-none draggable-false"
          unoptimized
          priority
        />
        <TypingAnimation
          words={[
            `<strong style="font-size: 110px; color: white; font-style: normal;">Bōdo</strong>`,
            "ボード",
            "Organize",
            "Plan",
            "プラン",
            "Track",
            "Manage",
            "Focus",
            "Flow",
            "Visualize",
          ]}
        />
      </section>
    </main>
  );
}
