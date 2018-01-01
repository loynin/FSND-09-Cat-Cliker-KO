var initialCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'images/cat_picture1.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
            nicknames: ['dont know']
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'images/cat_picture2.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
            nicknames: ['simple']
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'images/cat_picture3.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            nicknames: ['strong']
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'images/cat_picture4.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
            nicknames: ['super angry']
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'images/cat_picture5.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            nicknames: ['wow']
        }
    ]

var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);
	
	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 10){
			title = 'Newborn';
		}else if (clicks < 50){
			title = 'Infant';
		}else if (clicks < 100){
			title = 'Child';
		}else if (clicks <200) {
			title = 'Teen';
		}else if (clicks < 500){
			title = 'Adult';
		}else {
			title = 'Ninja';
		}
		return title;
	},this);	
}

var ViewModel = function(){
	
	var self = this;
	
	this.catList = ko.observableArray([]);
	
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	})
	
	this.currentCat = ko.observable(this.catList()[0]);
	
	this.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 8 );
				
	}
	
	this.setCat = function(clickedCat){
		self.currentCat(clickedCat);
		
	}
	
};


ko.applyBindings(new ViewModel());