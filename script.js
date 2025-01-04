// Typing effect for dynamic text
const typingText = "It’s been way too long since we caught up. We NEED this!";
let i = 0;
function typeWriter() {
    if (i < typingText.length) {
        document.getElementById("typing-text").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Hop on call action
function hopOnCall() {
    playSound();
    alert("Woohoo! We’ll plan it soon. Sending you the link to join!");
    window.open('https://your-call-link.example.com', '_blank');
}

// Sound effect for button click
function playSound() {
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
}

// Countdown timer
function startCountdown(minutes) {
    const countdownElement = document.getElementById("countdown");
    let time = minutes * 60;

    setInterval(() => {
        const minutesLeft = Math.floor(time / 60);
        const secondsLeft = time % 60;
        countdownElement.textContent = `${minutesLeft}m ${secondsLeft}s`;

        if (time <= 0) {
            clearInterval();
            countdownElement.textContent = "Time's up!";
            playSound();
        }
        time--;
    }, 1000);
}
startCountdown(5); // Adjust to desired countdown time

// Personalized Greeting
function displayGreeting() {
    const greetingElement = document.getElementById("greeting");
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    greetingElement.textContent = `${greeting} I've missed you! Let's catch up soon.`;
}
displayGreeting();

// Confetti Animation
function launchConfetti() {
    const duration = 3 * 1000;  // 3 seconds
    const end = Date.now() + duration;
    const colors = ['#ff0', '#f00', '#0f0', '#00f', '#ff69b4', '#00ffff'];

    (function frame() {
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 6,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
launchConfetti();

// Typing Effect for Main Message
function typeEffect(element, text, delay = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

const mainMessage = document.querySelector("header h1");
mainMessage.textContent = ""; // Clear default text
typeEffect(mainMessage, "I've missed you! Let's catch up soon!");

// Sound on Button Click
function playClickSound() {
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', playClickSound);
});
// Theme change functionality
function changeTheme() {
    document.body.classList.toggle("dark-theme");
}