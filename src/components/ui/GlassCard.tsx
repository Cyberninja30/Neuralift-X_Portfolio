import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hoverEffect ? { scale: 1.02, borderColor: 'var(--primary)' } : {}}
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-6 shadow-xl transition-colors duration-300",
                className
            )}
        >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {children}
        </motion.div>
    );
}
