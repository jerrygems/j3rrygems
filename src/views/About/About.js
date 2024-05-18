import React from 'react';
import { useDarkMode } from '../../components/Context/DarkModeProvider';

function About() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const cover = darkMode ? 'cover1' : 'dcover1'
  const border = darkMode ? '' : 'border'
  const txtWhite = darkMode ? 'txt-white' : 'text-black'
  return (
    <div className={`d-flex flex-column ${cover} ${border} rounded p-1 m-3 w-75`}>
      <h2 className='mt-3'>About Me</h2>
      <hr />
      <p><b>CTF Player || MERN Stack || React Native || DevOps || Linux Administration & Automation || AI & ML enthusiast || Linux Ricer</b></p>
      <hr />
      <h3>Skills</h3>
      <hr />
      <ul className='text-start rounded m-3 py-3'>
        <li>
          <b>CTF Player:</b> Practices through vulnerable labs on TryHackMe. You can find me as <a href="https://tryhackme.com/p/Sp1d3y">Sp1d3y</a>.
        </li>
        <li>
          <b>MERN Stack:</b> I build websites using MongoDB, Express.js, React.js, and Node.js.
        </li>
        <li>
          <b>React Native:</b> I develop mobile apps using React Native.
        </li>
        <li>
          <b>DevOps:</b> Proficient in Ansible, Docker, Terraform, Git, Bash & Python Scripting for automation and infrastructure management.
        </li>
        <li>
          <b>Linux Administration:</b> Experienced with various Linux distros such as Arch, Debian, Nixos, etc. Skilled in bash scripting and Python for automation.
        </li>
        <li>
          <b>AI & ML:</b> Skilled in Data Analysis and visualization using numpy, pandas, matplotlib, seaborn, scikit-learn. Knowledgeable about various AI architectures including Transformers, BERT, GPT, Mamba, Llama, and CNN architectures for implementing AI solutions. Proficient in PyTorch and Hugging Face Transformers for Natural Language Processing (NLP), Computer Vision, and Reinforcement Learning.
        </li>
        <li>
          <b>LINUX RICING:</b> Passionate about customizing Linux environments using awesomeWM and I3WM to optimize user experience and productivity.
        </li>
        <li>
          <b>Programming Languages:</b> Python, C/C++, JavaScript, SQL, Lua, Bash, Node.js
        </li>
        <li>
          <b>Tools & Technologies:</b> KOTH Winner, CTF Player at THM, Content Creation (Research), Leadership, Critical Thinking
        </li>
        <li>
          <b>Additional Skills:</b> Pytorch, Spacy, word2vec
        </li>
      </ul>


      <p className='mx-5'>
        I'm constantly exploring new technologies and methodologies to stay ahead in the ever-evolving tech landscape.
        Let's connect and collaborate on exciting projects!
      </p>
      <div className='d-flex flex-row w-100 justify-content-center'>
        <a className='text-decoration-none txt-white m-3 h4' href="#"><i className='fa fa-github'></i></a>
        <a className='text-decoration-none txt-white m-3 h4' href="#"><i className='fa fa-reddit'></i></a>
        <a className='text-decoration-none txt-white m-3 h4' href="#"><i className='fa fa-twitter'></i></a>
        <a className='text-decoration-none txt-white m-3 h4' href="#"><i className='fa fa-linkedin'></i></a>
      </div>
    </div>
  );
}

export default About;
