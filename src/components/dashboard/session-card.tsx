import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { SENSES } from "@/lib/constants";
import { PlayCircle, MessageSquare } from "lucide-react";

interface SessionCardProps {
  session: {
    id: string;
    sense: string;
    title: string;
    description: string;
    progress: number;
    timeAgo: string;
  };
}

export function SessionCard({ session }: SessionCardProps) {
  const senseDef = SENSES.find((s) => s.id === session.sense);
  
  if (!senseDef) return null;

  return (
    <Card className="min-w-[300px] max-w-[320px] flex-shrink-0 snap-start h-full flex flex-col hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <Badge 
            variant="secondary" 
            className="font-normal"
            style={{ 
              backgroundColor: senseDef.bgColor, 
              color: senseDef.color,
              borderColor: "transparent"
            }}
          >
            <span className="mr-1">{senseDef.icon}</span> {senseDef.label}
          </Badge>
          <span className="text-xs text-text-secondary">{session.timeAgo}</span>
        </div>
        
        <div className="mb-6 flex-1">
          <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">{session.title}</h3>
          <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
            {session.description}
          </p>
        </div>
        
        <div className="mt-auto space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-primary">
              <span>التقدم</span>
              <span>{session.progress}%</span>
            </div>
            <Progress value={session.progress} className="h-2 bg-surface" indicatorClassName="bg-accent-teal" />
          </div>
          
          <div className="flex gap-2">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-lg">
              إكمال الجلسة
            </Button>
            <Button variant="outline" size="icon" className="shrink-0 rounded-lg border-primary text-primary hover:bg-primary/5">
              {session.sense === 'hearing' ? <MessageSquare className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
