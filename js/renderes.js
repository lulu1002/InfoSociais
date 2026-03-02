function donation() {
    const container = `
    <div class="container-qr">
            <h2>livepix.gg/isaroza</h2>
            <img class="qr-cod" data-test-selector="image_test_selector"
                src="https://panels.twitch.tv/panel-154843490-image-3120756a-abe7-4e03-a33d-ce28430a190a"
                alt="Conteúdo do painel">
            <p class="paragrafo">Contribua Pelo QRCODE Para Fortalecer a Gente,<br>e de Quebra Mande Mensagens
                Personalizadas!!! </p>
        </div>
    `;

    document.getElementById("app").innerHTML = container
}

function sociais() {
    const container = `
    <div class="container">
    <div class="container-btn-sociais">

        <button class="btn instagram" onclick=window.location.href="https://www.instagram.com/isabela_roza">
            <svg viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 
            0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 
            2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 
            3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 
            3-3h10zm-5 3a5 5 0 100 10 5 5 0 
            000-10zm0 2a3 3 0 110 6 3 3 0 
            010-6zm4.5-.75a1.25 1.25 0 100 
            2.5 1.25 1.25 0 000-2.5z" />
            </svg>
            instagram.com/isabela_roza
        </button>

        <button class="btn instagram" onclick=window.location.href="https://www.instagram.com/marcianosleo">
            <svg viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 
            0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 
            2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 
            3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 
            3-3h10zm-5 3a5 5 0 100 10 5 5 0 
            000-10zm0 2a3 3 0 110 6 3 3 0 
            010-6zm4.5-.75a1.25 1.25 0 100 
            2.5 1.25 1.25 0 000-2.5z" />
            </svg>
            instagram.com/marcianosleo
        </button>

        <button class="btn discord" onclick=window.location.href="https://discord.com/invite/cSR6nVx3rC" >
            <!-- SVG Discord -->
            <svg viewBox="0 0 24 24">
                <path d="M20.317 4.369A19.791 19.791 0 0016.885 
            3c-.151.27-.321.635-.439.917a18.27 
            18.27 0 00-4.892 0 9.3 9.3 0 
            00-.439-.917 19.736 19.736 0 
            00-3.432 1.369C5.533 8.07 4.89 
            11.681 5.185 15.245a19.9 19.9 0 
            005.993 3.037c.482-.658.91-1.356 
            1.278-2.09a12.8 12.8 0 01-2.012-.962c.169-.124.335-.255.496-.39a14.1 
            14.1 0 0012.024 0c.162.135.327.266.496.39a12.8 
            12.8 0 01-2.012.962c.368.734.796 
            1.432 1.278 2.09a19.9 19.9 0 
            005.993-3.037c.345-4.153-.546-7.737-2.407-10.876zM9.75 
            13.5c-.966 0-1.75-.896-1.75-2s.784-2 
            1.75-2 1.75.896 1.75 2-.784 2-1.75 
            2zm4.5 0c-.966 0-1.75-.896-1.75-2s.784-2 
            1.75-2 1.75.896 1.75 2-.784 2-1.75 2z" />
            </svg>
            Junte-se ao Discord
        </button>

    </div>
    `;

    const app = document.getElementById("app");
    app.innerHTML = container;
    app.className = ""

    setTimeout(() => {
        canais.forEach(c => carregarCanal(c));
    }, 100);
}

function lives() {
const containertwitch = `
   
    <div class="containertwitch">
        <p>🔴 AO VIVO</p>

        <div class="player-wrapper">
            <iframe allow="autoplay" src="https://player.twitch.tv/?channel=isaroza_&parent=info-sociais.vercel.app&muted=true&autoplay=true" allowfullscreen>
            </iframe>
        </div>
        <div class="chat-wrapper">
            <iframe autoplay src="https://www.twitch.tv/embed/isaroza_/chat?parent=info-sociais.vercel.app&muted=true">
            </iframe>
        </div>

    </div>
`
const app=document.getElementById("app");
app.innerHTML = containertwitch;
app.className= "app"

}

const API_KEY = "AIzaSyCj87q-ilzHmin-9TZnZ6JWa3JvBi7mH80";

const canais = [
    {
        id: "UChE_9ojxxGFFt9VH-huU-tg",
        statsEl: "isa-stats",
        videosEl: "isa-videos"
    },
    {
        id: "UCN1yY0xfiRDKCUXg0rlxypQ",
        statsEl: "leoeisa-stats",
        videosEl: "leoeisa-videos"
    },
    {
        id: "UCShl4rPJLrw9c7E5yoQROdQ",
        statsEl: "lives-stats",
        videosEl: "lives-videos"
    }
];

async function carregarCanal(canal){

    
    const statsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails&id=${canal.id}&key=${API_KEY}`
    );
    const statsData = await statsRes.json();
    const info = statsData.items[0];

    document.getElementById(canal.statsEl).innerText =
        `${info.statistics.subscriberCount} inscritos • ${info.statistics.videoCount} vídeos`;

    const uploadsPlaylist = info.contentDetails.relatedPlaylists.uploads;

   
    const videosRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=${uploadsPlaylist}&key=${API_KEY}`
    );
    const videosData = await videosRes.json();

    const container = document.getElementById(canal.videosEl);

    videosData.items.forEach(video => {
        const videoId = video.snippet.resourceId.videoId;

        container.innerHTML += `
            <div class="video-card">
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                    <img src="${video.snippet.thumbnails.medium.url}">
                    <p>${video.snippet.title}</p>
                </a>
            </div>
        `;
    });
}

function youtube() {
    const container = `
    <div class="container">

        <div id="isa" class="channel">
            <div class="channel-header">
                <img src="https://yt3.ggpht.com/mUxYY3q82oXIf53qmYls2S_wSojD-l6JSXnNtAqGtACTQILk-ZFQYsoSIQErNpdovaiQwTJ6=s176-c-k-c0x00ffffff-no-rj-mo">
                <div>
                    <h2>Isa Roza</h2>
                    <div class="stats" id="isa-stats"></div>
                </div>
            </div>
            <div class="videos" id="isa-videos"></div>
        </div>

        <div id="leoeisa" class="channel">
            <div class="channel-header">
                <img src="https://yt3.googleusercontent.com/9dIp_fqZNyRBgDZq4ca_anN-eJ51QNaj0RUTcH7CUQMyynnaDGaIKuAw46jQdTe0r6XdrtYUfBU=s160-c-k-c0x00ffffff-no-rj">
                <div>
                    <h2>Leo e Isa</h2>
                    <div class="stats" id="leoeisa-stats"></div>
                </div>
            </div>
            <div class="videos" id="leoeisa-videos"></div>
        </div>

        <div id="lives" class="channel">
            <div class="channel-header">
                <img src="https://yt3.googleusercontent.com/buw0TDCaUBlIJZgwusWOSktbmbovWfdLderw5mmQBBVJZxHIZLdcmEd6sJVIm62cTIhCkSIV0eI=s160-c-k-c0x00ffffff-no-rj">
                <div>
                    <h2>Leo e Isa Lives</h2>
                    <div class="stats" id="lives-stats"></div>
                </div>
            </div>
            <div class="videos" id="lives-videos"></div>
        </div>

    </div>
    `;
    const app=document.getElementById("app");
    app.innerHTML = container;
    app.className=""

    setTimeout(() => {
        canais.forEach(c => carregarCanal(c));
    }, 100);
}
