let input = document.getElementById("input");
let submit = document.getElementById("submit");
let p = document.getElementById("p");
let spd = document.getElementById("spd");
let acc = document.getElementById("acc");
let set = document.getElementById("set");
let timer = document.getElementById("timer");
let two = document.getElementById("two");
let five = document.getElementById("five");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let elem;
let resultFunc;
let tri = false;
let incr = 0;
let myInter;
minutes.innerText = " ";
seconds.innerText = " ";
let sText = [
  {
    topic: "26 Character",
    paragraph: "The Quick Brown Fox jumps over the lazy dog",
  },
  {
    topic: "The Importance of Reading",
    paragraph:
      "Reading is a vital activity that not only enriches our knowledge but also broadens our understanding of the world. It has been proven that regular reading can improve vocabulary, comprehension, and cognitive function. It strengthens the mind by keeping it active, fostering concentration, and boosting memory. Additionally, reading helps to reduce stress by providing an escape from the stresses of daily life. It also serves as a tool for self-improvement, helping individuals stay updated with current events, trends, and research. In a world full of distractions, reading offers a focused and engaging way to expand one's mind and imagination. Whether for pleasure, learning, or personal growth, the habit of reading is an essential and rewarding pursuit.",
  },
  {
    topic: "Benefits of Exercise",
    paragraph:
      "Exercise is an essential aspect of maintaining a healthy lifestyle. It offers numerous benefits that affect both physical and mental well-being. Regular physical activity helps to build strength, improve cardiovascular health, and enhance flexibility. It also plays a crucial role in weight management, reducing the risk of obesity and related diseases. In addition to the physical benefits, exercise has a significant impact on mental health. It releases endorphins, which can improve mood and reduce feelings of anxiety and depression. Exercise also helps to enhance cognitive function and can improve sleep quality. Whether through walking, jogging, cycling, or strength training, engaging in regular exercise routines has long-lasting benefits that contribute to a healthier and more balanced life.",
  },
  {
    topic: "Time Management Tips",
    paragraph:
      "Time management is a crucial skill that can help you achieve personal and professional success. Proper time management allows you to prioritize tasks and focus on what matters most, reducing feelings of stress and overwhelm. One effective technique is setting clear goals, which will provide direction and ensure that time is spent efficiently. Breaking down large projects into smaller, more manageable tasks makes them seem less daunting and helps you track progress. Another important aspect of time management is eliminating distractions, such as unnecessary digital interruptions, which can waste precious time. By learning to say no to tasks that do not align with your goals, you can protect your time and maintain focus. With the right planning, it is possible to maximize productivity and achieve more in less time.",
  },
  {
    topic: "The Role of Technology in Education",
    paragraph:
      "Technology has had a transformative impact on the education sector, creating new opportunities for both students and teachers. The use of digital tools, such as laptops, tablets, and educational apps, has made learning more interactive and accessible. With the rise of online learning platforms, students can now access a wealth of information and educational resources from anywhere in the world, allowing for a more personalized learning experience. Teachers can use technology to create engaging lessons, collaborate with other educators, and track student progress more effectively. Moreover, the integration of technology in classrooms fosters creativity, critical thinking, and problem-solving skills. As technology continues to evolve, it will play an increasingly important role in shaping the future of education, making it more inclusive, flexible, and engaging for learners of all ages.",
  },
  {
    topic: "The Impact of Social Media",
    paragraph:
      "Social media has become an integral part of modern life, influencing how we communicate, share information, and connect with others. It has allowed individuals to stay in touch with family and friends, share life updates, and participate in global conversations. However, social media also comes with its challenges. It can contribute to the spread of misinformation, leading to confusion and mistrust. Additionally, excessive use of social media can have a negative impact on mental health, leading to feelings of anxiety, depression, and loneliness. The constant comparison to others' curated lives can cause dissatisfaction and insecurity. It is essential to strike a balance and use social media responsibly. By being mindful of how and when we engage with these platforms, we can ensure that social media remains a positive and enriching experience.",
  },
  {
    topic: "Healthy Eating Habits",
    paragraph:
      "Adopting healthy eating habits is essential for maintaining overall well-being and preventing various health issues. A well-balanced diet consisting of whole foods such as fruits, vegetables, lean proteins, and whole grains provides the body with essential nutrients, vitamins, and minerals. It is important to avoid excessive consumption of processed foods, sugary snacks, and unhealthy fats, as they can contribute to weight gain, obesity, and chronic diseases like diabetes and heart disease. Additionally, portion control plays a vital role in maintaining a healthy weight. Drinking enough water and staying hydrated is another key aspect of healthy eating. By making conscious choices, including consuming nutrient-dense foods and limiting empty calories, we can boost energy levels, improve mental clarity, and promote better long-term health.",
  },
  {
    topic: "The Power of Positive Thinking",
    paragraph:
      "Positive thinking is a powerful tool that can influence various aspects of your life. It involves focusing on the positive side of situations, even when facing challenges, and maintaining an optimistic outlook. Research has shown that adopting a positive mindset can have numerous benefits for both mental and physical health. It helps to reduce stress, anxiety, and depression by promoting a sense of calm and resilience. Positive thinking also boosts self-confidence, making individuals more likely to pursue their goals and take risks. Moreover, it fosters stronger relationships by creating a supportive and encouraging environment. While negative thoughts can hold you back, positive thinking empowers you to approach life with enthusiasm, improve your problem-solving skills, and embrace new opportunities.",
  },
  {
    topic: "The Value of Teamwork",
    paragraph:
      "Teamwork is an essential component of success, whether in the workplace, sports, or any collaborative environment. When individuals work together toward a common goal, they bring unique skills, perspectives, and ideas that can lead to more creative solutions and better outcomes. Teamwork encourages open communication and fosters a sense of trust and cooperation among team members. It also allows for shared responsibilities, reducing the burden on any one individual and enabling the group to accomplish tasks more efficiently. In addition, working as part of a team can help build strong relationships, enhance interpersonal skills, and provide valuable opportunities for personal growth. Effective teamwork relies on respect, collaboration, and the ability to adapt to the strengths and weaknesses of others.",
  },
  {
    topic: "The Importance of Sleep",
    paragraph:
      "Sleep is a critical component of overall health, yet many people underestimate its significance. Adequate sleep is essential for restoring energy, supporting brain function, and maintaining physical health. During sleep, the body undergoes repair processes that strengthen the immune system, promote muscle growth, and balance hormones. Sleep also plays a vital role in cognitive function, memory consolidation, and emotional regulation. Lack of sleep can lead to impaired judgment, slower reaction times, and difficulty concentrating. Additionally, sleep deprivation has been linked to various health problems, including obesity, heart disease, and diabetes. To ensure a well-rested body and mind, it is important to establish a consistent sleep schedule, create a relaxing bedtime routine, and avoid screens and caffeine before sleep. Prioritizing sleep improves quality of life and enhances productivity and well-being.",
  },
  {
    topic: "Environmental Conservation",
    paragraph:
      "Environmental conservation is the practice of protecting and preserving the natural world to ensure its sustainability for future generations. As human activity continues to impact the planet, it is essential to adopt more eco-friendly practices to reduce harm to the environment. Actions such as reducing waste, conserving water, and using renewable energy sources can significantly reduce environmental degradation. Recycling and reusing materials help minimize the amount of waste that ends up in landfills and reduces the need for new resources. By protecting natural habitats and reducing pollution, we can safeguard biodiversity and ensure that ecosystems remain balanced. Environmental conservation efforts also contribute to mitigating the effects of climate change, promoting a healthier planet for all living organisms. It is our collective responsibility to take steps toward protecting the Earth and preserving its resources for future generations.",
  },
];
function createSpan() {
  let rand = Math.floor(Math.random() * 10);
  input.innerText = sText[rand].topic;
  let text = sText[rand].paragraph;

  for (let i = 0; i < text.length; i++) {
    let cre = document.createElement("span");
    cre.setAttribute("class", "elem");
    cre.innerText = text[i];
    p.appendChild(cre);
  }
}
createSpan();
let stTime = new Date();

