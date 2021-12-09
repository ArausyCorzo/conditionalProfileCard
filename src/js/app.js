import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi46Fx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAABAgMAB//EABgQAQEBAQEAAAAAAAAAAAAAAAABERIC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOQCzYDMLAzYI4AYODIMgBjYbBwC4OGkHALjYfB5AmNinLcgnjcqcjyCXLYryHIJ4GK4GAngYrgYCWNimBYCeBimBgJth8CwCAbGoFA2AAMLAwsINgtDSAEg4MhpACQZBkNIBZDSGkGeQLhp5NPJp5BPk3J+R5BPkZ5UnkeQT5blXluQS5DlbkOQS5DlbkL5BHkL5W5LyCWBit8hfII4FithbASsDFLAwE7C2KWFsAmAfAwCgYAEZBGQGkNI0hpAaQZBkNIASHkGQ0gBIaeTSGkAs8mnk0hp5Ak8mnk88jyCfI8q8tyCfLcq8tyCXIcrctyCPIcrchyCN8lsXvkt8ghfIWLXyW+QRvkti1hLARsLYtYSwErAsUsLYCdhbFLC2AQMNQATRoaA0h5Ah4DSHkaQ0gDIaRpDyA0h5GkPIASGkGQ8gFkNPJpDSATkcPyOATluVMbAT5bFMbkErAxXAwEb5LYtYWwEbC2K2FsBGwti1hLARsJYtYSwErCWK2EoJ0lilhbAToHpQNDQsPANDQsPANDwsU8gPmHkCHgDIpIWHgDIeQIeQGkNI0hoASGkGQYBcHDYwExsPgYBMCw+BQTsLYpS2AlYWxSloJWEsVpPQJeoSxSkoJ2EqlJQTpKpSUE6BqUDQ0LDQDw8JD+QPDwkPAP5U8kh4B4eEikA0PCQ8A0NCw0A0GBBgCICDWAIAUKaloFsLTUtAlLTUtAlJ6PSUE6SnpKCfolUqdAlJT0lAtLTUoNDwkNAPDxOHgKRTylKeArDxKVSUFIeJynlBSU8qUp5QUlNKnKeUDyjqem0DtpdbQNoWhaGgbS2haGg1pa1pbQC0tG0loBSUbSWgHpO01pLQLSU1pLQLSU1JQLS01KDQ0pIMBSHicppQVlPKjKeUFpTSpSnlBWU8qMp5QWlNKjKeegVlNKlKM9AtPQypdDPQKaOpdD0CmhqfTdAfQ0nQX0BrS2lvoLQG0loX0W+gG0lrWktBrSWtaS0GtJaNpLQC0to2ktBqUbSgwykhoB5TSpymlBSU0qcppQVlNKlKaUFpTSoz0aegWno09IymnoFp6NKjPQ9At0PSPQ9At03SPQ9Ar0HSfQdAr0W+idB0B7S30S+gvoDX0W0tpb6A1pbS2ltAbS2haW0GtLa1pbQa0trWltBrQa0AASiBpTaQZQPKaVOUZQVlGVOUdBWU0qUo6C0oz0jKaegWnoekZ6HoFp6HpHpugW6bpLpugV6bpLpugU6DpPoOgUvoOidF6A99BaS0NA1pbQtLaBrS2l0NAbQ0LQtBtDQtABBgBmBgMwMBtHS62geUdJoygpo6no6CmjqetoKz03SejoKdD0lrdAr03SfTdAp03SfTaCnQdJ62gfQ0mhoH0NLoaBtDS6GgbQ0A0B0A1gYGABYGBmZgYWYGgswMLMDCzAMZmARZgZmYBoCwMzMAMzAFBmBgZgagzAwMwAzMDAzAwVmB//Z",
    // this is the url for the profile avatar
    avatarURL:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: "Name",
    lastname: "Lastname",
    role: "Job",
    country: "Country",
    city: "City"
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
