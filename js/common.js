// function pixiv_images() {
//     var img_html = '';
//     for (var i = 1; i <= 50; i++) {
//         img_html += '<img class="nya-btn hot badge" src="./pixiv_images/aibianse_com_' + i + '.webp" referrerpolicy="no-referrer" alt="爱变色"/></br>';
//     }
//     $('#pixiv_images').html(img_html);
// }

function random_video() {
    $.get("https://api.photograph.show/short_video", function (data) {
        var url = data.data.rows[0].url.replace('aibianse.pages.dev', 'photograph.show')
        let dom = document.getElementById('random_video')
        dom.src = url
    }, "json");
}

function random_image() {
    $.get("https://api.photograph.show/random_image", function (data) {
        var url = data.data.rows[0].url.replace('aibianse.pages.dev', 'photograph.show')
        let dom = document.getElementById('random_image')
        dom.src = url
    }, "json");
}