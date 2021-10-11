/*
 * Replace static quotes by dynamic loading
 */
function showQuote(name, pic_url, text, title) {
    $('#quote').append(
        `<div class="carousel-item">
            <div class="row text-white ml-2">
                <div class="d-flex justify-content-center flex-wrap ">
                    <div class="mt-4 col-sm-7 col-md-2 d-flex justify-content-center">
                        <img src="${pic_url}" alt="" class="image" width="120" height="120">
                    </div>
                    <div class="mt-4 col-sm-8 col-md-7">
                        <p class="paragraph-carousel">${text}</p>
                        <p class="name mt-4 mb-1">${name}</p>
                        <p class="italic">${title}</p>
                    </div>
                </div>
            </div>
        </div>`
    )
}

function quotes() {
    $('.loader').show()
    $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/quotes',
        error: function(error) {
            alert(error)
        },
        success: function(response) {
            response.forEach(({ name, pic_url, text, title }) => {
                showQuote(name, pic_url, text, title)
            });
            $('.carousel .carousel-item:first').addClass('active')
            $('.loader').hide()
        }
    })
}
quotes()

/*
 * Replace static video cards by dynamic loading
 */
function showVideo(item) {
    $('#popular').append(
        `<div class="col-sm-12 col-md-6 col-lg-3" >
        <div class="card mb-4">
        <img src="${item.thumb_url}" alt="" class="card-img-top">
        <div class="card-img-overlay d-flex justify-content-center mt-5">
            <img src="images/play.png" alt="" width="50" height="50">
        </div>
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text paragraph-card">${item['sub-title']}</p>
            <div class="row ml-1">
                <img src="${item.author_pic_url}" alt="" class="image" width="60" height="60">
                <h3 class="ml-3 mt-3">${item.author}</h3>
            </div>
            <div class="row d-flex justify-content-between">
                <div class="ml-3 mt-1">
                    <img src="images/star_on.png" alt="" width="15" height="15">
                    <img src="images/star_on.png" alt="" width="15" height="15">
                    <img src="images/star_on.png" alt="" width="15" height="15">
                    <img src="images/star_on.png" alt="" width="15" height="15">
                    <img src="images/star_off.png" alt="" width="15" height="15">
                </div>
                <div>
                    <h3 class="mx-2 mt-2">${item.duration}</h3>
                </div>
            </div>
        </div>
    `)
}

function mostPopular() {
    $('.loader').show()
    $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/popular-tutorials',
        error: function(error) {
            alert(error)
        },
        success: function(response) {
            response.forEach(function(item) {
                if (item.id >= 5) {
                    return;
                }
                showVideo(item)
            })
            $('.loader').hide()
        }
    })
}
mostPopular()

/*
 * Replace static video card by dynamic loading:
 */
function latestVideos() {
    $('.loader').show()
    $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/latest-videos',
        error: function(error) {
            alert(error)
        },
        success: function(response) {
            response.forEach(function(item) {
                if (item.id >= 5) {
                    return;
                }
                $('#latest').append(
                    `<div class="col-sm-12 col-md-6 col-lg-3" >
                    <div class="card mb-4">
                    <img src="${item.thumb_url}" alt="" class="card-img-top">
                    <div class="card-img-overlay d-flex justify-content-center mt-5">
                        <img src="images/play.png" alt="" width="50" height="50">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text paragraph-card">${item['sub-title']}</p>
                        <div class="row ml-1">
                            <img src="${item.author_pic_url}" alt="" class="image" width="60" height="60">
                            <h3 class="ml-3 mt-3">${item.author}</h3>
                        </div>
                        <div class="row d-flex justify-content-between">
                            <div class="ml-3 mt-1">
                                <img src="images/star_on.png" alt="" width="15" height="15">
                                <img src="images/star_on.png" alt="" width="15" height="15">
                                <img src="images/star_on.png" alt="" width="15" height="15">
                                <img src="images/star_on.png" alt="" width="15" height="15">
                                <img src="images/star_off.png" alt="" width="15" height="15">
                            </div>
                            <div>
                                <h3 class="mx-2 mt-2">${item.duration}</h3>
                            </div>
                        </div>
                    </div>
                `)
            })
            $('.loader').hide()
        }
    })
}
latestVideos()