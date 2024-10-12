let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav div ul li a');
// console.log("okay");
console.log(navLinks);
// sections.forEach(mysec => {
//     console.log(mysec);
// });
window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if (top >= offset && top<offset + height)
        {
            // console.log("active");
            // console.log(id);
            // console.log(links);
            navLinks.forEach(links => {
                // console.log(links.classList);
                // console.log(links);
                let k=document.querySelector('header nav div ul li a[href*='+id+']');
                console.log(k)
                k.classList.add('active');
                console.log(k)
                links.classList.remove('active');
                // console.log(links);
                //links.classList.add('active');
                // let k=document.querySelector('header nav div ul li a [href*=' + id + ']');
                // console.log(k);
                // k.classList.add('active');
                // console.log("active");
                
            });
        };
    });
};