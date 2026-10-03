import React from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
}

export function Card3D({ children, className = "" }: Card3DProps) {
  return (
    <div
      className={`group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
