"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LayoutDashboard, Image as ImageIcon, Users, MessageSquare, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (pathname !== "/admin/login") {
      const auth = localStorage.getItem("adminAuthCode");
      if (auth !== "verified") {
        router.push("/admin/login");
      } else {
        setIsChecking(false);
      }
    } else {
      setIsChecking(false);
    }
  }, [pathname, router]);

  // If we are checking auth, or if we are on the login page

  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-govbg">{children}</div>;
  }

  if (isChecking) {
    return <div className="min-h-screen bg-govbg flex items-center justify-center font-medium text-dark/50">Verifying access...</div>;
  }

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Proofs", href: "/admin/proofs", icon: ImageIcon },
    { name: "Clients", href: "/admin/clients", icon: Users },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  ];

  return (
    <div className="flex min-h-screen bg-govbg">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <Link href="/admin/dashboard" className="text-xl font-bold tracking-tight text-primary">
            Admin<span className="text-accent">Panel</span>
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-dark/70 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                <item.icon className={`w-5 h-5 mr-3 ${isActive ? "text-primary" : "text-dark/50"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={() => {
              localStorage.removeItem("adminAuthCode");
              router.push("/admin/login");
            }}
            className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden h-16 bg-white border-b border-gray-200 flex items-center px-4">
          <Link href="/admin/dashboard" className="text-lg font-bold text-primary">
            AdminPanel
          </Link>
        </header>

        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
