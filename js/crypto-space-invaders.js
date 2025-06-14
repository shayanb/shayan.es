/**
 * Crypto Space Invaders Game
 * A fun space invaders game using crypto protocol icons as enemies
 */

class CryptoSpaceInvaders {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Game state
        this.gameRunning = false;
        this.score = 0;
        this.lives = 3;
        this.wave = 1;
        this.weaponType = 0; // 0: arrow, 1: book, 2: tweet, 3: matrix
        this.weaponNames = ['Arrow', 'Book', 'Tweet', 'Matrix'];
        this.laserCount = 3; // Limited laser shots per game
        
        // Game objects
        this.player = null;
        this.projectiles = [];
        this.invaders = [];
        this.explosions = [];
        this.particles = [];
        
        // Input handling
        this.keys = {};
        this.lastShot = 0;
        
        // Crypto protocols data
        this.cryptoData = null;
        this.iconLoader = new CryptoIconLoader();
        this.audioSystem = new GameAudio();
        this.aggressiveProtocols = ['bitcoin', 'ethereum']; // These shoot back
        
        // Game settings
        this.settings = {
            playerSpeed: 5,
            projectileSpeed: 8,
            invaderSpeed: 0.5,
            invaderDropDistance: 20,
            shootCooldown: 300, // milliseconds
            invaderShootChance: 0.001,
            waveInvaderCount: 15
        };
        
        // Invader formation tracking
        this.invaderFormation = {
            direction: 1, // 1 for right, -1 for left
            edgeHit: false,
            leftmostX: 0,
            rightmostX: 0
        };
        