submit.addEventListener("click", change);
function change() {
  stTime = new Date();
  // p.removeChild();
  for (let i = 0; i < sText[rand].paragraph.length; i++) {
    elem[0].remove();
  }
  createSpan();
}
// let
tri = true;
function result() {
  let end = new Date();
  let time = (end - stTime) / 1000 / 60;
  p.innerText = "You have completed your task!!!";
  p.style.fontSize = "45px";
  p.style.color = "green";
  //Calculation and Accuracy
  let word = text.split(" ").length;
  spd.innerText = "";
  spd.innerText = parseInt(word / time);

  let per = 100 - (incr / sText[rand].paragraph.length) * 100;
  acc.innerText = "";
  acc.innerText = per.toFixed(2);
  console.log(per.toFixed(2));
}
let counter = 0;
elem = document.getElementsByClassName("elem");
elem[counter].style.textDecoration = "underline";

// keyPressed Function
document.body.addEventListener("keypress", keypressed);
function keypressed(event) {
  if ((tri = false)) {
    return;
  }
  let element = 0;
  elem = document.getElementsByClassName("elem");
  if (counter < elem.length) {
    element = elem[counter].innerText.charCodeAt(0);
  } else {
    result();
  }
  // underline
  if (counter > 0 && counter < elem.length) {
    elem[counter - 1].style.textDecoration = "none";
  }

  if (counter < elem.length) {
    elem[counter].style.textDecoration = "underline";
  }
  // remove underline

  let key = event.key.charCodeAt(0);
  if (elem[counter].innerHTML == " " || element == key) {
    elem[counter].style.color = "green";
    counter++;
  } else {
    elem[counter].style.color = "white";
    elem[counter].style.background = "red";
    incr++;
  }
}

