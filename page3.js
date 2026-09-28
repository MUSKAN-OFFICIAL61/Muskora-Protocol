const playerId = document.getElementById("playerId");

const accessId = localStorage.getItem("accessId");

if (accessId) {
    playerId.textContent = accessId;
}