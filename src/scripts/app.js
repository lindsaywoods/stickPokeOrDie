const app = {}

app.randomBanner = (bannerWord) => {
    let bannerArray = ["banner-1", "banner-2", "banner-3", "banner-4", "banner-5", "banner-6"]
    let randomWords = [" 4 life", "  AF", " or die", " before dishonour", " for life", " and kittens", " for the win"]
    let randomIndex = Math.floor(Math.random() * bannerArray.length);
    // chooses some random text from the above array
    let randomWordIndex = Math.floor(Math.random() * randomWords.length);
    // chooses a random banner from the above array

    let rando = bannerArray[randomIndex]
    $(".banner").removeClass("banner");
    const ban = $('.bannerall');
    if (ban.hasClass('banner-1')) {
        ban.removeClass('banner-1')
    } else if (ban.hasClass('banner-2')) {
        ban.removeClass('banner-2')
    } else if (ban.hasClass('banner-3')) {
        ban.removeClass('banner-3')
    } else if (ban.hasClass('banner-4')) {
        ban.removeClass('banner-4')
    } else if (ban.hasClass('banner-5')) {
        ban.removeClass('banner-5')
    } else if (ban.hasClass('banner-6')) {
        ban.removeClass('banner-6');
    }
    $(".bannerall").addClass(rando);
    $(".bannerall").addClass("bannerafter");
    $(".formcontainer").addClass("moveform");
    // $(".footerhide").toggle();
    // $("footer").removeClass("hide");
    // $("footer").addClass("footerhide");
    $('div.bannerall').text(bannerWord + randomWords[randomWordIndex])
}

app.newIcon = (query) => {
    return $.ajax({
        url: "https://noun-project-proxy.herokuapp.com/v1",
        method: 'GET',
        data: {
            url: `icons/${query}`,
            params: JSON.stringify({

            })
        }
    }).then(function (response) {
        // console.log(response);
        // create variable to randomize the object selected out of the returned array
        const random = response.icons[Math.floor(Math.random() * response.icons.length)]
        console.log(random)
        let image = random.preview_url;
        console.log(image);
        $(".results").html(`<img src= ${image}>`);
    });
}

app.events = () => {
    $("form").on("submit", function (e) {
        // prevents browser default behaviour
        e.preventDefault();
        // creates a variable to hold user's input
        const favething = $("input").val();
        if (favething !== "") {
            // commented this out because we wanted users to be able to press enter repeatedly with the same input, but left the code in case we changed our mind 
            // $('input').val("");
            // passing user's input into the function that retrieves their icon
            $('.loader').show().delay(3000).fadeOut()
            app.newIcon(favething);
            app.randomBanner(favething);
        }
    })
}

app.init = () => {
    app.events();
}

$(function () {
    app.init();

});