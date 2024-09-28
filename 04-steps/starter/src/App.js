import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Step 1 children msg</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Step 2 children msg</p>
      </StepMessage>
      <StepMessage step={3}>
        <p>Step 3 children msg</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {/* if true, second part will be return. If false, only false will be returned. Changing 'const [isOpen, setIsOpen] = useState(true); to false removes everything wrapped {}' */}
      {isOpen && (
        // Wrap everything in 'JS-mode for conditional'
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* step -1 bcus index */}
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#FF0000"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          {/* Reusable buttons  */}
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              {/* This is the children prop  */}
              <span>👈 Previous</span>
            </Button>

            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              {/* This is the children prop  */}
              <span>👉 Next</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

// Reusable button created
// {children} prop is a predetermined prop in React that let's ut pass any jsx into a non-closing componen and fill that hole, since more divs would give error
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
