const flashcards = document.querySelectorAll('.flashcard');
let currentIndex = 0; // Track the current flashcard index

function updateFlashcardVisibility() {
    flashcards.forEach((flashcard, index) => {
        flashcard.style.display = index === currentIndex ? 'block' : 'none'; // Show current card only
    });
}

flashcards.forEach((flashcard) => {
    const prevButton = flashcard.querySelector('.prev-btn');
    const nextButton = flashcard.querySelector('.next-btn');
    const flashcardContent = flashcard.querySelector('.flashcard-content');

    let isFlipped = false;

    prevButton.addEventListener('click', () => {
        if (isFlipped) {
            flashcardContent.classList.remove('flipped');
            isFlipped = false;
        } else {
            // Move to previous flashcard
            if (currentIndex > 0) {
                currentIndex--;
                updateFlashcardVisibility();
                isFlipped = false; // Reset flip state when changing card
                flashcardContent.classList.remove('flipped'); // Ensure the new card is not flipped
            }
        }
    });

    nextButton.addEventListener('click', () => {
        if (isFlipped) {
            flashcardContent.classList.remove('flipped');
            isFlipped = false;
        } else {
            // Move to next flashcard
            if (currentIndex < flashcards.length - 1) {
                currentIndex++;
                updateFlashcardVisibility();
                isFlipped = false; // Reset flip state when changing card
                flashcardContent.classList.remove('flipped'); // Ensure the new card is not flipped
            }
        }
    });

    flashcard.addEventListener('mouseover', () => {
        flashcardContent.classList.add('flipped');
    });

    flashcard.addEventListener('mouseout', () => {
        flashcardContent.classList.remove('flipped');
    });
});

// Initialize the visibility
updateFlashcardVisibility();