"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

extend({ ThreeGlobe });

export interface Position {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

export interface GlobeConfig {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

let numbersOfRings = [0];

function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    | {
        size: number;
        order: number;
        color: (t: number) => string;
        lat: number;
        lng: number;
      }[]
    | null
  >(null);

  const globeRef = useRef<any>(null);
  const { scene } = useThree();

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial();
    globeMaterial.color = new Color(globeConfig.globeColor || "#1d072e");
    globeMaterial.emissive = new Color(globeConfig.emissive || "#000000");
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;

    scene.fog = new Fog(0xffffff, 400, 2000);
  };

  const _buildData = () => {
    const arcs = data;
    const points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: 1.0,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: 1.0,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    const filteredPoints = points.filter(
      (d) => d.order <= numbersOfRings[0]
    );
    setGlobeData(filteredPoints);
  };

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(globeConfig.showAtmosphere !== false)
        .atmosphereColor(globeConfig.atmosphereColor || "#ffffff")
        .atmosphereAltitude(globeConfig.atmosphereAltitude || 0.1)
        .hexPolygonColor(() => globeConfig.polygonColor || "rgba(255,255,255,0.7)");

      globeRef.current
        .arcsData(data)
        .arcStartLat((d: any) => d.startLat)
        .arcStartLng((d: any) => d.startLng)
        .arcEndLat((d: any) => d.endLat)
        .arcEndLng((d: any) => d.endLng)
        .arcColor((d: any) => d.color)
        .arcAltitude((d: any) => d.arcAlt)
        .arcStroke(() => 0.5)
        .arcDashLength(globeConfig.arcLength || 0.9)
        .arcDashGap(2)
        .arcDashAnimateTime(globeConfig.arcTime || 1000)
        .arcsTransitionDuration(0)
        .arcDashInitialGap((d: any) => d.order * 1);

      globeRef.current
        .pointsData(globeData)
        .pointColor((d: any) => d.color)
        .pointsMerge(true)
        .pointAltitude(0.0)
        .pointRadius(2);
    }
  }, [globeData]);

  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      numbersOfRings[0] = numbersOfRings[0] + 1;
      const filteredPoints = globeData.filter(
        (d) => d.order <= numbersOfRings[0]
      );

      globeRef.current.pointsData(filteredPoints);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeData]);

  return (
    <>
      {/* @ts-ignore */}
      <threeGlobe ref={globeRef} />
    </>
  );
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, 800 / 600, 180, 1800)}>
      <ambientLight color={globeConfig.ambientLight || "#ffffff"} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight || "#ffffff"}
        position={new Vector3(-400, 100, 400)}
        intensity={0.8}
      />
      <directionalLight
        color={globeConfig.directionalTopLight || "#ffffff"}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <pointLight
        color={globeConfig.pointLight || "#ffffff"}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={250}
        maxDistance={600}
        autoRotate={globeConfig.autoRotate !== false}
        autoRotateSpeed={globeConfig.autoRotateSpeed || 1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
