
const colorNames = {
    '#FF5733': 'Burnt Orange',
    '#C70039': 'Crimson Red',
    '#900C3F': 'Maroon Mystery',
    '#581845': 'Whispering Plum',
    '#1F618D': 'Deep Ocean Rush',
    '#17A589': 'Emerald Whisper',
    '#F4D03F': 'Golden Radiance',
    '#DFFF00': 'Vibrant Lime Flash',
    '#FF1493': 'Cherry Blossom Kiss',
    '#8B4513': 'Melted Chocolate',
    '#4682B4': 'Steel Wave',
    '#32CD32': 'Lush Jungle Leap',
    '#FFD700': 'Dazzling Sunbeam',
    '#40E0D0': 'Tropical Breeze',
    '#7FFFD4': 'Aquamarine Spark',
    '#DC143C': 'Ruby Shimmer',
    '#FF4500': 'Molten Lava',
    '#ADFF2F': 'Spring Burst',
    '#9370DB': 'Lavender Twilight',
    '#FA8072': 'Salmon Glow',
    '#00CED1': 'Frozen Turquoise',
    '#2E8B57': 'Dancing Seafoam',
    '#8A2BE2': 'Electric Violet Pulse',
    '#B22222': 'Flaming Inferno',
    '#FF69B4': 'Glowing Hot Pink',
    '#CD5C5C': 'Dusty Rosewood',
    '#00FA9A': 'Minty Fresh Breeze',
    '#B0C4DE': 'Soft Steel Glisten',
    '#FF6347': 'Sizzling Tomato',
    '#191970': 'Midnight Echo',
    '#6A5ACD': 'Moonlit Sapphire',
    '#DAA520': 'Goldenrod Gleam',
    '#7CFC00': 'Neon Meadow',
    '#DC143C': 'Crimson Fireflash',
    '#AFEEEE': 'Crystal Turquoise',
    '#F08080': 'Blushing Coral',
    '#778899': 'Urban Fog',
    '#008B8B': 'Deep Teal Dive',
    '#FF8C00': 'Burning Sunset',
    '#9932CC': 'Orchid Bloom',
    '#E9967A': 'Sunkissed Salmon',
    '#8FBC8F': 'Sage Whirl',
    '#BDB76B': 'Khaki Duststorm',
    '#00BFFF': 'Skydive Blue',
    '#FF00FF': 'Magenta Thunder',
    '#66CDAA': 'Tropical Lagoon',
    '#BA55D3': 'Whimsical Orchid',
    '#8B0000': 'Blood Moon Red',
    '#556B2F': 'Mossy Hideaway',
    '#FFB6C1': 'Blush Rose Petal',
    '#FFDEAD': 'Navajo Glow',
    '#ADFF2F': 'Neon Jungle',
    '#DDA0DD': 'Plum Fantasy',
    '#5F9EA0': 'Cadet Skies',
    '#FFDAB9': 'Peach Champagne',
    '#EEE8AA': 'Pale Sunshine',
    '#20B2AA': 'Seafoam Rush',
    '#DC143C': 'Blood Red Blaze',
    '#008000': 'Forest Canopy',
    '#F5DEB3': 'Golden Wheat Field',
    '#4B0082': 'Indigo Horizon',
    '#D2691E': 'Cinnamon Heat',
    '#9ACD32': 'Lime Flash',
    '#A52A2A': 'Brick Hearth',
    '#FF4500': 'Burning Meteor',
    '#000080': 'Navy Voyage',
    '#FFD700': 'Amber Glowstorm',
    '#FFFAF0': 'Floral Ice',
    '#D8BFD8': 'Thistle Serenade',
    '#E0FFFF': 'Arctic Whisper',
    '#8B008B': 'Dark Magenta Pulse',
    '#0000CD': 'Medium Blue Streak',
    '#B0E0E6': 'Powder Blue Whisper',
    '#4169E1': 'Royal Tide',
    '#DA70D6': 'Orchid Blush',
    '#FF1493': 'Neon Stardust',
    '#A9A9A9': 'Dark Twilight Mist',
    '#00FF7F': 'Spring Frost',
    '#4682B4': 'Teal Thunder',
    '#CD853F': 'Peruvian Glow',
    '#708090': 'Slate Shadow',
    '#DB7093': 'Pale Rosy Delight',
    '#F4A460': 'Sandy Mirage',
    '#FFFAF0': 'Ivory Glow',
    '#32CD32': 'Neon Pulse Green',
    '#7B68EE': 'Majestic Wave',
    '#ADD8E6': 'Baby Blue Serenity',
    '#800000': 'Maroon Eclipse',
    '#BC8F8F': 'Dusty Rosewood',
    '#9932CC': 'Vibrant Vortex Violet',
    '#FF7F50': 'Coral Explosion',
    '#DEB887': 'Golden Sandstorm',
    '#FFD700': 'Mellow Aurora',
    '#00FFFF': 'Electric Sky',
    '#F5F5DC': 'Beige Horizon',
    '#DC143C': 'Cherry Inferno',
    '#20B2AA': 'Aqua Storm',
    '#FFDAB9': 'Peach Velvet Dream',
    '#FF69B4': 'Vivid Pink Rush',
    '#FF4500': 'Inferno Blaze',
    '#8A2BE2': 'Purple Starfire',
    '#191970': 'Galactic Midnight',
    '#FF6347': 'Tomato Flare',
    '#F0E68C': 'Dusty Gold Spark',
    '#468499': 'Deep Ocean Frost'
};