        // Initialize game
        this.init();
    }
    
    async init() {
        await this.loadCryptoData();
        this.setupPlayer();
        this.setupEventListeners();
        this.spawnInvaders();
        this.gameLoop();
    }
    
    async loadCryptoData() {
        try {
            const response = await fetch('/js/crypto-data/index.json');
            this.cryptoData = await response.json();
            console.log(`Loaded ${this.cryptoData.total_count} crypto protocols`);
        } catch (error) {
            console.error('Failed to load crypto data:', error);
            // Fallback data if file loading fails
            this.cryptoData = {
                protocols: [
                    { name: 'Bitcoin', symbol: 'BTC', filename: 'bitcoin.json' },
                    { name: 'Ethereum', symbol: 'ETH', filename: 'ethereum.json' },
                    { name: 'Uniswap', symbol: 'UNI', filename: 'uniswap.json' }
                ],
                total_count: 3
            };
        }
    }
    
    setupPlayer() {
        this.player = {
            x: this.canvas.width / 2 - 25,
            y: this.canvas.height - 80,
            width: 50,
            height: 60,
            speed: this.settings.playerSpeed
        };
    }
    
    setupEventListeners() {
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
            this.keys[e.code] = true;
            
            // Weapon switching
            if (e.key >= '1' && e.key <= '4') {
                this.weaponType = parseInt(e.key) - 1;
                this.updateUI();
            }
            
            // Prevent default for game keys
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
                e.preventDefault();
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
            this.keys[e.code] = false;
        });
        
        // Prevent context menu on canvas
        this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    
    async spawnInvaders() {
        const protocols = [...this.cryptoData.protocols];
        const invaderCount = Math.min(this.settings.waveInvaderCount + this.wave, protocols.length);
        
        // Shuffle protocols array
        for (let i = protocols.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [protocols[i], protocols[j]] = [protocols[j], protocols[i]];
        }
        
        for (let i = 0; i < invaderCount; i++) {
            const protocol = protocols[i];
            const col = i % 6;
            const row = Math.floor(i / 6);
            
            const invader = {
                x: 80 + col * 80,
                y: 60 + row * 60,
                width: 48,
                height: 48,
                protocol: protocol,
                health: 1,
                lastShot: 0,
                aggressive: this.aggressiveProtocols.includes(protocol.name.toLowerCase()),
                iconData: null
            };
            
            // Load icon asynchronously
            this.iconLoader.loadIcon(protocol).then(iconData => {
                invader.iconData = iconData;
            });
            
            this.invaders.push(invader);
        }
    }
    
    drawPlayer() {
        const p = this.player;
        this.ctx.save();
        
        // Draw cute stick figure with glasses
        this.ctx.strokeStyle = '#ff6b35';
        this.ctx.fillStyle = '#ff6b35';
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';
        
        // Head
        this.ctx.beginPath();
        this.ctx.arc(p.x + 25, p.y + 15, 12, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Glasses
        this.ctx.strokeStyle = '#1e3a5f';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(p.x + 19, p.y + 12, 6, 0, Math.PI * 2);
        this.ctx.arc(p.x + 31, p.y + 12, 6, 0, Math.PI * 2);
        this.ctx.moveTo(p.x + 25, p.y + 12);
        this.ctx.lineTo(p.x + 25, p.y + 12);
        this.ctx.stroke();
        
        // Bridge of glasses
        this.ctx.beginPath();
        this.ctx.moveTo(p.x + 25, p.y + 10);
        this.ctx.lineTo(p.x + 25, p.y + 14);
        this.ctx.stroke();
        
        // Body
        this.ctx.strokeStyle = '#ff6b35';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x + 25, p.y + 27);
        this.ctx.lineTo(p.x + 25, p.y + 50);
        this.ctx.stroke();
        
        // Arms (animated based on movement)
        const armOffset = Math.sin(Date.now() * 0.01) * 2;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x + 25, p.y + 35);
        this.ctx.lineTo(p.x + 15 + armOffset, p.y + 40);
        this.ctx.moveTo(p.x + 25, p.y + 35);
        this.ctx.lineTo(p.x + 35 - armOffset, p.y + 40);
        this.ctx.stroke();
        
        // Legs (animated)
        const legOffset = Math.sin(Date.now() * 0.015) * 3;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x + 25, p.y + 50);
        this.ctx.lineTo(p.x + 18 + legOffset, p.y + 60);
        this.ctx.moveTo(p.x + 25, p.y + 50);
        this.ctx.lineTo(p.x + 32 - legOffset, p.y + 60);
        this.ctx.stroke();
        
        this.ctx.restore();
    }
    
    drawInvaders() {
        this.invaders.forEach(invader => {
            // Draw the crypto icon if loaded, otherwise show placeholder
            if (invader.iconData) {
                this.iconLoader.drawIcon(
                    this.ctx, 
                    invader.iconData, 
                    invader.x, 
                    invader.y, 
                    invader.width, 
                    invader.height
                );
            } else {
                // Placeholder while loading
                this.ctx.fillStyle = invader.aggressive ? '#ef4444' : '#3b82f6';
                this.ctx.fillRect(invader.x, invader.y, invader.width, invader.height);
                
                // Protocol name
                this.ctx.fillStyle = '#ffffff';
                this.ctx.font = '12px Inter';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(
                    invader.protocol.symbol || invader.protocol.name.substring(0, 6),
                    invader.x + invader.width / 2,
                    invader.y + invader.height / 2 + 4
                );
            }
            
            // Aggressive indicator (red border)
            if (invader.aggressive) {
                this.ctx.strokeStyle = '#ff0000';
                this.ctx.lineWidth = 3;
                this.ctx.strokeRect(invader.x, invader.y, invader.width, invader.height);
            }
        });
    }
    
    drawProjectiles() {
        this.projectiles.forEach(projectile => {
            this.ctx.save();
            
            if (projectile.laserBeam) {
                // Draw laser beam
                this.ctx.strokeStyle = '#ff0040';
                this.ctx.lineWidth = 6;
                this.ctx.globalAlpha = 0.9;
                this.ctx.beginPath();
                this.ctx.moveTo(projectile.x, projectile.y);
                this.ctx.lineTo(projectile.x, 0);
                this.ctx.stroke();
                
                // Add glow effect
                this.ctx.strokeStyle = '#ff6080';
                this.ctx.lineWidth = 12;
                this.ctx.globalAlpha = 0.3;
                this.ctx.stroke();
            } else {
                this.ctx.translate(projectile.x, projectile.y);
                
                switch (projectile.type) {
                    case 0: // Arrow
                        this.ctx.strokeStyle = '#ffc947';
                        this.ctx.lineWidth = 3;
                        this.ctx.beginPath();
                        this.ctx.moveTo(0, 0);
                        this.ctx.lineTo(0, -15);
                        this.ctx.moveTo(-3, -12);
                        this.ctx.lineTo(0, -15);
                        this.ctx.lineTo(3, -12);
                        this.ctx.stroke();
                        break;
                        
                    case 1: // Book
                        this.ctx.fillStyle = '#8b4513';
                        this.ctx.fillRect(-4, -8, 8, 12);
                        this.ctx.strokeStyle = '#654321';
                        this.ctx.lineWidth = 1;
                        this.ctx.strokeRect(-4, -8, 8, 12);
                        break;
                        
                    case 2: // Tweet (bird)
                        this.ctx.fillStyle = '#1da1f2';
                        this.ctx.beginPath();
                        this.ctx.ellipse(0, 0, 6, 4, 0, 0, Math.PI * 2);
                        this.ctx.fill();
                        break;
                        
                    case 3: // Matrix code
                        this.ctx.fillStyle = '#00ff00';
                        this.ctx.font = '10px monospace';
                        this.ctx.textAlign = 'center';
                        this.ctx.fillText('10', 0, 3);
                        break;
                        
                    default: // Enemy projectiles
                        this.ctx.fillStyle = '#ff4444';
                        this.ctx.fillRect(-2, -4, 4, 8);
                        break;
                }
            }
            
            this.ctx.restore();
        });
    }
    
    drawExplosions() {
        this.explosions.forEach(explosion => {
            const progress = (Date.now() - explosion.startTime) / explosion.duration;
            if (progress > 1) return;
            
            this.ctx.save();
            this.ctx.translate(explosion.x, explosion.y);
            
            // Explosion particles
            const particleCount = 8;
            for (let i = 0; i < particleCount; i++) {
                const angle = (i / particleCount) * Math.PI * 2;
                const distance = progress * 30;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                this.ctx.fillStyle = `rgba(255, 107, 53, ${1 - progress})`;
                this.ctx.beginPath();
                this.ctx.arc(x, y, 3 * (1 - progress), 0, Math.PI * 2);
                this.ctx.fill();
            }
            
            this.ctx.restore();
        });
        
        // Remove finished explosions
        this.explosions = this.explosions.filter(
            explosion => Date.now() - explosion.startTime < explosion.duration
        );
    }
    
    updatePlayer() {
        // Movement
        if ((this.keys['arrowleft'] || this.keys['a']) && this.player.x > 0) {
            this.player.x -= this.player.speed;
        }
        if ((this.keys['arrowright'] || this.keys['d']) && this.player.x < this.canvas.width - this.player.width) {
            this.player.x += this.player.speed;
        }
        if ((this.keys['arrowup'] || this.keys['w']) && this.player.y > 0) {
            this.player.y -= this.player.speed;
        }
        if ((this.keys['arrowdown'] || this.keys['s']) && this.player.y < this.canvas.height - this.player.height) {
            this.player.y += this.player.speed;
        }
        
        // Shooting
        const now = Date.now();
        if ((this.keys['space'] || this.keys[' ']) && now - this.lastShot > this.settings.shootCooldown) {
            this.shoot();
            this.lastShot = now;
        }
    }
    
    shoot() {
        // Laser beam (Shift + Space)
        if (this.keys['shiftleft'] || this.keys['shiftright'] || this.keys['shift']) {
            if (this.laserCount > 0) {
                this.createLaserBeam();
                this.laserCount--;
                this.audioSystem.playLaser();
                this.updateUI();
            } else {
                // No more laser shots available - play error sound or use regular weapon
                this.audioSystem.playShoot(this.weaponType);
                this.projectiles.push({
                    x: this.player.x + this.player.width / 2 - 2,
                    y: this.player.y - 5,
                    width: 4,
                    height: 8,
                    speed: this.settings.projectileSpeed,
                    type: this.weaponType,
                    fromPlayer: true
                });
            }
        } else {
            // Regular projectile
            this.projectiles.push({
                x: this.player.x + this.player.width / 2 - 2,
                y: this.player.y - 5,
                width: 4,
                height: 8,
                speed: this.settings.projectileSpeed,
                type: this.weaponType,
                fromPlayer: true
            });
            this.audioSystem.playShoot(this.weaponType);
        }
    }
    
    createLaserBeam() {
        // Create laser beam effect - destroy all invaders in vertical line
        const laserX = this.player.x + this.player.width / 2;
        
        // Create visual laser beam projectile that travels upward
        this.projectiles.push({
            x: laserX - 2,
            y: this.player.y,
            width: 4,
            height: this.canvas.height,
            speed: this.settings.projectileSpeed * 3,
            type: 'laser',
            fromPlayer: true,
            laserBeam: true
        });
        
        this.updateUI();
    }
    
    updateProjectiles() {
        this.projectiles.forEach(projectile => {
            if (projectile.fromPlayer) {
                projectile.y -= projectile.speed;
            } else {
                projectile.y += projectile.speed;
            }
        });
        
        // Remove off-screen projectiles
        this.projectiles = this.projectiles.filter(projectile => 
            projectile.y > -20 && projectile.y < this.canvas.height + 20
        );
    }
    
    updateInvaders() {
        if (this.invaders.length === 0) return;
        
        // Find leftmost and rightmost invaders
        let leftmost = this.invaders[0];
        let rightmost = this.invaders[0];
        
        this.invaders.forEach(invader => {
            if (invader.x < leftmost.x) leftmost = invader;
            if (invader.x > rightmost.x) rightmost = invader;
        });
        
        // Check if formation hits edges
        const hitLeftEdge = leftmost.x <= 20;
        const hitRightEdge = rightmost.x + rightmost.width >= this.canvas.width - 20;
        
        // Handle edge collision - drop down and reverse direction
        if ((hitLeftEdge || hitRightEdge) && !this.invaderFormation.edgeHit) {
            this.invaders.forEach(invader => {
                invader.y += this.settings.invaderDropDistance;
            });
            this.invaderFormation.direction *= -1;
            this.invaderFormation.edgeHit = true;
            // Don't move horizontally this frame, let them drop first
        } else {
            // Always move horizontally when not in edge collision state
            this.invaders.forEach(invader => {
                invader.x += this.settings.invaderSpeed * this.invaderFormation.direction;
            });
            
            // Reset edge hit flag after moving away from edges
            if (this.invaderFormation.edgeHit && !hitLeftEdge && !hitRightEdge) {
                this.invaderFormation.edgeHit = false;
            }
        }
        
        // Check if any invader reached the floor (game over condition)
        const floorLevel = this.canvas.height - 80; // Same level as player
        this.invaders.forEach(invader => {
            if (invader.y + invader.height >= floorLevel) {
                this.gameOver();
                return;
            }
        });
        
        // Aggressive invaders shoot randomly
        this.invaders.forEach(invader => {
            if (invader.aggressive && Math.random() < this.settings.invaderShootChance) {
                this.projectiles.push({
                    x: invader.x + invader.width / 2,
                    y: invader.y + invader.height,
                    width: 4,
                    height: 8,
                    speed: 3,
                    type: 0,
                    fromPlayer: false
                });
                this.audioSystem.playEnemyShoot();
            }
        });
    }
    
    checkCollisions() {
        // Player projectiles vs invaders
        this.projectiles.forEach((projectile, pIndex) => {
            if (!projectile.fromPlayer) return;
            
            this.invaders.forEach((invader, iIndex) => {
                if (this.isColliding(projectile, invader)) {
                    this.createExplosion(invader.x + invader.width / 2, invader.y + invader.height / 2);
                    this.audioSystem.playExplosion();
                    this.invaders.splice(iIndex, 1);
                    this.projectiles.splice(pIndex, 1);
                    this.score += 10;
                    this.updateUI();
                }
            });
        });
        
        // Invader projectiles vs player
        this.projectiles.forEach((projectile, pIndex) => {
            if (projectile.fromPlayer) return;
            
            if (this.isColliding(projectile, this.player)) {
                this.projectiles.splice(pIndex, 1);
                this.lives--;
                this.createExplosion(this.player.x + this.player.width / 2, this.player.y + this.player.height / 2);
                this.audioSystem.playPlayerHit();
                this.updateUI();
                
                if (this.lives <= 0) {
                    this.gameOver();
                }
            }
        });
        
        // Check if wave is complete
        if (this.invaders.length === 0) {
            this.nextWave();
        }
    }
    
    isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }
    
    createExplosion(x, y) {
        this.explosions.push({
            x: x,
            y: y,
            startTime: Date.now(),
            duration: 500
        });
    }
    
    nextWave() {
        this.wave++;
        this.settings.invaderSpeed += 0.5;
        this.audioSystem.playWaveComplete();
        this.spawnInvaders();
        this.updateUI();
    }
    
    gameOver() {
        this.gameRunning = false;
        this.audioSystem.playGameOver();
        
        // Show game over screen
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#ff6b35';
        this.ctx.font = '48px serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2);
        
        this.ctx.font = '24px sans-serif';
        this.ctx.fillText(`Final Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 50);
        
        this.ctx.font = '16px sans-serif';
        this.ctx.fillText('Refresh the page to play again', this.canvas.width / 2, this.canvas.height / 2 + 80);
    }
    
    updateUI() {
        document.getElementById('scoreValue').textContent = this.score;
        document.getElementById('livesValue').textContent = this.lives;
        document.getElementById('waveValue').textContent = this.wave;
        document.getElementById('weaponValue').textContent = this.weaponNames[this.weaponType];
        document.getElementById('laserValue').textContent = this.laserCount;
    }
    
    gameLoop() {
        if (!this.gameRunning && this.lives > 0) {
            this.gameRunning = true;
        }
        
        if (this.gameRunning) {
            // Clear canvas
            this.ctx.fillStyle = '#000';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            // Update game objects
            this.updatePlayer();
            this.updateProjectiles();
            this.updateInvaders();
            this.checkCollisions();
            
            // Draw everything
            this.drawPlayer();
            this.drawInvaders();
            this.drawProjectiles();
            this.drawExplosions();
        }
        
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CryptoSpaceInvaders();
});