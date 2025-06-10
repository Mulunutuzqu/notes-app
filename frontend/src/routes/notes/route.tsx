import { AppSidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/notes')({
  component: NotesLayout,
})

function NotesLayout() {
  return (
    <div>
      <SidebarProvider
        style={
          {
            '--sidebar-width': '360px',
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset>
          {/* <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 p-4"> */}
          {/* <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="flex justify-end w-full">
              <Button variant="outline">Save</Button>
            </div>
          </header>
          <div> */}
          <Outlet />
          {/* </div> */}
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
