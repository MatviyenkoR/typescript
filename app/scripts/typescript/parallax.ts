/**
* Test
*/
import * as $ from 'jquery';

export class ParallaxContainer {
    private stars: {} = {};
    private totalStars: number;
    private content: CanvasRenderingContext2D;
    private mousecoords: number[];
    private adjustmentPoint: number[] = [0, 0];
    private canvasWidth: number = document.body.clientWidth;
    private canvasHeight: number = document.body.clientHeight;

        constructor(private canvas: HTMLCanvasElement,
            maxStars: number) {

          this.makeStars(maxStars);
          this.content = canvas.getContext('2d');
          requestAnimationFrame(this.drawStars);

          $('#starfield').mousemove( (evt) => {
            this.mousecoords = [evt.clientX, evt.clientY];
            this.adjustmentPoint = [(this.mousecoords[0] - (this.canvasWidth / 2)) / 25, (this.mousecoords[1] - (this.canvasHeight / 2)) / 25];
          });
        }

    private updateStars = () => {
      for (let i = 0; i < this.totalStars; i = i + 1) {
        this.stars[i][0] += this.adjustmentPoint[0] * this.stars[i][2] / 10;
        this.stars[i][1] += this.adjustmentPoint[1] * this.stars[i][2] / 10;
        if (this.stars[i][0] >= this.canvasWidth) {
          this.stars[i][0] = -5;
        }
        if (this.stars[i][1] >= this.canvasHeight) {
          this.stars[i][1] = -5;
        }
        if (this.stars[i][0] < -6) {
          this.stars[i][0] = this.canvasWidth;
        }
        if (this.stars[i][1] < -6) {
          this.stars[i][1] = this.canvasHeight;
        }
      }
    }

    private drawStars = (): void => {
      this.content.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.content.fillStyle = '#FFF';
      for (let i = 0; i < this.totalStars; i = i + 1) {
        this.content.fillRect(this.stars[i][0], this.stars[i][1], this.stars[i][2], this.stars[i][2]);
      }
      this.updateStars();
      requestAnimationFrame(this.drawStars);
    }

    private makeStars(maxstars: number): void {
      this.totalStars = (Math.floor(this.canvasWidth / 72)) * (Math.floor(this.canvasHeight / 72)) * maxstars;

      let randomX: number;
      let randomY: number;
      let randomZ: number;
      const sortable: number[] = [];
      for (let i = 0; i < this.totalStars; i = i + 1) {
        randomX = Math.random() * (this.canvasWidth - 1) + 1;
        randomY = Math.random() * (this.canvasHeight - 1) + 1;
        randomZ = Math.random() * 5;
        this.stars[i] = [randomX, randomY, randomZ];
        sortable.push(randomZ);
      }
      sortable.sort();

      for (let i = 0; i < this.totalStars; i = i + 1) {
        this.stars[i][2] = sortable[i];
      }
    }
}
