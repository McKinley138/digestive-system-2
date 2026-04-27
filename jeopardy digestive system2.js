const categories = [
    "Mouth & Esophagus",
    "Stomach",
    "Small Intestine",
    "Large Intestine",
    "Accessory Organs"
];

const questions = [
    // Mouth & Esophagus
    {
        question: "The first major step of digestion that begins in the mouth",
        answer: "What is mechanical digestion (chewing)?",
        options: ["What is mechanical digestion (chewing)?", "What is filtration?", "What is gas exchange?", "What is circulation?"],
        value: 100,
        category: "Mouth & Esophagus"
    },
    {
        question: "This enzyme in saliva begins the chemical digestion of starch",
        answer: "What is salivary amylase?",
        options: ["What is salivary amylase?", "What is pepsin?", "What is lipase?", "What is trypsin?"],
        value: 200,
        category: "Mouth & Esophagus"
    },
    {
        question: "The tongue pushes a chewed mass of food, called this, toward the pharynx",
        answer: "What is a bolus?",
        options: ["What is a bolus?", "What is chyme?", "What is bile?", "What is mucus?"],
        value: 300,
        category: "Mouth & Esophagus"
    },
    {
        question: "Wave-like muscular contractions that move food through the esophagus",
        answer: "What is peristalsis?",
        options: ["What is peristalsis?", "What is diffusion?", "What is filtration?", "What is respiration?"],
        value: 400,
        category: "Mouth & Esophagus"
    },
    {
        question: "This ring of muscle at the top of the stomach prevents backflow into the esophagus",
        answer: "What is the lower esophageal sphincter (LES)?",
        options: ["What is the pyloric sphincter?", "What is the lower esophageal sphincter (LES)?", "What is the ileocecal valve?", "What is the epiglottis?"],
        value: 500,
        category: "Mouth & Esophagus"
    },

    // Stomach
    {
        question: "The semi-liquid mixture of partially digested food and gastric juice",
        answer: "What is chyme?",
        options: ["What is chyme?", "What is bolus?", "What is feces?", "What is plasma?"],
        value: 100,
        category: "Stomach"
    },
    {
        question: "This acid in the stomach helps kill bacteria and activates digestive enzymes",
        answer: "What is hydrochloric acid (HCl)?",
        options: ["What is hydrochloric acid (HCl)?", "What is carbonic acid?", "What is lactic acid?", "What is acetic acid?"],
        value: 200,
        category: "Stomach"
    },
    {
        question: "The main protein-digesting enzyme in the stomach (active form)",
        answer: "What is pepsin?",
        options: ["What is pepsin?", "What is amylase?", "What is lactase?", "What is maltase?"],
        value: 300,
        category: "Stomach"
    },
    {
        question: "This protective secretion coats the stomach lining to help prevent self-digestion",
        answer: "What is mucus?",
        options: ["What is mucus?", "What is bile?", "What is insulin?", "What is synovial fluid?"],
        value: 400,
        category: "Stomach"
    },
    {
        question: "The valve that controls the release of chyme from the stomach into the duodenum",
        answer: "What is the pyloric sphincter?",
        options: ["What is the pyloric sphincter?", "What is the lower esophageal sphincter?", "What is the ileocecal valve?", "What is the cardiac sphincter?"],
        value: 500,
        category: "Stomach"
    },

    // Small Intestine
    {
        question: "Most nutrient absorption happens in this organ",
        answer: "What is the small intestine?",
        options: ["What is the small intestine?", "What is the stomach?", "What is the large intestine?", "What is the gallbladder?"],
        value: 100,
        category: "Small Intestine"
    },
    {
        question: "The first part of the small intestine where chyme mixes with bile and pancreatic enzymes",
        answer: "What is the duodenum?",
        options: ["What is the duodenum?", "What is the jejunum?", "What is the ileum?", "What is the cecum?"],
        value: 200,
        category: "Small Intestine"
    },
    {
        question: "Fingerlike projections that increase surface area for absorption",
        answer: "What are villi?",
        options: ["What are villi?", "What are rugae?", "What are nephrons?", "What are axons?"],
        value: 300,
        category: "Small Intestine"
    },
    {
        question: "Microscopic 'brush border' projections on intestinal epithelial cells",
        answer: "What are microvilli?",
        options: ["What are microvilli?", "What are cilia?", "What are flagella?", "What are ribs?"],
        value: 400,
        category: "Small Intestine"
    },
    {
        question: "Fats are absorbed into these small lymphatic vessels inside villi",
        answer: "What are lacteals?",
        options: ["What are lacteals?", "What are arterioles?", "What are bronchioles?", "What are glomeruli?"],
        value: 500,
        category: "Small Intestine"
    },

    // Large Intestine
    {
        question: "The primary role of the large intestine is absorption of this",
        answer: "What is water?",
        options: ["What is water?", "What is oxygen?", "What is glucose?", "What is protein?"],
        value: 100,
        category: "Large Intestine"
    },
    {
        question: "The pouch-like beginning of the large intestine that receives material from the ileum",
        answer: "What is the cecum?",
        options: ["What is the cecum?", "What is the duodenum?", "What is the pancreas?", "What is the stomach?"],
        value: 200,
        category: "Large Intestine"
    },
    {
        question: "This structure is attached to the cecum and can become inflamed in appendicitis",
        answer: "What is the appendix?",
        options: ["What is the appendix?", "What is the gallbladder?", "What is the spleen?", "What is the liver?"],
        value: 300,
        category: "Large Intestine"
    },
    {
        question: "Beneficial gut bacteria can produce this vitamin (among others) that helps with blood clotting",
        answer: "What is vitamin K?",
        options: ["What is vitamin K?", "What is vitamin C?", "What is vitamin D?", "What is vitamin A?"],
        value: 400,
        category: "Large Intestine"
    },
    {
        question: "The final section of the large intestine that stores feces before elimination",
        answer: "What is the rectum?",
        options: ["What is the rectum?", "What is the jejunum?", "What is the ileum?", "What is the esophagus?"],
        value: 500,
        category: "Large Intestine"
    },

    // Accessory Organs
    {
        question: "This organ produces bile, which helps with fat digestion",
        answer: "What is the liver?",
        options: ["What is the liver?", "What is the kidney?", "What is the bladder?", "What is the heart?"],
        value: 100,
        category: "Accessory Organs"
    },
    {
        question: "This organ stores and concentrates bile",
        answer: "What is the gallbladder?",
        options: ["What is the gallbladder?", "What is the pancreas?", "What is the spleen?", "What is the colon?"],
        value: 200,
        category: "Accessory Organs"
    },
    {
        question: "This accessory gland produces enzymes that digest carbohydrates, proteins, and fats",
        answer: "What is the pancreas?",
        options: ["What is the pancreas?", "What is the thyroid?", "What is the pituitary?", "What is the adrenal gland?"],
        value: 300,
        category: "Accessory Organs"
    },
    {
        question: "Bile helps digestion by doing this to dietary fats",
        answer: "What is emulsification?",
        options: ["What is emulsification?", "What is neutralization?", "What is fermentation?", "What is oxygenation?"],
        value: 400,
        category: "Accessory Organs"
    },
    {
        question: "Pancreatic enzymes enter the small intestine through this duct",
        answer: "What is the pancreatic duct?",
        options: ["What is the pancreatic duct?", "What is the trachea?", "What is the ureter?", "What is the bile canaliculus?"],
        value: 500,
        category: "Accessory Organs"
    }
];

