(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            mainmessage : "welcome to my video app!",
            videodata : [],
            singlemoviedata : [],

            piecetitle : "",
            mainimage : "",
            maintext : "",
            subimage1 : "",
            subtext1 : "",
            subimage2 : "",
            subtext2 : "",
            subimage3 : "",
            subtext3 : "",
            videotitle : "",
            videosource : "",
            videodescription : "",
            showDetails : false
        },

        created : function() {
            this.fetchMovieData(null);
        },

        methods : {
            fetchMore(e) {
                this.fetchMovieData(e.currentTarget.dataset.movie); // this will be a number (id)
            },

            loadMovie(e) {
                // stub
                e.preventDefault();

                dataKey = e.currentTarget.getAttribute('href');

                currentData = this.videodata.filter(tbl_portfoliopieces => tbl_portfoliopieces.main_image === dataKey);

                this.piecetitle = currentData[0].title;
                this.mainimage = currentData[0].main_image;
                this.maintext = currentData[0].main_desc;
                this.subimage1 = currentData[0].sub_image1;
                this.subtext1 = currentData[0].sub_desc1;
                this.subimage2 = currentData[0].sub_image2;
                this.subtext2 = currentData[0].sub_desc2;
                this.subimage3 = currentData[0].sub_image3;
                this.subtext3 = currentData[0].sub_desc3;
                //this.mainimage = dataKey; //I commented this out because I don't think I need it. It must have something to do with playing the video?


                this.videotitle = currentData[0].vid_name;
                this.videodescription = currentData[0].vid_desc;
                //this.videosource = dataKey;

                this.showDetails = true;

                setTimeout(function() { window.scrollTo(0, 1200); }, 500);
            },

            scrollBackUp() {
                window.scrollTo(0, 0);
                this.showDetails = false;
                this.videsource = "";
            },

            fetchMovieData(movie) {
                url = movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    if (movie) {
                        // getting one movie, so use the single array
                        console.log(data);
                        this.singlemoviedata = data;
                    } else {
                        // push all the video (or portfolio content) into the video array
                        console.log(data);
                        this.videodata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    });
})();