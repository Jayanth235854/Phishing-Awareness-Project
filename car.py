import random

class PhishingAwarenessGame:
    def __init__(self):
        self.score = 0

    def run(self):
        print("Welcome to the Phishing Awareness Game!")
        while True:
            print(f"Your current score: {self.score}")
            user_input = input("Press Enter to collect a coin or 'q' to quit: ")
            
            if user_input.lower() == 'q':
                print(f"Game over! Your final score: {self.score}")
                break
            
            # Simulate collecting a coin
            if random.choice([True, False]):  # Randomly trigger a phishing scenario
                self.handle_phishing_scenario()

    def handle_phishing_scenario(self):
        print("\nOh no! You've encountered a phishing email!")
        # Simulate a phishing email scenario
        phishing_email = {
            'subject': 'You won $1,000,000!',
            'sender': 'suspicious@example.com',
            'content': 'Click here to claim your prize!'
        }
        
        print(f"Subject: {phishing_email['subject']}")
        print(f"Sender: {phishing_email['sender']}")
        print(f"Content: {phishing_email['content']}")
        
        # Ask the user a question
        answer = input("Is this a phishing email? (yes/no): ")
        
        if answer.lower() == 'yes':
            print("Correct! This is a phishing email. You've earned a point.")
            self.score += 1
        else:
            print("Incorrect. This was a phishing attempt.")

if __name__ == "__main__":
    game = PhishingAwarenessGame()
    game.run()