const myEvent = new Event("click");
timer.dispatchEvent(myEvent);
set.addEventListener("click", () => {
  stTime = new Date();
  clearInterval(myInter);

  if (timer.value == "two") {
    
    let milisec = 120000;
    myInter = setInterval(() => {
      let time = new Date(milisec - 1800000);
      let min = time.getMinutes();
      let sec = time.getSeconds();
      minutes.innerText = min < 10 ? "0" + min + " : " : min + " : ";
      seconds.innerText = sec < 10 ? "0" + sec : sec;
      console.log(min, sec);
      milisec -= 1000;
      if (milisec + 1000<= 0) {
        resultFunc = function () {
          console.log("Character right" + counter);
          console.log("Character wrong" + incr);
          keypressed = "";
          let text = "";
          for (let i = 0; i < counter; i++) {
            text += elem[i].innerText;
          }
          console.log(text);
          let myText = text.split(" ");
          console.log(myText.length);
          p.innerText = "You have completed your task!!!";
          p.style.fontSize = "45px";
          p.style.color = "green";
          //Calculation and Accuracy
          let word = myText.length/2;
          spd.innerText = "";
          spd.innerText = parseInt(word);

          let per = 100 - (incr / counter) * 100;
          acc.innerText = "";
          acc.innerText = per.toFixed(2);
          console.log(per.toFixed(2));
        };
        resultFunc();
        clearInterval(myInter);
      }
    }, 1000);
  } else if (timer.value == "five") {
    let milisec = 300000;
    myInter = setInterval(() => {
      let time = new Date(milisec - 1800000);
      let min = time.getMinutes();
      let sec = time.getSeconds();
      minutes.innerText = min < 10 ? "0" + min + " : " : min + " : ";
      seconds.innerText = sec < 10 ? "0" + sec : sec;
      console.log(min, sec);
      milisec -= 1000;
      if (milisec + 1000<= 0) {
        resultFunc = function () {
          console.log("Character right" + counter);
          console.log("Character wrong" + incr);
          keypressed = "";
          let text = "";
          for (let i = 0; i < counter; i++) {
            text += elem[i].innerText;
          }
          console.log(text);
          let myText = text.split(" ");
          console.log(myText.length);
          p.innerText = "You have completed your task!!!";
          p.style.fontSize = "45px";
          p.style.color = "green";
          //Calculation and Accuracy
          let word = myText.length/5;
          spd.innerText = "";
          spd.innerText = parseInt(word);

          let per = 100 - (incr / counter) * 100;
          acc.innerText = "";
          acc.innerText = per.toFixed(2);
          console.log(per.toFixed(2));
        };
        resultFunc();
        clearInterval(myInter);
      }
    }, 1000);
  }
  // if(timer.value=="two"){
  //   two.setAttribute("selected",true);
  //   five.setAttribute("selected",false);
  // }
  // else{
  //   five.setAttribute("selected",true);
  //   two.setAttribute("selected",false);
  // }
  console.log(two);
  console.log(five);
});
