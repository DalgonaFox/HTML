const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = container.querySelector("#qr-form input");
const qrCodeImg = container.querySelector("#qr-code img");

function generateQrCode() {
  let qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  });
}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});