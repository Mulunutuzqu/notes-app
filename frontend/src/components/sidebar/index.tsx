import * as React from 'react'
import { ArchiveX, Command, File, Inbox, Send, Trash2 } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import NotesListView from './NotesListView'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const notes = ['note-1', 'note-2', 'note-3']

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row z-50"
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r bg-white"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Acme Inc</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu></SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex bg-white">
        <SidebarHeader className="gap-3 p-[14px] border-b border-dashed mb-[4px]">
          <div className="flex w-full items-center justify-between">
            <div className="pointer-events-none absolute inset-0 z-10 h-screen w-full noise bg-repeat opacity-[0.03]" />
            <div className="text-foreground text-base font-bold text-[20px]">
              Your Notes
            </div>
            <Button>Create</Button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-[8px] z-50">
            <SidebarGroupContent>
              <NotesListView />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}
