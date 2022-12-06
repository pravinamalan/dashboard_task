
// navbar and sidebar toggle
// 
const menuBtnEl = document.getElementById('menu-btn');
const sideBarEl = document.querySelector('.side-bar');
const navbarEl = document.querySelector('.nav-bar');
const bodyEl = document.querySelector('.body-wrapper')

menuBtnEl.addEventListener('click',()=>{
  sideBarEl.classList.toggle('hide_me');
  navbarEl.classList.toggle('nav-show');
  bodyEl.classList.toggle('body-show')

})

// mob nav 
const mobNavBtnEL = document.querySelector('#mob-menu');

mobNavBtnEL.addEventListener('click',()=>{
  navbarEl.classList.toggle('mob-nav-show');
  bodyEl.classList.toggle('body-margin-bottom')
})

const mobSideBtnEl = document.querySelector('#mob-toggle-menu')

mobSideBtnEl.addEventListener('click',()=>{
  sideBarEl.classList.toggle('mob-side-show')
})
var xValues = ["Q1 2018", "Q2 2018", "Q3 2018", "Q4 2018", "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019","Q1 2020", "Q2 2020", "Q3 2020", "Q4 2020"];
var yValues = [4000, 7000, 5000, 2500, 5200, 4400, 7000, 4200, 7500, 2000, 3000, 5000, 0];
// var barColors = "blue";
// let bar_border = ["blue", "red", "blue", "red", "blue"];

var barColors = document.getElementById('myChart').getContext('2d');
var purple_orange_gradient = barColors.createLinearGradient(0, 0, 0, 700);
purple_orange_gradient.addColorStop(0, '#1b7ffe');
// purple_orange_gradient.addColorStop(1, '#239dfe');
purple_orange_gradient.addColorStop(1, '#29bbfd');

const data = {
  labels: xValues,
  datasets: [{
    label: "",
    data: yValues,
    backgroundColor: purple_orange_gradient,
    borderWidth: 1,
    borderRadius: 20,
    barPercentage: 0.9,
  }]
};

// config 
const config = {
  type: 'bar',
  data: data,
  options: {
    plugins:{
      legend:false,
    },
  },
};
// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


