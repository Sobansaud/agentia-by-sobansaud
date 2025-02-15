"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create glowing spheres with better materials
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x4A90E2,
      transparent: true,
      opacity: 0.6,
      shininess: 100
    })

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

    // Add point lights
    const light1 = new THREE.PointLight(0x4A90E2, 2, 50)
    light1.position.set(10, 10, 10)
    scene.add(light1)

    const light2 = new THREE.PointLight(0x8B5CF6, 2, 50)
    light2.position.set(-10, -10, -10)
    scene.add(light2)

    // Create spheres with random positions and sizes
    const spheres: THREE.Mesh[] = []
    for (let i = 0; i < 20; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial.clone())
      const scale = 0.2 + Math.random() * 0.8
      sphere.scale.set(scale, scale, scale)
      sphere.position.set(
        Math.random() * 40 - 20,
        Math.random() * 40 - 20,
        Math.random() * 40 - 20
      )
      scene.add(sphere)
      spheres.push(sphere)
    }

    // Add connecting lines between spheres
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x4A90E2,
      transparent: true,
      opacity: 0.2
    })

    const lines: THREE.Line[] = []
    spheres.forEach((sphere, i) => {
      spheres.slice(i + 1).forEach(otherSphere => {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          sphere.position,
          otherSphere.position
        ])
        const line = new THREE.Line(geometry, lineMaterial)
        scene.add(line)
        lines.push(line)
      })
    })

    camera.position.z = 30

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate spheres
      spheres.forEach((sphere) => {
        sphere.rotation.x += 0.005
        sphere.rotation.y += 0.005
        sphere.position.y += Math.sin(Date.now() * 0.001) * 0.02
      })

      // Update lines positions
      lines.forEach(line => {
        const positions = line.geometry.attributes.position.array as Float32Array
        const [sphere1, sphere2] = spheres
        positions[0] = sphere1.position.x
        positions[1] = sphere1.position.y
        positions[2] = sphere1.position.z
        positions[3] = sphere2.position.x
        positions[4] = sphere2.position.y
        positions[5] = sphere2.position.z
        line.geometry.attributes.position.needsUpdate = true
      })

      // Rotate camera slightly
      camera.position.x = Math.sin(Date.now() * 0.0002) * 2
      camera.position.y = Math.cos(Date.now() * 0.0002) * 2
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      // Cleanup resources
      spheres.forEach(sphere => {
        sphere.geometry.dispose()
        ;(sphere.material as THREE.Material).dispose()
      })
      lines.forEach(line => {
        line.geometry.dispose()
        ;(line.material as THREE.Material).dispose()
      })
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10" />
} 