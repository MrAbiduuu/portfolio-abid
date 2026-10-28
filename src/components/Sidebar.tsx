import type { ReactNode } from "react";
import SidebarInfo from "./SIdebarInfo";

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-4rem)] fixed inset-x-0 bottom-0 top-16 ">
      {/* Always-open sidebar */}
      <aside className="w-92 shrink-0 overflow-y-auto border-r border-base-300 bg-base-200 p-4h-full">
        <SidebarInfo />
      </aside>

      {/* Independently scrollable content */}
      <main className="min-w-0 flex-1 overflow-y-auto p-6 md:p-10">
        {children}
      </main>
    </div>
  );
}
