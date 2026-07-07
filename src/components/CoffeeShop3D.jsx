import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ClampToEdgeWrapping, TextureLoader } from "three";

const FRAME_TOP = 1.42;
const FRAME_BOTTOM = 0.05;
const FRAME_HEIGHT = FRAME_TOP - FRAME_BOTTOM;
const FRAME_CENTER_Y = (FRAME_TOP + FRAME_BOTTOM) / 2;
const FRAME_LEFT = -1.25;
const FRAME_WIDTH = 2.5;

// Small looping steam puff: rises, fades, and grows, then resets via the
// modulo on elapsed time so it can loop forever without state.
function Steam({ position, delay = 0 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() + delay) % 2.2;
    ref.current.position.y = position[1] + t * 0.7;
    ref.current.position.x = position[0] + Math.sin(t * 3) * 0.05;
    ref.current.material.opacity = Math.max(0, 0.55 - t * 0.28);
    const scale = 0.4 + t * 0.35;
    ref.current.scale.set(scale, scale, scale);
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.06, 8, 8]} />
      <meshStandardMaterial color="#ffffff" transparent opacity={0.5} />
    </mesh>
  );
}

// A cute, low-poly Casa TK storefront built from primitives (no external
// model files) — the real logo texture goes on the sign, and a real photo
// of the shop's interior goes on the window panes so it reads as "the same
// storefront" rather than a generic cafe.
function Shop() {
  const groupRef = useRef();
  const logoTexture = useLoader(TextureLoader, "/logo.jpeg");
  const interiorTexture = useLoader(TextureLoader, "/storefront-interior.jpg");

  // Slice the one interior photo across the three panes (using texture
  // offset/repeat) so it reads as a single continuous window, matching the
  // wide black-framed storefront in the reference photo, instead of the
  // same image tiled three times.
  const paneTextures = useMemo(() => {
    const makePane = (paneLeft, paneWidth) => {
      const tex = interiorTexture.clone();
      tex.wrapS = ClampToEdgeWrapping;
      tex.wrapT = ClampToEdgeWrapping;
      tex.repeat.set(paneWidth / FRAME_WIDTH, 1);
      tex.offset.set((paneLeft - FRAME_LEFT) / FRAME_WIDTH, 0);
      tex.needsUpdate = true;
      return tex;
    };
    return {
      left: makePane(FRAME_LEFT, 1.3),
      middle: makePane(0.09, 0.5),
      door: makePane(0.61, 0.64),
    };
  }, [interiorTexture]);

  // Gentle sway instead of a full 360° auto-rotate: the storefront detail
  // (window/door/sign) only exists on the front face, so a full orbit spent
  // half its time showing a blank back wall. Swaying within a narrow arc
  // keeps the storefront always in view while still reading as "animated".
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.35;
  });

  return (
    <group ref={groupRef}>
      {/* Building body */}
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 1.5, 1.8]} />
        <meshStandardMaterial color="#fbf1e4" />
      </mesh>

      {/* Awning */}
      <mesh position={[0, 1.55, 1.05]} rotation={[-0.15, 0, 0]} castShadow>
        <boxGeometry args={[2.8, 0.15, 0.7]} />
        <meshStandardMaterial color="#211c2c" />
      </mesh>
      <mesh position={[0, 1.52, -0.3]}>
        <boxGeometry args={[2.7, 0.1, 1.2]} />
        <meshStandardMaterial color="#d9628f" />
      </mesh>

      {/* Black-framed storefront glass, based on the shop's real window:
          one wide left pane, a narrower pane, then the door pane on the
          right, all showing the actual interior through the glass. Each
          layer (backer / glass / mullions / handle) keeps a >=0.02 gap in z
          from its neighbor so coplanar surfaces never z-fight/flicker. */}
      <mesh position={[0, FRAME_CENTER_Y, 0.895]}>
        <boxGeometry args={[FRAME_WIDTH + 0.02, FRAME_HEIGHT + 0.06, 0.03]} />
        <meshStandardMaterial color="#0d0b12" />
      </mesh>

      <mesh position={[-0.6, FRAME_CENTER_Y, 0.94]}>
        <planeGeometry args={[1.28, FRAME_HEIGHT - 0.04]} />
        <meshStandardMaterial map={paneTextures.left} />
      </mesh>
      <mesh position={[0.33, FRAME_CENTER_Y, 0.94]}>
        <planeGeometry args={[0.48, FRAME_HEIGHT - 0.04]} />
        <meshStandardMaterial map={paneTextures.middle} />
      </mesh>
      <mesh position={[0.93, FRAME_CENTER_Y, 0.94]}>
        <planeGeometry args={[0.62, FRAME_HEIGHT - 0.04]} />
        <meshStandardMaterial map={paneTextures.door} />
      </mesh>

      {/* Vertical mullions dividing the panes */}
      <mesh position={[0.07, FRAME_CENTER_Y, 0.97]}>
        <boxGeometry args={[0.04, FRAME_HEIGHT, 0.02]} />
        <meshStandardMaterial color="#0d0b12" />
      </mesh>
      <mesh position={[0.61, FRAME_CENTER_Y, 0.97]}>
        <boxGeometry args={[0.04, FRAME_HEIGHT, 0.02]} />
        <meshStandardMaterial color="#0d0b12" />
      </mesh>

      {/* Door handle hint on the rightmost pane */}
      <mesh position={[1.15, 0.5, 1.0]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial color="#e8c9d4" metalness={0.3} />
      </mesh>

      {/* Sign plaque using the real Casa TK logo as a texture. A circle
          geometry's UVs map exactly to the inscribed circle of the square
          texture, so the logo's white corner background is never sampled. */}
      <mesh position={[0, 1.78, 0.68]}>
        <circleGeometry args={[0.26, 32]} />
        <meshStandardMaterial map={logoTexture} />
      </mesh>

      {/* Mini cup + rising steam out front */}
      <mesh position={[1.4, 0.11, 1.15]} castShadow>
        <cylinderGeometry args={[0.12, 0.09, 0.22, 16]} />
        <meshStandardMaterial color="#f2a8c7" />
      </mesh>
      <Steam position={[1.4, 0.28, 1.15]} delay={0} />
      <Steam position={[1.4, 0.28, 1.15]} delay={0.75} />
      <Steam position={[1.4, 0.28, 1.15]} delay={1.5} />
    </group>
  );
}

export default function CoffeeShop3D() {
  return (
    <div className="h-72 sm:h-96 w-full">
      <Canvas camera={{ position: [3.3, 2.1, 3.7], fov: 42 }} shadows>
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} color="#ffe4ef" castShadow />
        <pointLight position={[-3, 1, -2]} intensity={0.5} color="#f2a8c7" />
        <Suspense fallback={null}>
          <Shop />
        </Suspense>
        <OrbitControls
          target={[0, 0.7, 0]}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
}
