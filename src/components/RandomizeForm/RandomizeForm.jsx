import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { PureComponent } from 'react';
import './RandomizeForm.css';


// function RandomizeForm() {

    class RandomPicker extends React.PureComponent {
        constructor() {
          super();
          
          this.state = {
            isRunning: false,
            currentChoice: ''
          };
          
          this.interval = null;
          this.intervalDuration = 25;
          this.duration = 1000;
          
          this.start = this.start.bind(this);
          this.stop = this.stop.bind(this);
          this.reset = this.reset.bind(this);
          this.pickChoice = this.pickChoice.bind(this);
          this.setChoice = this.setChoice.bind(this);
        }
        
        start() {
          clearInterval(this.interval);
          this.interval = setInterval(this.setChoice, this.intervalDuration);
          this.setState({ isRunning: true });
          setTimeout(() => {
            if (this.state.isRunning) {
              this.stop()
            }
          }, this.duration);
        }
        
        stop() {
          clearInterval(this.interval);
          this.setState({ isRunning: false });
        }
        
        reset() {
          clearInterval(this.interval);
          this.setState({ isRunning: false, currentChoice: '' });
        }
        
        pickChoice() {
        
          const { items } = this.props;
          const choice = namesList[Math.floor(Math.random() * namesList.length)];
          return choice;
        }
        
        setChoice() {
          this.setState({ currentChoice: this.pickChoice() })
        }
        
        render() {
          const { isRunning, currentChoice } = this.state;
          
          return (
            <div className="RandomPicker">
              <RandomPickerChoice choice={currentChoice} />
              <RandomPickerControls 
                isRunning={isRunning}
                hasChoice={currentChoice.trim().length > 0}
                start={this.start}
                stop={this.stop}
                reset={this.reset}
              />
            </div>
          );
        }
      }
      
      RandomPicker.propTypes = {
        items: PropTypes.array,
        duration: PropTypes.number
      };
      
      class RandomPickerChoice extends React.PureComponent {
        render() {
          const { choice } = this.props;
          const content = choice.trim().length > 0 ? choice : '?';
          
          return (
            <div className="RandomPicker__choice">
              <span className="RandomPicker__choiceItem">{content}</span>
            </div>  
          );
        }
      }
      
      RandomPickerChoice.propTypes = {
        choice: PropTypes.string
      };
      
      class RandomPickerControls extends React.PureComponent {
        render() {
          const { 
            isRunning, 
            hasChoice, 
            start, 
            stop, 
            reset 
          } = this.props;
          
          return (
            <div className="RandomPicker__controls">
              <button 
                class={`RandomPicker__button ${isRunning && 'RandomPicker__button--stop'}`}
                onClick={isRunning ? stop : start}
              >
                {isRunning ? 'stop' : 'start'}
              </button>
              <button 
                disabled={isRunning || !hasChoice} 
                class="RandomPicker__button RandomPicker__button--reset" 
                onClick={reset}
              >
                reset
              </button>
            </div>
          );
        }
      }
      
      RandomPickerControls.propTypes = {
        isRunning: PropTypes.bool,
        hasChoice: PropTypes.bool,
        start: PropTypes.func,
        stop: PropTypes.func,
        reset: PropTypes.func,
      };
      
      const namesList = [
          'Boludo.com',  
          'Red Rabbit',  
          'Nolo\'s',  
          'Five Guys',  
          'Chipotle',  
          'Runyon\'s',  
          'Centro',  
          'Freehouse',  
          'Red Cow',  
          'Chick-Fil-a',  
          'Colita',  
      ];
      
    //   ReactDOM.render(
    //     <RandomPicker items={namesList} />,
    //     // document.getElementById('random-picker')
    //     document.getElementById('react-root')
    //   );

// }

// export default RandomizeForm;
export default RandomPicker;