import React from 'react';

class Footer extends React.Component{

  render(){
    return (
      <section className = 'footer'>
        
        <span>Created by Raymond Wu</span>
        <a href="https://github.com/R-S-W" target='_blank' rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/raymond-wu-9a1013164/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
        <a href= "https://r-s-w.github.io/" target="_blank" rel="noopener noreferrer">Portfolio</a>

      </section>
    )
  }
}
export default Footer;