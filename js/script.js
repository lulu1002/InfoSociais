
const aky = localStorage.getItem("molho")
const canais = [
    { id: "UChE_9ojxxGFFt9VH-huU-tg", statsEl: "isa-stats", videosEl: "isa-videos" },
    { id: "UCN1yY0xfiRDKCUXg0rlxypQ", statsEl: "leoeisa-stats", videosEl: "leoeisa-videos" },
    { id: "UCShl4rPJLrw9c7E5yoQROdQ", statsEl: "lives-stats", videosEl: "lives-videos" }
];

async function carregarCanal(canal){
    const statsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails&id=${canal.id}&key=${aky}`
    );
    const statsData = await statsRes.json();
    const info = statsData.items[0];

    document.getElementById(canal.statsEl).innerText =
        `${Number(info.statistics.subscriberCount).toLocaleString()} inscritos • ${Number(info.statistics.videoCount).toLocaleString()} vídeos`;

    const uploadsPlaylist = info.contentDetails.relatedPlaylists.uploads;

    const videosRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=${uploadsPlaylist}&key=${aky}`
    );
    const videosData = await videosRes.json();

    const container = document.getElementById(canal.videosEl);

    videosData.items.forEach(video => {
        const videoId = video.snippet.resourceId.videoId;

        container.innerHTML += `
            <div class="video-card">
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                    <img src="${video.snippet.thumbnails.high.url}">
                    <p>${video.snippet.title}</p>
                </a>
            </div>
        `;
    });
}

canais.forEach(c => carregarCanal(c));