const finalJeopardy = {
    question: "These tiny structures in the small intestine greatly increase surface area for nutrient absorption",
    answer: "What are villi?",
    category: "Small Intestine"
};

let score = 0;
const gameBoard = document.getElementById('gameBoard');
const modal = document.getElementById('questionModal');
const questionText = document.getElementById('questionText');
const answerOptions = document.getElementById('answerOptions');
const closeModal = document.getElementById('closeModal');
const scoreDisplay = document.getElementById('score');
const finalJeopardyButton = document.createElement('button');
finalJeopardyButton.textContent = 'Final Jeopardy';
finalJeopardyButton.className = 'final-jeopardy-button';
finalJeopardyButton.style.display = 'none';
finalJeopardyButton.style.position = 'fixed';
finalJeopardyButton.style.bottom = '20px';
finalJeopardyButton.style.right = '20px';
finalJeopardyButton.style.padding = '15px 30px';
finalJeopardyButton.style.fontSize = '20px';
finalJeopardyButton.style.backgroundColor = '#060CE9';
finalJeopardyButton.style.color = 'white';
finalJeopardyButton.style.border = 'none';
finalJeopardyButton.style.borderRadius = '5px';
finalJeopardyButton.style.cursor = 'pointer';
finalJeopardyButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
finalJeopardyButton.style.zIndex = '1000';
document.body.appendChild(finalJeopardyButton);

// Add a function to show Final Jeopardy button immediately
function showFinalJeopardyButton() {
    finalJeopardyButton.style.display = 'block';
    finalJeopardyButton.style.animation = 'pulse 2s infinite';
}

