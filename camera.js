export class Camera {
  constructor(map, widht, height) {
    this.map = map
    this.widht = widht
    this.height = height
    this.x = 128
    this.y = 128
    this.maxX = this.map.image.width - this.widht
    this.maxY = this.map.image.height - this.height
    this.speed = 256
  }

  move(deltaTime, speedX, speedY) {
    this.x += speedX * this.speed * deltaTime
    this.y += speedY * this.speed * deltaTime

    this.x = Math.max(0, Math.min(this.x, this.maxX))
    this.y = Math.max(0, Math.min(this.y, this.maxY))
  }
}
