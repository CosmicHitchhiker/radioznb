if(LunchTimeCoder == undefined){var LunchTimeCoder = {}; }

var LunchTimeCoder_AutoSlideShow_Array = new Array();
LunchTimeCoder.AutoSlideShow = function(parentDivId, timerInterval)
{
    this._parentDivId = parentDivId;

    if(timerInterval==null){timerInterval=1000;}
    this._timerInterval = timerInterval;

    this._mainTimer = null;
    this._images = new Array();
    this._currentImage = null;

    this._turnedOn = true;

    this._element = document.getElementById(this._parentDivId);

    var img = document.createElement("img");
    img.id = this._parentDivId + "_MainImageTag";
    this._element.appendChild(img);
    img.style.width = '87%';  //единственное от себя вставил - всем картинкам один размер задаю
    img.style.height = '5%';

    LunchTimeCoder_AutoSlideShow_DoTimer(this._parentDivId);

    LunchTimeCoder_AutoSlideShow_Array[LunchTimeCoder_AutoSlideShow_Array.length] = this;
}

LunchTimeCoder.AutoSlideShow.prototype = {
    IsTurnedOn:function()
    {
        return this._turnedOn;
    },
    Start:function()
    {
        this._turnedOn = true;
        LunchTimeCoder_AutoSlideShow_DoTimer(this._parentDivId);
    },
    Stop:function()
    {
        this._turnedOn = false;
    },
    Next:function()
    {
        if (this._currentImage == null)
        {
            this._currentImage = 0;
        }
        else
        {
            this._currentImage++;
        }
        if (this._currentImage >= this._images.length){this._currentImage = 0;}

        this.SetImage(this._currentImage);
    },
    Previous:function()
    {
        if (this._currentImage == null)
        {
            this._currentImage = 0;
        }
        else
        {
            this._currentImage--;
        }
        if (this._currentImage < 0){this._currentImage = this._images.length - 1;}
        this.SetImage(this._currentImage);
    },
    SetImage:function(index)
    {
        var elem = document.getElementById(this._parentDivId);
        if (elem != null)
        {
            document.getElementById(this._parentDivId + "_MainImageTag").src = this._images[index].src;
        }
        this._currentImage = index;
    },
    AddImage:function(imageUrl)
    {
        var img = new Image();
        img.src = imageUrl;
        this._images[this._images.length] = img;
        if(this._images.length == 1)
        {
            this.SetImage(0);
        }
    }
}
function LunchTimeCoder_AutoSlideShow_DoTimer(parentDivId)
{
    var slideShow = null;
    for(var i = 0; i < LunchTimeCoder_AutoSlideShow_Array.length; i++)
    {
        if (LunchTimeCoder_AutoSlideShow_Array[i]._parentDivId == parentDivId)
        {
            slideShow = LunchTimeCoder_AutoSlideShow_Array[i];
            break;
        }
    }

    if(slideShow!=null)
    {
        if (slideShow.IsTurnedOn())
        {
            slideShow.Next();
            var timerLength = slideShow._timerInterval;
            slideShow._mainTimer = window.setTimeout("LunchTimeCoder_AutoSlideShow_DoTimer('" + slideShow._parentDivId + "');", slideShow._timerInterval);
        }
    }
}
function LunchTimeCoder_AutoSlideShow_Initialize()
{
    for(var i = 0; i < LunchTimeCoder_AutoSlideShow_Array.length; i++)
    {
        if (LunchTimeCoder_AutoSlideShow_Array[i]._mainTimer == null)
        {
            LunchTimeCoder_AutoSlideShow_DoTimer(LunchTimeCoder_AutoSlideShow_Array[i]._parentDivId);
        }
    }
    window.setTimeout("LunchTimeCoder_AutoSlideShow_Initialize();", 500);
}
LunchTimeCoder_AutoSlideShow_Initialize();

var autoSlideShow = new LunchTimeCoder.AutoSlideShow("player-screen-text", 1000);
autoSlideShow.AddImage("images/template_screentext.png");
autoSlideShow.AddImage("images/name.png");
