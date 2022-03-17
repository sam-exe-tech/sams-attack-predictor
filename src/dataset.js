export const dataset = {
  "Botnet Attack": {
    keyword: [
      "zombie",
      "acting on its on",
      "operating automtically",
      "without my knowledge",
      "stealth",
      "compromised",
      "used as source of attack",
      "communication services",
    ],
    questions: [
      {
        ques: "Did you lost access to all your control mechanisms?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your system remotely controlled by an attacker?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was illegal/malacious activity being portrayed on your endscreen ?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your device unresponsive for the time interval?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you unaware about the potential onslaught on your system?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Disruption/ Credentials Jacking",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Intermediate to High",

    "Skill Set": "Pro",

    "Impact Level": "Intermediate",

    "Modus Operandi":
      "Attacks carried by inflected (zombie computers) to compromise networks/ communication and mostly for disruption in stealth mode",

    Countermeasures:
      "Filtering Botnet traffic/ Sinkholing Domians/ Shutting down malacious data servers/ centers etc.",
  },

  "Virtual Mobbing": {
    keyword: [
      "group of people online",
      "targeted",
      "threatened",
      "bullied",
      "digital communication",
      "I was harrased",
      "act of revenge",
    ],
    questions: [
      {
        ques: "Did you recieved any abusive/offensive texts?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you a victim of hate speach?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Do you feel depressed/harrased after the incident?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you targeted by multiple people at same time?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your personal reputation compromised in any way?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": " Revenge/ Defamation/ Fun/ Harrasment",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Low to Medium",

    "Skill Set": "Rookie/ Novice/ Basic",

    "Impact Level": "Intermediate",

    "Modus Operandi":
      "Use of digital communication by a group of people to bully/threaten a person.",

    Countermeasures:
      "Document and report to cybercrime authorities/ Block the accounts etc.",
  },

  "ATM Cash-Out Attack": {
    keyword: [
      "payment card breached",
      "ATM machines",
      "daily withdraw limit",
      "Credit card",
      "debit card",
      "minimum cashout limit",
      "no red flags",
      "payment deduction notifications",
      "withdraw alerts",
    ],
    questions: [
      {
        ques: "Was large amount of money instantly deducted from your bank account?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: " Did you lost your ATM card?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you recieved any red alerts/notifications of cash withdrawal?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you share your pin with someone by any means?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: " Was the amount of money deducted more than your cards daily withdrawal limit?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain/ Data Theft",

    "Crime Structrue": "Organized Crime",

    "Motivation Level": "Intermediate to High",

    "Skill Set": "Pro/Advanced",

    "Impact Level": "Very High",

    "Modus Operandi":
      " Involves criminals Breaching victims payment cards or ATM Machines/ Manipulatiing control mechanisms to exploit the daily withdraw limits and cause max damage.",

    Countermeasures:
      "Block ATM cards/ Set a minimum limit of cash out/ Report to bank regarding unusual cash flow etc",
  },

  "E-mail Bombing": {
    keyword: [
      "spam e-mails",
      "bulk",
      "mailbox overflowed",
      "mailbox ren out of storage",
      "unknown ID",
      "inaccessible",
    ],
    questions: [
      {
        ques: "Did you recieved any junk e-mails recently?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your Gmail account inaccessible or unresponsive?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your mailbox ran out of storage?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you by any chance cliked on a malacious link sent by unknown ID",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your resources depleted? Did it annoy you?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Annoying/ Resource Depletion",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Low to Intermediate",

    "Skill Set": "Rookie/ Basic/ Veteran",

    "Impact Level": "Medium",

    "Modus Operandi":
      "Spam e-mails are sent in bulk to overflow the victim mailbox. A kind of DDOS attack.",

    Countermeasures:
      "Blacklist and report spam e-mails/ Refrain from clicking malacious links etc.",
  },

  "Corporate Account Takeover": {
    keyword: [
      "corporate bank account",
      "business account",
      "funds were transferred",
      "breach",
      "different account",
      "unauthorized person",
      "wired money",
    ],
    questions: [
      {
        ques: "Were your client credentials/sensitive information compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you approached by any third party to discuss the account related error?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did they asked you for the login credentials under the pretense of fixing the issue?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your organization funds transfered to unknown accounts?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did the attack bring any reputational damage to your orgainization",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Identify theft/ Financial Gain",

    "Crime Structrue": "Organized Crime",

    "Motivation Level": "High",

    "Skill Set": "Advanced/Expert",

    "Impact Level": "Very High",

    "Modus Operandi":
      "Breaching of corporate bank account by an unauthorised person to transfer funds into own accounts and stealing credentials.",

    Countermeasures:
      "Ensure proper access level/ Turn on anomaly detection alerts/ Keep transactions track records etc.",
  },

  "State Sponsored Hackers": {
    keyword: [
      "indirectly sponsored by government",
      "adversaries",
      "opposition",
      "organized group",
      "professional hackers",
      "trade secrets",
      "millions of dollars of economic disruption",
    ],
    questions: [
      {
        ques: "Was your parties political/ ecomonic reputation compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Is there a possibilty that your adversaries/opposition may have done this to defame you?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your organization trade/corporate secrets revealed in public?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was the impact of attack critical in terms of economic damage?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were defensive capacities/security of your company diminished in anyway?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Disruption/ Defamation/Politics",

    "Crime Structrue": "Highly Organized Crime",

    "Motivation Level": "Very High",

    "Skill Set": "Advanced/Expert",

    "Impact Level": "Critical",

    "Modus Operandi":
      "Hackers indirectly sponsored by government itself to target it's adversaries",

    Countermeasures:
      "Deploying highly advanced tools offered by NIST/ Scanning for APT's etc",
  },

  "Online Sextortion": {
    keyword: [
      "blackmailed by my fellow colleague",
      "threatened",
      "release my sensitive information",
      "offer sexual favours",
      "revenge",
      "pay money",
    ],
    questions: [
      {
        ques: "Were you associated with any online dating apps recently?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Do you know the perpetrator in person before you started recieving threats from them?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you asked/blackmailed for any sexual favours or indecent images in return for not leaking your personal information?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did perpetrators actions cause any emotional/mental damage to you?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Will perpetrator actions cause any embarrasing repercussion on you if they release your information in public?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Money/ Fun/ Sexual Impulse/ Revenge",

    "Crime Structrue": "Un-organized Crime",

    "Motivation Level": "Medium to Intermediate",

    "Skill Set": "Rookie/ Veteran",

    "Impact Level": "Medium to Intermediate",

    "Modus Operandi":
      "Threatening victims of releasing their private/sensitive information for sexual favours/ money etc",

    Countermeasures:
      "Securing social media profiles/ Disengaging further communication with perparators etc.",
  },

  Vishing: {
    keyword: [
      "fraudulent phone call",
      "voice message",
      "person claiming to be a legitimate representative",
      "asking for sensitive information",
      "bank details",
    ],
    questions: [
      {
        ques: "Did you recieve any call from a person claiming to be a government representative asking for your personal details? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: " Did they mention that you have won a lottery/gift cards and need bank details to transfer the prizepool to your account?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you lost your money to some unauthorized purchases you havent made?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you recieve any call from tech support that they have noticed unusual activity and need details to verify?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you recieve any spam calls from unknown numbers?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data Theft/ Financial Gain",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Low to Medium",

    "Skill Set": "Rookie/ Novice/ Basic",

    "Impact Level": "Medium to Intermediate",

    "Modus Operandi":
      "Practice of making fraudulent phone calls/ voice messages to individuals to gain sensitive information.",

    Countermeasures:
      "Add Spam Filters/ Blocking and reporting the conversation.",
  },

  "Ping of Death Attack": {
    keyword: [
      "denail of service",
      "system freeze",
      "ping commands",
      "server crashed",
      "ping latency problems",
      "malacious packets ",
    ],
    questions: [
      {
        ques: "Were you facing any ping/latecy related problems on your server?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your clients complain about the slow and unresponsive network?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your servers memory buffer able to handle the packets? Did it exceed its capacity?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you observed any unusual/high traffic on your network recently?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were the services/control mechanisms associated denied to you for certain time interval?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Disruption/ Defamation",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Medium to Intermediate",

    "Skill Set": "Rookie/ Veteran",

    "Impact Level": "Intermediate",

    "Modus Operandi":
      " A DOS based attack which involves freezing/ destabilizing victims computer by sending malacious packets using Ping commands.",

    Countermeasures:
      "Creating memory buffer which exceeding space to handle packets/ Deploying IDS and IPS.",
  },

  "Salami Attack": {
    keyword: [
      "small amount of money",
      "small scale attack",
      "unnecessarily deducted",
      "least impact",
      "minor",
      "unnoticed",
      "without my knowledge",
      "add up to large scale",
    ],
    questions: [
      {
        ques: "Was a small amount of money i.e (fraction of cents) deducted from your account?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was it difficult to spot the total balance difference with minor fraction of money missing?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your colleagues/friends/family members face the similar amount deduction problems like you in recent events?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you see a rise in money deduction complains/reports recently? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was the amount deducted documented under some legal charges like account management charges?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain",

    "Crime Structrue": "Organized Crime",

    "Motivation Level": "High/ Very High",

    "Skill Set": "Advanced/ Expert",

    "Impact Level": "Intermediate/ Critical",

    "Modus Operandi":
      "Small scale attacks that go unnoticed due to its nature and least impact level eventually add upto major scale disasters.",

    Countermeasures:
      "Moniter weekly bank transactions and statements/ Inform bank about suspcious money deduction.",
  },

  "Potentially Unwanted Programs": {
    keyword: [
      "unwanted programs",
      "applications",
      "automatically installed",
      "windows defender",
      "consuming system resources",
      "system slow and unresponsive",
      "spyware",
    ],
    questions: [
      {
        ques: "Did you recieve any red alerts from your windows defender/antivirus that unwanted apps found?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did antivirus mentioned that the app consuming more resources than its actual need?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your personal computer felt slow/laggy or occasionally unresponsive?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did it negatively affect your end systems health or performance?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you recieve any pop up after downloading a legitimate software to download additional software?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": " Spying/ Financial Gain/ Data credentials stealing",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": " Low to High",

    "Skill Set": "Veteran/Pro",

    "Impact Level": "Medium to Intermediate",

    "Modus Operandi":
      "Unwanted Programs acts as spyware/ Adware to consume system resources and steal data credentials and also makes system slow.",

    Countermeasures:
      "Download software from trusted websites/ Read end user lisence aggreement/ Install antimalware etc.",
  },

  "White Collar Criminals": {
    keyword: [
      "violation of trust",
      "defaming my organization",
      "highly economic frauds",
      "Funded",
      "elite scams",
    ],
    questions: [
      {
        ques: "Did any governmental officer asked you for a bribery to get your work done?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did any employee used your organizational funds for different purpose than intended or made fraudulent investemts?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: " Is there a possibility of corporate crimes commited against your organization without you knowing that may have affected your organization financially?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Is there a possibilty that your adversaries/opposition may have done this to defame you?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: " Were your agency trade secrets revealed in public? Did that cost you your company name?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain/ Business advantages/Politics",

    "Crime Structrue": "Highly Organised Crime",

    "Motivation Level": "High/ Advanced",

    "Skill Set": "Pro/ Expert",

    "Impact Level": "Highly Critical",

    "Modus Operandi":
      "It involves violation of trust  by business/ Governmental organizations to commit highly Economic frauds.",

    Countermeasures:
      "Strict Legal structure/ Capital punishment/ Practising internal audits.",
  },

  "Trojan Horse Attack": {
    keyword: [
      "malacious code",
      "triggered",
      "worms",
      "malware",
      "exploited my control mechanisms",
      "credentials were found missing",
      "data/network was disrupted",
    ],
    questions: [
      {
        ques: "Did you executed any .exe file on your computer when you accidently clicked on a malacious link?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you click on any pop-ups/advertisments while surfing on a website which lead to unnecessary download?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was the data on your computer modified by any means without your knowledge?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you download any free to download software?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were the system resources compromised? Did it affect your Pc's performance? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data Theft/ Disruption",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Intermediate to High",

    "Skill Set": "Pro/ Expert",

    "Impact Level": "Very High",

    "Modus Operandi":
      " A malacious code in stealth mode which seems legitimate controls your device/ system to damage/ steal/ disrupt data and network.",

    Countermeasures:
      "Installing and running internet security suite/ Deploying Firewalls etc",
  },

  "Logic Bomber": {
    keyword: [
      "malacious program",
      "triggered",
      "conditions met",
      "specific date",
      "no of transactions",
      "triggered by certain contions",
    ],
    questions: [
      {
        ques: "Did your system files automatically got deleted after a specific action?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your harddrive compromised/wiped completely? Was your OS rebooted?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you gave access of your computer to someone else recently?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your antivirus got expired? Did you not activate antivirus on your system",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were some functional elements of your system malfunctioning recently?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Economic Frauds/ Defamation",

    "Crime Structrue": "Un-organized Crime",

    "Motivation Level": "Intermediate to Very High",

    "Skill Set": "Pro/ Expert/Advanced",

    "Impact Level": "Very High/ Critical",

    "Modus Operandi":
      "A malacious program set to triggered when certain conditions are met (i.e date/ time/ no of transactions etc).",

    Countermeasures:
      "Immediately lmplementing patches when new software is released/ Use trusted antivirus etc",
  },

  "MAC Spoofing": {
    keyword: [
      "access controls",
      "mac address",
      "altered",
      "impersonating ",
      "drivers and devices were used by someone else",
      "factory assigned",
    ],
    questions: [
      {
        ques: "Were access controls of your device compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your factory assigned MAC address changed or altered by any means?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were any of your end systems drivers exploited by outsider or intruder?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your network resources compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were any illegal activities committed by using your name or MAC address or spoofed my any means?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data Alterations/ Defamation",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Intermediate to High",

    "Skill Set": "Pro/ Expert",

    "Impact Level": "Pro/ Expert",

    "Modus Operandi":
      "Gives advantages to hackers to pose as original MAC address by exploiting access control measures.",

    Countermeasures:
      "Monitering networks for unusual activity/ Enabling packet filtering/ Deploying Robust Verification methods.",
  },

  "SYN Flood Attack": {
    keyword: [
      "unresponsive",
      "couldn't establish a connection",
      "half connection",
      "high traffic",
      "couldn't access",
      "factory assigned",
      "half open connections",
      "multiple",
    ],
    questions: [
      {
        ques: "Was the server temporarily unavailable or unable to function?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was denail of service a potential issue?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you successful in initiating a new real connection?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you not recieve any ACK packet from server after requesting for a connection?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did server crashed abruptly?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Defamation/ Disruption",

    "Crime Structrue": "Un-organized Crime",

    "Motivation Level": "Medium to Intermediate",

    "Skill Set": "Rookie/Veteran/ Basic",

    "Impact Level": "High",

    "Modus Operandi":
      "Establishing half connection to a network by means of  DDOS attack which consumes most of system resources to make it unresponsive to legitimate users.",

    Countermeasures:
      "Configuring Firewall/ Installing commercial Monitering tools/ Updating network equipment.",
  },

  "Plaintext Attack": {
    keyword: [
      "secret key",
      "plaintext",
      "ciphertext",
      "encrypted text ",
      "senssitive information",
    ],
    questions: [
      {
        ques: "Was your sensitive information compromised/leaked?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you enable two factor authentication to secure your account?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your account raise any red flags?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you share your secret/private key with anyone familiar?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you enable long key spaces for encryption?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial gain/ Revenge",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Medium",

    "Skill Set": "Veteran/Pro",

    "Impact Level": "High",

    "Modus Operandi":
      "Attacker gains access to both Plaintext and encrypted versions to exploit sensitive information by secret key",

    Countermeasures:
      "Enabling long key spaces/ Developing strong passwords habits/ Encrypting data with redundant encipherment.",
  },

  "Replay Attack": {
    keyword: [
      "repeated",
      "transactions delayed",
      "misinformation",
      "message contents were altered",
      "compromised",
    ],
    questions: [
      {
        ques: "Was there any delay in your communication/transactions?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your sensitive conversations resended to different clients/people on its own?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you experience any sort of repetition of your activites?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your message contents altered or any misinformation fed to your clients?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you not establish any random sesssion or unique token while completing a transaction?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Frauds/ Data Theft",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Intermediate",

    "Skill Set": "Veteran/Pro",

    "Impact Level": "Intermediate",

    "Modus Operandi":
      "Valid data transmissions are  fraudulently repeated or delayed. Unnecessary Retransmission of data",

    Countermeasures:
      "Establish any random session key/ Unique session token usage and enabling IP Security.",
  },

  "Privilege Escalation": {
    keyword: [
      "bug",
      "operating system",
      "OS",
      "hadn't updated",
      "patched",
      "bugs",
      "design flaws",
    ],
    questions: [
      {
        ques: "Was your computer system up to date?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you applied any patches to reported bugs?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your control mechanisms exploited by any means?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you observe any changes in priveleges? Were higher priveleges granted to any entity beyond its level?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your system had any misconfigurations/design flaws previously which were ignored by you?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data Theft/ Financial gain",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Medium to High",

    "Skill Set": "Veteran/Pro",

    "Impact Level": "Medium to Intermediate",

    "Modus Operandi": "Accessing user information by exploiting a bug in OS.",

    Countermeasures:
      "Monitering User/Entity behaviour/ Scan and protect Network systems/ Application etc",
  },

  "Rainbow Table Attack": {
    keyword: [
      "passwords cracked",
      "lost my account",
      "cracking passwords",
      "hashes",
      "hash functions",
      "password hashes",
    ],
    questions: [
      {
        ques: "Did you implement SALT techniques? Were your hashing techniques outdated?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you add any random values to your hashed passwords?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your organizations active directory compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Do your organization not use passwordless authentications?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you not enable two factor authentication?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data Theft/ Defamation Financial gain",

    "Crime Structrue": "Un-organized Crime",

    "Motivation Level": "Medium to High",

    "Skill Set": "Veteran/Pro",

    "Impact Level": "Medium to Intermediate",

    "Modus Operandi":
      "Cracking passwords hashes on the databases using a special table.",

    Countermeasures: "Use SALT techniques.",
  },

  "Hash Attack": {
    keyword: [
      "without cracking password",
      "priveleges escalated",
      "remotely",
      "new authentication session",
      "different session",
      "remote",
      "administrator",
    ],
    questions: [
      {
        ques: "Were priveleges granted beyond trusted agents?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was domains administrator credentials guessed/stolen or compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your server remotely accessed by any means?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were hash user credentials exploited/stolen from your system?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your organization NTLM authentication protocol activated by user's hashed password? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Credentials Stealing/ Financial gain",

    "Crime Structrue": "Un-organized Crime",

    "Motivation Level": "Intermediate ",

    "Skill Set": "Veteran/Pro",

    "Impact Level": "Medium to Intermediate",

    "Modus Operandi":
      "Attacking remote servers by hashing user passwords without cracking it.",

    Countermeasures:
      "Implement privelged access/ Grant priveleges to only trusted agents/ Deploy IPS.",
  },

  "Typo Squatting Attack": {
    keyword: [
      "fake",
      "typos",
      "mispelled",
      "malacious urls",
      "spelling mistakes",
      "accidently clicked",
      "brandjacked",
    ],
    questions: [
      {
        ques: "Did you mispelled a legit site name in rush and entered your credentials without re-checking?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you clicked on any malacious/unknown url associated with the name of legit site?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you lost your money/data credentials after realizing it was a fake site?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you make any purchases on dummy website assoicated with a particular brand?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you enter a wrong domain extension after the brand name i.e wwwfacebook.com instead of www.facebook.com ? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data Theft/ Financial Gain",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Medium to Intermediate",

    "Skill Set": "Veteran/Pro",

    "Impact Level": "Intermediate",

    "Modus Operandi":
      "Creating fake sites/urls based on typos made by victims regarding web address/ Brand jacking etc.",

    Countermeasures:
      "Taking legal actions based on exploits/ Registering trademarks for your business/ securing domains.",
  },

  "Brute Force Attack": {
    keyword: [
      "limited login attempts",
      "two factor authentication",
      "trial and error",
      "all possible combinations",
      "guessed passwords",
      "masquerading",
    ],
    questions: [
      {
        ques: "Was your account/system hijacked?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you not set limited login attempts for user to gain access to your account? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you not set a two factor authentication?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was root ssh login enabled on your system?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you set easy to guess passwords for login? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Credentials Stealing/ Financial gain/ Defamation",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Intermediate ",

    "Skill Set": "Veteran/Pro",

    "Impact Level": "Medium",

    "Modus Operandi":
      "Trial and error attack based method to guess login credentials.",

    Countermeasures:
      "Limit login attempts/ Using Captcha/ Disabling root ssh login etc",
  },

  "Session Hijacking": {
    keyword: [
      "session",
      "control",
      "token",
      "session got stuck",
      "token was stolen",
      "control mechanism revoked",
    ],
    questions: [
      {
        ques: "Did you lost access to your vaild session while you were completing your transaction?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was considerable amount of money deducted from your account because of unauthorized purchases made?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was this associated to one of your web application sessions?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you impersonated by possible attacker entity?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you not use complex session keys or initiate random sessions? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Credentials Stealing/ Financial gain",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Intermediate to High",

    "Skill Set": "Pro/Expert",

    "Impact Level": "Advanced",

    "Modus Operandi":
      "Exploiting a valid computer session and control mechanism by the means of unauthorised access/ Stealing session token.",

    Countermeasures:
      "Re-generating session id/ Use complex session keys/ Encrypting data traffic. ",
  },

  "Domain Hijacking": {
    keyword: [
      "domain registrar",
      "domain name",
      "registory",
      "lost the access",
      "domain owner",
      "domain privelges",
    ],
    questions: [
      {
        ques: "Was your websites doamin registar changed/altered?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you lost access to your site's domain name and its priveleges of domain hosting?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did it cost any financial/reputational/regulatory damages to your company?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your clients compain about their data leak/misuse?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did any third party vendor had access to your domains data? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Defamation/ Financial gain / Data theft",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Intermediate to High",

    "Skill Set": "Pro/Expert",

    "Impact Level": "High/Advanced",

    "Modus Operandi":
      "Abusing the privileges of domian hosting/ registery system by altering Domain name without the knowledge of its owner.",

    Countermeasures:
      "Reverse the attack by invoking RTDR Policy/ Imposing ICANN/ Enable Account and Domain Registery Lock",
  },

  Clickjacking: {
    keyword: [
      "clicks",
      "clicking",
      "displayed",
      "portrayed",
      "malacious site",
      "malacious script",
      "tricked",
      "fooled",
    ],
    questions: [
      {
        ques: "Were you tricked into clicking a webpage element which was misdisplayed i.e A message displaying you won a lottery click here to claim your rewards?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did any malacious script ran in your computers background when you clicked it?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were there any bugs/loopholes in your browser which weren't fixed?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your funds transfered when you clicked on unknown page ibutton?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was Javascript not disabled on your webpage? You didn't include any Frame breaker scripts? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Stealing credentials/Boosting revenue",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Medium to Intermediate",

    "Skill Set": "Veteran/Pro",

    "Impact Level": "Intermediate",

    "Modus Operandi":
      "A malacious attack which fools/devices victims into clicking on different sites to that of portrayed.",

    Countermeasures: "Disable JavaScript/ Include frame breaker script.",
  },

  "Driver Manipulation": {
    keyword: [
      "drivers",
      "wifi drivers",
      "graphic card drivers",
      "externals drivers",
      "audio drivers",
      "vedio drivers",
      "keyboard drivers",
      "mouse drivers",
      "printers",
      "manipulated",
      "operating system",
      "trusted",
    ],
    questions: [
      {
        ques: "Did you use/follow layered approaches on your device?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were any of your device drivers malfunctioning lately?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your computers Wifi/Mouse/Audio/Vedio/Graphics/Printer unresponsive to your actions?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your operating system not up to date?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your driver codes recently rewritten, refactored or shimmed by any means?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Monitering/ Data Theft",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Medium to Intermediate",

    "Skill Set": "Pro",

    "Impact Level": "Intermediate/High",

    "Modus Operandi":
      "The hardware drivers trusted by OS are manipulated to exploit the system by Malwares/ keyloggers etc",

    Countermeasures:
      "Use layered approaches and try to identify the exploitatians occurred.",
  },

  "ARP Poisoning Attack": {
    keyword: [
      "routers",
      "network resources",
      "hubs",
      "ip address",
      "mac address",
      "host",
      "unauthorized party",
      "http",
    ],
    questions: [
      {
        ques: "Were your organizaions host routers/hubs/network resources compromised lately?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your host accepted response from unauthorized parties?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your Ip address and Mac address spoofed/ misused by external sources?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did unknown entity had any access to your network? Was your communication altered?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your data stolen? Did you use HTTP channel to communicate? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data IP theft/ Financial ",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Medium to Intermediate",

    "Skill Set": "Pro/ Advanced",

    "Impact Level": "High",

    "Modus Operandi":
      "The attacker uses a spoofing tool, such as Arpspoof or Driftnet, to send out forged ARP responses. ",

    Countermeasures: "Use static ARP/ Packet Filtering and enable VPN.",
  },

  "Wrapping Attack/MITM": {
    keyword: [
      "fake element",
      "unknown element",
      "meddler",
      "digital signature",
      "impersonating ",
      "eavesdropped",
      "encrypted",
      "injected",
    ],
    questions: [
      {
        ques: "Was your web service session ever authenticated without your knowledge or other any red flags raised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your digital signature compromised by unknown possibly fake element or intervention?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did someone impersonated you recently did his/her actions cost you?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your social security accounts password changed without your knowledge?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you not strongly encrypt your digital communications? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Revenge/ Data Theft",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Medium",

    "Skill Set": "Veteran",

    "Impact Level": "Intermediate",

    "Modus Operandi":
      "Injecting fake elements into a legit structure and  convincing digital signatures to cover it as legit.",

    Countermeasures:
      "Strongly Encrypting digital communications/Taking constructive security steps to prevent such attacks.",
  },

  "Organ Trafficking": {
    keyword: [
      "missing people",
      "missing organs",
      "dead bodies",
      "kidneys",
      "kidnapped",
      "poor people",
      "dark web",
      "traces",
      "brainwashed",
      "crime department",
    ],
    questions: [
      {
        ques: "Did missing people/kidnapping/dead bodies reports increased recently?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were many of those victims were poor people?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were they manipulated/brainwashed to sell organs for monetary benifits?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did perpetrators leave any trace of their activites online which were linked to dark web?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did the criminal department recieve any illegal transplantations alerts? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain/ High profits",

    "Crime Structrue": "Highly Organized Crime",

    "Motivation Level": "Very High",

    "Skill Set": "Advanced/Expert",

    "Impact Level": "Highly Critical",

    "Modus Operandi":
      "Kidnapping victims/ Brainwashing poor victims to sell organs for Monetary benifits etc",

    Countermeasures:
      "Educating poor masses about it's severe impact/ Implementation of strict laws and legislature along with capital punishment.",
  },

  "Sim Swap Scam": {
    keyword: [
      "fraudulent phone call",
      "explaining some schemes",
      "explaining offers",
      "sim details",
      "impersonating ",
      "calling company claiming to be me",
      "sim card",
      "sim card damaged",
      "sim card lost",
      "crime department",
      "banking frauds",
    ],
    questions: [
      {
        ques: "Did you recieved any fraudulent call from a person claiming to be a legit representative asking for your sim card details or personal information?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your sim card displayed no signal abrubtly still while company network didn't display any outrage?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you lost your phone connection/internet services?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were any online banking frauds committed against you by an attacker?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your online user profile (telecom profile) not set to private? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "IP/Data Theft/ Frauds",

    "Crime Structrue": "Unorgainzed Crime",

    "Motivation Level": "Low to Medium",

    "Skill Set": "Rookie/ Veteran",

    "Impact Level": "Low to Medium",

    "Modus Operandi":
      "Convincing victims cell phone carriers in porting sim cards while acting as a  legitimate representative in stealth mode",

    Countermeasures:
      "Frequently resetting mobile pins/ Set online user profile to private/ Blacklist spams etc",
  },

  "Online Drug Trafficking": {
    keyword: [
      "missing people",
      "missing organs",
      "dead bodies",
      "kidneys",
      "kidnapped",
      "poor people",
      "dark web",
      "traces",
      "brainwashed",
      "crime department",
    ],
    questions: [
      {
        ques: "Did the number of drug addicts recently increased under your legislation ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was the consumption of illegal stuff like cocaine/herion/opium increased according to crime reports?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were drug probihition campaigns not executed in your region? Were people victims of drug abuse and violation? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were people not educated about the ill effects of drug usage?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did crimes in your city increased this year as compared to previous year? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain/ High profits",

    "Crime Structrue": "Highly Organized Crime",

    "Motivation Level": "Very High",

    "Skill Set": "Advanced/Expert",

    "Impact Level": "Highly Critical",

    "Modus Operandi":
      "Illicit supply/trade of drugs on Drak Web/ Anonymous Markets",

    Countermeasures:
      "Closer co-operative efforts between different legislation/ High strict laws/! Seeking help from legal departments/Drug prohibition etc.",
  },

  Pharming: {
    keyword: [
      "redirected to a bogus site",
      "fake site",
      "data traffic",
      "automatically redirected",
      "identity was stolen",
      "i was not lured",
      "dns cache",
    ],
    questions: [
      {
        ques: "Were you automatically redirected to a bogus/fake site while surfing online?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your confidentail information/log in credentials stolen?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you click on any unknown link online/ recieved in your mailbox/messages?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your IP address compromised? Did some unknown entity impersonated you?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you clear your DNS cache recently? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data Theft/ Financial Gain",

    "Crime Structrue": "Unorgainsed Crime",

    "Motivation Level": "Medium to High",

    "Skill Set": "Veteran/Pro",

    "Impact Level": "Intermediate",

    "Modus Operandi":
      "Manipulatiing website traffic to bogus website/ Stealing sensitive information.",

    Countermeasures:
      "Use reliable DNS Server/ Choose reputable ISP/ Regular DNS cahche clearing.",
  },

  "Cyber Bullying": {
    keyword: [
      "offensive texts",
      "bullied",
      "blackmailed",
      "spread rumours",
      "social media",
      "mean",
      "rude",
      "hate",
      "stressed",
      "depressed",
    ],
    questions: [
      {
        ques: "Were you bullied on any online social media platforms?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was someone spreading unnecessary hate and rumours about you online?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did someone blackmailed/threatened you for sexual favours or sent you mean texts?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Do you feel depressed/stressed after the incident",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was someone rude to you online or tried to hurt you by any means? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Sexual Impulses/ Defamation/ Emotion",

    "Crime Structrue": "Unorgainsed Crime",

    "Motivation Level": "Low to Medium",

    "Skill Set": "Rookie/Novaice/ Basic",

    "Impact Level": "Low to Intermediate",

    "Modus Operandi":
      "Sending offensive texts/ IMS/ MMS Spreading rumours about victims on social media and blackmailing.",

    Countermeasures:
      "Developing strong password habits/ Activating two step authentication etc",
  },

  "IP Theft": {
    keyword: [
      "copyrights",
      "patents",
      "intellectual property rights",
      "robbed",
      "stolen",
      "images stolen",
      "designs stolen",
      "trade secrets",
      "business documents",
      "aggrements",
    ],
    questions: [
      {
        ques: "Were you robbed of your ideas/inventions/creative expressions online?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your trade secrets/assets made public by unknown entity/ your adversaries or competitors in market?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your firewalls breached? Did it raise any red flags?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were there any loopholes/insider threats in your organization that made have led to such assault?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your confidentail business agreements/documents copyrights and patents stolen/misused? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain/ Trade Secrets",

    "Crime Structrue": "Unorgainsed Crime",

    "Motivation Level": "High",

    "Skill Set": "Pro/Advanced",

    "Impact Level": "Very High",

    "Modus Operandi":
      "Breaching firewalls using Malwares, IP hijacking and exploiting loopholes.",

    Countermeasures:
      "Establishing data security policy/ Reviewing user access to IP.",
  },

  "Crypto Jacker": {
    keyword: [
      "crypto",
      "crypto currency",
      "trading account",
      "bitcoin",
      "ethereum",
      "stocks",
      "mine",
      "cryptocurrencies",
    ],
    questions: [
      {
        ques: "Was your crypto trading account breached? Did you lost access to it?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your crypto currency i.e Bitcoin/Ethereum/Litecoin transferred to a different trading account without your knowledge? Was your crypto wallet emptied?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you access any public networks (public wifi's) for trading/transactional process (buy/sell)?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your device/personal computer/smartphones/tablets used illegally to mine/steal for cryptocurrencies in stealth mode? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was any malacious software installed on your system? Did you click on any malacious link/advertisements/ malware injected webpages? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain/Profits",

    "Crime Structrue": "Orgainsed Crime",

    "Motivation Level": "Intermediate to High",

    "Skill Set": "Pro/Advanced/Expert",

    "Impact Level": "High/Very High",

    "Modus Operandi":
      "Victims system is compromised to mine for crypto currencies without their knowledge. The malware runs in background and is hard to detect",

    Countermeasures:
      "Train and educate IT team/ employees/ Disable JavaScript/ Use Ad Blockers.",
  },

  "DNS Tunneling": {
    keyword: [
      "dns",
      "domain",
      "tunneled",
      "dns traffic",
      "not monitered",
      "bypassed firewall",
      "dns cache",
    ],
    questions: [
      {
        ques: "Was your organization DNS traffic not monitered for malacious activity?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your client information compromised/tunneled/stolen/leaked/transferred to attackers server?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was any covert communication channel used which may have bypassed your organizations firewall/security and ip protocols?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were command and control mechanisms of your server compromised? Was confidential data exfiltrated?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was javascript enabled on your server? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data theft/Financial Gain",

    "Crime Structrue": "Orgainsed Crime",

    "Motivation Level": "High/Advanced",

    "Skill Set": "Pro/Advanced",

    "Impact Level": "Intermediate to High",

    "Modus Operandi":
      "Encodes data into DNS queries by mode of adding additional data traffic to domain and endpoints. Creates covert communication channel.",

    Countermeasures:
      "Blocking and blacklisting malacious domains/ Configuring DNS firewall etc.",
  },

  "Script Kiddles": {
    keyword: [
      "existing software",
      "domain",
      "similar scripts",
      "similar codes",
      "easily traced",
      "amateur",
      "found on internet",
      "simple",
    ],
    questions: [
      {
        ques: "Were you able to trace attacks on your system easily?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did the attack signature match any of the existing well known hacking techniques recorded in your database/ or found on internet?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you able to get access to your system right away after applying some counters to threat actors?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was the damage to your organization small scale/ had least impact on your company resources?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were the attack vectors and modus operandi of the expliot simple? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Learning/Fun",

    "Crime Structrue": "Un-organized ",

    "Motivation Level": "Low",

    "Skill Set": "Basic/Rookie",

    "Impact Level": "Low to High",

    "Modus Operandi":
      "Amateur attacker performs DDos/malware/pishing/vishing and many more.",

    Countermeasures: "Proactive cyber security, proper education.",
  },

  "Cyber Stalker": {
    keyword: [
      "stalked",
      "annoyed",
      "unknown account",
      "disturb",
      "trying to get my attention",
      "attention",
      "new account",
      "watched",
      "obscene",
    ],
    questions: [
      {
        ques: "Did you recieve multiple messages from an unknown person even after you warned them not to?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were they trying to get your attention or disturb your internal peace?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did they came up with new accounts after you blocked their previous account?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you feel depressed/annoyed/stalked/stressed/watched after encountering such experience?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you harrassed or recieve any obscene images? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Harrasment/ Sexual Impulses/ Personal Satisfaction",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Medium/ Intermediate",

    "Skill Set": "Intermediate",

    "Impact Level": "Low to High",

    "Modus Operandi": "Cross Site Scripting/ Cat-fishing/ Web Cam Hacking",

    Countermeasures:
      "Clearing web cookies and cache/ securing accounts with strong passwords and dual factor authentication, Avoiding public Wifi.",
  },

  Hactivists: {
    keyword: [
      "public reputation",
      "political party",
      "political cause",
      "socially",
      "seeking public attention",
      "social cause",
      "religious motive",
      "defamed",
      "defaming",
    ],
    questions: [
      {
        ques: "Was your website traffic disrupted? Was your website slow or unresponsive?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were some advertisements played/ banners displayed on website which motivated any public/political cause without your knowledge?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your govermental organization/political party/ business targeted of unlikey rumors and not supporting social cause?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your website defaced/ vandalyzed of its contents?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your organizations sensitive information leaked in public which may have defamed you?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Political Gain/ Fame",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Low to High",

    "Skill Set": "Basic to Intermediate",

    "Impact Level": "Low to Medium",

    "Modus Operandi": "DDos/Phishing/ Spamming/ Exploitating free tools.",

    Countermeasures:
      "Engage law enforcements/ Protect third party services/ Proactive communication.",
  },

  "Cyber Terrorist": {
    keyword: [
      "politically motivated",
      "fear",
      "disrupted",
      "violence",
      "physical harm",
      "fullfiled a political agenda",
      "ideological goal",
      "air traffic",
      "military installitions",
    ],
    questions: [
      {
        ques: "Was the attack against your organization politically motivated?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did the attack strike fear in your heart or masses? Was it associated with violence?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did this online led attack cause any physical harm to a person or body?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did the attack fullfilled any political agenda? Was the society intimidated in executing a specific ideological goal?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did this attack led to disruption in military installations/air traffic control/banking industry/power plants?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Emotion/ Money/ Religion",

    "Crime Structrue": "Organized/ Well funded",

    "Motivation Level": "Medium to High",

    "Skill Set": "Intermediate/ Advanced",

    "Impact Level": "High",

    "Modus Operandi":
      "APT ( Advanced Persistent Threats/SQL injection/ DNS tunneling",

    Countermeasures: "Stricter Cyber Laws/ Deploying Advanced Security.",
  },

  "White Hat Hacker": {
    keyword: [
      "patriotism",
      "patroitic goal",
      "professionally funded",
      "non disclouse aggrement",
      "hired",
      "with my knowlwdge",
      "penetration test",
      "ethics",
      "ethical",
      "payed the attacker",
    ],
    questions: [
      {
        ques: "Did you hire a professional hacker to identify the possible loopholes and vulnerabilities in your organization",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was a non-disclosure aggrement signed with hacker when you asked him/her to lead an assault?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did the attacker performed penetration test on your system with your knowledge?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was an ethical aspect involved in his signature/modus operandi?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your organization (business/political) pay the attacker for his/her time and services?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Patriotism/ Financial Gain",

    "Crime Structrue": "Organized/ Funded",

    "Motivation Level": "High",

    "Skill Set": "Advanced/ Expert",

    "Impact Level": "Medium to High",

    "Modus Operandi": "Identify vulnerabilities and repairing loopholes.",

    Countermeasures: "Not pursuing illegal motives.",
  },

  "Social Engineer": {
    keyword: [
      "psychologically",
      "manipulated",
      "tricked",
      "trust was voilated",
      "trust",
      "fooled",
      "blind trust",
      "donate",
      "donation",
      "own actions",
    ],
    questions: [
      {
        ques: "Were you tricked by a person claiming to be a legitimate representative of an organization to reveal your personal information? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you gave access of your computer/system to an unknown person?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you put blind trust in a person/friend who you thought might be beneficail for your organization or to be your personal representative?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you tricked in donating for a fundraiser/ charity or for a political campaign or any other cause and later found out you have been fooled?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your own blind actions cost you money and time? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain/ Revenge",

    "Crime Structrue": "Organized Crime",

    "Motivation Level": "Medium",

    "Skill Set": "Medium to Intermediate",

    "Impact Level": "Medium to High",

    "Modus Operandi":
      "Manipulatiing people to reveal confidential information, Impersonation,  analyzing behavioural pattern of victims",

    Countermeasures:
      "Securing devices/ setting spam filters/ Creating awareness among employees.",
  },

  "Ransom Artist": {
    keyword: [
      "ransom",
      "asked for a ransom",
      "encrypted",
      "decryption key",
      "deleted",
      "my account was locked",
      "locked",
      "malware",
      "threatened",
      "payed the attacker",
      "attacker asked for money",
    ],
    questions: [
      {
        ques: "Did you found out that your confidental files/documents were encrypted without your knowledge and a pop up message asked for money/ransom for the decription key?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you recieve any call/message from an unknown person asking you for money or he/she will reveal/delete your sensitive files/information?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you lost access to your device/accounts? Was it locked?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "The antivirus was not installed/updated on your system? The firewall was not set up/ You refrained from using VPN?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "The data on your sytem was not backuped? the security patches were not implemented?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Money",

    "Crime Structrue": "Orgainsed Crime",

    "Motivation Level": "High",

    "Skill Set": "High/Pro",

    "Impact Level": "High/ Critical",

    "Modus Operandi":
      "Encrypt files and personal information of the victim and demand a ransom for decryption key ",

    Countermeasures: "Regular penetraion testing/ Timely system updation.",
  },

  "Cyber Crime Syndicates": {
    keyword: [
      "cripled",
      "disasterous",
      "cybercrime gangs",
      "online heist",
      "impossible",
      "large scale",
      "governmental website",
      "financial firm",
      "billions",
      "notorious crime",
    ],
    questions: [
      {
        ques: "Was the impact of attack disasterous which may have cripled the organization or totally wiped off its funds?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was any large scale online heist reported recently which was quite impossible to be carried out?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was any legal governmental website/financial firm/bank compromised of its data and resources?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were the attacks reported one of the most notorious crimes in this decade?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did the lossess faced by organizations sum upto millions and billions of dollars?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain",

    "Crime Structrue": "Organized/ Funded",

    "Motivation Level": "High",

    "Skill Set": "Advanced/ Expert",

    "Impact Level": "High",

    "Modus Operandi": "Malwares/ Botnet Services/ Keyloggers etc",

    Countermeasures: "Deploying IDS/ Security countermeasures (CIA)",
  },

  "Disgruntled Employees/ Insider Crimes": {
    keyword: [
      "insider",
      "person from internal circle",
      "employee",
      "employees",
      "IT desk",
      "easily penetrated",
      "no remote server",
      "no external involvement",
      "rift",
      "access control not revoked",
      "unhappy employees",
      "arguement",
      "dissatisfied",
    ],
    questions: [
      {
        ques: "Did your employess practised poor password hygenes?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your security system easily penetrated by an attacker?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was there no involvement of remote server when the attack was executed",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you had any rift/arguments with employees/ex-employess of your organization? Were there access controls revoked?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your employess unhappy with current state of work and job salaries paid by you? Did you create any tense work culture?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Emotion/ Revenge",

    "Crime Structrue": "Unorgainzed Crime",

    "Motivation Level": "Medium ",

    "Skill Set": "Veteran",

    "Impact Level": "Medium to High",

    "Modus Operandi": "Accounts for insider threats/ Data breaches ",

    Countermeasures:
      "Restricting sensitive data access/ Monitering rogue employees accounts",
  },

  Eavesdropper: {
    keyword: [
      "eavesdropped",
      "mid conversation",
      "unsecure",
      "network communuication",
      "data modified",
      "open network",
      "traffic not encrypted",
      "listened",
      "microphones",
      "installed in premises",
      "planted",
    ],
    questions: [
      {
        ques: "Were your sensitive details compromised changed/altered/modified mid conversation?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your IP address not masked? Was network communication unsecure or open?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was the network traffic not encrypted? Was the assault difficult to identify",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your telephone call intercepred? Did you find any bug in your OS or installed stealth microphones/cameras in your premises?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you follow week password habits? Were your business details privacy documents compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data Theft",

    "Crime Structrue": "Unorgainzed Crime",

    "Motivation Level": "Low to Medium ",

    "Skill Set": "Veteran",

    "Impact Level": "Medium to Intermediate",

    "Modus Operandi": "Digital communications are intersepted by the attacker.",

    Countermeasures:
      "Using Firewalls and VPN ( Virtual private networks)/ WEP etc",
  },

  "AI Powered Attacks": {
    keyword: [
      "AI",
      "automated devices",
      "machine",
      "machine learning",
      "intelligent",
      "algorithms",
      "algorithm driven",
      "smart",
      "behavioural pattern",
      "reverse engineering",
      "training",
      "AI model",
    ],
    questions: [
      {
        ques: "Did the attack had a particular pattern anamolies or predictive actions/ smart behaviour analytics?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were company logs records not monitered frequently or on timey basis? Was AI model of your organization stolen?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was the behavioural pattern of employee esaily predicted by the attacker to comprosmise his/her credentials?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were automated devices used to exploit your system? Was training model of your company compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was data processing pipeline of your organization under threat? Any vectors related to reverse engineering identified from it?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data Theft/ Financial Gain",

    "Crime Structrue": "Organized Crime",

    "Motivation Level": "Intermediate to High",

    "Skill Set": "Pro/ Expert",

    "Impact Level": "High/ Critical",

    "Modus Operandi": "Machine Learning/ Analyzing vast amount of data ",

    Countermeasures: "Improving attack detection rate and accuracy.",
  },

  "APT Agents": {
    keyword: [
      "long time presence",
      "long term",
      "attack vector still vaild",
      "prolong period",
      "start up",
      "small organization",
      "return",
      "backdoors",
      "large data stored",
      "more logins",
      "log records",
    ],
    questions: [
      {
        ques: "Was threat to your organization still vaild after applying multiple counters over a prolonged period of time?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Is your organization a start up or on small scale level?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did the similar attack reappered even after they were countered/settled earlier? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you experience large chunk of data stored at places it shouldn't be?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you experience elevation in log ons late at night? More logins than expected?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain",

    "Crime Structrue": "Highly Organized Crime",

    "Motivation Level": "Advanced",

    "Skill Set": "Pro/ Expert",

    "Impact Level": "Critical",

    "Modus Operandi":
      "Establishing illicit long term presence over a network to compromise highly sensitive data.",

    Countermeasures:
      "Perform/ engage in advanced cyber attack simulation/ Skill and patience.",
  },

  "Cyber Pornography": {
    keyword: [
      "under 18",
      "children",
      "obscene",
      "illegal distribution",
      "pornstars",
      "increase in reports",
      "sex racket",
      "busted",
    ],
    questions: [
      {
        ques: "Did you saw children appearing as models involving in sexual acts with adults on porn sites? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did pornstars/models appeared to be under 18? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did reports of child pornography sites increased lately",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were porn site owners accused of molestation/abuse?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was any small/large scale sex racket busted by FBI/Crime department recently?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Sexual Impulses/ Emotion",

    "Crime Structrue": "Organized Crime",

    "Motivation Level": "Intermediate ",

    "Skill Set": "Pro",

    "Impact Level": "High",

    "Modus Operandi":
      "Display and distribution of obsence materials of children.",

    Countermeasures:
      "Implementing strict legal laws and capital punishment. Zero tolerance against child crime.",
  },

  "Software Piracy": {
    keyword: [
      "pirated",
      "pirated games",
      "pirated software",
      "paid software available for free",
      "pirated websites",
      "pirated movies",
      "fake copies",
      "cheap rates",
      "disable my antivirus",
    ],
    questions: [
      {
        ques: "Did you make cheap software purchases of original software on unauthorized sites?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was one license copy used to install a software on multiple devices?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Does it shows activate windows at bottom right side of your computer even after you made a legal purchase of device?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your copyrighted material duplicated imitating your brand and sold online for cheap rates?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you download paid games from a pirated site? Did it ask you to disable your antivirus to play the game? Was your device compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Economic gain/ Fun",

    "Crime Structrue": "Un-organized Crime",

    "Motivation Level": "Low to Medium",

    "Skill Set": "Low to Medium",

    "Impact Level": "Medium to High",

    "Modus Operandi":
      "Act of stealing software which includes ( copying/ distribution/modifying and selling).",

    Countermeasures:
      "Software watermarking/Obfuscation/ Copyrights patents and end user agreement.",
  },

  "Credit Card Fraudsters": {
    keyword: [
      "credit card statements",
      "collection agency",
      "creditor",
      "loans i havent requested",
      "purchases i haven't made",
      "suspicious transaction",
      "different location",
      "low credit balance",
      "unfamiliar company",
      "multiple credit cards",
    ],
    questions: [
      {
        ques: "Do you have bills/purchases credit card statements you dont recognize?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you contacted by a collection agency about your unknown debts?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Do your credit card report shows loans or purchases that you didn't request?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Do you see payments/transctions made from different location to that of your residence??",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "As a credit card provider does your dataset have an single entity associated with multiple credit cards or ip address?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data Theft/ Financial Gain",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Un-organized Crime",

    "Skill Set": "Pro/ Expert",

    "Impact Level": "Very High",

    "Modus Operandi":
      "Providing malacios links to victims to steal funds and theft of identity.",

    Countermeasures:
      "Identity/ Block and Mitigate the attacks/ Avoid clicking on unknown/malacious links.",
  },

  Spammers: {
    keyword: [
      "spams",
      "phishing scams",
      "unwanted",
      "unsolicited",
      "out of context",
      "heavy discount",
      "discount",
      "non standard",
      "suspicious sender",
      "unformal language",
      "grammatical mistakes",
      "unwanted attachments",
      "suspicious url",
    ],
    questions: [
      {
        ques: "Did you recieve any unsolicited or out of context e-mail/texts?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you recieve any e-mails/texts to avail offers/pay bills offering a ton of discount if you pay it within specified deadline?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was the senders address non standard? Did it had a combinations of letters and numbers?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were there any grammatical mistakes/spelling errors in the message of sender you recieved? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you recieved any e-mail with strange attachments or urls?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Profits/ Financial Gain",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Medium to Intermediate ",

    "Skill Set": "Veteran",

    "Impact Level": "Medium to High",

    "Modus Operandi":
      "Sending multiple unsolicited e-mails/ messages to victims. Infecting victim systems.",

    Countermeasures:
      "Block and report spam messages/ e-mails and calls. Blacklisting.",
  },

  "Web Jackers": {
    keyword: [
      "fake website",
      "redirected to a bogus site",
      "domain name",
      "website",
      "location was moved",
      "web adress changed",
      "clone website",
      "http",
      "no antiphising",
    ],
    questions: [
      {
        ques: "Did you click on any malacious link which redirected you to a fake website?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you experience a message while visiting a web page that it has moved to another address click here to go to the location?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you enter your login credentials on a clone website which you realized later when your data/money was compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "The website on which you entered your login credentails was it based on http protocol?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was a browser without antiphising detection used by you?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Profits/ Financial Gain",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Intermediate to High",

    "Skill Set": "Pro",

    "Impact Level": "High/Very High",

    "Modus Operandi":
      "Creating fake websites and redirecting victims to unknown sites. The system's are compromised in the process.",

    Countermeasures:
      "Protect end system with advanced security/ Install Antivirus.",
  },

  "Cyber Laundering": {
    keyword: [
      "betting",
      "casino",
      "gambling",
      "international fund",
      "transfer",
      "money transfer",
      "financial fraud",
      "tax",
      "raids",
    ],
    questions: [
      {
        ques: "Do you got a lead on terrorist group funded by online sources?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your funds involved/ transferred into online gambling platforms like poker? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were you a victim of online lottery scam? Were you decieved by a person claiming to be legit by impersonating a reputed organizations name to invest in lottery platform?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you find a person/entity involved in classified financial frauds/ illegal money involvements and transaction scams?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "After running tax invasion raids did you found bulk of black money/illegal bank accounts? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Financial Gain",

    "Crime Structrue": "Highly Organized Crime",

    "Motivation Level": "Very High ",

    "Skill Set": "Pro/Expert",

    "Impact Level": "Critical",

    "Modus Operandi":
      "Executing classified financial frauds/ Hiding black money in bulk by illegal involvements and transaction scams.",

    Countermeasures:
      "Strengthen home networks/ Timely backups/ developing healthy password habits.",
  },

  "Password Sniffers": {
    keyword: [
      "public wifi",
      "open network",
      "unencrypted",
      "sniff",
      "steal",
      "software",
      "external source",
      "external sources",
      "discharged",
      "heavy resource usage",
      "protocol compromised",
      "packets compromised",
    ],
    questions: [
      {
        ques: "Did you use any public wifi/ unencrypted network to make bank transactions?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you download any risky software on your device? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you recieve any alert that the specific application is using more resources than it need? Was your device battery draining?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your network traffic/ TCP/IP packets compromised?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did you performed any audits on your system? Was your system spied on without your knowledge? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data theft/Financial Gain",

    "Crime Structrue": "Unorganized Crime",

    "Motivation Level": "Intermediate to High ",

    "Skill Set": "Pro",

    "Impact Level": "High",

    "Modus Operandi":
      "Tool which scans and records passwords on network interface/ Compromise the data packers by keeping active track on victims movements.",

    Countermeasures:
      "Monitering and Scanning networks/ Encrypting network traffic shell.",
  },

  "Data Diddlers": {
    keyword: [
      "data changed",
      "data altered",
      "data",
      "breached",
      "database",
      "under attack",
      "contents altered",
      "stats changed",
      "unoffical",
      "data entry",
      "client information stolen",
    ],
    questions: [
      {
        ques: "Was your organizations database compromised/under threat by malacious factors?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your data corrupted/ database vectors modified i.e employees salary changed/ working hours changed?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were your database statistics falsified? Was any unusual data entry made to your database? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your client information compromised? Did your organization recieve any backlashes on it?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Data breach response plan (DBRP) was not imposed by your organization? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data theft/Financial Gain",

    "Crime Structrue": "Unorgainsed Crime",

    "Motivation Level": "Low to Medium",

    "Skill Set": "Rookie/ Basic",

    "Impact Level": "Medium to Intermediate",

    "Modus Operandi":
      "Altering and Modification of data/outputs for the purpose of stealing and document replacements.",

    Countermeasures:
      "Timely Software updation/ Develop data breach response plan.",
  },

  "Black Hat Hackers": {
    keyword: [
      "no concent",
      "protocol breached",
      "deep web",
      "dark web",
      "unethical",
      "high security areas",
      "no concent",
      "financial damage",
      "reputational damage",
    ],
    questions: [
      {
        ques: "Were your organizations all security protocols and sensitive data breached?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your confidential information sold on dark web i.e credit card numbers/social security numbers?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were the actions of hacker/attacker unethical? Were you attacked without any consent?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your system found corrupted with malacious viruses/backdoors?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were restricted areas in your organization bypassed by the attacker? Did it cost any financial/reputational damage to your organization? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data theft/Financial Gain",

    "Crime Structrue": "Orgainsed Crime",

    "Motivation Level": "Low to High",

    "Skill Set": "Pro/Expert",

    "Impact Level": "Medium to Intermediate/High",

    "Modus Operandi":
      "Violating computer security/network with malicious intent which involves data theft/ holding system hostage etc",

    Countermeasures:
      "Updating firewall/ Conducting vulnerability assessments/ Managing the patches.",
  },

  "SQL Injectors": {
    keyword: [
      "denied",
      "truth",
      "valadity",
      "tampered",
      "destroyed",
      "modified",
      "permissions revoked",
      "administrator access denied",
      "scanner",
      "queries",
      "tools",
    ],
    questions: [
      {
        ques: "Did the attack cause any repudiation issues? Were any balance changes accounted in your database?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your data tampered/destroyed or made unavavailable?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were administrator controls of your database revoked?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did your web vulnerabilty scanner found any traces on tools used for tampering or injection proofs?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your database structure compromised? Was the authentication sidestepped? Were the database permissions changed?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data theft/Data Alterations",

    "Crime Structrue": "Unorgainsed Crime",

    "Motivation Level": "High/ Very High",

    "Skill Set": "Pro/AdvancedExpert",

    "Impact Level": "High/Critical",

    "Modus Operandi":
      "Executing malacious SQL statements to compromise the databases (Oracle/MySQL  etc) which involves (alterations/modification/stealing).",

    Countermeasures:
      "Usage of object relational mappings/ Validate inputs/ Imply least privileges",
  },

  "Zero Day Exploiters": {
    keyword: [
      "unknown",
      "firewall",
      "pattern didn't matched",
      "attack signature",
      "wasn't found in database",
      "new signature",
      "offers leaked",
      "changes leaked",
      "new vulnerabilities",
      "not filtered",
      "traffic",
    ],
    questions: [
      {
        ques: "Did the attack pattern/familarity not matched signatures of previously known attacks on system?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Did the attack cause any severe security threat to your organization?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was your corporate data exploited? Were your upcoming events leaked before its release date or announcements? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Were new system vulnerabilites in your organization/company not resolved/patched after updation?",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
      {
        ques: "Was a web application firewall not deployed on the network edge? Was the incoming traffic not filtered? ",
        ans: {
          yes: 2,
          maybe: 1,
          no: 0,
        },
      },
    ],
    "Motivation Factor": "Data theft/Data Deletion",

    "Crime Structrue": "Unorgainsed Crime",

    "Motivation Level": "High",

    "Skill Set": "Pro/Advanced",

    "Impact Level": "High/ Very High",

    "Modus Operandi":
      "Exploits software vulnerabilities that vendor is unaware of.",

    Countermeasures:
      "Implementing patches/ Usage of Windows defender and advanced antivirus.",
  },
};
