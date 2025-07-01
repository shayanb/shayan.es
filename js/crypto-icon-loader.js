/**
 * Crypto Icon Loader
 * Loads and renders crypto protocol SVG icons in the game
 */

class CryptoIconLoader {
    constructor() {
        this.loadedIcons = new Map();
        this.loadingPromises = new Map();
    }

    async loadIcon(protocol) {
        // Check if already loaded
        if (this.loadedIcons.has(protocol.filename)) {
            return this.loadedIcons.get(protocol.filename);
        }

        // Check if currently loading
        if (this.loadingPromises.has(protocol.filename)) {
            return this.loadingPromises.get(protocol.filename);
        }

        // Start loading
        const loadPromise = this.fetchAndProcessIcon(protocol);
        this.loadingPromises.set(protocol.filename, loadPromise);

        try {
            const iconData = await loadPromise;
            this.loadedIcons.set(protocol.filename, iconData);
            this.loadingPromises.delete(protocol.filename);
            return iconData;
        } catch (error) {
            console.warn(`Failed to load icon for ${protocol.name}:`, error);
            this.loadingPromises.delete(protocol.filename);
            return this.createFallbackIcon(protocol);
        }
    }

    async fetchAndProcessIcon(protocol) {
        const response = await fetch(`/js/crypto-data/${protocol.filename}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        
        if (data.svg) {
            return this.createIconFromSVG(data.svg, data.name);
        } else if (data.png_data) {
            return this.createIconFromPNG(data.png_data, data.name);
        } else {
            throw new Error('No valid icon data found');
        }
    }

    async createIconFromSVG(svgString, name) {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            canvas.width = 48;  // Smaller size
            canvas.height = 48; // Smaller size
            const ctx = canvas.getContext('2d');

            const img = new Image();
            const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(svgBlob);

            img.onload = () => {
                try {
                    // Clear canvas (no background for transparency)
                    ctx.clearRect(0, 0, 48, 48);
                    
                    // Set global alpha for transparency
                    ctx.globalAlpha = 0.85;
                    
                    // Draw the SVG with padding for smaller appearance
                    const padding = 4;
                    ctx.drawImage(img, padding, padding, 48 - padding * 2, 48 - padding * 2);
                    
                    URL.revokeObjectURL(url);
                    resolve({
                        canvas: canvas,
                        name: name,
                        type: 'svg'
                    });
                } catch (error) {
                    URL.revokeObjectURL(url);
                    reject(error);
                }
            };

            img.onerror = () => {
                URL.revokeObjectURL(url);
                reject(new Error('Failed to load SVG'));
            };

            img.src = url;
        });
    }

    async createIconFromPNG(pngData, name) {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            canvas.width = 48;  // Smaller size
            canvas.height = 48; // Smaller size
            const ctx = canvas.getContext('2d');

            const img = new Image();
            img.onload = () => {
                try {
                    // Clear canvas (no background for transparency)
                    ctx.clearRect(0, 0, 48, 48);
                    
                    // Set global alpha for transparency
                    ctx.globalAlpha = 0.85;
                    
                    // Draw the PNG with padding for smaller appearance
                    const padding = 4;
                    ctx.drawImage(img, padding, padding, 48 - padding * 2, 48 - padding * 2);
                    
                    resolve({
                        canvas: canvas,
                        name: name,
                        type: 'png'
                    });
                } catch (error) {
                    reject(error);
                }
            };

            img.onerror = () => {
                reject(new Error('Failed to load PNG'));
            };

            img.src = `data:image/png;base64,${pngData}`;
        });
    }

    createFallbackIcon(protocol) {
        const canvas = document.createElement('canvas');
        canvas.width = 48;  // Smaller size
        canvas.height = 48; // Smaller size
        const ctx = canvas.getContext('2d');

        // Create a simple fallback icon with transparency
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(4, 4, 40, 40);  // Smaller with padding

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const text = protocol.symbol || protocol.name.substring(0, 4);
        ctx.fillText(text, 24, 24);

        return {
            canvas: canvas,
            name: protocol.name,
            type: 'fallback'
        };
    }

    drawIcon(ctx, iconData, x, y, width = 48, height = 48) {
        if (iconData && iconData.canvas) {
            ctx.drawImage(iconData.canvas, x, y, width, height);
        }
    }
}