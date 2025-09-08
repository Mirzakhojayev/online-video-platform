"use client";
import {Separator} from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {useAuth, useClerk} from "@clerk/nextjs";
import {
  FlameIcon,
  HistoryIcon,
  HomeIcon,
  ListVideoIcon,
  PlaySquareIcon,
  ThumbsUpIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeSidebar = () => {
  const {isSignedIn} = useAuth();
  const clerk = useClerk();

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

  const personalNavigations = [
    {
      title: "History",
      url: "/playlists/history",
      icon: HistoryIcon,
      auth: true,
    },
    {
      title: "Liked Videos",
      url: "/playlists/liked",
      icon: ThumbsUpIcon,
      auth: true,
    },
    {
      title: "All Playlists",
      url: "/playlists/playlists",
      icon: ListVideoIcon,
      auth: true,
    },
  ];

  return (
    <Sidebar
      className='pt-16 z-40 border-none'
      collapsible='icon'>
      <SidebarContent className='bg-[#0f0f0f]'>
        {/* Main Sidebar Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className='h-10 text-gray-100'
                    tooltip={item.title}
                    asChild
                    isActive={false}
                    onClick={(e) => {
                      if (!isSignedIn && item.auth) {
                        e.preventDefault();
                        return clerk.openSignIn();
                      }
                    }}>
                    <Link
                      href={item.url}
                      className='flex items-center gap-4 text-gray-100'>
                      <item.icon style={{width: 24, height: 24}} />
                      <span className='text-md font-medium'>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />
        {/* Personal Sidebar Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {personalNavigations.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className='h-10 text-gray-100'
                    tooltip={item.title}
                    asChild
                    isActive={false}
                    onClick={(e) => {
                      if (!isSignedIn && item.auth) {
                        e.preventDefault();
                        return clerk.openSignIn();
                      }
                    }}>
                    <Link
                      href={item.url}
                      className='flex items-center gap-4 text-gray-100'>
                      <item.icon style={{width: 24, height: 24}} />
                      <span className='text-md font-medium'>{item.title}</span>
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
