import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

// Export individual components
export function ScheduleItem({ time, event }: { time: string; event: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <Badge variant="secondary" className="min-w-20 justify-center bg-wedding-terracotta/10 text-wedding-terracotta hover:bg-wedding-terracotta/20">
        {time}
      </Badge>
      <span className="text-foreground">
        {event}
      </span>
    </div>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}