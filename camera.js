export class Camera {
  constructor(map, widht, height) {
    this.map = map
    this.width = widht
    this.height = height
    this.x = 0
    this.y = 0
    this.maxX = map.cols * map.tileSize - this.width
    this.maxY = map.rows * map.tileSize - this.height
    this.speed = 256
  }

  move(deltaTime, speedX, speedY) {
    this.x += speedX * this.speed * deltaTime
    this.y += speedY * this.speed * deltaTime

    this.x = Math.max(0, Math.min(this.x, this.maxX))
    this.y = Math.max(0, Math.min(this.y, this.maxY))
  }
}
