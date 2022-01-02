const Notification = (props) => {
  //  Write your code here.
  const { paraContainer, srcElement, paragraphText } = props;
  return (
    <div className={`inner-container ${paraContainer}`}>
      <img src={srcElement} className="icon" />
      <p className="para-class">{paragraphText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="content-container">
      <div>
        <Notification
          paraContainer="blue-container"
          srcElement="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          paragraphText="Informational Message"
        />
        <Notification
          paraContainer="green-container"
          srcElement="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          paragraphText="Success Message"
        />
        <Notification
          paraContainer="yellow-container"
          srcElement="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          paragraphText="Warning Message"
        />
        <Notification
          paraContainer="red-container"
          srcElement="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          paragraphText="Error Message"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
