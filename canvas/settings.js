$(document).ready(function () {
    var entries =[
        { label: 'HTML'},
        { label: 'CSS'},
        { label: 'JavaScript'},
        { label: 'Java'},
        { label: 'PHP'},
        { label: 'Bootstrap'},
        { label: 'Vue'},
        { label: 'Angular'},
        { label: 'Technologies'},
        { label: 'Data Structures'},
        { label: 'JQuery'},
        { label: 'HTML'},
        { label: 'HTML'},
        { label: 'HTML'},
        { label: 'HTML'},
        { label: 'HTML'},
    ];

    var settings = {
        entries : entries,
        width:640,
        height:480,
        radius:'75%',
        radiusMin: 75,
        bgDraw:false,
        bgColor:'none',
        opacityOver:1.00,
        opacityOut:0.05,
        opacitySpeed:6,
        fov:800,
        speed:1.5,
        fontFamily:'Courier, Arial, sans-serif',
        fontSize:'30',
        fontColor:'#08fdd8',
        fontWeight:'bold',
        fontStyle:'normal',
        fontStrech:'normal',
        fontToUppercase:true,
    };
    $('#tag').svg3DTagCloud(settings);
    $('a:eq(2)').attr("href", "https://unsplash.com/", "_blank");
});