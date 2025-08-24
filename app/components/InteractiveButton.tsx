'use client'

import Link from 'next/link'

interface InteractiveButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
}

export default function InteractiveButton({ 
  href, 
  children, 
  className, 
  style = {}, 
  hoverStyle = {} 
}: InteractiveButtonProps) {
  return (
    <Link 
      href={href}
      className={className}
      style={style}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, style);
      }}
    >
      {children}
    </Link>
  );
}