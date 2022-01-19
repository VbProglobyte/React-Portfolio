import React from 'react';
import './styles/Project.css';

const styles = {
    projectStyles: {
      background: 'orange',
    },
  };


  function Project() {
    return (
      <section style={styles.projectStyles} className="project">
        <h2>About Me</h2>
                        <h4 class="subabout is-2">Jack of all trades, master of "some"</h4>
                        <div class="container">

                            <p class="intro">Oh no...Another Bio for another designer. DRAG. Well - I will start my
                                story
                                with a
                                little classic literary.
                                It was the best of times, and it was the worst of times in coding bootcamp...call me
                                ish-female...
                                All jokes aside, I am new to devopement, but I am well traveled in Print Design. I find
                                coding
                                fascinating.
                                It behaves much like magic to me, so naturally as a HP/J.R.T. fan - I'm into it. I'd
                                like to
                                use
                                this forum
                                to showcase my progress through this code world. So here you go....DO YOUR WORST. Or
                                perhaps, I
                                will do mine.
                            </p>
              </div>
       
      </section>
      
    );
  }
  
  export default Project;
  