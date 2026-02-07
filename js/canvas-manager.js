class CanvasManager {
  constructor(canvasId) {
    this.canvas = new fabric.Canvas(canvasId);
  }

  addImage(url) {
    fabric.Image.fromURL(url, (img) => {
      this.canvas.add(img);
    });
  }

  addGif(url) {
    fabric.Image.fromURL(url, (img) => {
      img.set({ selectable: true });
      this.canvas.add(img);
    });
  }

  addText(text) {
    const textObj = new fabric.Text(text, { left: 100, top: 100 });
    this.canvas.add(textObj);
  }

  duplicate(object) {
    const clone = fabric.util.object.clone(object);
    this.canvas.add(clone);
  }

  delete(object) {
    this.canvas.remove(object);
  }

  bringToFront(object) {
    this.canvas.bringToFront(object);
  }

  sendToBack(object) {
    this.canvas.sendToBack(object);
  }
}