// Add CSS animation for the button
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    .final-jeopardy-button:hover {
        background-color: #0408B0;
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

// Initialize the game board
function initializeBoard() {
    // Add categories
    categories.forEach(category => {
        const categoryCell = document.createElement('div');
        categoryCell.className = 'category';
        categoryCell.textContent = category;
        gameBoard.appendChild(categoryCell);
    });

    // Add question cells
    for (let points = 100; points <= 500; points += 100) {
        categories.forEach(category => {
            const questionCell = document.createElement('div');
            questionCell.className = 'question-cell';
            const questionData = questions.find(q => q.value === points && q.category === category);
            questionCell.textContent = '$' + points;
            questionCell.addEventListener('click', () => showQuestion(category, points, questionCell));
            gameBoard.appendChild(questionCell);
        });
    }

    // Show Final Jeopardy button immediately
    showFinalJeopardyButton();
}

function showFinalJeopardy() {
    questionText.textContent = finalJeopardy.question;
    answerOptions.innerHTML = '';
    
    // Create a single answer input
    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.placeholder = 'Type your answer...';
    answerInput.style.width = '80%';
    answerInput.style.padding = '10px';
    answerInput.style.margin = '10px 0';
    answerInput.style.fontSize = '16px';
    answerInput.style.border = '2px solid #060CE9';
    answerInput.style.borderRadius = '5px';
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Answer';
    submitButton.style.padding = '10px 20px';
    submitButton.style.margin = '10px 0';
    submitButton.style.backgroundColor = '#060CE9';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.cursor = 'pointer';
    
    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = finalJeopardy.answer.trim();
        
        // Add clicked class to the button
        submitButton.classList.add('clicked');
        
        // Check answer after a short delay to show the color change
        setTimeout(() => {
            // Show the correct answer
            const answerDisplay = document.createElement('div');
            answerDisplay.textContent = `Correct Answer: ${correctAnswer}`;
            answerDisplay.style.margin = '10px 0';
            answerDisplay.style.padding = '10px';
            answerDisplay.style.backgroundColor = 'rgba(6, 12, 233, 0.1)';
            answerDisplay.style.borderRadius = '5px';
            answerDisplay.style.fontWeight = 'bold';
            
            answerOptions.appendChild(answerDisplay);
            
            // Disable input and button
            answerInput.disabled = true;
            submitButton.disabled = true;
            
            // Check if answer is correct (case-insensitive)
            const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
            handleAnswer(isCorrect, score, null);
        }, 500);
    });
    
    answerOptions.appendChild(answerInput);
    answerOptions.appendChild(submitButton);

    modal.style.display = 'block';
    finalJeopardyButton.style.display = 'none';
}

// Add event listener for Final Jeopardy button
finalJeopardyButton.addEventListener('click', showFinalJeopardy);

function showQuestion(category, points, cell) {
    if (cell.classList.contains('answered')) return;

    const questionData = questions.find(q => q.value === points && q.category === category);
    questionText.textContent = questionData.question;
    answerOptions.innerHTML = '';

    // Create answer buttons
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', (e) => {
            // Add clicked class to the button
            e.target.classList.add('clicked');
            
            // Check answer after a short delay to show the color change
            setTimeout(() => {
                // Find and highlight the correct answer
                const buttons = answerOptions.getElementsByTagName('button');
                Array.from(buttons).forEach(btn => {
                    if (btn.textContent === questionData.answer) {
                        btn.style.border = '3px solid blue';
                        btn.style.borderRadius = '50%';
                    }
                    btn.disabled = true;
                });
                
                handleAnswer(option === questionData.answer, points, cell);
            }, 500);
        });
        answerOptions.appendChild(button);
    });

    modal.style.display = 'block';
}

function handleAnswer(correct, points, cell) {
    // Create points indicator element
    const pointsIndicator = document.createElement('div');
    pointsIndicator.style.position = 'absolute';
    pointsIndicator.style.top = '50%';
    pointsIndicator.style.left = '50%';
    pointsIndicator.style.transform = 'translate(-50%, -50%)';
    pointsIndicator.style.fontSize = '24px';
    pointsIndicator.style.fontWeight = 'bold';
    pointsIndicator.style.padding = '10px';
    pointsIndicator.style.borderRadius = '5px';
    pointsIndicator.style.zIndex = '1000';
    
    if (correct) {
        if (cell === null) {
            // Final Jeopardy - double the score
            score *= 2;
            pointsIndicator.textContent = `Score Doubled!`;
        } else {
            score += points;
            pointsIndicator.textContent = `+${points}`;
        }
        pointsIndicator.style.color = 'green';
        pointsIndicator.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
    } else {
        if (cell === null) {
            // Final Jeopardy - halve the score
            score = Math.floor(score / 2);
            pointsIndicator.textContent = `Final Score: ${score}`;
        } else {
            score -= points;
            pointsIndicator.textContent = `-${points}`;
        }
        pointsIndicator.style.color = 'red';
        pointsIndicator.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    }
    
    // Add the indicator to the modal
    modal.appendChild(pointsIndicator);
    
    scoreDisplay.textContent = score;
    if (cell) {
        cell.classList.add('answered');
    }
    
    // Show the close button after answering
    closeModal.style.display = 'block';
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        // Reset the close button
        closeModal.style.display = 'none';
        // Remove the points indicator when closing the modal
        pointsIndicator.remove();
    });
}

// Initialize the game when the page loads
window.onload = initializeBoard;

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('questionModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
