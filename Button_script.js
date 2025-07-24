const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
               return location.href = "https://www.idrive.com/idrive/sh/sh/o1j3p6v5s4";
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Tải xuống của bạn sẽ bắt đầu trong <b>${timer}</b> Giây`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Tệp của bạn đang tải xuống...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Tải Lại Nếu Chưa Thành Công</span>`;
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);