console.log("kya hal chall bhai");

const images = [
        { 1: "aviral" },
        { 2: "akshay" },
        { 3: "aanchal" },
        { 4: "ram" },
        { 5: "shyam" },
        { 6: "akriti" },
];

const about = [
        {
                1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque!",
        },
        {
                2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ea minus quam blanditiis fugit magnam, animi nesciunt laudantium nam iure?",
        },
        {
                3: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel et officiis obcaecati quidem minus debitis, ad neque molestias cum numquam amet dolorum est, atque, soluta magnam possimus consequuntur libero nesciunt.",
        },
        {
                4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, recusandae quo! Porro, quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi ipsam, reiciendis, temporibus soluta iste veritatis doloremque ad, maxime cupiditate quasi laudantium suscipit nulla sunt optio quos in minus iure!",
        },
        {
                5: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis beatae dolor quisquam asperiores iure modi similique sed perspiciatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi ipsam, reiciendis, temporibus soluta iste veritatis doloremque ad, maxime cupiditate quasi laudantium suscipit nulla sunt optio quos in minus iure!",
        },
        {
                6: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, exercitationem iusto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi ipsam, reiciendis, temporibus soluta iste veritatis doloremque ad, maxime cupiditate quasi laudantium suscipit nulla sunt optio quos in minus iure!",
        },
];
// console.log(images[0][1]);
(function () {
        let imagechange = document.querySelector("#left-image");
        let namechange = document.querySelector(".leftname");
        var buttons = document.querySelectorAll(".btnstyle");
        var description = document.querySelector(".desc");
        var counter = 1;

        buttons.forEach(function (button) {
                button.addEventListener("click", function () {
                        if (button.classList.contains("leftbtn")) {
                                counter--;
                                if (counter < 1) {
                                        counter = images.length;
                                }
                                let url = `images/${counter}.jpg`;

                                var newname = images[counter - 1][counter];
                                var newdesc=about[counter-1][counter];
                                description.innerHTML=`${newdesc}`;
                                namechange.innerHTML = `${newname}`;
                                imagechange.setAttribute("src", url);
                        }
                        else if (button.classList.contains("rightbtn")) {
                                counter++;
                                if (counter > images.length) {
                                        counter = 1;
                                }
                                let url = `images/${counter}.jpg`;
                                
                                var newname = images[counter - 1][counter];
                                var newdesc=about[counter-1][counter];
                                description.innerHTML=`${newdesc}`;
                                namechange.innerHTML = `${newname}`;
                                imagechange.setAttribute("src", url);
                        }
                });
        });
})();
