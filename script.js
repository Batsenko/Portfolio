let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let interval1 = 400;
let string1 = [
  'W',
  'We',
  'Web',
  'Web d',
  'Web ',
  'Web D',
  'Web De',
  'Web Dev',
  'Web Deve',
  'Web Dev',
  'Web De',
  'Web D',
  'Web De',
  'Web Dev',
  'Web Deve',
  'Web Devel',
  'Web Develo',
  'Web Develop',
  'Web Develope',
  'Web Developer',
   
];

let string2 = [
  '         V         ',
  '       v V      l  ',
  '   h   v V      l  ',
  'Z  h   v V      l  ',
  'Z  h   v V   h  l  ',
  'Z  h   v Vi  h  l  ',
  'Za h   v Vi  h  l  ',
  'Za h   v Vi  h  l v',
  'Za h r v Vi  h  l v',
  'Za h r v Vi  h  lav',
  'Zakh r v Vi  h  lav',
  'Zakh r v Vi  h slav',
  'Zakh rov Vi  h slav',
  'Zakh rov Vi ch slav',
  'Zakharov Vi ch slav',
  'Zakharov Vi cheslav',
  'Zakharov Viacheslav',
  
]


  let count1 = 0;
  let count2 = 0;
 
  
  let timer1 = setInterval(() => {
    if (count1 === string1.length - 1) count1 = 0;// clearInterval(timer1);
    h1.innerHTML = string1[count1];
    count1++;
  }, interval1)
  
  let timer2 = setInterval(() => {
    if (count2 === string2.length - 1) count2 = 0; // clearInterval(timer2);
    h2.innerHTML = string2[count2];
    count2++;
  }, interval1)
 
 
