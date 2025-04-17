import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useWindowSize } from '@/hooks/use-mobile';

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (!containerRef.current) return;

    // Create Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create Camera
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a clock for animation
    clockRef.current = new THREE.Clock();

    // Create Geometry - using a complex shape by combining geometries
    const baseGeometry = new THREE.IcosahedronGeometry(2, 1);
    
    // Create Material with a gradient and lighting effect
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1, // Indigo color to match theme
      emissive: 0x10173a,
      specular: 0xffffff,
      shininess: 100,
      flatShading: true,
      transparent: true,
      opacity: 0.9,
      wireframe: false,
    });

    // Create Mesh
    const mesh = new THREE.Mesh(baseGeometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add point light
    const pointLight = new THREE.PointLight(0x6366f1, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      if (!meshRef.current || !clockRef.current) return;

      const elapsedTime = clockRef.current.getElapsedTime();
      
      // Rotate the mesh
      meshRef.current.rotation.x = elapsedTime * 0.2;
      meshRef.current.rotation.y = elapsedTime * 0.3;
      
      // Add some floating motion
      meshRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.2;
      
      // "Breathe" effect by scaling slightly
      const scale = 1 + Math.sin(elapsedTime) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);

      // Render the scene
      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.render(scene, cameraRef.current);
      }
    };

    // Start animation
    animate();

    // Mouse interaction for rotating the object
    const handleMouseMove = (event: MouseEvent) => {
      if (!meshRef.current || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Subtle rotation based on mouse position
      meshRef.current.rotation.x = mouseY * 0.5;
      meshRef.current.rotation.y = mouseX * 0.5;
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);

    // Clean up
    return () => {
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle resize
  useEffect(() => {
    if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
    
    cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
  }, [windowSize]);

  return <div ref={containerRef} className="w-full h-full" />;
}
