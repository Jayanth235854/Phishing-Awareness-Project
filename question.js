let questions =[
    {
        num:1,
        question: "What is phishing?",
        answer: "b) A cyber attack to steal sensitive information",
        options: [
            "a) A water sport",
            "b) A cyber attack to steal sensitive information",
            "c) A type of computer virus",
            "d) A social media platform"
         
        ]
    },
    {
        num:2,
        question: "What is the primary method of communication used in phishing attacks?",
        answer: "d) Email",
        options: [
            "a) Phone calls",
            "b) Postal mail",   
            "c) Smoke signals",
            "d) Email"
         ]
    },
    {
        num:3,
        question: "Phishing emails often contain:",
        answer: "c) Requests for sensitive information",
        options: [
            "a) Verified sender information",
            "b) Shortened URLs for convenience",
            "c) Requests for sensitive information",
            "d) Encrypted attachments"
          
        ]
    },
    {
        num:4,
        question: "What is a characteristic of spear phishing?",
        answer: "c) It targets a specific individual or organization",
        options: [
            "a) It targets a wide range of random individuals",
            "b) It uses physical threats instead of online attacks",
            "c) It targets a specific individual or organization",
            "d) It only occurs on social media platforms"
         
        ]
    },
    {
        num:5,
        question: " What is the purpose of a phishing website?",
        answer: "c) To steal personal or financial information",
        options: [
            "a) To provide free software downloads",
            "b) To educate users about online security",
            "c) To steal personal or financial information",
            "d) To promote online games"
           
        ]
    },
    {
        num:6,
        question: "What is a red flag of a phishing email?",
        answer: "a) A generic greeting like 'Dear User'",
        options: [
           "a) A generic greeting like 'Dear User'",
            "b) A clear sender's name and organization",
            "c) A request to update legitimate software",
            "d) A link that directs to the official website"
           
        ]
    },
    {
        num:7,
        question: " How can you verify the authenticity of a suspicious email?",
        answer: "c) Check the sender's email address and scrutinize any URLs",
        options: [
            "a) Click on all provided links to check where they lead",
            "b) Reply with personal information to confirm identity",
            "c) Check the sender's email address and scrutinize any URLs",
            "d) Forward the email to all your contacts for advice"
         
        ]
    },
    {
        num:8,
        question: "What is the best action to take if you receive a phishing email?",
        answer: "c) Delete it immediately",
        options: [
            "a) Click on any links to see if they are legitimate",
            "b) Reply with insults to the sender",
            "c) Delete it immediately",
            "d) Forward it to the police"
        ]
    },
    {
        num:9,
        question: "How can you protect yourself from phishing attacks?",
        answer: "d) Being cautious of unsolicited emails and verifying the source",
        options: [
            "a) Sharing your passwords with close friends",
            "b) Using the same password across different accounts",
            "c) Keeping your software and browsers outdated",
            "d) Being cautious of unsolicited emails and verifying the source"
        
        ]
    },
    {
        num:10,
        question: "How can you verify the legitimacy of a website's SSL certificate?",
        answer: "d) Click on any links within the website to test its security",
        options: [
            "a) Check if the website has a padlock icon in the address bar",
            "b) Contact the website owner through email",
            "c) Ignore the SSL certificate and proceed if the content seems trustworthy",
            "d) Click on any links within the website to test its security"
         
        ]
    },
    {
        num:11,
        question: "What does it mean when an email asks for urgent action, such as clicking a link immediately?",
        answer: "c) It's a common phishing tactic to create panic and prevent thinking",
        options: [
            "a) It's a standard practice to emphasize important information",
            "b) It's a sign that the email is from a high-ranking executive",
            "c) It's a common phishing tactic to create panic and prevent thinking",
            "d) It means the email is time-sensitive and requires immediate attention"
                
        ]
    },
    {
        num:12,
        question: "How can you verify the authenticity of an email from a recognized organization?",
        answer: "d) Independently search for the official contact information and verify with them",
        options: [
            "a) Call the number provided in the email to confirm its legitimacy",
            "b) Reply to the email and ask for verification",
            "c) Trust the email solely if it contains the company logo",
            "d) Independently search for official contact information verify with them"
        ]
    },
    {
        num:13,
        question: "What is 'domain spoofing' in phishing emails?",
        answer: "c) Altering the sender's display name to mimic a legitimate domain",
        options: [
            "a) Sending emails from a legitimate domain",
            "b) Creating a new domain for malicious purposes",
            "c) Altering the sender's display name to mimic a legitimate domain",
            "d) Including the sender's actual email address in the email body"
        ]
    },
    {
        num:14,
        question: "Which characteristic in an email is a strong indicator of a phishing attempt?",
        answer: "b) Requests for personal or financial information",
        options: [
            "a) A personalized greeting with your name",
            "b) Requests for personal or financial information",
            "c) A straightforward and clear subject line",
            "d) Emails received during regular business hours"
        ]
    },
    {
        num:15,
        question: "Why is inspecting the email header useful in identifying phishing?",
        answer: "c) It provides insight into the email's origin and authenticity",
        options: [
            "a) It reveals the sender's bank account details",
            "b) It confirms that the email has been read by the recipient",
            "c) It provides insight into the email's origin and authenticity",
            "d) It allows you to report the email to your email service provider"
          
        ]
    },
    {
        num:16,
        question: "What should you do if you receive an unexpected email with a suspicious attachment?",
        answer: "c) Ignore the attachment and mark the email as spam",
        options: [
            "a) Open the attachment to see what it contains",
            "b) Disable your antivirus temporarily and open the attachment",
            "c) Ignore the attachment and mark the email as spam",
            "d) Download the attachment and scan it with multiple antivirus programs"   
        ]
    },
    {
        num:17,
        question: "Why should you be cautious of emails with generic greetings like 'Dear User'?",
        answer: "d) It could be a sign that the sender doesn't have your actual name",
        options: [
            "a) It means the email is personalized for you",
            "b) It indicates the email is from a high-level executive",
            "c) It's a common practice and doesn't necessarily signify phishing",
            "d) It could be a sign that the sender doesn't have your actual name"
         
        ]
    },
    {
        num:18,
        question: "What's the best approach if you receive a suspicious link via email?",
        answer: "b) Hover over the link without clicking to see the actual URL",
        options: [
            "a) Click on the link to investigate the website",
            "b) Hover over the link without clicking to see the actual URL",
            "c) Disable your internet connection and then click the link",
            "d) Immediately click the link to report it to the authorities"
        ]
    },
    {
        num:19,
        question: "What is phishing?",
        answer: "b) A type of cyberattack",
        options: [
            "a) A fishing hobby",
            "b) A type of cyberattack",
            "c) A type of malware",
            "d) An online shopping website"
         
        ]
    },
    {
        num:20,
        question: "Which of the following is a common phishing tactic?",
        answer: "c) Creating a sense of urgency",
        options: [
            "a) Sending a polite email",
            "b) Providing valid contact information",
            "c) Creating a sense of urgency",
            "d) Offering free software updates"
         
        ]
    },
    {
        num:21,
        question: "What is a common goal of phishing attacks?",
        answer: "a) To gain unauthorized access to a system",
        options: [
            "a) To gain unauthorized access to a system",
            "b) To promote a legitimate product",
            "c) To offer cybersecurity advice",
            "d) To entertain recipients"
         
        ]
    },
    {
        num:22,
        question: "Which of the following is NOT a common phishing communication method?",
        answer: "d) Physical mail",
        options: [
            "a) Email",
            "b) Phone call",
            "c) Social media message",
            "d) Physical mail"
         
        ]
    },
    {
        num:23,
        question: "What is spear phishing?",
        answer: "c) Highly targeted phishing attacks",
        options: [
            "a) A type of fishing sport",
            "b) Phishing emails sent to a large group of people",
            "c) Highly targeted phishing attacks",
            "d) Phishing that uses fake phone calls"
         
        ]
    },
    {
        num:24,
        question: "Which of the following should you do if you receive an unsolicited email requesting personal information or payment?",
        answer: "c) Delete the email and do not engage with it",
        options: [
            "a) Respond immediately with the requested information",
            "b) Click on any links or download any attachments in the email",
            "c) Delete the email and do not engage with it",
            "d) Forward the email to all your contacts for advice"
         
        ]
    },
    {
        num:25,
        question: "What is the purpose of two-factor authentication (2FA)?",
        answer: "b) To protect against unauthorized access",
        options: [
            "a) To make your accounts easier to access",
            "b) To protect against unauthorized access",
            "c) To share your login credentials with others",
            "d) To hide your identity online"
         
        ]
    },
    {
        num:26,
        question: "Which of the following is a red flag for a phishing email?",
        answer: "a) A generic greeting like 'Dear User'",
        options: [
            "a) A generic greeting like 'Dear User'",
            "b) A clear explanation of why you should click a link",
            "c) A well-known sender's email address",
            "d) A request for legitimate business information"
         
        ]
    },
    {
        num:27,
        question: "What is the primary purpose of a phishing simulation?",
        answer: "b) To educate and train individuals on recognizing phishing attempts",
        options: [
            "a) To launch a real phishing attack",
            "b) To educate and train individuals on recognizing phishing attempts",
            "c) To collect personal information from users",
            "d) To gather information for market research"
         
        ]
    },
    {
        num:28,
        question: "What should you do if you suspect you've fallen victim to a phishing attack?",
        answer: "b) Report it to your organization's IT department or administrator",
        options: [
            "a) Ignore it; it's too late to do anything",
            "b) Report it to your organization's IT department or administrator",
            "c) Reply to the phishing email asking for an explanation",
            "d) Post about it on social media to warn others"
         
        ]
    },
    {
        num:29,
        question: "Which of these email signs may indicate a phishing attempt?",
        answer: "c) The email asks for sensitive information or money",
        options: [
            "a) The email address is from a known contact",
            "b) The email includes a legitimate-looking link",
            "c) The email asks for sensitive information or money",
            "d) The email has proper spelling and grammar",
         
        ]
    },
    {
        num:30,
        question: "How can you verify the authenticity of a suspicious email?",
        answer: "c) Contact the organization or person directly using official contact information",
        options: [
            "a) Click all links to see where they lead",
            "b) Reply to the email and ask for more information",
            "c) Contact the organization or person directly using official contact information",
            "d) Forward the email to all your contacts for their opinions"
         
        ]
    },
    {
        num:31,
        question: "What is a common tactic used by phishing emails to create a sense of urgency?",
        answer: "b) Threatening legal action",
        options: [
            "a) Promising large financial rewards",
            "b) Threatening legal action",
            "c) Offering free giveaways",
            "d) Using polite language"
         
        ]
    },
    {
        num:32,
        question: "Which of the following is a secure way to enter login credentials?",
        answer: "b) Typing the website's URL directly into the browser",
        options: [
            "a) Clicking on a link in an unsolicited email",
            "b) Typing the website's URL directly into the browser",
            "c) Sharing your credentials on social media",
            "d) Downloading an attachment and running it"
         
        ]
    },
    {
        num:33,
        question: "What should you do if you receive a suspicious email but are not sure if it's phishing?",
        answer: "d) Verify its authenticity before taking any action",
        options: [
            "a) Click all the links to investigate further",
            "b) Ignore it; it's probably harmless",
            "c) Forward it to your IT department",
            "d) Verify its authenticity before taking any action"
         
        ]
    },
    {
        num:34,
        question: "How can you verify the authenticity of a website before entering sensitive information?",
        answer: "c) Look for a padlock icon in the browser's address bar",
        options: [
            "a) Check if the website has a privacy policy",
            "b) Verify that the website has an SSL certificate",
            "c) Look for a padlock icon in the browser's address bar",
            "d) Enter personal information and see if it's accepted"
         
        ]
    },
    {
        num:35,
        question: "What is the term used to describe a targeted phishing attack on high-profile individuals?",
        answer: "b) Whaling",
        options: [
            "a) Spear phishing",
            "b) Whaling",
            "c) Vishing",
            "d) Pharming"
         
        ]
    },
    {
        num:36,
        question: "What is the purpose of a phishing email?",
        answer: "c) To collect personal information",
        options: [
            "a) To spread awareness about cybersecurity",
            "b) To deliver malware to the recipient's device",
            "c) To collect personal information",
            "d) To provide helpful information to the recipient"
        ]
    },
    {
        num:37,
        question: "What is the purpose of a phishing website?",
        answer: "a) To trick users into entering sensitive information",
        options: [
            "a) To trick users into entering sensitive information",
            "b) To provide free services to users",
            "c) To promote legitimate products",
            "d) To educate users about cybersecurity"
        ]
    },
    {
        num:38,
        question: "What is the best way to verify the authenticity of a suspicious email?",
        answer: "c) Contact the sender through a known, official channel",
        options: [
            "a) Click on all links in the email",
            "b) Reply to the email with personal information",
            "c) Contact the sender through a known, official channel",
            "d) Ignore the email and delete it"
        ]
    },
    {
        num:39,
        question: "What is two-factor authentication (2FA)?",
        answer: "a) A method to secure online accounts",
        options: [
            "a) A method to secure online accounts",
            "b) A type of encryption algorithm",
            "c) A type of phishing attack",
            "d) A method to encrypt emails"
        ]
    },
    {
        num:40,
        question: "How can you protect yourself from phishing attacks?",
        answer: "d) All of the above",
        options: [
            "a) Keep software up to date",
            "b) Be cautious of unsolicited emails and messages",
            "c) Use strong, unique passwords",
            "d) All of the above"
        ]
    },


];