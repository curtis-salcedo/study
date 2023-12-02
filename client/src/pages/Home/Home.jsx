import React from 'react';
import { useEffect, useState, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
} from '@mui/material';

import { Link } from 'react-router-dom'; // Assuming you're using React Router

// Function to generate random number within a range
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Function to generate a random shape SVG
const generateRandomShape = () => {
  const shapes = ['circle', 'rect', 'polygon', 'ellipse', 'star'];
  const randomShape = shapes[getRandomNumber(0, shapes.length - 1)];

  if (randomShape === 'circle') {
    const cx = getRandomNumber(0, 100);
    const cy = getRandomNumber(0, 100);
    const radius = getRandomNumber(30, 60);
    return (
      <circle
        key={cx + cy}
        cx={`${cx}%`}
        cy={`${cy}%`}
        r={radius}
        fill={`hsl(${getRandomNumber(0, 360)}, 70%, 60%)`} // Random vibrant color
      />
    );
  } else if (randomShape === 'rect') {
    const x = getRandomNumber(0, 100);
    const y = getRandomNumber(0, 100);
    const width = getRandomNumber(30, 60);
    const height = getRandomNumber(30, 60);
    return (
      <rect
        key={x + y}
        x={`${x}%`}
        y={`${y}%`}
        width={width}
        height={height}
        fill={`hsl(${getRandomNumber(0, 360)}, 70%, 60%)`} // Random vibrant color
      />
    );
  } else if (randomShape === 'polygon') {
    const points = `${getRandomNumber(0, 100)},${getRandomNumber(0, 100)} ${getRandomNumber(0, 100)},${getRandomNumber(0, 100)} ${getRandomNumber(0, 100)},${getRandomNumber(0, 100)}`;
    return (
      <polygon
        key={points}
        points={points}
        fill={`hsl(${getRandomNumber(0, 360)}, 70%, 60%)`} // Random vibrant color
      />
    );
  } else if (randomShape === 'ellipse') {
    const cx = getRandomNumber(0, 100);
    const cy = getRandomNumber(0, 100);
    const rx = getRandomNumber(30, 60);
    const ry = getRandomNumber(30, 60);
    return (
      <ellipse
        key={cx + cy}
        cx={`${cx}%`}
        cy={`${cy}%`}
        rx={rx}
        ry={ry}
        fill={`hsl(${getRandomNumber(0, 360)}, 70%, 60%)`} // Random vibrant color
      />
    );
  } else if (randomShape === 'star') {
    const points = [];
    const centerX = getRandomNumber(20, 80);
    const centerY = getRandomNumber(20, 80);
    const spikes = getRandomNumber(5, 12);
    const outerRadius = getRandomNumber(30, 60);
    const innerRadius = outerRadius / 2;

    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / spikes;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }

    return (
      <polygon
        key={`${centerX}${centerY}`}
        points={points.join(' ')}
        fill={`hsl(${getRandomNumber(0, 360)}, 70%, 60%)`}
      />
    );
  };
};

export default function Main() {
  // Generate random shapes
  const numberOfShapes = getRandomNumber(7, 15);
  const randomShapes = [...Array(numberOfShapes)].map(() => generateRandomShape());
  const boxRef = useRef(null);
  const [ boxDimensions, setBoxDimensions ] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      setBoxDimensions({ width, height });
    }
    console.log(boxDimensions)
  }, []);

  useEffect(() => {
    const shapes = document.querySelectorAll('.random-shape');
  
    shapes.forEach((shape) => {
      const duration = getRandomNumber(15, 25);
      let directionX = Math.random() < 0.5 ? -1 : 1; // Random direction for X-axis (-1 or 1)
      let directionY = Math.random() < 0.5 ? -1 : 1; // Random direction for Y-axis (-1 or 1)
      const speed = .25; // Adjust the speed of the movement
  
      shape.style.animation = `floatAnimation ${duration}s linear infinite`;
  
      let posX = getRandomNumber(0, boxDimensions.width - shape.clientWidth); // Initial X position
      let posY = getRandomNumber(0, boxDimensions.height - shape.clientHeight); // Initial Y position
  
      const moveShape = () => {
        posX += speed * directionX;
        posY += speed * directionY;
  
        if (posX < 0 || posX > boxDimensions.width - shape.clientWidth) {
          directionX *= -1; // Reverse direction if hitting the container's edges on X-axis
          posX = Math.min(Math.max(posX, 0), boxDimensions.width - shape.clientWidth);
        }
        if (posY < 0 || posY > boxDimensions.height - shape.clientHeight) {
          directionY *= -1; // Reverse direction if hitting the container's edges on Y-axis
          posY = Math.min(Math.max(posY, 0), boxDimensions.height - shape.clientHeight);
        }
  
        shape.style.transform = `translate(${posX}px, ${posY}px)`;
        requestAnimationFrame(moveShape);
      };
  
      moveShape();
    });
  }, [boxDimensions]);


  return (
    <Box
    ref={boxRef}
    sx={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: `linear-gradient(to bottom right, #4525a4, #6b4adb)`, // Updated gradient
      backgroundImage: `radial-gradient(circle at top left, #4525a4, #6b4adb)`, // Added radial overlay
      color: '#FFFFFF',
      zIndex: 1, // Ensure the content stays on top
    }}
  >
        {/* Render the generated random shapes */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Ensure the SVG shapes stay behind the content
        }}
      >
        {randomShapes.map((shape, index) => (
          <g key={index} className="random-shape" sx={{ cursor:'pointer' }}>
            {shape}
          </g>
        ))}
      </svg>
      <Box sx={{ maxWidth: '600px', width: '100%', padding: '20px' }}> {/* Limiting max width */}
        <Paper elevation={3} sx={{ padding: '20px', backdropFilter: 'blur(5px)' }}>
          <Typography variant="h3" gutterBottom>
            Welcome to Study Buddy!
          </Typography>
          <Typography variant="body1" paragraph>
            Your personalized learning companion to help you ace your subjects and track your progress.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" component={Link} to="/subjects" size="large">
              Explore Subjects
            </Button>
            <Button variant="contained" component={Link} to="/categories" size="large">
              Browse Categories
            </Button>
            <Button variant="contained" component={Link} to="/topics" size="large">
              Discover Topics
            </Button>
          </Box>
          <Typography variant="body2" style={{ marginTop: '20px' }}>
            Study Buddy helps you organize your learning materials, track progress, and achieve your educational goals efficiently.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
