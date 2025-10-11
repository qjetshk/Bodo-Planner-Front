"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterLoginForm } from "../../types/login-reg-form.types";
import Link from "next/link";
import { BgImage } from "@/components/BgImage";
import { BgSection } from "@/components/BgSection";
import { motion } from "motion/react";

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
        <motion.form
          initial={{ y: 10, opacity: 0, filter: "blur(5px)" }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "none",
            transition: { duration: 0.4 },
          }}
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[300px] flex lg:mr-[15%] mx-auto flex-col gap-5 w-[-webkit-fill-available] z-100"
        >
          <h1 className="text-2xl text-center font-unbounded">Регистрация</h1>
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
            className="text-lg h-auto w-full"
          >
            Зарегистрироваться
          </Button>

          <span className="text-sm mx-auto">
            Уже есть аккаунт?{" "}
            <Link className="text-neutral-500" href={"/login"}>
              Войдите!
            </Link>
          </span>
        </motion.form>

        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          <BgImage />
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={{ opacity: 1, filter: "none", transition: { duration: 2 } }}
      >
        <BgSection style="hidden lg:block" textStyle="" />
      </motion.div>
    </main>
  );
}
