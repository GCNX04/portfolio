'use client';

import Particles from './Particles';
import { useTheme } from 'next-themes';

export default function ClientParticles() {
  const { resolvedTheme } = useTheme()
  const particleColor = (resolvedTheme ?? 'light') === 'dark' ? '#ffffff' : '#000000'

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        particleColors={[particleColor]}
        particleCount={200}
        particleSpread={15}
        speed={0.05}
        particleBaseSize={150}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
        className="h-full w-full"
      />
    </div>
  );
}