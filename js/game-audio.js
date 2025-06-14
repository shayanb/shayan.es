/**
 * Game Audio System
 * Creates audio effects using Web Audio API
 */

class GameAudio {
    constructor() {
        this.audioContext = null;
        this.enabled = true;
        this.init();
    }

    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            console.warn('Web Audio API not supported:', error);
            this.enabled = false;
        }
    }

    // Resume audio context (required for user interaction)
    resume() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }

    // Create a simple tone
    createTone(frequency, duration, type = 'sine', volume = 0.1) {
        if (!this.enabled || !this.audioContext) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
            oscillator.type = type;

            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
        } catch (error) {
            console.warn('Failed to create tone:', error);
        }
    }

    // Create noise burst for explosions
    createNoise(duration, volume = 0.1) {
        if (!this.enabled || !this.audioContext) return;

        try {
            const bufferSize = this.audioContext.sampleRate * duration;
            const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
            const data = buffer.getChannelData(0);

            // Generate white noise
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const source = this.audioContext.createBufferSource();
            const gainNode = this.audioContext.createGain();
            const filter = this.audioContext.createBiquadFilter();

            source.buffer = buffer;
            source.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(1000, this.audioContext.currentTime);

            gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

            source.start(this.audioContext.currentTime);
        } catch (error) {
            console.warn('Failed to create noise:', error);
        }
    }

    // Shooting sound
    playShoot(weaponType = 0) {
        this.resume();
        
        switch (weaponType) {
            case 0: // Arrow - sharp quick tone
                this.createTone(800, 0.1, 'square', 0.15);
                break;
            case 1: // Book - thud sound
                this.createTone(150, 0.2, 'sawtooth', 0.2);
                break;
            case 2: // Tweet - chirp
                this.createTone(1200, 0.05, 'sine', 0.1);
                setTimeout(() => this.createTone(1000, 0.05, 'sine', 0.1), 50);
                break;
            case 3: // Matrix - digital sound
                this.createTone(400, 0.15, 'square', 0.15);
                setTimeout(() => this.createTone(600, 0.1, 'square', 0.1), 75);
                break;
        }
    }

    // Laser sound
    playLaser() {
        this.resume();
        this.createTone(2000, 0.3, 'sawtooth', 0.2);
        setTimeout(() => this.createTone(1500, 0.2, 'sawtooth', 0.15), 100);
    }

    // Explosion sound
    playExplosion() {
        this.resume();
        this.createNoise(0.3, 0.25);
        this.createTone(100, 0.4, 'triangle', 0.2);
    }

    // Enemy shoot sound
    playEnemyShoot() {
        this.resume();
        this.createTone(300, 0.15, 'triangle', 0.1);
    }

    // Game over sound - very short ending
    playGameOver() {
        this.resume();
        this.createTone(330, 0.2, 'sine', 0.15);
        setTimeout(() => this.createTone(220, 0.3, 'sine', 0.1), 200);
    }

    // Wave complete sound
    playWaveComplete() {
        this.resume();
        this.createTone(400, 0.2, 'sine', 0.15);
        setTimeout(() => this.createTone(500, 0.2, 'sine', 0.15), 150);
        setTimeout(() => this.createTone(600, 0.3, 'sine', 0.2), 300);
    }

    // Player hit sound
    playPlayerHit() {
        this.resume();
        this.createNoise(0.2, 0.2);
        this.createTone(200, 0.3, 'triangle', 0.15);
    }
}