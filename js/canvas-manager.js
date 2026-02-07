class CanvasManager {
    constructor(canvasElement) {
        this.canvas = new fabric.Canvas(canvasElement);
    }

    addImage(url, options = {}) {
        fabric.Image.fromURL(url, (img) => {
            img.set(options);
            this.canvas.add(img);
        });
    }

    addGIF(url, options = {}) {
        const gif = new fabric.Image();
        gif.setSrc(url, () => {
            gif.set(options);
            this.canvas.add(gif);
        });
    }

    addText(text, options = {}) {
        const textObj = new fabric.Text(text, options);
        this.canvas.add(textObj);
    }

    duplicateObject() {
        const activeObject = this.canvas.getActiveObject();
        if (activeObject) {
            const clone = fabric.util.object.clone(activeObject);
            clone.set({
                left: activeObject.left + 10,
                top: activeObject.top + 10,
            });
            this.canvas.add(clone);
            this.canvas.renderAll();
        }
    }

    deleteObject() {
        const activeObject = this.canvas.getActiveObject();
        if (activeObject) {
            this.canvas.remove(activeObject);
            this.canvas.renderAll();
        }
    }

    sendToBack() {
        const activeObject = this.canvas.getActiveObject();
        if (activeObject) {
            this.canvas.sendToBack(activeObject);
            this.canvas.renderAll();
        }
    }

    sendToFront() {
        const activeObject = this.canvas.getActiveObject();
        if (activeObject) {
            this.canvas.bringToFront(activeObject);
            this.canvas.renderAll();
        }
    }

    exportCanvas() {
        return this.canvas.toDataURL();
    }
}

export default CanvasManager;