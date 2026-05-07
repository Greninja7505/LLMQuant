import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

type Stats = {
  total_messages: number;
  by_role: Record<string, number>;
  by_model: Record<string, number>;
  recent: { timestamp: string; role: string; model: string; preview: string }[];
};

const Admin = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5001/admin/stats");
        const data = await res.json();
        setStats(data);
      } catch {
        console.error("Could not reach proxy");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground mb-12">Real-time usage across all roles</p>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">Total Messages</p>
              <p className="text-4xl font-bold">{stats?.total_messages ?? 0}</p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-2">By Role</p>
              {stats?.by_role && Object.entries(stats.by_role).map(([role, count]) => (
                <div key={role} className="flex justify-between items-center mb-2">
                  <Badge variant="secondary">{role}</Badge>
                  <span className="font-semibold">{count}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-2">By Model</p>
              {stats?.by_model && Object.entries(stats.by_model).map(([model, count]) => (
                <div key={model} className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium truncate max-w-[160px]">{model}</span>
                  <span className="font-semibold">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {stats?.recent.map((log, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-lg bg-secondary/50">
                  <div className="flex-1">
                    <p className="text-sm font-medium truncate">{log.preview}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(log.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Badge variant="outline">{log.role}</Badge>
                    <Badge variant="secondary" className="text-xs">{log.model.split(":")[0]}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Admin;