const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://archive.org/download/LA_THO_TINH_DO/Th%C3%ADch%20Thi%E1%BB%81n%20T%C3%A2m%20-%20L%C3%A1%20Th%C6%A1%20T%E1%BB%8Bnh%20%C4%90%E1%BB%99.mp3";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
               return location.href = "https://www.googleapis.com/drive/v3/files/1bbDZzQeqUuRXn-YwRG8fGHmCDCiSy5kN?alt=media&key=AIzaSyAvwKl-8enWVuIQiCtbKxkUqPNOOzLfmzY";
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Đang Tiến Hành Tải Xuống Còn Lại <b>${timer}</b> Giây`;
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
