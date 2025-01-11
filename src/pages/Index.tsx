import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for your interest",
        description: "We'll notify you when we launch.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-100 to-rose-50 opacity-90"
        style={{
          backgroundImage: "linear-gradient(109.6deg, rgba(252,231,243,1) 11.2%, rgba(255,241,248,1) 91.1%)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 text-center">
        <span className="inline-block mb-4 text-2xl font-bold text-pink-600 tracking-[0.2em] uppercase">
          COMING SOON
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-rose-900">
          Heritage Meets Modern
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-pink-950">
          Bringing generations of Rajasthani silver craftsmanship to the world.
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-8" />

        <p className="text-lg mb-8 text-pink-800">
          A legacy of artisanal silver jewelry, crafted in the heart of Rajasthan, 
          coming soon to your doorstep.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-72 h-12 px-6 text-base font-light tracking-wide placeholder:text-pink-300 
                     border-pink-200 focus-visible:ring-pink-200 bg-white/80 backdrop-blur-sm
                     transition-all duration-200 ease-in-out transform hover:scale-[1.02] focus:scale-[1.02]"
            required
          />
          <Button 
            type="submit" 
            className="bg-pink-800 hover:bg-pink-700 text-white h-12 px-8 text-base font-medium tracking-wide
                     transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
          >
            Notify Me
          </Button>
        </form>

        <p className="mt-8 text-sm text-pink-700">
          From the ancient streets of Jaipur to the modern world
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full blur-xl opacity-60" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-rose-200 rounded-full blur-xl opacity-60" />
    </div>
  );
};

export default Index;