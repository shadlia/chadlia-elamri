import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw } from 'lucide-react';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

type Point = { x: number; y: number };

export const SnakeGame = () => {
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Point>({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const gameLoopRef = useRef<NodeJS.Timeout>();

  const generateFood = useCallback((): Point => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }, []);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 1, y: 0 });
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
  };

  const checkCollision = (head: Point) => {
    // Wall collision
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE
    ) {
      return true;
    }
    // Self collision
    for (const segment of snake) {
      if (head.x === segment.x && head.y === segment.y) {
        return true;
      }
    }
    return false;
  };

  const moveSnake = useCallback(() => {
    if (gameOver || !isPlaying) return;

    setSnake((prevSnake) => {
      const newHead = {
        x: prevSnake[0].x + direction.x,
        y: prevSnake[0].y + direction.y,
      };

      if (checkCollision(newHead)) {
        setGameOver(true);
        setIsPlaying(false);
        if (score > highScore) setHighScore(score);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((s) => s + 1);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, isPlaying, score, highScore, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault(); // Prevent page scrolling
        
        switch (e.key) {
          case 'ArrowUp':
            if (direction.y === 0) setDirection({ x: 0, y: -1 });
            break;
          case 'ArrowDown':
            if (direction.y === 0) setDirection({ x: 0, y: 1 });
            break;
          case 'ArrowLeft':
            if (direction.x === 0) setDirection({ x: -1, y: 0 });
            break;
          case 'ArrowRight':
            if (direction.x === 0) setDirection({ x: 1, y: 0 });
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  useEffect(() => {
    if (isPlaying) {
      gameLoopRef.current = setInterval(moveSnake, INITIAL_SPEED);
    }
    return () => clearInterval(gameLoopRef.current);
  }, [isPlaying, moveSnake]);

  return (
    <div className="w-full max-w-md mx-auto bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-muted-foreground font-mono ml-2">python snake.py</div>
      </div>

      {/* Game Area */}
      <div className="p-4 bg-black/90 relative">
        <div 
          className="relative mx-auto bg-grid-white/[0.05] border border-white/10"
          style={{
            width: GRID_SIZE * CELL_SIZE,
            height: GRID_SIZE * CELL_SIZE,
          }}
        >
          {/* Snake */}
          {snake.map((segment, i) => (
            <div
              key={i}
              className="absolute rounded-sm transition-all duration-100"
              style={{
                left: segment.x * CELL_SIZE,
                top: segment.y * CELL_SIZE,
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                background: i === 0 
                  ? 'linear-gradient(135deg, #4a7c59 0%, #6b9b37 50%, #8bc34a 100%)' // Head - darker green
                  : i % 2 === 0
                  ? 'linear-gradient(135deg, #6b9b37 0%, #8bc34a 50%, #a4d65e 100%)' // Body - alternating green
                  : 'linear-gradient(135deg, #8bc34a 0%, #a4d65e 50%, #c5e1a5 100%)', // Body - lighter green
                boxShadow: i === 0 
                  ? '0 0 10px rgba(139, 195, 74, 0.6), inset -2px -2px 4px rgba(0,0,0,0.3)' 
                  : 'inset -1px -1px 2px rgba(0,0,0,0.2)',
                border: '1px solid rgba(74, 124, 89, 0.4)',
                opacity: 1,
              }}
            >
              {/* Snake head eyes */}
              {i === 0 && (
                <>
                  <div 
                    className="absolute bg-red-500 rounded-full"
                    style={{
                      width: '3px',
                      height: '3px',
                      top: '4px',
                      left: '4px',
                    }}
                  />
                  <div 
                    className="absolute bg-red-500 rounded-full"
                    style={{
                      width: '3px',
                      height: '3px',
                      top: '4px',
                      right: '4px',
                    }}
                  />
                </>
              )}
            </div>
          ))}

          {/* Food */}
          <div
            className="absolute bg-secondary rounded-full animate-pulse"
            style={{
              left: food.x * CELL_SIZE,
              top: food.y * CELL_SIZE,
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
            }}
          />

          {/* Overlay Messages */}
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <Button onClick={resetGame} className="gap-2">
                <Play className="w-4 h-4" /> Start Game
              </Button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm text-white">
              <h3 className="text-xl font-bold mb-2 text-red-500">Game Over!</h3>
              <p className="mb-4 text-sm">Score: {score}</p>
              <Button onClick={resetGame} variant="secondary" className="gap-2">
                <RotateCcw className="w-4 h-4" /> Try Again
              </Button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-4 flex justify-between text-sm font-mono text-muted-foreground">
          <div>Score: <span className="text-primary">{score}</span></div>
          <div>High Score: <span className="text-secondary">{highScore}</span></div>
        </div>
        
        <div className="mt-2 text-[10px] text-center text-muted-foreground/50">
          Use Arrow Keys to Move
        </div>
      </div>
    </div>
  );
};
