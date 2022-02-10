import React from "react";

class CustomSelect extends React.Component {
  constructor(props) {
    super(props);

    // @defaultSelectText => Show default text in select
    // @showOptionList => Show / Hide List options
    // @optionsList => List of options
    this.state = {
      defaultSelectText: "",
      showOptionList: false,
      optionsList: []
    };
  }

  componentDidMount() {
    // Add Event Listner to handle the click that happens outside
    // the Custom Select Container
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({
      defaultSelectText: this.props.defaultText
    });
  }

  componentWillUnmount() {
    // Remove the event listner on component unmounting
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  // This method handles the click that happens outside the
  // select text and list area
  handleClickOutside = e => {
    if (
      !e.target.classList.contains("custom-select-option") &&
      !e.target.classList.contains("selected-text")
    ) {
      this.setState({
        showOptionList: false
      });
    }
  };

  // This method handles the display of option list
  handleListDisplay = () => {
    this.setState(prevState => {
      return {
        showOptionList: !prevState.showOptionList
      };
    });
  };
  handleSelect = (name) => {
    this.props.setTopicValue(name)
  }

  // This method handles the setting of name in select text area
  // and list display on selection
  handleOptionClick = e => {
    this.setState({
      defaultSelectText: e.target.getAttribute("data-name"),
      showOptionList: false
    });
  };

  render() {
    const { optionsList } = this.props;
    const { showOptionList, defaultSelectText } = this.state;
    return (
      <div className="custom-form-select">
        <label className="topic-label">
          What interests you?
        </label>
        <div className="custom-select-container">
          <div
            className={showOptionList ? "selected-text active" : "selected-text"}
            onClick={this.handleListDisplay}
          >
            <span>{defaultSelectText}</span>
            {this.state.showOptionList ?
              <svg style={{transform: 'rotate(180deg)'}} width="8" height="7" viewBox="0 0 8 7" opacity="0.4" fill="#1E2532" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03295 6.03165C4.4642 6.6063 3.5358 6.6063 2.96705 6.03165L0.423301 3.46154C-0.484984 2.54385 0.16507 0.98584 1.45625 0.98584L6.54375 0.98584C7.83493 0.98584 8.48499 2.54385 7.5767 3.46154L5.03295 6.03165Z"/>
              </svg>
              :

              <svg width="8" height="7" viewBox="0 0 8 7" opacity="0.4" fill="#1E2532" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.03295 6.03165C4.4642 6.6063 3.5358 6.6063 2.96705 6.03165L0.423301 3.46154C-0.484984 2.54385 0.16507 0.98584 1.45625 0.98584L6.54375 0.98584C7.83493 0.98584 8.48499 2.54385 7.5767 3.46154L5.03295 6.03165Z"/>
              </svg>
            }
          </div>
          {showOptionList && (
              <ul className="select-options">
                {optionsList.map(option => {
                  return (
                    <li
                      className="custom-select-option"
                      data-name={option.name}
                      key={option.id}
                      onClick={this.handleOptionClick}
                      onMouseDown={() => this.handleSelect(option.name)}
                    >
                      {option.name}
                    </li>
                  );
                })}
              </ul>

          )}
        </div>
      </div>

    );
  }
}

export default CustomSelect;
