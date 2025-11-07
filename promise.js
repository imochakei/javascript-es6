const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 2000);
    });
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

fetch().then(data => console.log(data));
// delay 500 akan menampilkan hasil terlebih dahulu
// walaupun pemanggilannya fetch dahulu baru delay
delay(500).then(() => console.log("setengah detik berlalu"));