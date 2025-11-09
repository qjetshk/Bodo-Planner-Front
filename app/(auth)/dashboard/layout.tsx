"use client";
import Link from "next/link";
import React from "react";
import { PanelRightOpen } from "lucide-react";
import { MENU_BAR } from "@/data/menubar.data";
import { MotionDiv } from "@/components/MotionDiv";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import DashBoardHeader from "@/components/DashBoardHeader";
import PrivateRoute from "./PrivateRoute";

const DashBoardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <PrivateRoute>
      <motion.section
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "none", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="dark"
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <DashBoardHeader />
            <Separator />
            <section className="p-5 w-full h-full">{children}</section>
          </SidebarInset>
        </SidebarProvider>
      </motion.section>
    </PrivateRoute>
  );
};

export default DashBoardLayout;
