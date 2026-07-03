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
