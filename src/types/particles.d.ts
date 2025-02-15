declare module "react-tsparticles" {
  import { Engine } from "tsparticles-engine";
  
  interface ParticlesProps {
    id?: string;
    init?: (engine: Engine) => Promise<void>;
    options?: any;
    className?: string;
  }
  
  const Particles: React.FC<ParticlesProps>;
  export default Particles;
}

declare module "tsparticles-slim" {
  import { Engine } from "tsparticles-engine";
  
  export function loadSlim(engine: Engine): Promise<void>;
} 