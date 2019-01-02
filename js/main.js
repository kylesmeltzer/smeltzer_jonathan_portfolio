(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            mainmessage : "welcome to my video app!",
            portfoliodata : [],
            piecedata : [],

            piecetitle : "",
            mainimage : "",
            maintext : "",
            subimage1 : "",
            subtext1 : "",
            subimage2 : "",
            subtext2 : "",
            subimage3 : "",
            subtext3 : "",
            showDetails : false
        },

        created : function() {
            this.fetchPortfolioData(null);
        },

        methods : {
            fetchMore(e) {
                this.fetchPortfolioData(e.currentTarget.dataset.portfolio);
            },

            loadPiece(e) {
                // stub
                e.preventDefault();

                dataKey = e.currentTarget.getAttribute('href');

                currentData = this.portfoliodata.filter(tbl_portfoliopieces => tbl_portfoliopieces.main_image === dataKey);

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

                //this.videosource = dataKey;

                this.showDetails = true;

                //setTimeout(function() { window.scrollTo(0, 1900); }, 500);
            },

            // scrollBackUp() {
            //     window.scrollTo(0, 0);
            //     this.showDetails = false;
            //     this.videsource = "";
            // },

            fetchPortfolioData(portfolio) {
                url = portfolio ? `./includes/index.php?movie=${portfolio}` : './includes/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    if (portfolio) {
                        console.log(data);
                        this.piecedata = data;
                    } else {
                        console.log(data);
                        this.portfoliodata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    });
})();