let isPaused = false;
let startTime;
let timerInterval;
let colorInterval;
let elapsedTime = 0;

function updateTimer() {
    if (!isPaused) {
        const now = new Date();
        const diff = (now - startTime) + elapsedTime;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        
        const displayHours = hours.toString().padStart(2, '0');
        const displayMinutes = (minutes % 60).toString().padStart(2, '0');
        const displaySeconds = (seconds % 60).toString().padStart(2, '0');
        
        document.getElementById('timer').textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
    }
}

// Event Listeners
document.getElementById('startButton').addEventListener('click', function() {
    // Hide the button and tip
    this.style.display = 'none';
    document.querySelector('.fullscreen-tip').style.display = 'none';
    
    // Show all timer elements
    document.querySelector('.color-info').style.display = 'block';
    document.querySelector('.timer-control').style.display = 'block';
    document.querySelector('.timer-controls').style.display = 'block';
    document.getElementById('timer').style.display = 'block';
    
    // Start the timer
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
    
    // Start the color changes
    changeBackgroundColor();
    colorInterval = setInterval(changeBackgroundColor, 10000);
});

document.getElementById('pauseTimer').addEventListener('click', function() {
    isPaused = !isPaused;
    if (isPaused) {
        elapsedTime += new Date() - startTime;
        this.textContent = 'Resume';
    } else {
        startTime = new Date();
        this.textContent = 'Pause';
    }
});

document.getElementById('resetTimer').addEventListener('click', function() {
    startTime = new Date();
    elapsedTime = 0;
    isPaused = false;
    document.getElementById('pauseTimer').textContent = 'Pause';
    document.getElementById('timer').textContent = '00:00:00';
});

document.getElementById('toggleTimer').addEventListener('click', function() {
    const timer = document.getElementById('timer');
    const timerControls = document.querySelector('.timer-controls');
    const isVisible = timer.style.display === 'block';
    
    timer.style.display = isVisible ? 'none' : 'block';
    timerControls.style.display = isVisible ? 'none' : 'block';
    this.textContent = isVisible ? 'Show Timer' : 'Hide Timer';
});

// Add this function after the colorNames object
function getRandomColor() {
    const colors = Object.keys(colorNames);
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('hexCode').textContent = newColor;
    document.getElementById('colorName').textContent = colorNames[newColor];

    // Calculate contrast color for text
    const r = parseInt(newColor.substr(1,2), 16);
    const g = parseInt(newColor.substr(3,2), 16);
    const b = parseInt(newColor.substr(5,2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const textColor = brightness > 128 ? '#000000' : '#FFFFFF';
    
    // Apply contrast color to all text elements
    document.getElementById('colorName').style.color = textColor;
    document.getElementById('hexCode').style.color = textColor;
    document.getElementById('timer').style.color = textColor;
    document.getElementById('toggleTimer').style.color = textColor;
    document.querySelector('.clock-icon').style.filter = `brightness(${brightness > 128 ? 0 : 100}%)`;
}