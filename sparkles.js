function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (typeof registerPaint !== 'undefined') {
  class Sparkles {
    paint(ctx, size, val) {
      const sparkles = 30;
      const minHeight = 3;
      const maxHeight = 12;
      const minWidth = 3;
      const maxWidth = 14;
      const minWeight = 1;
      const maxWeight = 3;
      
      for (var i = 0; i < sparkles; i++) {
        const x = Math.random() * size.width;
        const y = Math.random() * (size.height - maxHeight);
        const sparkleHeight = getRandom(minHeight, maxHeight);
        const sparkleWidth = getRandom(minWidth, maxWidth);
        const strokeWidth = getRandom(minWeight, maxWeight);
        
        // Set Color
        const hue = getRandom(40,60);
        const sat = getRandom(90,100);
        const light = getRandom(50,100);
        const color = `hsl(${hue}deg, ${sat}%, ${light}%)`
        
        // Set Stroke Info
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = color;
        
        // Paint
        ctx.beginPath();
        ctx.moveTo((x - sparkleWidth / 2), sparkleHeight/2 + y);
        ctx.lineTo((x + sparkleWidth / 2), sparkleHeight/2 + y);
        ctx.moveTo(x, 0 + y);
        ctx.lineTo(x, sparkleHeight + y)
        ctx.stroke();
      }
    }
  }
  
  registerPaint('sparkles', Sparkles);
}