'use client';

import React, { useEffect, useRef } from 'react';

const MetaballsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Responsive canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth * 0.75;
      canvas.height = window.innerHeight * 0.75;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const numMetaballs = 30;
    const metaballs: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    for (let i = 0; i < numMetaballs; i++) {
      const radius = Math.random() * 60 + 10;
      metaballs.push({
        x: Math.random() * (canvas.width - 2 * radius) + radius,
        y: Math.random() * (canvas.height - 2 * radius) + radius,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        r: radius * 0.75,
      });
    }

    // Shaders
    const vertexShaderSrc = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSrc = `
      precision highp float;
      const float WIDTH = ${canvas.width}.0;
      const float HEIGHT = ${canvas.height}.0;
      uniform vec3 metaballs[${numMetaballs}];

      void main() {
        float x = gl_FragCoord.x;
        float y = gl_FragCoord.y;
        float sum = 0.0;

        for (int i = 0; i < ${numMetaballs}; i++) {
          vec3 m = metaballs[i];
          float dx = m.x - x;
          float dy = m.y - y;
          sum += (m.z * m.z) / (dx*dx + dy*dy);
        }

        if (sum >= 0.99) {
          vec3 color = mix(
            vec3(0.1, 0.7, 0.4),        // Deep emerald green
            vec3(0.0, 0.4, 0.2),        // Dark forest green
            clamp((sum - 0.99) * 100.0, 0.0, 1.0)
          );
          gl_FragColor = vec4(color, 1.0);
        } else {
          gl_FragColor = vec4(0.02, 0.1, 0.05, 1.0); // Very dark green background
        }
      }
    `;

    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER)!;
    const fragmentShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER)!;

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link failed:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad
    const vertices = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const metaballsLoc = gl.getUniformLocation(program, 'metaballs');

    // Animation loop
    const animate = () => {
      // Update metaballs
      for (const m of metaballs) {
        m.x += m.vx;
        m.y += m.vy;
        if (m.x < m.r || m.x > canvas.width - m.r) m.vx *= -1;
        if (m.y < m.r || m.y > canvas.height - m.r) m.vy *= -1;
      }

      // Send to GPU
      const data = new Float32Array(numMetaballs * 3);
      metaballs.forEach((m, i) => {
        data[i * 3] = m.x;
        data[i * 3 + 1] = m.y;
        data[i * 3 + 2] = m.r;
      });
      gl.uniform3fv(metaballsLoc, data);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-screen -z-10 opacity-80"
      style={{ background: '#02120a' }} // fallback dark green
    />
  );
};

export default MetaballsBackground;