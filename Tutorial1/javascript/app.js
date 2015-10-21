var Namespace = angular.module('Namespace', []);

Namespace.controller('StoreController', function () {

    this.name = "Aditya S",
    this.bookarray = product
})

var product = [
    {
        bookName: "Book of Eli",
        bookCost: 15,
        bookImage: 'images/BookStack.png',
        bookDescription: "Thirty years after war turned "
        + " the world into a wasteland, a lone warrior named Eli (Denzel Washington) marches "
        + " across the ruined landscape, carrying hope for humanity's redemption.",
        reviews: [
            {
                stars: 3,
                body: "I love this book!",
                author: "adi@swami.com"
            },

        ]

    },
    {
        bookName: "Introduction to Angular",
        bookCost: 21,
        bookImage: 'images/Books.png',
        bookDescription: "This is me learning Angular JS",
        reviews: [
            {
                stars: 3,
                body: "I love to learn Angular JS",
                author: "adi@swami.com"
            },

        ]

    }
]

Namespace.controller('PanelSwitcher', function () {

    this.tab = 1;

    this.selectTab = function (setTab) {

        this.tab = setTab;
    };

    this.isSelected = function (checkTab) {
        return this.tab === checkTab;
    };

})

Namespace.controller('ReviewController', function () {

  this.review = {};
   this.addReview = function(product) {
            product.reviews.push(this.review); 
            this.review = {};  };


})
;


