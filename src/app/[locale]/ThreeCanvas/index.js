'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const sphereRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 330, height: 330 });
  const [webglError, setWebglError] = useState(false);

  // Обчислення розміру залежно від ширини вікна
  const getSize = useCallback(() => {
    const size = window.innerWidth >= 600 ? 400 : 330;
    return { width: size, height: size };
  }, []);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const { width, height } = getSize();

    // 1. Перевірка доступності WebGL
    const testCanvas = document.createElement('canvas');
    const gl =
      testCanvas.getContext('webgl2') ||
      testCanvas.getContext('webgl') ||
      testCanvas.getContext('experimental-webgl');

    if (!gl) {
      console.warn('WebGL недоступний у цьому браузері/пристрої');
      setWebglError(true);
      return;
    }

    // 2. Ініціалізація сцени, камери, рендерера
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    cameraRef.current.position.z = 50;

    try {
      rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) {
      console.error('Не вдалося створити WebGLRenderer:', e);
      setWebglError(true);
      return;
    }

    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current.setSize(width, height);
    container.appendChild(rendererRef.current.domElement);

    // 3. Геометрія сфери
    const geometry = new THREE.SphereGeometry(30, 20, 20);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0x4c219e });
    sphereRef.current = new THREE.LineSegments(wireframe, material);
    sceneRef.current.add(sphereRef.current);

    // 4. Анімація
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (sphereRef.current) {
        sphereRef.current.rotation.x += 0.01;
        sphereRef.current.rotation.y += 0.01;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // 5. Обробка ресайзу
    const handleResize = () => {
      const newSize = getSize();
      setCanvasSize(newSize);

      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = newSize.width / newSize.height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(newSize.width, newSize.height);
      }
    };

    window.addEventListener('resize', handleResize);

    // 6. Очищення
    return () => {
      window.removeEventListener('resize', handleResize);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Видаляємо об'єкти зі сцени та звільняємо ресурси
      if (sphereRef.current) {
        sceneRef.current?.remove(sphereRef.current);
        sphereRef.current.geometry?.dispose();
        sphereRef.current.material?.dispose();
        sphereRef.current = null;
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement.parentNode === container) {
          container.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current = null;
      }

      sceneRef.current = null;
      cameraRef.current = null;
    };
  }, [getSize]);

  if (webglError) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          color: '#999',
          fontSize: '14px',
          textAlign: 'center',
          padding: '16px',
        }}
      >
        WebGL недоступний у вашому браузері
      </div>
    );
  }

  return (
    <div
      ref={canvasRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: canvasSize.width,
        height: canvasSize.height,
      }}
    />
  );
};

export default ThreeCanvas;
