import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return <Steps />;
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

          <p className="message">
            {/* step -1 bcus index */}
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈 Previous</span>
            </Button>

            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              <span>👉 Next</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

// {children} prop is a predetermined prop in React that let's ut pass any jsx into a non-closing componen and fill that hole
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
