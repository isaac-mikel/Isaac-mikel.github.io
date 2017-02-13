// var app = angular.module('app', []);
//
// function MainCtrl($scope, $http) {
//     $scope.portfolioItems = [{
//         id: 1,
//         title: 'item 1',
//         desc: 'item 1',
//         thumbnail: 'images/thumbnail-character.png',
//         link: '/characteranimation',
//         date: '03.29.16'
//     }, {
//         id: 2,
//         title: 'item 2',
//         desc: 'item 2',
//         thumbnail: 'images/thumbnail-dva.png',
//         link: '/characteranimation',
//         date: '12.19.15'
//     }, {
//         id: 3,
//         title: 'item 3',
//         desc: 'item 3',
//         thumbnail: 'images/thumbnail-insight.png',
//         link: '/characteranimation',
//         date: '11.23.15'
//     }, ];
//
// }
angular.module('app', ['appServices'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'home.html',
      controller: ListCtrl
    }).

    when('/:itemId', {
      templateUrl: 'detail.html',
      controller: DetailCtrl
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);


/* Controllers */

function MainCtrl($scope, Page) {
  console.log(Page);
  $scope.page = Page;
}

function ListCtrl($scope, Page, Model) {
  Page.setTitle("Items");
  $scope.items = Model.notes();

}

function DetailCtrl($scope, Page, Model, $routeParams, $location) {
  Page.setTitle("Detail");
  var id = $scope.itemId = $routeParams.itemId;
  $scope.item = Model.get(id);
}

/* Services */

angular.module('appServices', [])

.factory('Page', function($rootScope) {
  var pageTitle = "Untitled";
  return {
    title: function() {
      return pageTitle;
    },
    setTitle: function(newTitle) {
      pageTitle = newTitle;
    }
  }
})

.factory('Model', function() {
  var data = [{
    id: 0,
    title: 'Ridgeview Football',
    thumbnail: 'images/thumbnail-ridgeview.png',
    tags: 'Football, Sports, Illustrator',
    image: 'images/ridgeview.png',
    date: '02.11.17',
    detail: 'A little practice with sports designs and halftones.',
  },{
    id: 1,
    title: 'Ihandy Logo',
    thumbnail: 'images/thumbnail-ihandy.png',
    tags: 'Handy, Man, Branding',
    image: 'images/ihandy.png',
    date: '10.25.16',
    link: 'https://ihandymeridian.com',
    detail: 'Local logo and branding for the handiest man in the land.',
  }, {
    id: 2,
    title: 'Ace Painting Logo',
    thumbnail: 'images/thumbnail-acepainting.png',
    tags: 'Branding, Logo, Illustrator',
    image: 'images/acepainting.png',
    date: '06.30.16',
    detail: 'Lil logo for a painting business in Toronto.',
  }, {
    id: 3,
    title: 'dRecovery Logo',
    thumbnail: 'images/thumbnail-drecovery.png',
    tags: 'Branding, Logo, Money',
    image: 'images/dRecovery.png',
    date: '06.28.16',
    detail: 'Recovery from Debt! Quick logo design for a finance app with inspiration and style from the Everydollar app.',
  }, {
    id: 4,
    title: 'Team Galaxy',
    thumbnail: 'images/thumbnail-teamgalaxy.png',
    tags: 'Illustrator, Logo, Space',
    image: 'images/teamgalaxy.png',
    date: '06.05.16',
    detail: 'It was an out of this world experience designing this one for a gaming team! The inspiration and style came from Emrich Office and his Bottle Logic branding.',
  }, {
    id: 5,
    title: 'Pine Scent',
    thumbnail: 'images/thumbnail-pinescent.gif',
    tags: 'Photoshop, Animation, Motion Graphics',
    image: 'images/pinescent.gif',
    date: '06.03.16',
    detail: 'I am learning so much from Alex Grigg about animation specifically in Photoshop and I hope to learn more in the future.',
  }, {
    id: 6,
    title: 'JB',
    thumbnail: 'images/thumbnail-jb.png',
    tags: 'Portrait, Acrylic, Painting',
    image: 'images/jb.png',
    date: '05.26.16',
    detail: 'Acrylic Portrait of the hunky Justin Beiber',
  }, {
    id: 7,
    title: 'Character Animation Walk Cycle',
    thumbnail: 'images/thumbnail-character.png',
    tags: 'Character Design, After Effects, Motion Graphics',
    image: 'images/Character.gif',
    date: '02.20.16',
    detail: 'Character animation walk cycle done in After Effects. Learning from the Frasier Davidson Skillshare class.',
  }, {
    id: 8,
    title: 'Overwatch Art',
    thumbnail: 'images/thumbnail-dva.png',
    tags: "Character Design, Digital Painting, Overwatch",
    image: 'images/thumbnail-dva.png',
    date: '03.23.16',
    detail: 'Photoshop Painting of D.Va from the new Overwatch',
  }, {
    id: 9,
    title: 'Insight',
    thumbnail: 'images/thumbnail-insight.png',
    tags: "Logo Design, Branding",
    image: 'images/insight.png',
    date: '12.10.15',
    detail: 'Branding and logo options for Insight',
  }, {
    id: 10,
    title: 'Starbucks Animation',
    thumbnail: 'images/thumbnail-starbucks.png',
    tags: "Motion Graphics, After Effects, Branding",
    image: 'images/starbucks.png',
    date: '06.15.15',
    link: 'https://vimeo.com/164171013',
    detail: 'Branding and animation practice with Starbucks holiday drinks. Also mixed the audio in Fruity Loops Studio.',
  }, {
    id: 11,
    title: 'Alliance',
    thumbnail: 'images/thumbnail-alliance.png',
    tags: "Logo Design, Illustrator, Branding",
    image: 'images/alliance.png',
    date: '01.12.15',
    detail: 'I got the opportunity to help create the logo for a local chiropractor office in Eagle, Idaho called Alliance Physical Medicine. It was a great learning experience and I hope to do more logo design in the future.',
  }, {
    id: 12,
    title: 'Beyoncé',
    thumbnail: 'images/thumbnail-bey.png',
    tags: "Digital Painting, Photoshop",
    image: 'images/bey.png',
    date: '1.08.15',
    detail: 'Digital Painting of Beyoncé done in Photoshop and Sketchbook Pro.',
  }
];

  return {
    notes: function() {
      return data;
    },
    get: function(id) {
      return data[id];
    },
    add: function(note) {
      var currentIndex = data.length;
      data.push({
        id: currentIndex,
        title: note.title,
        detail: note.detail
      });
    }
  }
});
