const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

const allowedDays = [];
const allowedGifts = [];

for (let i = 1; i <= 24; i++) {
    if (currentYear === 2024 && currentMonth === 11 && currentDay >= i) { // Month is 0-indexed, December is 11
        allowedDays.push(i);
    }
}

if (currentYear === 2024 && currentMonth === 11 && currentDay >= 10) {
    allowedGifts.push(1);
}
if (currentYear === 2024 && currentMonth === 11 && currentDay >= 20) {
    allowedGifts.push(2);
}
if (currentYear === 2024 && currentMonth === 11 && currentDay >= 24) {
    allowedGifts.push(3);
}

const messages = [
    "Te quiero mi wey porque aunque seas intolerante a la lactosa no me iba a saltar tu Calendario de Adviento como todos los años",
    "Te quiero por como me tratas, como si fuera de tu familia",
    "Te quiero por como me ayudas siempre que estoy mal",
    "Te quiero por las veces que me animas y me ayudas",
    "Te quiero por como te portas con mi familia sin esperar nada a cambio",
    "Te quiero porque eres mi pasajera favorita en mi coche",
    "Te quiero por como te curras todos mis cumpleaños para verme feliz",
    "Te quiero porque cuando me miras noto el brillo en tus ojos",
    "Te quiero porque te veo y se me cae la baba vayas elegante o informal",
    "Te quiero porque nadie me cuida como tú cuando estoy mal. Este día te permite abrir el regalo 1",
    "Te quiero por las veces que la cago, tú entiendes que soy tonto y me perdonas",
    "Te quiero por todas las veces que me ayudas a estudiar",
    "Te quiero por esas veces que me enseñas pasitos nuevos que has aprendido en el baile",
    "Te quiero porque eres mi conductora favorita",
    "Te quiero por lo buena que eres con la gente",
    "Te quiero por como me presumes con tus amigos",
    "Te quiero porque vas a ser mi TES, PAS, enfermera y médica favorita",
    "Te quiero por la ilusión que te hace venir a mi graduación",
    "Te quiero porque siempre me tienes presente en tu cuarto, en tu casa, hay fotos mías contigo",
    "Te quiero porque aunque a veces tengamos nuestros altibajos siempre salimos adelante. Este día te permite abrir el regalo 2",
    "Te quiero por todas esas veces que me haces una carta o algo hecho a mano",
    "Te quiero por lo que cuidas de todos los tuyos",
    "Te quiero porque se que si tenemos niños en un futuro aunque a mí me pasara algo contigo estarían en buenas manos",
    "Te quiero porque las Navidades junto a ti son únicas ¡Feliz 24 de diciembre mi amor! ¡Mañana es Navidad!. Este día te permite abrir el regalo 3"
];

const images = [
    "imagenes/calendario.jpg",
    "imagenes/famiglia.jpg",
    "imagenes/mal.jpg",
    "imagenes/animar.jpg",
    "imagenes/familia.png",
    "imagenes/pasajera.jpg",
    "imagenes/tarta.jpg",
    "imagenes/ojos.jpg",
    "imagenes/elegante.jpg",
    "imagenes/cuidar.jpg",
    "imagenes/abrazo.jpg",
    "imagenes/estudiar.avif",
    "imagenes/bailar.jpg",
    "imagenes/conductora.webp",
    "imagenes/empatia.jpg",
    "imagenes/amigos.jpg",
    "imagenes/enfermera.webp",
    "imagenes/graduado.jpg",
    "imagenes/fotos.jpg",
    "imagenes/foto20.jpg",
    "imagenes/carta.png",
    "imagenes/apoyo.jpeg",
    "imagenes/mama.png",
    "imagenes/navidad.jpg"
];

const giftMessages = [
    "Enhorabuena!!!, has llegado al día 10, este regalo vale para irnos un día al centro y que te invite a unos buñuelos",
    "Por fin!!!, día 20, este regalo vale por que te lleve a comer unos Manolitos Bakes",
    "Hemos llegado a nochebuena y seguimos juntos?????!!!!! Voy a llorar otra navidad junto a ti mi amor🥹🥹🥹🥹🥹, este regalo vale por la flor que me pidas un día aleatorio"
];

const giftImages = [
    "imagenes/regalo1.jpg",
    "imagenes/regalo2.jpg",
    "imagenes/regalo3.jpg"
];

document.querySelectorAll('.day').forEach((day, index) => {
    if (allowedDays.includes(index + 1)) {
        day.addEventListener('click', () => {
            document.getElementById('message').textContent = messages[index];
            document.getElementById('image').src = images[index];
            document.getElementById('modal').style.display = "block";
        });
    } else {
        day.style.cursor = "not-allowed";
        day.style.opacity = "0.5";
    }
});

document.querySelectorAll('.gift').forEach((gift, index) => {
    if (allowedGifts.includes(index + 1)) {
        gift.addEventListener('click', () => {
            document.getElementById('message').textContent = giftMessages[index];
            document.getElementById('image').src = giftImages[index];
            document.getElementById('modal').style.display = "block";
        });
    } else {
        gift.style.cursor = "not-allowed";
        gift.style.opacity = "0.5";
    }
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
});