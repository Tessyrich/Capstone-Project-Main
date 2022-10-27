const hamburger = document.querySelector('.hambur');
const menuBar = document.querySelector('.nav-ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuBar.classList.toggle('show-navbar');
});
document.querySelectorAll('.item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuBar.classList.remove('show-navbar');
}));

const FeaturedSpeaker = [
  {
    id: '1',
    speakername: 'Diane Jurgens',
    Speakerprofile: 'CIO The Walt Disney Compan',
    Speakerprofession: 'Senior technology management executive Diane Jurgens has more than three decades of industry experience, with expertise in driving technology and innovation on a worldwide scale.',
    Speaker1img: './images/speaker1.webp',
    SpeakerDesign: './images/backgroundpattern4.jpg',
  },
  {
    id: '2',
    speakername: 'Jacky Wright',
    Speakerprofile: 'Chief Digital Officer Microsoft',
    Speakerprofession: 'Global technology leader Jacky Wright has made a broad impact in business transformation and on social issues during two decades of technology leadership for companies including GE, BP and Microsoft, as well as the UK Government.',
    Speaker1img: './images/speaker2.webp',
    SpeakerDesign: './images/backgroundpattern4.jpg',
  },
  {
    id: '3',
    speakername: 'Susan Wojcicki',
    Speakerprofile: 'CEO YouTube',
    Speakerprofession: 'Susan Wojcicki has been fully immersed in the world of technology since being hired in 1999 as Google employee number 16 and has worked on everything from AdSense and Google Analytics to Google Books and Google Images, serving as SVP of AdWords and AdSense for 14 years.',
    Speaker1img: './images/speaker3.webp',
    SpeakerDesign: './images/backgroundpattern4.jpg',
  },
  {
    id: '4',
    speakername: 'Sheryl Sandberg',
    Speakerprofile: 'COO Meta',
    Speakerprofession: 'Arguably one of the most famous female faces in the world of tech, Sheryl Sandberg has held the position of Chief Operating Officer at Meta (formerly Facebook) for the last 14 years, where she has helped to dramatically increase the social media firm’s revenue.',
    Speaker1img: './images/speaker44.jpg',
    SpeakerDesign: './images/backgroundpattern4.jpg',
  },
  {
    id: '5',
    speakername: 'Jo-ann de Pass Olsovsky',
    Speakerprofile: 'EVP & CIO Salesforce',
    Speakerprofession: 'As EVP and chief information officer at Salesforce since 2018, Jo-ann de Pass Olsovsky leads the global IT function for Salesforce core, Mulesoft, Tableau and Slack, including technology strategy, architecture, applications, engineering, M&A systems integrations, data/analytics, network infrastructure',
    Speaker1img: './images/speaker55.jpg',
    SpeakerDesign: './images/backgroundpattern4.jpg',
  },
  {
    id: '6',
    speakername: 'Gwynne Shotwell',
    Speakerprofile: 'President and COO SpaceX',
    Speakerprofession: 'As President and COO of SpaceX, Gwynne Shotwell is responsible for the day-to-day operations of the space exploration company, as well as managing customer and strategic relations to support company growth.',
    Speaker1img: './images/speaker66.jpg',
    SpeakerDesign: './images/backgroundpattern4.jpg',
  },
];

const featuredContainer = document.querySelector('.featured');

FeaturedSpeaker.forEach((pro) => {
  const speaker = `
    <div class="speaker1 d-flex">
    <div class="speaker1-pic">
      <div class="design"> <img src=${pro.SpeakerDesign} alt="Background image design"></div>
      <div class="img-speaker"><img src=${pro.Speaker1img} alt="Speaker Image" class="image"></div>
    </div>
    <div class="speaker1-items">
      <div class="speaker-nam h5">${pro.speakername}</div>
      <div class="speaker-profe">${pro.Speakerprofile}</div>
      <div class="about-speaker">${pro.Speakerprofession}</div>
    </div>
  </div>
    `;
  featuredContainer.innerHTML += speaker;
});