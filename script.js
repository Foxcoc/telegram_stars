
const tg = window.Telegram.WebApp;
tg.ready();

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    document.getElementById("tg-username").innerText = "@" + tg.initDataUnsafe.user.username;
}

function buy(amount) {
    alert("Покупка " + amount + " Stars скоро будет доступна!");
    // Здесь будет реальный openInvoice
}
