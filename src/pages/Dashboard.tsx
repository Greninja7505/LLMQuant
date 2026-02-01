import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  User,
  Download,
  Heart,
  Settings,
  LogOut,
  Loader2,
} from "lucide-react";
import { models } from "@/data/models";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
        return;
      }
      setUser(session.user);
      setIsLoading(false);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          navigate("/login");
        } else if (session) {
          setUser(session.user);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Mock data for demonstration
  const recentDownloads = models.slice(0, 3);
  const savedModels = models.slice(1, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, {user?.email}
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Saved Models</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-success/10">
                  <User className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Free</p>
                  <p className="text-sm text-muted-foreground">Current Plan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Downloads */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Recent Downloads</h2>
                <Badge variant="secondary">{recentDownloads.length}</Badge>
              </div>
              <div className="space-y-4">
                {recentDownloads.map((model) => (
                  <div
                    key={model.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                  >
                    <div>
                      <p className="font-medium">{model.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {model.sizes[0].size} • {model.formats[0]}
                      </p>
                    </div>
                    <Download className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Models */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Saved Models</h2>
                <Badge variant="secondary">{savedModels.length}</Badge>
              </div>
              <div className="space-y-4">
                {savedModels.map((model) => (
                  <div
                    key={model.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                  >
                    <div>
                      <p className="font-medium">{model.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {model.family}
                      </p>
                    </div>
                    <Heart className="h-4 w-4 text-accent fill-accent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Account Settings */}
            <div className="lg:col-span-2 p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold">Account Settings</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Member since
                  </p>
                  <p className="font-medium">
                    {new Date(user?.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border flex gap-4">
                <Button variant="outline" size="sm">
                  Change Password
                </Button>
                <Button variant="outline" size="sm">
                  Update Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
