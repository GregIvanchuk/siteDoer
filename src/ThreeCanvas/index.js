import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
  const canvasRef = useRef(null);
  const scene = useRef(null);
  const camera = useRef(null);
  const renderer = useRef(null);
  const sphere = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(400); // Стейт для ширини канвасу
  const [canvasHeight, setCanvasHeight] = useState(400); // Стейт для висоти канвасу

  useEffect(() => {
    // Функція для оновлення розмірів канвасу
    const updateCanvasSize = () => {
      const newWidth = window.innerWidth >= 600 ? 400 : 300;
      const newHeight = window.innerWidth >= 600 ? 400 : 300;
      setCanvasWidth(newWidth);
      setCanvasHeight(newHeight);
      camera.current.aspect = newWidth / newHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(newWidth, newHeight);
    };

    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 0.1, 1000);
    renderer.current = new THREE.WebGLRenderer();

    renderer.current.setSize(canvasWidth, canvasHeight);
    canvasRef.current.appendChild(renderer.current.domElement);

    const geometry = new THREE.SphereGeometry(30, 20, 20);
    const wireframe = new THREE.WireframeGeometry(geometry);

    const material = new THREE.LineBasicMaterial({ color: new THREE.Color(0.184, 0, 0.306) });
    sphere.current = new THREE.LineSegments(wireframe, material);
    scene.current.add(sphere.current);

    camera.current.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);

      if (sphere.current) {
        sphere.current.rotation.x += 0.01;
        sphere.current.rotation.y += 0.01;
      }

      renderer.current.render(scene.current, camera.current);
    };

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.current.domElement.remove();
    };
  }, []);

  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} ref={canvasRef} />;
};

export default ThreeCanvas;
