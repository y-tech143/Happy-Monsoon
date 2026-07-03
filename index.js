// Global Audio Element Handlers
const mainTrack = document.getElementById('mainGlobalMusic');
const chaiTrack = document.getElementById('popupChaiMusic');
const unlockOverlay = document.getElementById('soundUnlockOverlay');

// ==========================================
// 1. RE-ENGINEERED DENSE CANVAS RAIN BLOCKS
// ==========================================
const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

class RainDrop {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.vy = 12 + Math.random() * 8;  
        this.len = 25 + Math.random() * 20; 
        this.weight = 1 + Math.random() * 1.5;
        this.opacity = 0.2 + Math.random() * 0.4;
    }
    update() {
        this.y += this.vy;
        if (this.y > height) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(14, 165, 233, ${this.opacity})`;
        ctx.lineWidth = this.weight;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.len);
        ctx.stroke();
    }
}

const totalDrops = window.innerWidth < 768 ? 140 : 280; 
const rainMatrix = Array.from({ length: totalDrops }, () => new RainDrop());

function renderingEngine() {
    ctx.clearRect(0, 0, width, height);
    rainMatrix.forEach(drop => {
        drop.update();
        drop.draw();
    });
    requestAnimationFrame(renderingEngine);
}
renderingEngine();


// ==========================================
// 2. CENTRAL MOBILE AUDIO PIPELINE UNLOCKER
// ==========================================
function unlockAudioPipeline() {
    if (mainTrack) {
        mainTrack.volume = 1.0; // ← 100% Full Max Volume!
        mainTrack.currentTime = 8; // Loops perfectly from the 8th second mark
        
        mainTrack.play().then(() => {
            console.log("Global Track actively running at 100% full volume.");
            if (unlockOverlay) {
                unlockOverlay.style.opacity = '0';
                unlockOverlay.style.pointerEvents = 'none';
            }
        }).catch(err => {
            console.log("Pipeline failed. Awaiting physical touch gesture.", err);
        });
    }
}


// ==========================================
// 3. CHAI POPUP AUDIO MIX MIXING SYSTEM
// ==========================================
const chaiPopupNode = document.getElementById('chaiPopup');

function openChaiPopup() {
    if (chaiPopupNode && chaiTrack && mainTrack) {
        // Main song ko kafi kam kar do taaki popup song clear sunai de
        mainTrack.volume = 0.15; 
        
        // Open target view
        chaiPopupNode.classList.add('open');
        
        // Reset and amplify unique popup specific song to 100%
        chaiTrack.currentTime = 0;
        chaiTrack.volume = 1.0; // ← Popup song also at 100% full power!
        chaiTrack.play().catch(e => console.log("Audio lock override executed."));
    }
}

function closeChaiPopup() {
    if (chaiPopupNode && chaiTrack && mainTrack) {
        // Fold off view overlay
        chaiPopupNode.classList.remove('open');
        
        // Pause and dump popup specific track instantly
        chaiTrack.pause();
        chaiTrack.currentTime = 0;
        
        // Restore background score theme track volume level straight back to 100%
        mainTrack.volume = 1.0; // ← Back to 100% full power!
    }
}


// ==========================================
// SECTION 3: LIVE UMBRELLA MOOD MATCHER ENGINE
// ==========================================
function updateMonsoonMood(val) {
    const moodEmoji = document.getElementById('currentMoodEmoji');
    const moodText = document.getElementById('currentMoodText');
    const moodSub = document.getElementById('currentMoodSub');
    
    // Scale tracking references for rain engine adjustments
    let currentSpeedMultiplier = 1;
    let targetDropCount = 140;

    // Convert string slider value to absolute integer
    const step = parseInt(val);

    if (step === 1) {
        // Mood 1: Soft Drizzle
        moodEmoji.innerText = "🌧️";
        moodEmoji.style.transform = "scale(1) rotate(0deg)";
        moodText.innerText = "Soft Drizzle Mode";
        moodSub.innerText = '"Suno... yeh halki halki baarish bilkul tumhaari tarah suhani hai."';
        
        currentSpeedMultiplier = 1;
        targetDropCount = window.innerWidth < 768 ? 100 : 160;
    } 
    else if (step === 2) {
        // Mood 2: Heavy Pour
        moodEmoji.innerText = "⛈️";
        moodEmoji.style.transform = "scale(1.15) rotate(-10deg)";
        moodText.innerText = "Heavy Pour Vibe";
        moodSub.innerText = '"Itni tez baarish mein bhi dil bas tumhaari hi baatein karna chahta hai..."';
        
        currentSpeedMultiplier = 1.8;
        targetDropCount = window.innerWidth < 768 ? 200 : 350;
    } 
    else if (step === 3) {
        // Mood 3: Stormy Vibe
        moodEmoji.innerText = "⚡";
        moodEmoji.style.transform = "scale(1.25) rotate(15deg)";
        moodText.innerText = "Stormy Heart Vibe!";
        moodSub.innerText = '"Baahar chahe jitne badal garjein, mera sukoon toh sirf tum ho!"';
        
        currentSpeedMultiplier = 2.6;
        targetDropCount = window.innerWidth < 768 ? 280 : 500;
    }

    // Dynamic injection into Canvas Core Engine runtime
    rainMatrix.forEach(drop => {
        // Direct object mutation inside the active frame loop
        drop.vy = (12 + Math.random() * 8) * currentSpeedMultiplier;
    });

    // Handle dynamic drop arrays size adjustments safely on the fly
    if (rainMatrix.length < targetDropCount) {
        while (rainMatrix.length < targetDropCount) {
            rainMatrix.push(new RainDrop());
        }
    } else if (rainMatrix.length > targetDropCount) {
        rainMatrix.splice(targetDropCount);
    }
}



// ==========================================
// SECTION 4: FORECAST RADAR AUDIO ENGINE (37s)
// ==========================================
const forecastPopupNode = document.getElementById('forecastPopup');
const forecastTrack = document.getElementById('popupForecastMusic');

function openForecastPopup() {
    if (forecastPopupNode && forecastTrack && mainTrack) {
        // 1. Main track loop ko pure background me low kar do
        mainTrack.volume = 0.05;
        
        // 2. Open forecast modal display smoothly
        forecastPopupNode.classList.add('open');
        
        // 3. Set music path strictly to the 37th second mark!
        forecastTrack.currentTime = 37; // ← Starts exactly at 37 seconds
        forecastTrack.volume = 1.0;     // ← Full Max 100% Volume Power
        forecastTrack.play().catch(e => console.log("Radar audio gesture bypass triggered."));
    }
}

function closeForecastPopup() {
    if (forecastPopupNode && forecastTrack && mainTrack) {
        // 1. Dismiss pop-up overlay view
        forecastPopupNode.classList.remove('open');
        
        // 2. Shut down forecast music completely
        forecastTrack.pause();
        forecastTrack.currentTime = 0;
        
        // 3. Restore background main track loop straight back to 100% Full Max Volume
        mainTrack.volume = 1.0; 
    }
}

// ==========================================
// SECTION 5: STEAMY WINDOW - STRICT 15s TIMER ENGINE
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const steamCanvas = document.getElementById('steamyCanvas');
    const wrapper = document.getElementById('canvasWrapper');
    if (!steamCanvas || !wrapper) return;

    const ctx = steamCanvas.getContext('2d');
    let isDrawing = false;
    
    // Timer Tracking Variables
    let rubTimeActive = 0; // Tracks actual rubbing milliseconds
    let lastTimestamp = 0;
    let autoCleared = false;

    // Set real resolution parameters
    function initSteamLayer() {
        steamCanvas.width = wrapper.clientWidth;
        steamCanvas.height = wrapper.clientHeight;

        // 100% Solid mist blue to completely block everything underneath
        ctx.fillStyle = 'rgba(165, 195, 215, 1)'; 
        ctx.fillRect(0, 0, steamCanvas.width, steamCanvas.height);

        // Heavy drop and condensation textures
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        for (let i = 0; i < 650; i++) {
            ctx.beginPath();
            ctx.arc(Math.random() * steamCanvas.width, Math.random() * steamCanvas.height, Math.random() * 3.8, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Reset state variables
        rubTimeActive = 0;
        autoCleared = false;
        steamCanvas.style.transition = 'none';
        steamCanvas.style.opacity = '1';
    }
    
    initSteamLayer();
    window.addEventListener('resize', initSteamLayer);

    // Track real time elapsed during mouse/touch movement
    function updateRubTimer() {
        if (autoCleared) return;

        const now = performance.now();
        if (lastTimestamp > 0) {
            const delta = now - lastTimestamp;
            // Add only active moving milliseconds to total tracker
            rubTimeActive += delta;
        }
        lastTimestamp = now;

        // FIXED: 15,000 milliseconds = Strictly 15 Seconds of active rubbing
        if (rubTimeActive >= 15000) {
            autoCleared = true;
            isDrawing = false;
            
            // Ultra elegant slow fade out sequence
            steamCanvas.style.transition = 'opacity 1.5s ease-in-out';
            steamCanvas.style.opacity = '0';
            
            setTimeout(() => {
                ctx.clearRect(0, 0, steamCanvas.width, steamCanvas.height);
            }, 1500);
        }
    }

    // Scratch Action Driver
    function scratch(clientX, clientY) {
        if (autoCleared) return;
        
        const rect = steamCanvas.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        // Wipe effect
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 22, 0, Math.PI * 2); 
        ctx.fill();

        // Run timer ticks smoothly on every stroke update
        updateRubTimer();
    }

    // Desktop Mouse Controls
    steamCanvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        lastTimestamp = performance.now(); // Reset delta origin point
        scratch(e.clientX, e.clientY);
    });

    steamCanvas.addEventListener('mousemove', (e) => {
        if (isDrawing) scratch(e.clientX, e.clientY);
    });

    window.addEventListener('mouseup', () => {
        isDrawing = false;
        lastTimestamp = 0; // Halts the timer calculation when mouse is released
    });

    // Mobile Touch Controls
    steamCanvas.addEventListener('touchstart', (e) => {
        isDrawing = true;
        lastTimestamp = performance.now();
        if(e.touches.length > 0) scratch(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    steamCanvas.addEventListener('touchmove', (e) => {
        if (isDrawing && e.touches.length > 0) {
            scratch(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    window.addEventListener('touchend', () => {
        isDrawing = false;
        lastTimestamp = 0; // Halts the timer calculation when touch ends
    });
});



// ==========================================
// SECTION 5: VINTAGE WAX SEAL COUNTER LOGIC
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const waxSeal = document.getElementById('waxSeal');
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const sealInstruction = document.getElementById('sealInstruction');
    
    let tapCount = 0;
    let sequenceActive = true;

    if (!waxSeal || !envelopeWrapper) return;

    waxSeal.addEventListener('click', () => {
        if (!sequenceActive) return;

        tapCount++;

        // Trigger micro-shake feedback animation on every single tap
        waxSeal.classList.remove('crack-shake');
        void waxSeal.offsetWidth; // Trigger DOM reflow to repeat css animations safely
        waxSeal.classList.add('crack-shake');

        // Dynamic Text Prompt Updates based on tap level
        if (tapCount === 1) {
            sealInstruction.innerText = "The wax is cracking... Tap again! ⚡";
        } else if (tapCount === 2) {
            sealInstruction.innerText = "Almost open! One final tap... 🔥";
        } else if (tapCount >= 3) {
            // Trigger Final Grand Opening Sequence
            sequenceActive = false;
            waxSeal.classList.add('broken');
            sealInstruction.style.opacity = '0';

            // Wait for wax fade, then open envelope top flap
            setTimeout(() => {
                envelopeWrapper.classList.add('open');
                
                // Final text resolution switch once letter rises completely
                setTimeout(() => {
                    sealInstruction.innerText = "A special letter just for you... 🤍";
                    sealInstruction.style.opacity = '1';
                }, 1000);

            }, 400);
        }
    });
});


// ========================================================
// SECTION 6: LUXURY SCRATCH CARD + AUDIO TIMELINE SEEK
// ========================================================
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('scratchCanvas');
    const wrapper = canvas ? canvas.parentElement : null;
    const song = document.getElementById('monsoonSong');
    if (!canvas || !wrapper || !song) return;

    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let audioPlayed = false;

    function initScratchLayer() {
        canvas.width = wrapper.clientWidth;
        canvas.height = wrapper.clientHeight;

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#bdc3c7');   
        gradient.addColorStop(0.3, '#eaeded'); 
        gradient.addColorStop(0.7, '#95a5a6'); 
        gradient.addColorStop(1, '#7f8c8d');   

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Gold dust effect overlay
        ctx.fillStyle = 'rgba(212, 175, 55, 0.2)'; 
        for (let i = 0; i < 300; i++) {
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    initScratchLayer();
    window.addEventListener('resize', initScratchLayer);

    function checkScratchPercentage() {
        if (audioPlayed) return;

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        let clearedPixels = 0;

        for (let i = 3; i < pixels.length; i += 4) {
            if (pixels[i] === 0) clearedPixels++;
        }

        const percentage = (clearedPixels / (canvas.width * canvas.height)) * 100;

        if (percentage > 35 && !audioPlayed) {
            audioPlayed = true;
            
            // Sync current song layout timeline to 48s exactly
            song.currentTime = 48; 
            song.volume = 0.8;
            song.play().catch(err => console.log("User action pending for audio: ", err));

            // Dissolve the remaining mask smoothly
            canvas.style.transition = 'opacity 1s ease-out';
            canvas.style.opacity = '0';
            setTimeout(() => { canvas.style.display = 'none'; }, 1000);
        }
    }

    function scratch(clientX, clientY) {
        const rect = canvas.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 28, 0, Math.PI * 2); 
        ctx.fill();

        checkScratchPercentage();
    }

    canvas.addEventListener('mousedown', (e) => { isDrawing = true; scratch(e.clientX, e.clientY); });
    canvas.addEventListener('mousemove', (e) => { if (isDrawing) scratch(e.clientX, e.clientY); });
    window.addEventListener('mouseup', () => isDrawing = false);

    canvas.addEventListener('touchstart', (e) => { isDrawing = true; if (e.touches.length > 0) scratch(e.touches[0].clientX, e.touches[0].clientY); });
    canvas.addEventListener('touchmove', (e) => { if (isDrawing && e.touches.length > 0) scratch(e.touches[0].clientX, e.touches[0].clientY); });
    window.addEventListener('touchend', () => isDrawing = false);
});

