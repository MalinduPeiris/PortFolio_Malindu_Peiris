// more tech stack Items 

function viewMoreTechStack() {
    document.getElementById("techStack2ndSection").style.display = "grid";
    document.getElementById("techStack3rdSection").style.display = "grid";
    document.getElementById("btnViewMoreSection").style.display = "none";
    document.getElementById("btnViewLessSection").style.display = "grid";
}

function viewLessTechStack() {
    document.getElementById("techStack2ndSection").style.display = "none";
    document.getElementById("techStack3rdSection").style.display = "none";
    document.getElementById("btnViewMoreSection").style.display = "grid";
    document.getElementById("btnViewLessSection").style.display = "none";
}



// more project details

function viewMoreProject1() {
    ShowLessProject2();
    ShowLessProject3();
    showLessProject4();
    ShowLessProject5();
    ShowLessProject6();
    ShowLessProject7();
    ShowLessProject8();

    document.getElementById("project1Section").style.display = "grid";
    document.getElementById("project1ViewMore").style.display = "none";
    document.getElementById("project1Close").style.display = "grid";
    document.getElementById("constructionProFullData").style.display = "grid";
    document.getElementById("constructionProSimpleDiscription").style.display = "none";
    document.getElementById("projectCardDivsId1").style.width = "70%";
}

function ShowLessProject1() {
    document.getElementById("project1Section").style.display = "none";
    document.getElementById("project1ViewMore").style.display = "grid";
    document.getElementById("project1Close").style.display = "none";
    document.getElementById("constructionProFullData").style.display = "none";
    document.getElementById("constructionProSimpleDiscription").style.display = "grid";
    document.getElementById("projectCardDivsId1").style.width = "50%";
    document.getElementById("projectCardDivsId1").style.transition = "1.2s";
}


// 
function viewMoreProject2() {
    ShowLessProject1();
    ShowLessProject3();
    showLessProject4();
    ShowLessProject5();
    ShowLessProject6();
    ShowLessProject7();
    ShowLessProject8();

    document.getElementById("project2Section").style.display = "grid";
    document.getElementById("project2ViewMore").style.display = "none";
    document.getElementById("project2Close").style.display = "grid";
    document.getElementById("travelProSimpleDiscription").style.display = "none";
    document.getElementById("travelProFullData").style.display = "grid";
    document.getElementById("projectCardDivsId2").style.width = "70%";
}

function ShowLessProject2() {
    document.getElementById("project2Section").style.display = "none";
    document.getElementById("project2ViewMore").style.display = "grid";
    document.getElementById("project2Close").style.display = "none";
    document.getElementById("travelProSimpleDiscription").style.display = "grid";
    document.getElementById("travelProFullData").style.display = "none";
    document.getElementById("projectCardDivsId2").style.width = "50%";
    document.getElementById("projectCardDivsId2").style.transition = "1.2s";
}


//
function viewMoreProject3() {
    ShowLessProject1();
    ShowLessProject2();
    showLessProject4();
    ShowLessProject5();
    ShowLessProject6();
    ShowLessProject7();
    ShowLessProject8();

    document.getElementById("project3Section").style.display = "grid";
    document.getElementById("project3ViewMore").style.display = "none";
    document.getElementById("project3Close").style.display = "grid";
    document.getElementById("skyLinkProSimpleDiscription").style.display = "none";
    document.getElementById("skyLinkProFullData").style.display = "grid";
    document.getElementById("projectCardDivsId3").style.width = "70%";
}

function ShowLessProject3() {
    document.getElementById("project3Section").style.display = "none";
    document.getElementById("project3ViewMore").style.display = "grid";
    document.getElementById("project3Close").style.display = "none";
    document.getElementById("skyLinkProSimpleDiscription").style.display = "grid";
    document.getElementById("skyLinkProFullData").style.display = "none";
    document.getElementById("projectCardDivsId3").style.width = "50%";
    document.getElementById("projectCardDivsId3").style.transition = "1.2s";
}


//
function viewMoreProject4() {
    ShowLessProject1();
    ShowLessProject2();
    ShowLessProject3();
    ShowLessProject5();
    ShowLessProject6();
    ShowLessProject7();
    ShowLessProject8();

    document.getElementById("project4Section").style.display = "grid";
    document.getElementById("project3ViewMoreBtn").style.display = "none";
    document.getElementById("project3CloseBtn").style.display = "grid";
    document.getElementById("hotelProSimpleDiscription").style.display = "none";
    document.getElementById("hotelProFullData").style.display = "grid";
    document.getElementById("projectCardDivsId4").style.width = "70%";
}

function showLessProject4() {
    document.getElementById("project4Section").style.display = "none";
    document.getElementById("project3ViewMoreBtn").style.display = "grid";
    document.getElementById("project3CloseBtn").style.display = "none";
    document.getElementById("hotelProSimpleDiscription").style.display = "grid";
    document.getElementById("hotelProFullData").style.display = "none";
    document.getElementById("projectCardDivsId4").style.width = "50%";
    document.getElementById("projectCardDivsId4").style.transition = "1.2s";
}


