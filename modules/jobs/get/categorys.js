var categorys = [
    "Anime",
    "Applications",
    "Books",
    "Games",
    "Movies",
    "Music",
    "Other",
    "TV"
];

var subCategorys = [
"Hentai",
"HD Video",
"Games",
"Ebooks",
"Documentary",
"Concerts",
"Books",
"Audio books",
"Android",
"Academic",
"3D Movies",
"XBOX360",
"Windows",
"Wii",
"Video",
"UNIX",
"Textbooks",
"Soundtrack",
"PC",
"Mp3",
"Mac",
"Linux",
"iOS"
];

function constructCategory() {
    var message = 'Categorys: ';
    for(var i =0;i <categorys.length;i++) {
        message += (i === 0 ? '':',') + categorys[i];
    }
    return message;
}

function constructSubCategory() {
    var message = 'Sub Categorys: ';
    for(var i =0;i <subCategorys.length;i++) {
        message += (i === 0 ? '':',') + subCategorys[i];
    }
    return message;
}

exports.getCategorys = constructCategory;
exports.getSubCategorys = constructSubCategory;