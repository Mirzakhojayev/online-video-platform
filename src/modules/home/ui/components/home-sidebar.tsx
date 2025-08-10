"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {FlameIcon, HomeIcon, icons, PlaySquareIcon} from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeSidebar = () => {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Subscriptions",
      url: "/feed/subscriptions",
      icon: PlaySquareIcon,
      auth: true,
    },
    {
      title: "Trending",
      url: "/feed/trending",
      icon: FlameIcon,
    },
  ];

  return (
    <Sidebar className='pt-16 z-40 border-none'>
      <SidebarContent className='bg-[#0f0f0f]'>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="h-10"
                    tooltip={item.title}
                    asChild
                    isActive={false}
                    onClick={() => {}}>
                    <Link href={item.url} className="flex items-center gap-4 text-white">
                      <item.icon style={{width:24, height:24}} />
                      <span className="text-lg font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default HomeSidebar;
