import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const ChatInterface = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle chat submission here
    setMessage("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gray-50 rounded-lg p-4 h-[400px] mb-4 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-start gap-2.5">
            <div className="bg-primary-100 rounded-lg p-3">
              <p className="text-sm">
                Hello! I'm your AI travel assistant. Where would you like to go?
              </p>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your travel plans..."
          className="flex-1"
        />
        <Button type="submit" size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ChatInterface;