//
function viewMoreProject5() {
    ShowLessProject1();
    ShowLessProject2();
    ShowLessProject3();
    showLessProject4();
    ShowLessProject6();
    ShowLessProject7();
    ShowLessProject8();

    document.getElementById("project5Section").style.display = "grid";
    document.getElementById("project5ViewMoreBtn").style.display = "none";
    document.getElementById("project5CloseBtn").style.display = "grid";
    document.getElementById("wetherProSimpleDiscription").style.display = "none";
    document.getElementById("weatherProFullData").style.display = "grid";
    document.getElementById("projectCardDivsId5").style.width = "70%";
}

function ShowLessProject5() {
    document.getElementById("project5Section").style.display = "none";
    document.getElementById("project5ViewMoreBtn").style.display = "grid";
    document.getElementById("project5CloseBtn").style.display = "none";
    document.getElementById("wetherProSimpleDiscription").style.display = "grid";
    document.getElementById("weatherProFullData").style.display = "none";
    document.getElementById("projectCardDivsId5").style.width = "50%";
    document.getElementById("projectCardDivsId5").style.transition = "1.2s";
}


//
function viewMoreProject6() {
    ShowLessProject1();
    ShowLessProject2();
    ShowLessProject3();
    showLessProject4();
    ShowLessProject5();
    ShowLessProject7();
    ShowLessProject8();

    document.getElementById("project6Section").style.display = "grid";
    document.getElementById("project6ViewMoreBtn").style.display = "none";
    document.getElementById("project6CloseBtn").style.display = "grid";
    document.getElementById("pharmacyProSimpleDiscription").style.display = "none";
    document.getElementById("pharmacyProFullData").style.display = "grid";
    document.getElementById("projectCardDivsId6").style.width = "70%";
}

function ShowLessProject6() {
    document.getElementById("project6Section").style.display = "none";
    document.getElementById("project6ViewMoreBtn").style.display = "grid";
    document.getElementById("project6CloseBtn").style.display = "none";
    document.getElementById("pharmacyProSimpleDiscription").style.display = "grid";
    document.getElementById("pharmacyProFullData").style.display = "none";
    document.getElementById("projectCardDivsId6").style.width = "50%";
    document.getElementById("projectCardDivsId6").style.transition = "1.2s";
}


//
function viewMoreProject7() {
    ShowLessProject1();
    ShowLessProject2();
    ShowLessProject3();
    showLessProject4();
    ShowLessProject5();
    ShowLessProject6();
    ShowLessProject8();

    document.getElementById("project7Section").style.display = "grid";
    document.getElementById("project7ViewMoreBtn").style.display = "none";
    document.getElementById("project7CloseBtn").style.display = "grid";
    document.getElementById("mealProSimpleDiscription").style.display = "none";
    document.getElementById("mealProFullData").style.display = "grid";
    document.getElementById("projectCardDivsId7").style.width = "70%";
}

function ShowLessProject7() {
    document.getElementById("project7Section").style.display = "none";
    document.getElementById("project7ViewMoreBtn").style.display = "grid";
    document.getElementById("project7CloseBtn").style.display = "none";
    document.getElementById("mealProSimpleDiscription").style.display = "grid";
    document.getElementById("mealProFullData").style.display = "none";
    document.getElementById("projectCardDivsId7").style.width = "50%";
    document.getElementById("projectCardDivsId7").style.transition = "1.2s";
}


//
function viewMoreProject8() {
    ShowLessProject1();
    ShowLessProject2();
    ShowLessProject3();
    showLessProject4();
    ShowLessProject5();
    ShowLessProject6();
    ShowLessProject7();

    document.getElementById("project8Section").style.display = "grid";
    document.getElementById("project8ViewMoreBtn").style.display = "none";
    document.getElementById("project8CloseBtn").style.display = "grid";
    document.getElementById("clothifyProSimpleDiscription").style.display = "none";
    document.getElementById("clothifyProFullData").style.display = "grid";
    document.getElementById("projectCardDivsId8").style.width = "70%";
}

function ShowLessProject8() {
    document.getElementById("project8Section").style.display = "none";
    document.getElementById("project8ViewMoreBtn").style.display = "grid";
    document.getElementById("project8CloseBtn").style.display = "none";
    document.getElementById("clothifyProSimpleDiscription").style.display = "grid";
    document.getElementById("clothifyProFullData").style.display = "none";
    document.getElementById("projectCardDivsId8").style.width = "50%";
    document.getElementById("projectCardDivsId8").style.transition = "1.2s";
}


// view more and less project btns

function btnMoreProject() {
    ShowLessProject1();
    ShowLessProject2();
    ShowLessProject3();
    showLessProject4();
    ShowLessProject5();
    ShowLessProject6();
    ShowLessProject7();
    ShowLessProject8();


    document.getElementById("moreProjectsBtn").style.display = "none";
    document.getElementById("hideProjectsBtn").style.display = "grid";
    document.getElementById("moreProjectsSection").style.display = "grid";
}

function btnHideProject() {
    ShowLessProject1();
    ShowLessProject2();
    ShowLessProject3();
    showLessProject4();
    ShowLessProject5();
    ShowLessProject6();
    ShowLessProject7();
    ShowLessProject8();
    document.getElementById("moreProjectsBtn").style.display = "grid";
    document.getElementById("hideProjectsBtn").style.display = "none";
    document.getElementById("moreProjectsSection").style.display = "none";
}











































































