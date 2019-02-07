if (typeof registerPaint !== 'undefined') {
  class Rainbowtize {
    paint(ctx, size) {
      const w = size.width;
      const h = size.height;

      for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
          ctx.fillStyle = 'rgb(' +
            Math.floor(255 - 20 * i) + ', ' +
            Math.floor(255 - 20 * j) + ', 200)';
          ctx.fillRect(j * 25, i * 25, 25, 25);
        }
      }
    }
  }

  registerPaint('rainbowtize', Rainbowtize);
}
