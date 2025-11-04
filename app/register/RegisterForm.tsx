'use client'
import { RegisterLoginForm } from "@/types/login-reg-form.type";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RegisterForm = () => {
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
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl text-center font-unbounded">Регистрация</h1>
      <div>
        {errors.login && (
          <span className="text-sm text-red-400">{errors.login.message}</span>
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
          <span className="text-sm text-red-400">{errors.email.message}</span>
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

      <span className="text-sm text-center">
        Уже есть аккаунт?{" "}
        <Link className="text-neutral-500" href={"/login"}>
          Войдите!
        </Link>
      </span>
    </form>
  );
};

export default RegisterForm;
